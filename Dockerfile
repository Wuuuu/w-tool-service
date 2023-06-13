FROM node:18 as builder

# 读取环境变量
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# 设置环境变量
ENV MONGODB_DATABASE_URL ${MONGODB_DATABASE_URL}
ENV JWT_SECRET ${JWT_SECRET}
ENV COS_SECRET_ID ${COS_SECRET_ID}
ENV COS_SECRET_KEY ${COS_SECRET_KEY}
ENV COS_REGION ${COS_REGION}
ENV COS_BUCKET_NAME ${COS_BUCKET_NAME}

WORKDIR /usr/src/node-services

COPY --chown=node:node pnpm-lock.yaml ./

COPY . /usr/src/node-services

RUN npm install -g pnpm

RUN pnpm install \
  && pnpm run build \
  && pnpm fetch --prod

# ---

FROM node:18

ENV NODE_ENV production

USER node
WORKDIR /usr/src/node-services

COPY --from=builder /usr/src/node-services/pnpm-lock.yaml /usr/src/node-services
COPY --from=builder /usr/src/node-services/node_modules/ /usr/src/node-services/node_modules/
COPY --from=builder /usr/src/node-services/dist/ /usr/src/node-services/dist/

CMD ["node", "dist/main.js"]