###################
# BUILD FOR LOCAL DEVELOPMENT
###################


FROM node:18 As development
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

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

# 创建一个目录
WORKDIR /usr/src/app

# 当前目录下的 pnpm-lock.yaml 文件复制到 Docker 镜像中，并将文件所有权设置为 node 用户和组。
COPY --chown=node:node pnpm-lock.yaml ./

# 下载项目所需的全量依赖包，以便在容器中运行时可以直接使用
RUN pnpm fetch --prod

# 当前目录中的所有文件复制到 Docker 镜像中的指定位置，并使用 node 用户及其组来设置文件的所有权和权限
COPY --chown=node:node . .

RUN pnpm install

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As build
WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN pnpm build

ENV NODE_ENV production

RUN pnpm install --prod

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

# COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
