---
title: "MySQL-聚簇索引和非聚簇索引"
date: 2024-03-17
---
## 什么是聚簇索引？

#### 概括：

对于InnoDB而言，所谓的聚簇索引其实就是`_row_id`所在列(真实列或者伪列)或者列组对应的索引。

#### 问题：

很多人就有点奇怪：不是主键的索引就是聚簇索引吗？

这个解答对，但是不完全对。

#### 解答：

其实在**InnoDB每个表都会有一个聚簇索引**，因为按照InnoDB的格式而言，**数据和聚簇索引是同一个文件，数据存放在聚簇索引的叶子结点。**

这种结构下，每个表都需要一个标识行记录唯一性的字段作为聚簇索引的键值。

在Mysql中存在一个隐藏列`_rowid`作为行记录的唯一标识，但是需要注意的是`_rowid` 并不是真实存在的列，本质是一个非空唯一列的别名。

1. **如果表有主键,那么`_rowid`本质上就是主键,聚簇索引的键值就是主键值。**
2. **如果表没有主键,但有唯一非空索引,那么`_rowid`就对应该表的唯一索引列或列组，聚簇索引的键值也就是这个唯一非空索引列或列组。**
3. **如果1和2都不存在,才会使用InnoDB自动生成的6字节`_rowid`伪列作为聚簇索引键值。**



## 什么是非聚簇索引？

#### 概括：

**其实不管是聚簇索引还是非聚簇索引，结构其实都一样**，都是B+树。只是**聚簇索引叶子结点存的是行数据**，而**非聚簇索引叶子结点存的是`_rowid`所对应的值**。【如果有疑问可以看看上面对`row_id`的解释】



#### 引申：

所以这也是为什么有**回表**和**覆盖索引**的说法了。

对于非聚簇索引而言，如果**查询的字段刚好存在于SQL使用到索引所在的列或者列组**，那么他就不需要再通过`_rowid`对应的值去找聚簇索引了。这个情况就是**索引覆盖**。

反之，他就需要在**查询完非聚簇索引之后，再通过`_rowid`对应的值重新查聚簇索引来补全所需要查询的字段。**，这种情况就称之为**回表**。因为它进行了二次查询。

#### 问题：

那么怎么避免回表呢？

很简单，先查出ID，再通过ID查一次。虽然有点离谱，但是方法其实就是这样。

案例：

`SELECT a.NAME,a.AGE,a.GENDER FROM USER a,(SELECT ID FROM USER WHERE AGE > 10) b WHERE a.ID = b.ID`

当然这个方法实际上并不一定能提高效率，一般而言可以使用联合索引将需要查询的字段覆盖。



其实上面两种方法在理解了什么是非聚簇索引之后其实自己就能想出来。