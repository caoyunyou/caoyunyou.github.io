---
title: "stream流"
date: 2024-05-20
---
## Stream是什么？

Stream是 JDK8 推出的一种流式处理机制，其能够对集合进行处理，可读性强，能简化开发。其支持并行处理。




## 创建方式：

### `generate`

生成 Stream ，通常配合 `limit`使用，达到效果：生成一个由 n 个元素组成的stream

案例：

```java
public class StreamTest {


    public static void main(String[] args) {


        List<Integer> collect = Stream.generate(() -> 1).limit(6).collect(Collectors.toList());

        System.out.println(collect);

    }
}
```

输出结果：

```shell
[1, 1, 1, 1, 1, 1]
```

### `concat`

合并两个 Stream ，生成一个新的 Stream

案例：

```java
public class StreamTest {


    public static void main(String[] args) {


        Stream<String> stream1 = Stream.of("aaa", "bbb");

        Stream<String> stream2 = Stream.of("ccc", "ddd");

        Stream<String> concat = Stream.concat(stream1, stream2);

        List<String> collect = concat.collect(Collectors.toList());

        System.out.println(collect);

    }
}
```

输出结果：

```shell
[aaa, bbb, ccc, ddd]
```



### `builder`

构建一个 Stream 的建造器。

案例：

```java
public class StreamTest {


    public static void main(String[] args) {

        // builder 创建一个 Stream 建造器

        Stream<Object> build = Stream.builder()
                .add("Aaa")
                .add("Bbb")
                .add("Ccc")
                .add("Ddd")
                .build();
    }
}
```

### `empty`：

创建一个空的 Stream 

案例：

```java
public class StreamTest {


    public static void main(String[] args) {

        // builder 创建一个 Stream 建造器

        Stream<Object> empty = Stream.empty();
    }
}
```

### `of`：

按照给定的信息创建 Stream

案例：

```java
public class StreamTest {


    public static void main(String[] args) {

        // builder 创建一个 Stream 建造器

        Stream<String> stream = Stream.of("Aaa", "Bbb", "Ccc", "Ddd");
    }
}
```



## Stream处理方式

### `parallel`

以并行的方式处理。不开启的话，默认是顺序处理。

案例：

```java
public class StreamTest {


    public static void main(String[] args) {

        // 方法1：
        // collect 传入 3个参数
        // 1.Supplier ； 无参数 + 1个返回值。提供一个新的结果容器。
        // 2.BiConsumer：两个参数：操作数+基础值 + 无返回值。将一个元素添加到结果容器中。
        // 3.BiConsumer：两个参数：【操作结束的基础值+前一个值】 + 无返回值。将两个结果容器合并在一起。这在并行流中使用。
        ArrayList<Object> collect = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .parallel()
                .collect(ArrayList::new, ArrayList::add, (n, m) -> {
                    System.out.println("n:" + n + "m:" + m);
                    n.addAll(m);
                });
        System.out.println(collect);
    }
}
```



## 数据-处理操作

### `filter`

过滤操作，如果条件**不符合**就会**被过滤掉**

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(11);
        list.add(12);
        list.add(13);
        // filter 传入 1个参数
        // 1.Predicate 实现：有一个参数【操作的值】 + 一个 boolean类型的返回值
        list = list.stream().filter(a -> a > 9 && a < 12).collect(Collectors.toList());
        System.out.println(list);
    }
}
```

输出结果：

```shell
[10, 11]
```



### `distinct`

去重处理。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();

        list.add(1);
        list.add(1);
        list.add(2);
        list.add(2);
        list.add(6);
        list.add(8);

        
        list = list.stream().distinct().collect(Collectors.toList());

        System.out.println(list);

    }
}
```

### `sorted`

排序处理

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();

        list.add(1);
        list.add(1);
        list.add(2);
        list.add(2);
        list.add(6);
        list.add(8);


        list = list.stream().sorted((a, b) -> b - a).collect(Collectors.toList());

        System.out.println(list);

    }
}
```

输出结果：

```shell
[8, 6, 2, 2, 1, 1]
```



### `limit`

限制条数，截断操作。一般是跟随`sorted`，实现取出最大或最小的几条。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Person> list = getPersonList();

        System.out.println("修改之前：" + list);
        // limit 传入 1个参数
        // 1.int 类型数字
        list = list.stream().sorted((a, b) -> b.getAge() - a.getAge()).limit(2).collect(Collectors.toList());

        System.out.println("修改之后：" + list);

    }


    private static List<Person> getPersonList() {
        List<Person> peopleList = new ArrayList<>();


        Person person1 = new Person();
        person1.setName("p1").setAge(11);
        List<Social> socials1 = new ArrayList<>();
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("QQ", "7192618161"));
        person1.setSocials(socials1);

        peopleList.add(person1);


        Person person2 = new Person();
        person2.setName("p2").setAge(15);
        List<Social> socials2 = new ArrayList<>();
        socials2.add(new Social("微信", "1XN1JBI1BI"));
        socials2.add(new Social("微信", "X1NOO111"));
        person2.setSocials(socials2);

        peopleList.add(person2);

        Person person3 = new Person();
        person3.setName("p3").setAge(18);
        List<Social> socials3 = new ArrayList<>();
        socials3.add(new Social("facebook", "ax11xxax1"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        person3.setSocials(socials3);

        peopleList.add(person3);


        return peopleList;

    }


    @Data
    @Accessors(chain = true)
    static class Person {

        private String name;

        private Integer age;

        private List<Social> socials;
    }

    @Data
    @AllArgsConstructor
    static class Social {

        private String name;

        private String account;

    }
}
```

输出结果：

```shell
修改之前：[StreamTest.Person(name=p1, age=11, socials=[StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=QQ, account=7192618161)]), StreamTest.Person(name=p2, age=15, socials=[StreamTest.Social(name=微信, account=1XN1JBI1BI), StreamTest.Social(name=微信, account=X1NOO111)]), StreamTest.Person(name=p3, age=18, socials=[StreamTest.Social(name=facebook, account=ax11xxax1), StreamTest.Social(name=tiktok, account=1ax1x1111), StreamTest.Social(name=tiktok, account=1ax1x1111)])]
修改之后：[StreamTest.Person(name=p3, age=18, socials=[StreamTest.Social(name=facebook, account=ax11xxax1), StreamTest.Social(name=tiktok, account=1ax1x1111), StreamTest.Social(name=tiktok, account=1ax1x1111)]), StreamTest.Person(name=p2, age=15, socials=[StreamTest.Social(name=微信, account=1XN1JBI1BI), StreamTest.Social(name=微信, account=X1NOO111)])]
```

### `skip`

跳过前 n 个元素。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Person> list = getPersonList();

        System.out.println("修改之前：" + list);
        // skip 传入 1个参数
        // 1.；png 类型数字
        list = list.stream().sorted((a, b) -> b.getAge() - a.getAge()).skip(3).collect(Collectors.toList());

        System.out.println("修改之后：" + list);

    }


    private static List<Person> getPersonList() {
        List<Person> peopleList = new ArrayList<>();


        Person person1 = new Person();
        person1.setName("p1").setAge(11);
        List<Social> socials1 = new ArrayList<>();
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("QQ", "7192618161"));
        person1.setSocials(socials1);

        peopleList.add(person1);


        Person person2 = new Person();
        person2.setName("p2").setAge(15);
        List<Social> socials2 = new ArrayList<>();
        socials2.add(new Social("微信", "1XN1JBI1BI"));
        socials2.add(new Social("微信", "X1NOO111"));
        person2.setSocials(socials2);

        peopleList.add(person2);

        Person person3 = new Person();
        person3.setName("p3").setAge(18);
        List<Social> socials3 = new ArrayList<>();
        socials3.add(new Social("facebook", "ax11xxax1"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        person3.setSocials(socials3);

        peopleList.add(person3);


        return peopleList;

    }


    @Data
    @Accessors(chain = true)
    static class Person {

        private String name;

        private Integer age;

        private List<Social> socials;
    }

    @Data
    @AllArgsConstructor
    static class Social {

        private String name;

        private String account;

    }
}
```



## 数据-获取、判断

### `min`

自定义比较器，并获取其中最小的元素

案例：

```java
public class StreamTest {


    public static void main(String[] args) {


        // collect 传入 1个参数 转换为指定类型的集合
        // 1.Comparator ；比较器
        String min = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .min((a, b) -> b.charAt(0) - a.charAt(0)).get();
        System.out.println("min:" + min);


    }
}
```

输出结果：

```shell
min:Ddd
```

### `max`

自定义比较器，并获取其中最大的元素

案例

```java
public class StreamTest {


    public static void main(String[] args) {


        // max 传入 1个参数 转换为指定类型的集合
        // 1.Comparator ；比较器
        String max = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .max((a, b) -> b.charAt(0) - a.charAt(0)).get();
        System.out.println("max:" + max);

    }
}
```

输出结果：

```shell
max:Aaa
```

### `count`

计算元素的总数

案例

```java
public class StreamTest {


    public static void main(String[] args) {


        // count 计数
        long count = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .count();
        System.out.println("count:" + count);

    }
}
```

输出结果：

```shell
count:4
```

### `anyMatch`

是否存在匹配项

案例：

```java
public class StreamTest {


    public static void main(String[] args) {


        // anyMatch 是否存在匹配项
        boolean anyMatch = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .anyMatch(i -> i.equals("Aaa"));
        System.out.println("anyMatch:" + anyMatch);

    }
}
```

输出结果：

```shell
anyMatch:true
```

### `allMatch`

是否全部匹配

案例：

```java
public class StreamTest {


    public static void main(String[] args) {


        // anyMatch 是否全部匹配
        boolean allMatch = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .allMatch(i -> i.equals("Aaa"));
        System.out.println("allMatch:" + allMatch);

    }
}
```

输出结果：

```shell
allMatch:false
```

### `noneMatch`

是否不存在匹配项

案例：

```java
public class StreamTest {


    public static void main(String[] args) {


        // noneMatch 是否全部匹配
        boolean noneMatch = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .noneMatch(i -> i.equals("1aa"));
        System.out.println("noneMatch:" + noneMatch);

    }
}
```

输出结果：

```shell
noneMatch:true
```

### `findFirst`

查找第一个元素，一般是跟随判断条件后面，达到查询第一个满足XX条件的元素

案例：

```java
public class StreamTest {


    public static void main(String[] args) {


        // findFirst 查找第一个元素
        String findFirst = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .findFirst().get();
        System.out.println("findFirst:" + findFirst);

    }
}
```

输出结果：

```shell
findFirst:Aaa
```

### `findAny`

查找任一元素，一般是跟随判断条件后面，达到查询任意一个满足XX条件的元素

案例：

```java
public class StreamTest {


    public static void main(String[] args) {
        
        // findAny 查找任意一个元素
        String findAny = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .findAny().get();
        System.out.println("findAny:" + findAny);

    }
}
```

输出结果：

```shell
findAny:Aaa
```



## 遍历操作

### `map`

进行集合的类型转换。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(11);
        list.add(12);
        list.add(13);

        // map 传入 1个参数
        // 1.Function 实现：有一个参数【操作的值】 + 一个 转换之后类型的返回值
        List<String> collect = list.stream().map(String::valueOf).collect(Collectors.toList());

        System.out.println(collect);
    }
}
```

输出结果：

```java
[10, 11, 12, 13]
```



### `peek`

对每项进行操作处理，不会修改返回的类型。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Person> list = getPersonList();

        System.out.println("修改之前："+list);
        // peek 传入 1个参数
        // 1.Consumer 实现：有一个参数【操作的值】 + 无返回值
        list = list.stream().peek(i->i.setAge(i.getAge()+1)).collect(Collectors.toList());

        System.out.println("修改之后："+list);

    }


    private static List<Person> getPersonList() {
        List<Person> peopleList = new ArrayList<>();


        Person person1 = new Person();
        person1.setName("p1").setAge(11);
        List<Social> socials1 = new ArrayList<>();
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("QQ", "7192618161"));
        person1.setSocials(socials1);

        peopleList.add(person1);


        Person person2 = new Person();
        person2.setName("p2").setAge(15);
        List<Social> socials2 = new ArrayList<>();
        socials2.add(new Social("微信", "1XN1JBI1BI"));
        socials2.add(new Social("微信", "X1NOO111"));
        person2.setSocials(socials2);

        peopleList.add(person2);

        Person person3 = new Person();
        person3.setName("p3").setAge(18);
        List<Social> socials3 = new ArrayList<>();
        socials3.add(new Social("facebook", "ax11xxax1"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        person3.setSocials(socials3);

        peopleList.add(person3);


        return peopleList;

    }


    @Data
    @Accessors(chain = true)
    static class Person {

        private String name;

        private Integer age;

        private List<Social> socials;
    }

    @Data
    @AllArgsConstructor
    static class Social {

        private String name;

        private String account;

    }
}
```

输出结果：

```shell
修改之前：[StreamTest.Person(name=p1, age=11, socials=[StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=QQ, account=7192618161)]), StreamTest.Person(name=p2, age=15, socials=[StreamTest.Social(name=微信, account=1XN1JBI1BI), StreamTest.Social(name=微信, account=X1NOO111)]), StreamTest.Person(name=p3, age=18, socials=[StreamTest.Social(name=facebook, account=ax11xxax1), StreamTest.Social(name=tiktok, account=1ax1x1111), StreamTest.Social(name=tiktok, account=1ax1x1111)])]
修改之后：[StreamTest.Person(name=p1, age=12, socials=[StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=QQ, account=7192618161)]), StreamTest.Person(name=p2, age=16, socials=[StreamTest.Social(name=微信, account=1XN1JBI1BI), StreamTest.Social(name=微信, account=X1NOO111)]), StreamTest.Person(name=p3, age=19, socials=[StreamTest.Social(name=facebook, account=ax11xxax1), StreamTest.Social(name=tiktok, account=1ax1x1111), StreamTest.Social(name=tiktok, account=1ax1x1111)])]
```





输出结果：

```shell
修改之前：[StreamTest.Person(name=p1, age=11, socials=[StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=QQ, account=7192618161)]), StreamTest.Person(name=p2, age=15, socials=[StreamTest.Social(name=微信, account=1XN1JBI1BI), StreamTest.Social(name=微信, account=X1NOO111)]), StreamTest.Person(name=p3, age=18, socials=[StreamTest.Social(name=facebook, account=ax11xxax1), StreamTest.Social(name=tiktok, account=1ax1x1111), StreamTest.Social(name=tiktok, account=1ax1x1111)])]
修改之后：[]
```

### `forEach`

循环处理，操作顺序不确定。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Person> list = getPersonList();

        System.out.println("修改之前：" + list);
        // forEach 传入 1个参数
        // 1.Consumer ； 一个参数：当前处理元素 + 无返回值
        list.stream().sorted((a, b) -> b.getAge() - a.getAge()).forEach(i -> {
            i.setAge(i.getAge() + 1);
        });

        System.out.println("修改之后：" + list);

    }


    private static List<Person> getPersonList() {
        List<Person> peopleList = new ArrayList<>();


        Person person1 = new Person();
        person1.setName("p1").setAge(11);
        List<Social> socials1 = new ArrayList<>();
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("QQ", "7192618161"));
        person1.setSocials(socials1);

        peopleList.add(person1);


        Person person2 = new Person();
        person2.setName("p2").setAge(15);
        List<Social> socials2 = new ArrayList<>();
        socials2.add(new Social("微信", "1XN1JBI1BI"));
        socials2.add(new Social("微信", "X1NOO111"));
        person2.setSocials(socials2);

        peopleList.add(person2);

        Person person3 = new Person();
        person3.setName("p3").setAge(18);
        List<Social> socials3 = new ArrayList<>();
        socials3.add(new Social("facebook", "ax11xxax1"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        person3.setSocials(socials3);

        peopleList.add(person3);


        return peopleList;

    }


    @Data
    @Accessors(chain = true)
    static class Person {

        private String name;

        private Integer age;

        private List<Social> socials;
    }

    @Data
    @AllArgsConstructor
    static class Social {

        private String name;

        private String account;

    }
}
```

### `forEachOrdered`

循环处理，操作顺序按照`Stream`中的顺序。适合需要按照顺序处理的场景。

案例

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Person> list = getPersonList();

        System.out.println("修改之前：" + list);
        // forEachOrdered 传入 1个参数
        // 1.Consumer ； 一个参数：当前处理元素 + 无返回值
        list.stream().sorted((a, b) -> b.getAge() - a.getAge()).forEachOrdered(i -> {
            i.setAge(i.getAge() + 1);
        });

        System.out.println("修改之后：" + list);

    }


    private static List<Person> getPersonList() {
        List<Person> peopleList = new ArrayList<>();


        Person person1 = new Person();
        person1.setName("p1").setAge(11);
        List<Social> socials1 = new ArrayList<>();
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("QQ", "7192618161"));
        person1.setSocials(socials1);

        peopleList.add(person1);


        Person person2 = new Person();
        person2.setName("p2").setAge(15);
        List<Social> socials2 = new ArrayList<>();
        socials2.add(new Social("微信", "1XN1JBI1BI"));
        socials2.add(new Social("微信", "X1NOO111"));
        person2.setSocials(socials2);

        peopleList.add(person2);

        Person person3 = new Person();
        person3.setName("p3").setAge(18);
        List<Social> socials3 = new ArrayList<>();
        socials3.add(new Social("facebook", "ax11xxax1"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        person3.setSocials(socials3);

        peopleList.add(person3);


        return peopleList;

    }


    @Data
    @Accessors(chain = true)
    static class Person {

        private String name;

        private Integer age;

        private List<Social> socials;
    }

    @Data
    @AllArgsConstructor
    static class Social {

        private String name;

        private String account;

    }
}
```



### `iterator`

创建一个迭代器。

案例：

```java
public class StreamTest {


    public static void main(String[] args) {

        // iterator 创建一个 Stream 建造器

        Stream<String> stream = Stream.of("Aaa", "Bbb", "Ccc", "Ddd");

        Iterator<String> iterator = stream.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());
        }
    }
}
```

输出结果：

```shell
Aaa
Bbb
Ccc
Ddd
```

## 类型转换

### `mapToInt`

将 stream 转换为 IntStream，与之类似的还有`mapToLong`，`mapToDouble`就不一一列举了。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Long> list = new ArrayList<>();
        list.add(10L);
        list.add(11L);
        list.add(12L);
        list.add(13L);

        // mapToInt 传入 1个参数
        // 1.ToIntFunction 实现：有一个参数【操作的值】 + 一个 int 类型的返回值
        // 返回为 IntStream 需要经过 boxed 才能转换为 Stream
        List<Integer> collect = list.stream().mapToInt(Long::intValue).boxed().collect(Collectors.toList());


        System.out.println(collect);
    }
}
```

输出结果：

```shell
[10, 11, 12, 13]
```

### `flatMap`

将各个元素转换成流，并且合并输出。可以用作列表对象字段提取。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Person> list = getPersonList();

        // flatMap 传入 1个参数
        // 1.Function 实现：有一个参数【操作的值】 + 一个 Stream 类型的返回值
        List<Social> collect = list.stream().flatMap(i -> i.getSocials().stream()).distinct().collect(Collectors.toList());

        System.out.println(collect);

    }


    private static List<Person> getPersonList() {
        List<Person> peopleList = new ArrayList<>();


        Person person1 = new Person();
        person1.setName("p1").setAge(11);
        List<Social> socials1 = new ArrayList<>();
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("QQ", "7192618161"));
        person1.setSocials(socials1);

        peopleList.add(person1);


        Person person2 = new Person();
        person2.setName("p2").setAge(15);
        List<Social> socials2 = new ArrayList<>();
        socials2.add(new Social("微信", "1XN1JBI1BI"));
        socials2.add(new Social("微信", "X1NOO111"));
        person2.setSocials(socials2);

        peopleList.add(person2);

        Person person3 = new Person();
        person3.setName("p3").setAge(18);
        List<Social> socials3 = new ArrayList<>();
        socials3.add(new Social("facebook", "ax11xxax1"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        person3.setSocials(socials3);

        peopleList.add(person3);


        return peopleList;

    }


    @Data
    @Accessors(chain = true)
    static class Person {

        private String name;

        private Integer age;

        private List<Social> socials;
    }

    @Data
    @AllArgsConstructor
    static class Social {

        private String name;

        private String account;

    }
}
```

输出结果：

```shell
[StreamTest.Social(name=邮箱, account=aaa@foxmail.com), StreamTest.Social(name=QQ, account=7192618161), StreamTest.Social(name=微信, account=1XN1JBI1BI), StreamTest.Social(name=微信, account=X1NOO111), StreamTest.Social(name=facebook, account=ax11xxax1), StreamTest.Social(name=tiktok, account=1ax1x1111)]
```

### `flatMapToInt`

与上述操作类似，就是返回的类型是`IntStream`，后续的`flatMapToLong`，`flatMapToDouble`也差不多。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Person> list = getPersonList();

        // flatMapToInt 传入 1个参数
        // 1.Function 实现：有一个参数【操作的值】 + 一个 IntStream 类型的返回值
        List<Integer> collect = list.stream().flatMapToInt(i -> i.getSocials().stream().mapToInt(o -> o.getAccount().length())).boxed().collect(Collectors.toList());

        System.out.println(collect);

    }


    private static List<Person> getPersonList() {
        List<Person> peopleList = new ArrayList<>();


        Person person1 = new Person();
        person1.setName("p1").setAge(11);
        List<Social> socials1 = new ArrayList<>();
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("邮箱", "aaa@foxmail.com"));
        socials1.add(new Social("QQ", "7192618161"));
        person1.setSocials(socials1);

        peopleList.add(person1);


        Person person2 = new Person();
        person2.setName("p2").setAge(15);
        List<Social> socials2 = new ArrayList<>();
        socials2.add(new Social("微信", "1XN1JBI1BI"));
        socials2.add(new Social("微信", "X1NOO111"));
        person2.setSocials(socials2);

        peopleList.add(person2);

        Person person3 = new Person();
        person3.setName("p3").setAge(18);
        List<Social> socials3 = new ArrayList<>();
        socials3.add(new Social("facebook", "ax11xxax1"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        socials3.add(new Social("tiktok", "1ax1x1111"));
        person3.setSocials(socials3);

        peopleList.add(person3);


        return peopleList;

    }


    @Data
    @Accessors(chain = true)
    static class Person {

        private String name;

        private Integer age;

        private List<Social> socials;
    }

    @Data
    @AllArgsConstructor
    static class Social {

        private String name;

        private String account;

    }
}
```

输出结果：

```shell
[15, 15, 10, 10, 8, 9, 9, 9]
```



### `toArray`

转换成对应类型的数组。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);

        System.out.println("修改之前：" + list);
        // forEachOrdered 传入 1个参数
        // 1.Consumer ； 一个参数：当前处理元素 + 无返回值
        Object[] array = list.stream().toArray();

        for (Object o : array) {
            System.out.print(o);
        }


        System.out.println();
        Integer[] array1 = list.stream().toArray(Integer[]::new);


        for (Integer i : array1) {
            System.out.print(i);
        }


    }
}
```

输出结果：

```shell
修改之前：[1, 2, 3, 4, 5, 6, 7]
1234567
1234567
```



### `reduce`

按照指定的计算方式计算出一个结果，可以设置初始值。

案例：

```java
public class StreamTest {

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);

        System.out.println("修改之前：" + list);
        // forEachOrdered 传入 1个参数
        // 1.Consumer ； 一个参数：当前处理元素 + 无返回值
        Integer reduce1 = list.stream().reduce(1, (a, b) -> a + b);
        // 没有初始值的返回的是 Optional，需要进行判断
        Integer reduce2 = list.stream().reduce((a, b) -> a + b).get();
        // 并行计算，每次都会使用初始值进行计算
        Integer reduce3 = list.stream().parallel().reduce(1, (a, b) -> a + b, (s0, s1) -> s0 + s1);
        System.out.println(reduce1);
        System.out.println(reduce2);
        System.out.println(reduce3);


    }
}
```

结果输出：

```shell
修改之前：[1, 2, 3, 4, 5, 6, 7]
29
28
35
```





## 集合操作【重点】

### `collect`

**这个是重点**。

描述：`collect`方法有两个

1.集合处理，类似于遍历处理

```java
<R> R collect(Supplier<R> supplier,
              BiConsumer<R, ? super T> accumulator,
              BiConsumer<R, R> combiner);
```

2.集合操作，将结果转换为指定的集合

```java
<R, A> R collect(Collector<? super T, A, R> collector);
```

案例：

方法1：

```java
public class StreamTest {


    public static void main(String[] args) {

        // 方法1：
        // collect 传入 3个参数
        // 1.Supplier ； 无参数 + 1个返回值。提供一个新的结果容器。
        // 2.BiConsumer：两个参数：操作数+基础值 + 无返回值。将一个元素添加到结果容器中。
        // 3.BiConsumer：两个参数：【操作结束的基础值+前一个值】 + 无返回值。将两个结果容器合并在一起。这在并行流中使用。
        ArrayList<Object> collect = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .parallel()
                .collect(ArrayList::new, ArrayList::add, (n, m) -> {
                    System.out.println("n:" + n + "m:" + m);
                    n.addAll(m);
                });
        System.out.println(collect);
    }
}
```

方法2：

```java
public class StreamTest {


    public static void main(String[] args) {


        // 方法2：
        // collect 传入 1个参数
        // 1.Collector ；集合操作类


        // toCollection 转换为指定类型的集合
        CopyOnWriteArrayList<String> toCollection = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.toCollection(CopyOnWriteArrayList::new));
        System.out.println("toCollection:" + toCollection);

        // toList 转换为 list
        List<String> toList = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.toList());
        System.out.println("toList:" + toList);

        // toSet 转换为 set
        Set<String> toSet = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.toSet());
        System.out.println("toSet:" + toSet);

        // join 拼接为字符串
        String joining = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.joining("|", "(", ")"));
        System.out.println("joining:" + joining);

        // mapping 将操作之后的信息转换为指定类型的集合
        CopyOnWriteArrayList<Character> mapping = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.mapping((i) -> i.charAt(0), Collectors.toCollection(CopyOnWriteArrayList::new)));
        System.out.println("mapping:" + mapping);

        // collectingAndThen 集合操作之后对结果进行处理
        String collectingAndThen = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.collectingAndThen(Collectors.toCollection(CopyOnWriteArrayList::new), (i) -> i + "1"));
        System.out.println("collectingAndThen:" + collectingAndThen);

        // counting 数量计算
        Long counting = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.counting());
        System.out.println("counting:" + counting);

        // minBy 自定义排序规则，并取出排序之后最小的项
        String minBy = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.minBy((a, b) -> b.charAt(0) - a.charAt(0))).get();
        System.out.println("minBy:" + minBy);

        // minBy 自定义排序规则，并取出排序之后最小的项
        String maxBy = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.maxBy((a, b) -> b.charAt(0) - a.charAt(0))).get();
        System.out.println("maxBy:" + maxBy);

        //  summingInt 将元素转换为int，求和并返回，与之类似的还有 summingLong 和 summingDouble 就不一一列举了
        Integer summingInt = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.summingInt((i) -> (int) i.charAt(0)));
        System.out.println("summingInt:" + summingInt);

        // averagingInt 将元素转换为 int 类型，并求平均值返回，与之类似的还有 summingLong 和 summingDouble 就不一一列举了
        Double averagingInt = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.averagingInt((i) -> (int) i.charAt(0)));
        System.out.println("averagingInt:" + averagingInt);

        // reducing 对集合进行处理,设置初始值+元素操作+合并操作
        String reducing = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.reducing("1", (a) -> a + "1", (x, y) -> x + y));
        System.out.println("reducing:" + reducing);

        // groupingBy 分组 返回的是普通的Map
        Map<Character, List<String>> groupingBy = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.groupingBy(i -> i.charAt(0)));
        System.out.println("groupingBy:" + groupingBy);

        // groupingByConcurrent 分组，返回的是 ConcurrentMap，线程安全
        ConcurrentMap<Character, List<String>> groupingByConcurrent = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.groupingByConcurrent(i -> i.charAt(0)));
        System.out.println("groupingByConcurrent:" + groupingByConcurrent);

        // partitioningBy 按照 boolean值 进行分区
        Map<Boolean, List<String>> partitioningBy = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.partitioningBy(a -> a.equals("Aaa")));
        System.out.println("partitioningBy:" + partitioningBy);

        // toMap 转换为map，自定义 key 和value，返回的是普通的Map
        Map<Character, String> toMap = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.toMap(i -> i.charAt(0), n -> n));
        System.out.println("toMap:" + toMap);

        // toConcurrentMap 转换为map，自定义 key 和value，返回的是 ConcurrentMap 线程安全
        ConcurrentMap<Character, String> toConcurrentMap = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.toConcurrentMap(i -> i.charAt(0), n -> n));
        System.out.println("toConcurrentMap:" + toConcurrentMap);

        // summarizingInt 将元素转成 int，并汇总到 IntSummaryStatistics【可计算：最大值、最小值、。。。】，类似的有 summarizingLong、summarizingDouble
        IntSummaryStatistics summarizingInt = Stream.of("Aaa", "Bbb", "Ccc", "Ddd")
                .collect(Collectors.summarizingInt(i -> i.charAt(0)));
        System.out.println(summarizingInt);

    }
}
```

输出结果：

```shell
toCollection:[Aaa, Bbb, Ccc, Ddd]
toList:[Aaa, Bbb, Ccc, Ddd]
toSet:[Aaa, Ccc, Bbb, Ddd]
joining:(Aaa|Bbb|Ccc|Ddd)
mapping:[A, B, C, D]
collectingAndThen:[Aaa, Bbb, Ccc, Ddd]1
counting:4
minBy:Ddd
maxBy:Aaa
summingInt:266
averagingInt:66.5
reducing:1Aaa1Bbb1Ccc1Ddd1
groupingBy:{A=[Aaa], B=[Bbb], C=[Ccc], D=[Ddd]}
groupingByConcurrent:{A=[Aaa], B=[Bbb], C=[Ccc], D=[Ddd]}
partitioningBy:{false=[Bbb, Ccc, Ddd], true=[Aaa]}
toMap:{A=Aaa, B=Bbb, C=Ccc, D=Ddd}
toConcurrentMap:{A=Aaa, B=Bbb, C=Ccc, D=Ddd}
IntSummaryStatistics{count=4, sum=266, min=65, average=66.500000, max=68}
```



