FROM node:22-slim AS base
WORKDIR /app

FROM base AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:22-slim AS runner
WORKDIR /app
ENV APP_ENV=production
RUN addgroup --system --gid 1001 xenkit
RUN adduser --system --uid 1001 xenkit
USER xenkit
COPY --from=builder --chown=xenkit:xenkit /app/public ./public
COPY --from=builder --chown=xenkit:xenkit /app/.next/standalone ./
COPY --from=builder --chown=xenkit:xenkit /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]