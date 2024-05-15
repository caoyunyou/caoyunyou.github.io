import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",// 自我介绍
  ],
  "/notes/":[
    {
      text: "学习笔记",
      icon: "book",
      collapsible:true,
      children: [
        {
          prefix:"java/",
          text:"java",
          icon: "book",
          collapsible:true,
          children:["basic"]
        },
        {
          prefix:"c++/",
          text:"c++",
          icon: "book",
          collapsible:true,
          children:["c++","Qt学习"]
        },
        {
          prefix:"middleware/",
          text:"中间件",
          icon: "book",
          collapsible:true,
          children:[
            {
              text:"MQ",
              icon:"book",
              prefix:"MQ/",
              collapsible: true,
              children:['MQ-削峰填谷','MQ-应用解耦','MQ-异步处理']
            },
            {
              text:"Nginx",
              icon:"book",
              prefix:"Nginx/",
              collapsible: true,
              children:['Nginx基础']
            },
            {
              text:"Redis",
              icon:"book",
              prefix:"Redis/",
              collapsible: true,
              children:['Redis基础','Redis集群方案']
            }
          ]
        },
        {
          prefix:"mysql/",
          text:"MySQL",
          icon: "book",
          collapsible:true,
          children:["MySQL-B+树索引","MySQL-JSON操作","MySQL-聚簇索引和非聚簇索引"]
        },
        {
          prefix:"python/",
          text:"Python",
          icon: "book",
          collapsible:true,
          children:[
            "Python 基础(1)入门必备知识",
            "Python 基础(2)基本语句",
            "Python 基础(3)数字",
            "Python 基础(4)字符串",
            "Python 基础(5)序列",
            "Python 基础(6)列表与元组",
            "Python 基础(7)字典与集合",
            "Python 基础(8)与时间相关的模块",
            "Python 基础(9)函数",
            "Python 基础(10)模块与包",
            "Python 基础(11)面向对象",
            "Python 基础(12)文件基本操作",
            "Python 基础(13)os模块",
            "Python 基础(14)错误和异常",
            "Python 基础(15)枚举",
            "Python 基础(16)迭代器与生成器",
            "Python 基础(17)装饰器"
          ]
        },
      ],
    }
  ]
});
