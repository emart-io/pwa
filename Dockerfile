FROM nginx:alpine

ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD ./cert/fullchain.cer ./cert/iyou.city.key /etc/
ADD ./cert/MP_verify_QhLhABV8xghjlt4k.txt /usr/share/nginx/html
ADD ./www /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]