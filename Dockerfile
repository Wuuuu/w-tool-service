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

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod

COPY --chown=node:node . .
RUN pnpm install

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As build
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

# COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

ENV NODE_ENV production

RUN pnpm install --prod

RUN pnpm build

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

# COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]

