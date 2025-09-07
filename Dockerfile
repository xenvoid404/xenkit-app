FROM node:22-slim AS base
RUN apt update && apt install -y openssl
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
RUN pnpm prisma generate
RUN pnpm build

FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 xenkit
RUN adduser --system --uid 1001 xenkit
USER xenkit
COPY --from=builder --chown=xenkit:xenkit /app/public ./public
COPY --from=builder --chown=xenkit:xenkit /app/.next/standalone ./
COPY --from=builder --chown=xenkit:xenkit /app/.next/static ./.next/static
COPY --from=builder --chown=xenkit:xenkit /app/prisma ./prisma

EXPOSE 3000
CMD ["node", "server.js"]