---
title: "Python 基础(2)基本语句"
date: 2024-05-11
---
## 1.条件语句

在进行逻辑判断时，我们需要用到条件语句，Python 提供了 `if`、`elif`、`else` 来进行逻辑判断。

案例：

```python
if 判断条件1:
    执行语句1
elif 判断条件2:
    执行语句2
else
	执行语句3
```

## 2.循环语句

当需要多次重复执行时，我们要用到循环语句，Python 提供了 for 循环和 while 循环。

### 2.1 for循环

for循环可以遍历任何序列，比如：字符串。

案例：

```python
str = 'Python'
for s in str:
    print(s)
```

输出结果：

```python
P
y
t
h
o
n
```

### 2.2 while循环

while循环，满足条件循环时进行循环，不满足条件时，退出循环。

案例：

```python
sum = 0
m = 10
while m > 0:
    sum = sum+m
    m = m - 1
print(sum)
```

输出结果：

```python
55
```



### 2.3 break

break 用在 for 循环和 while 循环语句中，用来终止整个循环。

案例：

```python
str = "Python"
for s in str:
    if s =='o':
        break
    print(s)
```

输出结果：

```python
P
y
t
h
```



### 2.4 continue

continue 用在 for 循环和 while 循环语句中，用来终止本次循环。

案例：

```python
str = "Python"
for s in str:
    if s == 'o'
    	continue
    print(s)
```

结果：

```python
P
y
t
h
n
```



## 3.pass语句

pass语句是空语句，它不做任何事情，一般做占位语句，作用是保持程序结构的完整性。

案例：

```python
if True:
    pass
```

