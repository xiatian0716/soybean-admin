# 设置基础镜像
FROM nginx:stable-alpine
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY ./dist  /usr/share/nginx/html/
# 用本地的 default.conf 配置来替换nginx镜像里的默认配置
# 用于进入容器进行配置文件调试 docker exec -it cratelis_vue /bin/sh
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
