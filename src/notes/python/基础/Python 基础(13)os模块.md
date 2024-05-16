---
title: "Python 基础(13)os模块"
date: 2024-05-13
---
## 1.常用函数

### os.getcwd()

查看当前路径

```python
if __name__ == '__main__':
    import os

    print(os.getcwd())
```



### os.listdir()

返回指定目录下包含的文件和目录名列表。

```python
if __name__ == '__main__':
    import os

    print(os.listdir('E:/'))
```



### os.path.abspath(path)

将路径path拆分为目录和文件两部分，返回结果为元组类型。

```python
if __name__ == '__main__':
    import os

    print(os.path.abspath('.'))
```



### os.path.join(path, *paths)

将一个或多个path(文件或目录)进行拼接

```python
if __name__ == '__main__':
    import os

    print(os.path.join('E:/','tmp.text'))
```



### os.path.getctime(path)

返回 path（文件或目录）在系统的创建时间

```python
if __name__ == '__main__':
    import os
    import datetime

    print(datetime.datetime.utcfromtimestamp(os.path.getctime('E:\\python_projects\\basicStudy\\test.txt')))
```



### os.path.getatime(path)

返回 path（文件或目录）的最后访问时间。

```python
if __name__ == '__main__':
    import os
    import datetime

    print(datetime.datetime.utcfromtimestamp(os.path.getmtime('E:\\python_projects\\basicStudy\\test.txt')))
```



### os.path.exists(path)

判断 path（文件或目录）是否存在，存在返回 True，否则返回 False。

```python
if __name__ == '__main__':
    import os

    print(os.path.exists('E:\\python_projects\\basicStudy\\test.txt'))
```



### os.path.isdir(path)

判断 path 是否为目录。

```python
if __name__ == '__main__':
    import os

    print(os.path.isdir('E:\\'))
```



### os.path.isfile(path)

判断 path 是否为文件。

```python
if __name__ == '__main__':
    import os

    print(os.path.isfile('E:\\python_projects\\basicStudy\\test.txt'))
```



### os.path.getsize(path)

返回 path 的大小，以字节为单位，若 path 是目录则返回 0

```python
if __name__ == '__main__':
    import os

    print(os.path.getsize('E:\\python_projects\\basicStudy\\test.txt'))
    print(os.path.getsize('E:\\'))
```



### os.mkdir()

创建一个目录。

```python
if __name__ == '__main__':
    import os

    print(os.mkdir('E:/test'))
```



### os.makedirs()

创建多级目录。

```python
if __name__ == '__main__':
    import os

    print(os.makedirs('E:/test/aa'))
```

目录 test、aa 均不存在，此时使用 os.mkdir() 创建会报错，也就是说 os.mkdir() 创建目录时要保证末级目录之前的目录是存在的。



### os.chdir(path)

将当前工作目录更改为 path。

```python
if __name__ == '__main__':
    import os

    print(os.getcwd())
    os.chdir('E:\\study\\python学习')
    print(os.getcwd())
```



### os.system(command)

调用 shell 脚本。

```python
if __name__ == '__main__':
    import os

    print(os.system('ping www.baidu.com'))
```

如果出现乱码，可以通过修改编码解决，比如：我在 Windows 下 PyCharm 中出现乱码问题，可以将 PyCharm 中编码修改为 GBK 解决。