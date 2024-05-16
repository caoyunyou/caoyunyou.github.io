---
title: "MySQL-JSON操作"
date: 2024-03-18
---
## 数据准备：

#### 1.创建测试表：

```sql
CREATE TABLE `json_test` (
  `ID` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `JSON_VALUE` json DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB COMMENT 'JSON函数测试表'
```

#### 2.准备测试数据：

```sql
INSERT INTO json_test(`ID`,`JSON_VALUE`)

VALUES(1,'{"name":"张三","age":14}'),(2,'{"name":"李四","gender":"Male"}');
```





## 常用JSON操作：

#### 1.`JSON_SET(json_doc, path, val[, path, val] ...)`

###### 参数：

1. json_doc：即需要操作的JSON信息
2. path：对应json中的某个key
3. val：要设置的值
4. 后面的数组表示可以对多个key设值

###### 功能：

替换JSON对应层级key的值，如果 key 不存在，就新增

```sql
#### 查询原值：{"age": 14, "name": "张三"}
SELECT a.JSON_VALUE FROM json_test a WHERE a.ID = 1;


-- 1.如果存在：{"age": 18, "name": "张三"}
SELECT JSON_SET(a.JSON_VALUE, '$.age', 18) FROM json_test a WHERE a.ID = 1;


-- 1.如果不存在：{"age": 14, "name": "张三", "gender": "MALE"}
SELECT JSON_SET(a.JSON_VALUE, '$.gender', 'MALE') FROM json_test a WHERE a.ID = 1;
```

继续写博客内容如下:

2. #### `JSON_REPLACE(json_doc, path, val[, path, val] ...)` 

###### 参数:

1. json_doc: 需要操作的JSON信息
2. path: 对应json中的某个key
3. val: 要替换的值  
4. 后面的数组表示可以对多个key进行替换

###### 功能:

用新值替换掉原JSON字符串中指定的值。如果不存在该path，则什么也不做。

```sql
-- 查询原值: {"gender": "Male", "name": "李四"}
SELECT a.JSON_VALUE FROM json_test a WHERE a.ID = 2;

-- 替换值: {"gender": "Female", "name": "李四"} 
SELECT JSON_REPLACE(a.JSON_VALUE, '$.gender', 'Female') FROM json_test a WHERE a.ID = 2;

-- 不存在的path不做替换: {"gender": "Male", "name": "李四"}
SELECT JSON_REPLACE(a.JSON_VALUE, '$.age', 25) FROM json_test a WHERE a.ID = 2;
```

3. #### `JSON_REMOVE(json_doc, path[, path] ...)` 

###### 参数:

1. json_doc: 需要操作的JSON信息
2. path: 对应json中要删除的key的路径

###### 功能: 

删除JSON中某个key对应的值。

```sql
-- 查看原始值: {"age": 14, "name": "张三"}
SELECT JSON_VALUE FROM json_test WHERE ID = 1;

-- 删除age: {"name": "张三"}
SELECT JSON_REMOVE(JSON_VALUE, '$.age') FROM json_test WHERE ID = 1; 
```

4. #### `JSON_EXTRACT(json_doc, path[, path] ...)`

###### 参数:  

1. json_doc: 需要操作的JSON信息
2. path: 对应json中要提取值的key路径  

###### 功能:

从原JSON中提取某个key对应的值。

```sql
-- 查看原始值: {"gender": "Male", "name": "李四"}
SELECT JSON_VALUE FROM json_test WHERE ID = 2;

-- 提取name的值: "李四"
SELECT JSON_EXTRACT(JSON_VALUE, '$.name') FROM json_test WHERE ID = 2;
```

#### 

通过上面这些常用的JSON函数的使用示例，相信大家已经对MySQL的JSON操作函数有了一定了解。在实际开发中可以根据需求灵活使用这些函数来满足操作JSON字段的需求。