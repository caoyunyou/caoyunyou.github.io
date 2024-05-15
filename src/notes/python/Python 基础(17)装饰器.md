---
title: "Python 基础(17)装饰器"
---
## 1.闭包

首先我们来了解下闭包，什么是闭包呢？看一下维基百科给出的解析：

> 闭包（英语：Closure），又称词法闭包（Lexical Closure）或函数闭包（function closures），是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。闭包在运行时可以有多个实例，不同的引用环境和相同的函数组合可以产生不同的实例。

看了上面的解释，你可能已经懂了，也可能还是有点懵 B

![图片](.\resource\647.jpg)

不过都没关系，我们再以 Python 为例更通俗的解释一下：比如我们调用一个带有返回值的函数 x，此时函数 x 为我们返回一个函数 y，这个函数 y 就被称作闭包，这么一说是不是豁然开朗了

![图片](.\resource\648.jpg)

需要注意一点就是闭包并不是 Python 特有的，很多语言都有闭包的概念。具体示例如下所示：

```python
if __name__ == '__main__':
    def x(id):
        def y(name):
            print('id', id, 'name', name)

        return y


    y = x('cyy')
    y('曹云友')
```

通过上面的示例，我们会发现闭包与类有一些相似，比如：它们都能实现数据的封装、方法的复用等；此外，通过使用闭包可以避免使用全局变量，还能将函数与其所操作的数据关连起来。



## 2.装饰器

装饰器（decorator）也称装饰函数，是一种闭包引用，其主要是用于某些函数需要扩展功能，但又不希望修改原函数，它就是语法糖，使用它可以简化代码，增强其可读性，当然装饰器不是必须要求被使用的，不使用也是可以的，Python中装饰器通过`@`符号来进行标识。

装饰器可以基于函数实现也可以基于类实现，其实用方式基本是固定的，翻一下基本步骤：

- 定义装饰函数（类）
- 定义业务函数
- 在业务函数上添加`@装饰函数（类）名`

接下来通过示例来作进一步了解。



### 基于函数

```python
if __name__ == '__main__':
    # 装饰函数
    def funA(fun):
        def funB(*args, **kw):
            print('函数' + fun.__name__ + '   开始执行')
            fun(*args, **kw)
            print('函数' + fun.__name__ + '   执行完毕')

        return funB


    @funA
    # 业务函数
    def funC(name):
        print('Hello', name)


    funC('john')
```

装饰函数也是可以接受参数的，如下所示：

```python
if __name__ == '__main__':
    # 装饰函数
    def funA(flag):
        def funB(fun):
            def funC(*args, **kwargs):
                if flag:
                    print('==========')
                else:
                    print('----------')
                fun(*args, **kwargs)

            return funC

        return funB


    @funA(False)
    # 业务函数
    def funD(name):
        print('Hello', name)
```



Python 中还支持多个装饰器同时使用，比如装饰函数为：funA，funD业务函数为：funH。使用方式如下所示：

```python
@funA
@funD
def funH():
    ...
```



### 基于类

装饰器除了基于函数实现，还可以基于类实现，看下示例：

```python
class Test(object):
    def __init__(self, func):
        print('函数是 %s' % func.__name__)
        self.__func = func

    def __call__(self, *args, **kwargs):
        self.__func()


@Test
def hello():
    print('Hello...')


if __name__ == '__main__':
    hello()
```

Python 装饰器的`@...`相当于将被装饰的函数（业务函数）作为参数传入装饰函数（类）。