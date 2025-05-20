---
title: "Nginx基础"
date: 2024-05-04
---
## 正向代理与反向代理：

前言：

其实正向代理和反向代理最主要的区别是感知方的区别。

正向代理一般做的事情是访问无法访问的东西

反向代理是让你以为你访问的就是真实的服务方



### 正向代理：

操作方是你自己，你通过中间商访问对应的信息。

比如VPN的翻墙操作。

你做的事情是访问代理服务器，让代理服务器去访问资源。

最主要的是，你知道你最终要访问的服务是什么，在哪里，只是限于你不能访问或者你不想让服务方知道你访问了。所以使用了代理服务，让其代为访问。

类似于诈骗商家的效果

像是VPN就是正向代理



### 反向代理：

操作方也是自己，你要访问的就是代理服务器。

你不知道真实的服务是什么，你只是想要获得对应的资源。

代理服务器就是中间商，让你觉得访问的就是真实的服务器。

类似于诈骗客户的效果。

像是一些镜像网站、还有一些套壳AI的中间商网站，都是这种。



总结：其实所谓的正向代理和反向代理都差不多，区分的方法就是感知方而已。



给一个连接：[正向代理和反向代理详解（纯小白必看 最好懂的白话文教程）](https://blog.csdn.net/weixin_44404384/article/details/114675894)



## 基础配置：

include：引入配置信息



sendfile：直接返回文件，让客户进行文件下载，不在nginx做文件读写处理。



server：服务，虚拟主机，可配置多个，监听多个端口。那么他启动时就会把端口占用了吗？可以试试



location：路径匹配



error_page：错误码，可以写多个 后面跟上错误匹配的转向地址



## 虚拟主机原理：



离了大谱了，说了个寂寞



## 域名解析：

阿里云里面买。



可以往内网解析。

突然理解了为什么可以向内网解析了。这个和什么内网穿透啥的没关系。DNS说白了就是一个IP指向的向导，会把你从对应域名引导指定的IP，说白了，并不是它进行了网络访问。是你拿到真实IP之后再访问的。所以如果别人的主机上也有这个IP地址，它也可以实现转向。突然顿悟了。只是因为网络的DNS服务器比较厉害，能够让所有人都访问到。



本地如何做域名泛解析？



## 虚拟主机配置：

端口号可以相同，但是在同事server_name不能相同



server_name 可以配置多个，通过空格隔开，可以有通配符`*`，可以写正则以`~`开头。案例：`^[0-9]+\.caoyunyou\.com$`



匹配规则：



全匹配会找到资源，匹配不上就会找到第一个配置



前面匹配上，就不会往后找了





隧道式、DR模型【lvs】



## 反向代理使用：

如果配置的域名如果是顶级域名



upstream：别名，和server同一级。擦，想错了。

案例：

```nginx
upstream [别名]{
    # weight 权重配置
    server	192.168.20.11 weight=2; 
    # down 不参与负载均衡，下线
    server	192.168.20.12 weight=4 down;
    # backup 都没了才用它，要是有的用，就不用它了
	server	192.168.20.13 weight=3 backup;
}
```

负载均衡策略，上面的案例也是

ip_hash：相同的IP指向相同的服务器，



least_conn：最少连接访问



url_hash：根据用户访问的url定向转发请求



fair：根据后端服务器响应时间转发请求





## Nginx动静分离：

使用Nginx服务器直接代理静态资源



案例：理解了，因为编译最后的文件格式可以知道都是传统的html项目，有css,img,js文件夹。

```nginx
# 代理CSS资源
location /css {
    root html;
    index index.html index.htm;
}

location /js {
    root html;
    index index.html index.htm;
}

location /img {
    root html;
    index index.html index.htm;
}

# 正则一个解决

location ~*/(css|js|img){
    root html;
    index index.html index.htm;
}
```



url_rewrite：

案例：匹配上会将路径修改为指定的参数

```nginx
# break 匹配到就返回
# redirect 跳转到匹配路径返回302
# permanent 跳转到匹配路径返回301
```



```nginx
location /{
    rewrite ^/user([0-9]+).html$	/user/handle?name=caoyunyou&age=$1		break;
    proxy_pass http://192.168.20.11:8008
}
```



## 防盗链：

对于refer进行限制

没有refer就说明一个事情，不是正常的浏览器访问。可以进行限制。



放在location里面

案例：

```nginx
location /{
    # 允许的来源
    valid_referers 192.168.20.11;
    if($invalid_referer){
        return 403;
    }
    root html;
    index index.html index.htm;
}
```

```nginx
# none 没有来源
# blocked 监测
# server_names 一个或者多个url
```



[//]: # (::: important )

[//]: # (后续补充，暂时停止)

[//]: # (2024-05-05)

[//]: # (:::)