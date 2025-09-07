FROM node:22-slim AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM node:22-slim AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

FROM node:22-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./
COPY . .
RUN pnpm build

FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 xenkit
COPY --from=builder /app/public ./public
COPY --from=builder --chown=xenkit:nextjs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
RUN chown -R xenkit:nextjs /app
USER xenkit
EXPOSE 3000
CMD ["pnpm", "start"]
