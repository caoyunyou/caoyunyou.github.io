---
title: "Python 基础(16)迭代器与生成器"
date: 2024-05-14
---
## 1.迭代器

### 迭代

我们知道 Python 中有一些对象可以通过 `for` 来循环遍历，比如：列表、元组、字符等，以字符串为例，如下所示：

```python
for i in 'Hello':
    print(i)
```

这个遍历过程就是迭代



### 可迭代对象

可迭代对象需具有`__iter__()`方法，它们均可以使用`for`循环遍历，我们可以使用`isinstance()`方法来判断一个对象是否为可迭代对象，看下示例：

```python
if __name__ == '__main__':
    from collections.abc import Iterable

    print(isinstance('abc', Iterable))
    print(isinstance({1, 2, 4}, Iterable))
    print(isinstance(1024, Iterable))
```



### 迭代器

迭代器需要具有`__iter__()`和 `__next__()`两个方法，这两个方法共同组成了迭代器协议，通俗来讲迭代器就是一个可以记住遍历位置的对象，迭代器一定是可迭代的，反之不成立。

- `__iter__()`：返回迭代器对象本身
- `__next__()`：返回下一项数据

迭代器对象本质是一个数据流，它通过不断调用 `__next__()` 方法或被内置的 `next()` 方法调用返回下一项数据，当没有下一项数据时抛出 `StopIteration` 异常迭代结束。上面我们说的 `for` 循环语句的实现便是利用了迭代器。

我们试着自己来实现一个迭代器，如下所示：

```python
class MyIterator:
    def __init__(self):
        self.s = '自定义迭代器'
        self.i = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.i < 5:
            n = self.s[self.i]
            self.i += 1
            return n
        else:
            raise StopIteration


if __name__ == '__main__':
    my = iter(MyIterator())

    for i in my:
        print(i)
```



## 2.生成器

生成器是用来创建迭代器的工具，其写法与标准函数类似，不同之处在于返回时使用`yield`语句。

> yield 是一个关键字，作用和 return 差不多，差别在于 yield 返回的是一个生成器（在 Python 中，一边循环一边计算的机制，称为生成器），它的作用是：有利于减小服务器资源，在列表中所有数据存入内存，而生成器相当于一种方法而不是具体的信息，用多少取多少，占用内存小。

生成器的创建方式有很多种，比如：使用`yield`语句，生成器表达式（可以简单的理解为是将列表的`[]`换成了`()`，特点是更加简洁，但不够灵活）。

案例1：

```python
if __name__ == '__main__':
    def reverse(data):
        for i in range(len(data) - 1, -1, -1):
            yield data[i]
    for char in reverse('Hello'):
        print(char)
```

执行结果：

```shell
o
l
l
e
H
```



案例2：

```python
if __name__ == '__main__':
    # 列表
    lis = [x * x for x in range(5)]
    print(lis)

    # 生成器
    gen = (x*x for x in range(5))
    for g in gen:
        print(g)
```

执行结果：

```shell
[0, 1, 4, 9, 16]
0
1
4
9
16
```