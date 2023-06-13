# 使用 Node.js 14.x 运行时作为基础镜像
FROM node:18-alpine
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# 在容器中创建一个新的目录，用于存放应用程序文件
WORKDIR /usr/src/app

# 将 package.json 和 lock 文件添加到镜像中
COPY pnpm-lock.yaml ./

# 安装应用程序依赖项
RUN pnpm install 

RUN pnpm build

# 将应用程序代码复制到容器中
COPY . .

# 暴露应用程序端口
EXPOSE 3000

# 启动应用程序
CMD [ "npm", "start" ]