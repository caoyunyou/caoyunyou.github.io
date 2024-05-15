---
title: "Python 基础(8)与时间相关的模块"
---
## 1.time模块

### 1.1 struct_time类

time类的 struct_time 类代表一个时间对象，可以通过索引和属性名访问值。对应关系如下所示：

| 索引 | 属性                    | 值       |
| :--- | :---------------------- | :------- |
| 0    | tm_year（年）           | 如：1945 |
| 1    | tm_mon（月）            | 1 ~ 12   |
| 2    | tm_mday（日）           | 1 ~ 31   |
| 3    | tm_hour（时）           | 0 ~ 23   |
| 4    | tm_min（分）            | 0 ~ 59   |
| 5    | tm_sec（秒）            | 0 ~ 61   |
| 6    | tm_wday（周）           | 0 ~ 6    |
| 7    | tm_yday（一年内第几天） | 1 ~ 366  |
| 8    | tm_isdst（夏时令）      | -1、0、1 |

> tm_sec 范围是 0~61，值60表示在闰秒的时间戳有效，并且由于历史原因，支持值61

localtiome()表示当前时间，返回类型为 struct_time 对象。

案例：

```python
import time
t = time.localtime()
print('t-->',t)
print('tm_year-->',t.tm_year)
print('tm_year-->',t.[0])
```

输出结果：

```python
t--> time.struct_time(tm_year=2024, tm_mon=5, tm_mday=13, tm_hour=11, tm_min=27, tm_sec=42, tm_wday=0, tm_yday=134, tm_isdst=0)
tm_year--> 2024
tm_year--> 2024
```



### 1.2 常用函数

| 函数（常量）          | 说明                                                         |
| :-------------------- | :----------------------------------------------------------- |
| time()                | 返回当前时间的时间戳                                         |
| gmtime([secs])        | 将时间戳转换为格林威治天文时间下的 struct_time，可选参数 secs 表示从 epoch 到现在的秒数，默认为当前时间 |
| localtime([secs])     | 与 gmtime() 相似，返回当地时间下的 struct_time               |
| mktime(t)             | localtime() 的反函数                                         |
| asctime([t])          | 接收一个 struct_time 表示的时间，返回形式为：Mon Dec  2 08:53:47 2019 的字符串 |
| ctime([secs])         | ctime(secs) 相当于 asctime(localtime(secs))                  |
| strftime(format[, t]) | 格式化日期，接收一个 struct_time 表示的时间，并返回以可读字符串表示的当地时间 |
| sleep(secs)           | 暂停执行调用线程指定的秒数                                   |
| altzone               | 本地 DST 时区的偏移量，以 UTC 为单位的秒数                   |
| timezone              | 本地（非 DST）时区的偏移量，UTC 以西的秒数（西欧大部分地区为负，美国为正，英国为零） |
| tzname                | 两个字符串的元组：第一个是本地非 DST 时区的名称，第二个是本地 DST 时区的名称 |

> epoch：1970-01-01 00:00:00 UTC

基本使用如下所示：

```python
import time
print(time.time())
print(time.gmtime())
print(time.localtime())
print(time.asctime(time.localtime()))
print(time.tzname)
# strftime 使用
print(time.strftime('%Y-%m-%d %H:%M%S', time.localtime()))
```

输出结果：

```python
1715571100.5503712
time.struct_time(tm_year=2024, tm_mon=5, tm_mday=13, tm_hour=3, tm_min=31, tm_sec=40, tm_wday=0, tm_yday=134, tm_isdst=0)
time.struct_time(tm_year=2024, tm_mon=5, tm_mday=13, tm_hour=11, tm_min=31, tm_sec=40, tm_wday=0, tm_yday=134, tm_isdst=0)
Mon May 13 11:31:40 2024
('中国标准时间', '中国夏令时')
2024-05-13 11:3140
```

strftime 函数日期格式化符号说明如下所示：

| 符号 | 说明                                                         |
| :--- | :----------------------------------------------------------- |
| %a   | 本地化的缩写星期中每日的名称                                 |
| %A   | 本地化的星期中每日的完整名称                                 |
| %b   | 本地化的月缩写名称                                           |
| %B   | 本地化的月完整名称                                           |
| %c   | 本地化的适当日期和时间表示                                   |
| %d   | 十进制数 [01,31] 表示的月中日                                |
| %H   | 十进制数 [00,23] 表示的小时（24小时制）                      |
| %I   | 十进制数 [01,12] 表示的小时（12小时制）                      |
| %j   | 十进制数 [001,366] 表示的年中日                              |
| %m   | 十进制数 [01,12] 表示的月                                    |
| %M   | 十进制数 [00,59] 表示的分钟                                  |
| %p   | 本地化的 AM 或 PM                                            |
| %S   | 十进制数 [00,61] 表示的秒                                    |
| %U   | 十进制数 [00,53] 表示的一年中的周数（星期日作为一周的第一天） |
| %w   | 十进制数 [0(星期日),6] 表示的周中日                          |
| %W   | 十进制数 [00,53] 表示的一年中的周数（星期一作为一周的第一天） |
| %x   | 本地化的适当日期表示                                         |
| %X   | 本地化的适当时间表示                                         |
| %y   | 十进制数 [00,99] 表示的没有世纪的年份                        |
| %Y   | 十进制数表示的带世纪的年份                                   |
| %z   | 时区偏移以格式 +HHMM 或 -HHMM 形式的 UTC/GMT 的正或负时差指示，其中 H 表示十进制小时数字，M 表示小数分钟数字 [-23:59, +23:59] |
| %Z   | 时区名称                                                     |
| %%   | 字面的 '%' 字符                                              |



## 2.datetime模块

datatime 模块重新封装了 time 模块，提供了更多接口，变得更加直观和易于调用。

### 2.1 date类

date 类表示一个由年、月、日组成的日期，格式为：datetime.date(year, month, day)。

- year 范围为：[1, 9999]
- month 范围为：[1, 12]
- day 范围为 [1, 给定年月对应的天数]。

类方法和属性如下所示：

| 方法（属性）             | 说明                           |
| :----------------------- | :----------------------------- |
| today()                  | 返回当地的当前日期             |
| fromtimestamp(timestamp) | 根据给定的时间戮，返回本地日期 |
| min                      | date 所能表示的最小日期        |
| max                      | date 所能表示的最大日期        |

案例：

```python
if __name__ == '__main__':
    import datetime,time
    print(datetime.date.today())
    print(datetime.date.fromtimestamp(time.time()))
    print(datetime.date.min)
    print(datetime.date.max)
```

输出结果：

```shell
2024-05-13
2024-05-13
0001-01-01
9999-12-31
```

实例方法和属性如下所示：

| 方法（属性）              | 说明                                                         |
| :------------------------ | :----------------------------------------------------------- |
| replace(year, month, day) | 生成一个新的日期对象，用参数指定的年，月，日代替原有对象中的属性 |
| timetuple()               | 返回日期对应的 struct_time 对象                              |
| weekday()                 | 返回一个整数代表星期几，星期一为 0，星期天为 6               |
| isoweekday()              | 返回一个整数代表星期几，星期一为 1，星期天为 7               |
| isocalendar()             | 返回格式为 (year，month，day) 的元组                         |
| isoformat()               | 返回格式如 YYYY-MM-DD 的字符串                               |
| strftime(format)          | 返回自定义格式的字符串                                       |
| year                      | 年                                                           |
| month                     | 月                                                           |
| day                       | 日                                                           |

案例：

```python
if __name__ == '__main__':
    import datetime

    td = datetime.date.today()
    print(td.replace(year=1945, month=8, day=15))
    print(td.timetuple())
    print(td.weekday())
    print(td.isocalendar())
    print(td.isoformat())
    print(td.strftime("%Y-%m-%d %H:%M:%S %f"))
    print(td.year)
    print(td.month)
    print(td.day)
```

输出结果：

```shell
1945-08-15
time.struct_time(tm_year=2024, tm_mon=5, tm_mday=13, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=0, tm_yday=134, tm_isdst=-1)
0
datetime.IsoCalendarDate(year=2024, week=20, weekday=1)
2024-05-13
2024-05-13 00:00:00 000000
2024
5
13
```



### 2.2 time类

time 类表示由时、分、秒、微秒组成的时间，格式为：time(hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)。

- hour 范围为：[0, 24)
- minute 范围为：[0, 60)
- second 范围为：[0, 60)
- microsecond 范围为：[0, 1000000)
- fold 范围为：[0, 1]

实例方法和属性如下所示：

| 方法（属性）                                                 | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| isoformat()                                                  | 返回 HH:MM:SS 格式的字符串                                   |
| replace(hour, minute, second, microsecond, tzinfo, * fold=0) | 创建一个新的时间对象，用参数指定的时、分、秒、微秒代替原有对象中的属性 |
| strftime(format)                                             | 返回自定义格式的字符串                                       |
| hour                                                         | 时                                                           |
| minute                                                       | 分                                                           |
| second                                                       | 秒                                                           |
| microsecond                                                  | 微秒                                                         |
| tzinfo                                                       | 时区                                                         |

案例：

```python
if __name__ == '__main__':
    import datetime

    t = datetime.time(10, 10, 10)
    print(t.isoformat())
    print(t.replace(hour=9, minute=9))
    print(t.strftime('%I:%M:%S %p'))
    print(t.hour)
    print(t.minute)
    print(t.second)
    print(t.microsecond)
    print(t.tzinfo)
```

输出结果：

```python
10:10:10
09:09:10
10:10:10 AM
10
10
10
0
None
```



### 2.3 datetime 类

datetime 包括了 date 与 time 的所有信息，格式为：datetime(year, month, day, hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)，参数范围值参考 date 类与 time 类。

类方法和属性如下所示：

| 方法（属性）                      | 说明                                   |
| :-------------------------------- | :------------------------------------- |
| today()                           | 返回当地的当前时间                     |
| now(tz=None)                      | 类似于 today()，可选参数 tz 可指定时区 |
| utcnow()                          | 返回当前 UTC 时间                      |
| fromtimestamp(timestamp, tz=None) | 根据时间戳返回对应时间                 |
| utcfromtimestamp(timestamp)       | 根据时间戳返回对应 UTC 时间            |
| combine(date, time)               | 根据 date 和 time 返回对应时间         |
| min                               | datetime 所能表示的最小日期            |
| max                               | datetime 所能表示的最大日期            |

案例：

```python
if __name__ == '__main__':
    import datetime, time

    print(datetime.datetime.today())
    print(datetime.datetime.now())
    print(datetime.datetime.utcnow())
    print(datetime.datetime.fromtimestamp(time.time()))
    print(datetime.datetime.utcfromtimestamp(time.time()))
    print(datetime.datetime.combine(datetime.date(2019, 12, 1), datetime.time(10, 10, 10)))
    print(datetime.datetime.min)
    print(datetime.datetime.max)
```

输出结果：

```shell
2024-05-13 11:45:13.939673
2024-05-13 11:45:13.939673
2024-05-13 03:45:13.939673
2024-05-13 11:45:13.939673
2024-05-13 03:45:13.939673
2019-12-01 10:10:10
0001-01-01 00:00:00
9999-12-31 23:59:59.999999
```

实例方法和属性如下所示：

| 方法（属性）                                                 | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| date()                                                       | 返回具有同样 year,month,day 值的 date 对象                   |
| time()                                                       | 返回具有同样 hour, minute, second, microsecond 和 fold 值的 time 对象 |
| replace(year, month, day=self.day, hour, minute, second, microsecond, tzinfo, * fold=0) | 生成一个新的日期对象，用参数指定的年，月，日，时，分，秒...代替原有对象中的属性 |
| weekday()                                                    | 返回一个整数代表星期几，星期一为 0，星期天为 6               |
| isoweekday()                                                 | 返回一个整数代表星期几，星期一为 1，星期天为 7               |
| isocalendar()                                                | 返回格式为 (year，month，day) 的元组                         |
| isoformat()                                                  | 返回一个以 ISO 8601 格式表示日期和时间的字符串 YYYY-MM-DDTHH:MM:SS.ffffff |
| strftime(format)                                             | 返回自定义格式的字符串                                       |
| year                                                         | 年                                                           |
| month                                                        | 月                                                           |
| day                                                          | 日                                                           |
| hour                                                         | 时                                                           |
| minute                                                       | 分                                                           |
| second                                                       | 秒                                                           |
| microsecond                                                  | 微秒                                                         |
| tzinfo                                                       | 时区                                                         |

案例：

```python
if __name__ == '__main__':
    import datetime

    td = datetime.datetime.today()
    print(td.date())
    print(td.time())
    print(td.replace(day=11, second=10))
    print(td.weekday())
    print(td.isoweekday())
    print(td.isocalendar())
    print(td.isoformat())
    print(td.strftime('%Y-%m-%d %H:%M:%S .%f'))
    print(td.year)
    print(td.month)
    print(td.month)
    print(td.hour)
    print(td.minute)
    print(td.second)
    print(td.microsecond)
    print(td.tzinfo)
```

输出结果：

```shell
2024-05-13T11:46:15.643827
2024-05-13 11:46:15 .643827
2024
5
5
11
46
15
643827
None
```



## 3.calendar 模块

calendar 模块提供了很多可以处理日历的函数。



### 3.1 常用函数

| 方法                               | 说明                                               |
| :--------------------------------- | :------------------------------------------------- |
| setfirstweekday(weekday)           | 设置每一周的开始(0 表示星期一，6 表示星期天)       |
| firstweekday()                     | 返回当前设置的每星期的第一天的数值                 |
| isleap(year)                       | 如果 year 是闰年则返回 True ,否则返回 False        |
| leapdays(y1, y2)                   | 返回 y1 至 y2 （包含 y1 和 y2 ）之间的闰年的数量   |
| weekday(year, month, day)          | 返回指定日期的星期值                               |
| monthrange(year, month)            | 返回指定年份的指定月份第一天是星期几和这个月的天数 |
| month(theyear, themonth, w=0, l=0) | 返回月份日历                                       |
| prcal(year, w=0, l=0, c=6, m=3)    | 返回年份日历                                       |

案例：

```python
if __name__ == '__main__':
    import calendar

    calendar.setfirstweekday(1)
    print(calendar.firstweekday())
    print(calendar.isleap(2019))
    print(calendar.leapdays(1945, 2019))
    print(calendar.weekday(2019, 12, 1))
    print(calendar.monthrange(2019, 12))
    print(calendar.month(2019, 12))
    print(calendar.prcal(2019))
```

输出结果：

```shell
1
False
18
6
(6, 31)
   December 2019
Tu We Th Fr Sa Su Mo
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31

                                  2019

      January                   February                   March
Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo
 1  2  3  4  5  6  7                1  2  3  4                1  2  3  4
 8  9 10 11 12 13 14       5  6  7  8  9 10 11       5  6  7  8  9 10 11
15 16 17 18 19 20 21      12 13 14 15 16 17 18      12 13 14 15 16 17 18
22 23 24 25 26 27 28      19 20 21 22 23 24 25      19 20 21 22 23 24 25
29 30 31                  26 27 28                  26 27 28 29 30 31

       April                      May                       June
Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo
                   1          1  2  3  4  5  6                   1  2  3
 2  3  4  5  6  7  8       7  8  9 10 11 12 13       4  5  6  7  8  9 10
 9 10 11 12 13 14 15      14 15 16 17 18 19 20      11 12 13 14 15 16 17
16 17 18 19 20 21 22      21 22 23 24 25 26 27      18 19 20 21 22 23 24
23 24 25 26 27 28 29      28 29 30 31               25 26 27 28 29 30
30

        July                     August                  September
Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo
                   1             1  2  3  4  5                      1  2
 2  3  4  5  6  7  8       6  7  8  9 10 11 12       3  4  5  6  7  8  9
 9 10 11 12 13 14 15      13 14 15 16 17 18 19      10 11 12 13 14 15 16
16 17 18 19 20 21 22      20 21 22 23 24 25 26      17 18 19 20 21 22 23
23 24 25 26 27 28 29      27 28 29 30 31            24 25 26 27 28 29 30
30 31

      October                   November                  December
Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo      Tu We Th Fr Sa Su Mo
 1  2  3  4  5  6  7                1  2  3  4                      1  2
 8  9 10 11 12 13 14       5  6  7  8  9 10 11       3  4  5  6  7  8  9
15 16 17 18 19 20 21      12 13 14 15 16 17 18      10 11 12 13 14 15 16
22 23 24 25 26 27 28      19 20 21 22 23 24 25      17 18 19 20 21 22 23
29 30 31                  26 27 28 29 30            24 25 26 27 28 29 30
                                                    31
None
```



### 3.2 Calendar 类

Calendar 对象提供了一些日历数据格式化的方法，实例方法如下所示：

| 方法                        | 说明                                        |
| :-------------------------- | :------------------------------------------ |
| iterweekdays()              | 返回一个迭代器，迭代器的内容为一星期的数字  |
| itermonthdates(year, month) | 返回一个迭代器，迭代器的内容为年 、月的日期 |

案例：

```python
if __name__ == '__main__':
    from calendar import Calendar

    c = Calendar()
    print(list(c.iterweekdays()))
    for i in c.itermonthdates(2024, 12):
        print(i)
```

输出结果：

```shell
[0, 1, 2, 3, 4, 5, 6]
2024-11-25
2024-11-26
2024-11-27
2024-11-28
2024-11-29
2024-11-30
2024-12-01
2024-12-02
2024-12-03
2024-12-04
2024-12-05
2024-12-06
2024-12-07
2024-12-08
2024-12-09
2024-12-10
2024-12-11
2024-12-12
2024-12-13
2024-12-14
2024-12-15
2024-12-16
2024-12-17
2024-12-18
2024-12-19
2024-12-20
2024-12-21
2024-12-22
2024-12-23
2024-12-24
2024-12-25
2024-12-26
2024-12-27
2024-12-28
2024-12-29
2024-12-30
2024-12-31
2025-01-01
2025-01-02
2025-01-03
2025-01-04
2025-01-05
```



### 3.3 TextCalendar 类

TextCalendar 为 Calendar子类，用来生成纯文本日历。实例方法如下所示：

| 方法                                     | 说明                                                         |
| :--------------------------------------- | :----------------------------------------------------------- |
| formatmonth(theyear, themonth, w=0, l=0) | 返回一个多行字符串来表示指定年、月的日历                     |
| formatyear(theyear, w=2, l=1, c=6, m=3)  | 返回一个 m 列日历，可选参数 w, l, 和 c 分别表示日期列数， 周的行数， 和月之间的间隔 |

案例：

```python
if __name__ == '__main__':
    from calendar import TextCalendar

    tc = TextCalendar()
    print(tc.formatmonth(2024, 12))
    print(tc.formatyear(2024))
```

输出结果：

```shell
   December 2024
Mo Tu We Th Fr Sa Su
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31

                                  2024

      January                   February                   March
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
 1  2  3  4  5  6  7                1  2  3  4                   1  2  3
 8  9 10 11 12 13 14       5  6  7  8  9 10 11       4  5  6  7  8  9 10
15 16 17 18 19 20 21      12 13 14 15 16 17 18      11 12 13 14 15 16 17
22 23 24 25 26 27 28      19 20 21 22 23 24 25      18 19 20 21 22 23 24
29 30 31                  26 27 28 29               25 26 27 28 29 30 31

       April                      May                       June
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
 1  2  3  4  5  6  7             1  2  3  4  5                      1  2
 8  9 10 11 12 13 14       6  7  8  9 10 11 12       3  4  5  6  7  8  9
15 16 17 18 19 20 21      13 14 15 16 17 18 19      10 11 12 13 14 15 16
22 23 24 25 26 27 28      20 21 22 23 24 25 26      17 18 19 20 21 22 23
29 30                     27 28 29 30 31            24 25 26 27 28 29 30

        July                     August                  September
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
 1  2  3  4  5  6  7                1  2  3  4                         1
 8  9 10 11 12 13 14       5  6  7  8  9 10 11       2  3  4  5  6  7  8
15 16 17 18 19 20 21      12 13 14 15 16 17 18       9 10 11 12 13 14 15
22 23 24 25 26 27 28      19 20 21 22 23 24 25      16 17 18 19 20 21 22
29 30 31                  26 27 28 29 30 31         23 24 25 26 27 28 29
                                                    30

      October                   November                  December
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
    1  2  3  4  5  6                   1  2  3                         1
 7  8  9 10 11 12 13       4  5  6  7  8  9 10       2  3  4  5  6  7  8
14 15 16 17 18 19 20      11 12 13 14 15 16 17       9 10 11 12 13 14 15
21 22 23 24 25 26 27      18 19 20 21 22 23 24      16 17 18 19 20 21 22
28 29 30 31               25 26 27 28 29 30         23 24 25 26 27 28 29
                                                    30 31
```



### 3.4 HTMLCalendar 类

HTMLCalendar 类可以生成 HTML 日历。实例方法如下所示：

| 方法                                                         | 说明                                       |
| :----------------------------------------------------------- | :----------------------------------------- |
| formatmonth(theyear, themonth, withyear=True)                | 返回一个 HTML 表格作为指定年、月的日历     |
| formatyear(theyear, width=3)                                 | 返回一个 HTML 表格作为指定年份的日历       |
| formatyearpage(theyear, width=3, css='calendar.css', encoding=None) | 返回一个完整的 HTML 页面作为指定年份的日历 |

案例：

```python
if __name__ == '__main__':
    from calendar import HTMLCalendar

    hc = HTMLCalendar()
    print(hc.formatmonth(2024, 12))
    print(hc.formatyear(2024))
    hc.formatyearpage(2024)
```

输出结果：

太多了，就不粘贴了



