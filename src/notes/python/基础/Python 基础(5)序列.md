---
title: "Python 基础(5)序列"
---
## 1.基本使用

### 1.1 索引

序列索引支持非负数和负数，索引为非负数，从 `0` 开始，如下所示：

![图片](..\resource\640.jpg)

索引为负数由右向左计数，从 `-1` 开始，如图所示：

![图片](..\resource\641.jpg)

下面通过一个示例作进一步了解，以字符串为例。

案例：

```python
str = 'Python'
print('str[0] str[-6] =',str[0],str[-6])
print('str[5] str[-1] =',str[5],str[-1])
```

输出结果：

```python
str[0] str[-6] =PP
str[5] str[-1] =nn
```

从结果看，我们使用费负数索引与复数索引得到的结果一致



### 1.2 切片

切片操作可以访问一定范围内的元素，语法如下所示：

`sname[start : end : step]`

- sname：表示序列的名称
- start：开始索引位置（包括该位置），默认为0
- end：表示切片的结束索引位置（不包括该位置），默认为序列的长度
- step：步长

以字符串为例

案例：

```python
str = 'Python'
print(str[:3])
print(str[3:])
print(str[:])
```

输出结果：

```python
Pyt
hon
Python
```



### 1.3 相加

Python 支持类型相同的序列使用 `+` 作相加操作，该操作不会去除重复的元素。以字符串为例。

案例：

```python
s1 = 'Python'
s2 = 'Python'
print('s1 + s2 --> ',s1 + s2)
```

输出结果：

```python
s1 + s2 --> PythonPython
```



### 1.4 相乘

Python 中，使用数字 n 乘以一个序列会生成新的序列，内容为原来序列被重复 n 次的结果。以字符串为例

案例：

```python
str = 'Python'
print('2 * str -->',2*str)
```

输出结果：

```python
2 * str -->PythonPython
```



### 1.5 元素是否存在序列中

Python 使用 `in` 关键字检查某元素是否为序列的成员。语法如下：

`val in seq`

- val：要检查的元素
- seq：指定的序列

通过一个例子做进一步了解，以特殊字符为例

案例：

```python
str = 'Python'
print('on' in str)
```

输出结果：

```python
True
```



### 1.6 内置函数

| 函数        | 描述                                        |
| :---------- | :------------------------------------------ |
| len()       | 计算序列的长度                              |
| max()       | 找出序列中的最大元素                        |
| min()       | 找出序列中的最小元素                        |
| list()      | 将序列转换为列表                            |
| str()       | 将序列转换为字符串                          |
| sum()       | 计算元素的和                                |
| sorted()    | 对元素进行排序                              |
| enumerate() | 将序列组合为一个索引序列，多用在 for 循环中 |

案例：

```python
str = 'dbcae'
print('len -->',len(str))
print('max -->',max(str))
print('sorted -->',sorted(str))
```

输出结果：

```python
len -->5
max -->e
sorted -->['a','b','c','d','e']
```

