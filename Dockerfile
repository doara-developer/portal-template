FROM node:12.18 AS builder
WORKDIR /app
COPY ["package.json", "yarn.lock", "tsconfig.json", "./"]
RUN yarn install
COPY . .
RUN yarn run build

FROM node:12.18
WORKDIR /app
COPY ["package.json", "yarn.lock", "tsconfig.json", "./"]
RUN yarn install --production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["yarn", "run", "start"]
