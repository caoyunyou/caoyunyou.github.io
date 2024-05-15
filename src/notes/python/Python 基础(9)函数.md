---
title: "Python 基础(9)函数"
---
### 1.自定义函数

Python 使用 def 关键字来声明函数，格式如下：

```python
def 函数名(参数):
    函数体
    return 返回值
```

如果要定义一个无任何功能的空函数，函数体只写 `pass` 即可。格式如下所示：

```python
def 函数名():
    pass
```

当我们不确定参数的个数时，可以使用不定长参数，在参数名前加 `*` 进行声明，格式如下所示：

```python
def 函数名(*参数名):
    函数体
```

我们还可以使用`lambda`定义匿名函数，格式如下所示：

```python
lambda 参数:表达式
```

案例：

```python
# 空函数
def empty_func():
    pass

# 无返回值
def no_ret(name):
    print('无返回值函数：',name)

# 有返回值
def sum_func(a,b):
    return a+b

# 不定长参数
def bdc_func(*params):
    for i in params:
        print(i)

# 匿名函数
sub_res = lambda a,b:a-b
```



### 2.函数调用

```python
empty_func()
no_ret('撒')
sum_func(1,3)
bdc_func(1,2,3,4,5)
```

