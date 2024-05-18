---
title: "Python 进阶(4)数据库操作之 MySQL"
date: 2024-05-18
---
## 1.简介

MySQL 是目前使用最广泛的数据库之一，它有着良好的性能，能够跨平台，支持分布式，能够承受高并发。

Python 大致有如下 5 种方式操作 MySQL。

- **mysql-connector-python**

这是MySQL官方提供的官方驱动程序，可以通过pip安装。它提供了mysql.connector模块，用于连接和操作MySQL数据库。

- **mysqlclient**

MySQLdb 的 Fork 版本，完全兼容 MySQLdb，支持 Python3，它是 Django ORM 的依赖工具，如果你喜欢用原生 SQL 操作数据库，那么推荐使用它。

- **PyMySQL**

PyMySQL 采用纯 Python 开发，兼容 MySQLdb，性能不如 MySQLdb，安装方便，支持 Python3。

- **peewee**

peewee 是一个流行的 ORM 框架，实现了对象与数据库表的映射，兼容多种数据库，我们无需知道原生 SQL，只要了解面向对象的思想就可以简单、快速的操作相应数据库，支持 Python3。

- **SQLAlchemy**

SQLAlchemy 是一个 ORM 框架，同时也支持原生 SQL，支持 Python3，它类似于 Java 的 Hibernate 框架。



## 2.实际操作

### 测试数据准备

```mysql
CREATE TABLE student (
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  age int(10) NOT NULL
);
```



### 2.1 mysql-connector-python

安装：

执行`pip install mysql-connector-python`进行安装

增删查改操作

```python
import mysql.connector

if __name__ == '__main__':
	# 创建链接
    connect = mysql.connector.connect(
        host='localhost',
        user='root',
        port=3306,
        password='密码',
        database='test'
    )
	
    # 创建游标
    cursor = connect.cursor()

    cursor.execute("INSERT INTO student(`name`,`age`) VALUES(%s,%s)", ("cao", 14))

    cursor.execute("SELECT * FROM student")

    results = cursor.fetchall()

    for row in results:
        print(row)

    cursor.execute("UPDATE student SET name = %s WHERE age = %s", ("cao1", 14))

    cursor.execute("DELETE FROM student WHERE name = %s AND age = %s", ("cao1", 14))

    # 默认开启事务，需要进行提交才能实现数据的修改
    connect.commit()
	
    # 关闭游标和链接
    cursor.close()
    connect.close()
```



### 2.2 mysqlclient

安装：

执行`pip install mysqlclient`进行安装

增删查改操作：【和 `mysql-connector-python` 差不多】

```python
import MySQLdb

if __name__ == '__main__':
    connect = MySQLdb.connect(
        # 主机
        host='localhost',
        # 端口号
        port=3306,
        # 用户名
        user='root',
        # 密码
        passwd='密码',
        # 数据库名称
        db='test')

    # 创建游标
    cursor = connect.cursor()

    cursor.execute("INSERT INTO student(`name`,`age`) VALUES(%s,%s)", ("cao", 14))

    cursor.execute("SELECT * FROM student")

    results = cursor.fetchall()

    for row in results:
        print(row)

    cursor.execute("UPDATE student SET name = %s WHERE age = %s", ("cao1", 14))

    cursor.execute("DELETE FROM student WHERE name = %s AND age = %s", ("cao1", 14))

    # 默认开启事务，需要进行提交才能实现数据的修改
    connect.commit()

    # 关闭游标和链接
    cursor.close()
    connect.close()
```



### 2.3 PyMySQL

其实都差不多，就不写了



### 2.4 peewee

。。。。。



### 2.5 SQLAlchemy

。。。。。