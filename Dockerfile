# 使用 Node.js 14.x 运行时作为基础镜像
FROM node:18-alpine

RUN npm install -g pnpm

# 在容器中创建一个新的目录，用于存放应用程序文件
WORKDIR /usr/src/app

# 将 package.json 和 lock 文件添加到镜像中
COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod

COPY --chown=node:node . .

RUN pnpm install

USER node


# 暴露应用程序端口
# EXPOSE 3000

# 启动应用程序
# CMD [ "npm", "start" ]
CMD [ "node", "dist/main.js" ]