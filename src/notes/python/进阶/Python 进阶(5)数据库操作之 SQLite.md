---
title: "Python 进阶(5)数据库操作之 SQLite"
date: 2024-05-18
---
## 1.简介

SQLite 是一种嵌入式关系型数据库，其本质就是一个文件，它占用资源低、处理速度快、跨平台、可与 Python、Java 等多种编程语言结合使用。

SQLite 是一个进程内的库，可以自给自足、无服务器、无需配置、支持事务，Python 可以通过 sqlite3 模块与 SQLite3 集成（3 是版本号），Python 2.5.x 以上版本内置了 sqlite3 模块，我们可以直接使用。



## 2.数据类型

存储类型是数据保存成文件后的表现形式，主要包括如下几种：

| 类型    | 描述                                                      |
| :------ | :-------------------------------------------------------- |
| NULL    | 空值                                                      |
| REAL    | 浮点数类型                                                |
| TEXT    | 字符串，使用数据库编码（UTF-8、UTF-16BE 或 UTF-16LE）存储 |
| BLOB    | 二进制表示                                                |
| INTEGER | 有符号的整数类型                                          |

### 2.2 亲和类型

亲和类型是数据库表中列数据对应存储类型的倾向性，当数据插入时，字段的数据将会优先采用亲缘类型作为值的存储方式，主要包括如下几种：

| 类型    | 描述                                                 |
| :------ | :--------------------------------------------------- |
| NONE    | 不做任何转换，直接以该数据所属的数据类型进行存储     |
| TEXT    | 该列使用存储类型 NULL、TEXT 或 BLOB 存储数据         |
| NUMERIC | 该列可以包含使用所有五个存储类型的值                 |
| REAL    | 类似于 NUMERIC，区别是它会强制把整数值转换为浮点类型 |
| INTEGER | 类似于 NUMERIC，区别是在执行 CAST 表达式时           |

### 2.3 声明类型

声明类型是我们写 SQL 时字段定义的类型，常用的声明类型与亲和类型具有如下对应关系：

| 声明类型                         | 亲和类型 |
| :------------------------------- | :------- |
| BLOB                             | NONE     |
| DOUBLE、FLOAT                    | REAL     |
| VARCHAR、TEXT、CLOB              | TEXT     |
| INT、INTEGER、TINYINT、BIGINT    | INTEGER  |
| DECIMAL、BOOLEAN、DATE、DATETIME | NUMERIC  |



## 3.基本使用

### 3.1 连接数据库

```python
import sqlite3

if __name__ == '__main__':
    conn = sqlite3.connect('test.db')
```

数据库不存在会进行自动创建，路径未指定的话，会创建在执行目录的同级

### 3.2 游标

连接数据库后，需要通过游标进行相应的 SQL 操作，所以要先创建游标

```python
# 创建游标
cs = conn.cursor()
```

### 3.3 建表

```python
import sqlite3

if __name__ == '__main__':
    # 创建连接
    conn = sqlite3.connect('test.db')
    # 创建游标
    cs = conn.cursor()

    cs.execute('''
    CREATE TABLE person(
        id varchar(20) PRIMARY KEY ,
        name varchar(20)
    );
    ''')

    # 关闭游标
    cs.close()

    # 提交事务
    conn.commit()
    # 关闭连接
    conn.close()
```

### 3.4 增删查改操作

注意点：占位符为`?`

```python
import sqlite3

if __name__ == '__main__':
    # 创建连接
    conn = sqlite3.connect('test.db')
    # 创建游标
    cs = conn.cursor()

    '''
    CREATE TABLE person(
        id varchar(20) PRIMARY KEY ,
        name varchar(20)
    );
    '''

    # 新增
    cs.execute("INSERT INTO person(`id`,`name`) VALUES(?,?)", (1, 'caoyunyou'))
    cs.execute("INSERT INTO person(`id`,`name`) VALUES(?,?)", (2, 'yunyoucao'))

    # 查询
    cs.execute("SELECT * FROM person")

    results = cs.fetchall()

    for row in results:
        print('插入之后：', row)

    # 修改
    cs.execute("UPDATE person SET name = ? WHERE id = ?", ('ccc', 1))

    cs.execute("SELECT * FROM person WHERE id = ?", (1,))

    updateRes = cs.fetchone()
    print('修改之后', updateRes)

    # 删除
    cs.execute("DELETE FROM person WHERE id = ?", (1,))

    cs.execute("SELECT * FROM person")

    deleteRes = cs.fetchall()
    for delRow in deleteRes:
        print('删除之后：', delRow)

    # 关闭游标
    cs.close()

    # 提交事务
    conn.commit()
    # 关闭连接
    conn.close()

```

