---
title: "MQ-应用解耦"
date: 2024-03-16
---

## **MQ作用：**

- 减少系统之间的直接调用：

  通过队列进行关联，生产者把消息放入队列，消费者从队列中那消息

- 降低处理等待时间

  请求处理的具体任务交由队列的消费者进行异步处理

- 更容易进行系统业务的迁移。

  队列不关注服务是什么系统，只需要知道服务对应哪个队列即可。

  所以如果一个队列从A系统消费变成B系统消费只需要两步：

  ​	1.A系统停止消费对应队列的消息

  ​	2.B系统监听对应队列，消费消息



## **提要：**

解耦的意思就是降低依赖。



## **应用解耦：**

不同服务之间通过MQ关联，不需要直接调用，也不需要知道消费者、生产者是谁，只需要知道自己对应哪个MQ，是消费者还是生产者。

生产者只须要到把消息丢进队列

消费者只需要到对应的队列里获取消息



## **总结：**

对于不同服务而言，不需要知道对方是什么系统，只需要知道自己需要做什么就行了。