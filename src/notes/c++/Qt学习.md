---
title: "QT学习"
date: 2024-01-05
---

## Qt介绍：

Qt是一个跨平台的图形用户界面应用程序

Qt 主函数简介

```cpp
#include "mainwindow.h"

#include <QApplication>
#include <QLocale>
#include <QTranslator>

// argc 命令行变量的数量 argv 命令行变量的数组
int main(int argc, char *argv[])
{
    // 应用程序对象
    QApplication a(argc, argv);

    // 国际化配置
    QTranslator translator;
    const QStringList uiLanguages = QLocale::system().uiLanguages();
    for (const QString &locale : uiLanguages) {
        const QString baseName = "01BaseProject_" + QLocale(locale).name();
        if (translator.load(":/i18n/" + baseName)) {
            a.installTranslator(&translator);
            break;
        }
    }
    // 窗口对象 继承 QWidget
    MainWindow w;
    // 需要调用 show 方法，才能显示
    w.show();
    // 让应用程序进入消息循环机制，即一直显示窗口
    return a.exec();
}

```



QT项目窗口头文件

```cpp
#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

// 定义 QT的命名空间
QT_BEGIN_NAMESPACE
namespace Ui {
class MainWindow;
}
QT_END_NAMESPACE

// 继承窗口类
class MainWindow : public QMainWindow
{
    Q_OBJECT // 这个是一个宏，允许类中使用信号和槽的机制

public:
    MainWindow(QWidget *parent = nullptr); // 构造函数
    ~MainWindow();

private:
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H

```



快捷键：

`ctrl + i` 自动对齐

`F4` 头文件与源文件切换



页面设置案例：

```cpp
#include "mainwindow.h"
#include "./ui_mainwindow.h"
#include<qpushbutton.h>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    // 创建按钮
    // 1. 先创建 在设置显示区域 ，这个现在反倒会变得和窗口一样大 需要设置重新设置大小
    QPushButton * btn = new QPushButton();
    // 按钮大小设置
    btn->resize(100,30);
    // 设置显示区域
    btn->setParent(this);
    // 参数设置
    btn->setText("看一下");

    // 2.创建的时候就制定了显示区域
    // 这种方式会使得显示区域缩小到控件大小 不过现在好像不会
    QPushButton * btn2 = new QPushButton("按钮",this);
    btn2->move(100,100);
    // 重置窗口大小
    resize(600,400);

    // 设置窗口标题
    setWindowTitle("曹云友的第一个QT程序");

}

MainWindow::~MainWindow()
{
    delete ui;
}
```



## 对象树：

在Qt 创建组件时设置了parent 就可以把对象放到对象树上

操作：`setParent(父级类)`



## 信号和槽：

所谓的信号和槽就是一个信号发送和接收，以及信号处理

```cpp
// 信号槽案例
// 参数1：信号发送方，参数2：信号发送方的触发方式【信号】，参数3：信号接收方，参数4：信号接收方的操作【处理的槽函数】
connect(btn,&QPushButton::clicked,this,&QWidget::close);
```

==`emit`==  发射信号

自定义信号和槽

自定义信号：

​	返回void

​	需要声明，不能实现

自定义槽函数

​	返回void

​	需要声明和实现



函数指针：C++知识补充

```cpp
//格式：
返回类型 (类:: * 指针名称)(形参列表) = &类名::方法名;
// 示例
void (Teacher:: * tcTreate)(QString) =  &Teacher::treate;
```



当自定义信号和槽出现了重载时需要使用函数指针指定所需要的函数，防止产生函数同名的冲突

QString 转 char * 

需要两步，先转 byteArray 再转为 char * 

```cpp
QSrting对象.toUtf8().data()
```



信号不止可以连接槽，也可以连接信号，一个信号触发时，会递推触它所连接的信号



断开链接：参数和链接一致，方法名叫做`disconnect`



信号和槽如果参数列表不一致会导致连接不成功，只有在参数列表一致，或者信号的参数为1，另一个连接的信号或者槽的参数个数为0才行



 Lambda表达式：

C++11之后支持Lambda表达式

格式：`[函数对象参数](操作符重载函数)mutable->返回值{函数体}`

1、函数对象参数：

`[]`,标识一个 Lambda，这个不能省略，而且参数最多只能使用到那些在Lambda表达式定义之前所在作用域范围内可见的局部变量

空：没有任何参数

`=` ：函数体内可以使用Lambda所在作用范围内所有可见的局部变量

`&` ： 和上面一样，但是用的时引用传递

`this` ： 。。。

单个参数

单个参数的引用

2、操作符重载函数

3、可修改标识符：`mutable` 修饰值传递的变量，加上之后就能改了，改的是拷贝，不是本体

4、函数返回类型`->返回类型` 这个可以省略，编译器会自动推断

5、函数体：{}



如果连接的第三个参数是 this 第四个是 lambda表达式的化，第三个参数可以省略不写



## QMainWindow:

```cpp
// 添加菜单栏 菜单栏只能有一个
QMenuBar * bar =  menuBar();
setMenuBar(bar);
QMenu *file=  bar->addMenu("文件");
QMenu *setting= bar->addMenu("设置");

file->addAction("打开文件");
file->addAction("打开项目");
file->addAction("窗口");

// 添加工具栏，可以有多个
QToolBar * toolBar = new QToolBar(this);
	// 将 ToolBar 添加到窗口
addToolBar(Qt::LeftToolBarArea,toolBar);
	// 设置ToolBar 可以停靠的区域
toolBar->setAllowedAreas(Qt::LeftToolBarArea|Qt::RightToolBarArea);
	// 设置不能浮动，只能靠边停靠
toolBar->setFloatable(false);
	// 设置是否可以移动 关闭之后就不能进行拖拽了
toolBar->setMovable(false);
	// 添加选项
toolBar->addAction("新建项目");
toolBar->addAction("打开文件");
	// 添加分割线
toolBar->addSeparator();
	// 添加控件
toolBar->addWidget(new QPushButton("点一下啦"));


//状态栏 最多一个
QStatusBar * stBar =  statusBar();
// 设置状态栏
setStatusBar(stBar);
// 放标签控件
QLabel  * label = new QLabel("提示信息",this);
stBar->addWidget(label);

QLabel  * label2 = new QLabel("右侧提示信息",this);
stBar->addPermanentWidget(label2);

// 铆接部件 （浮动窗口） 可以有多个
QDockWidget * dockWidget = new QDockWidget("浮动窗口",this);
// 将浮动窗口加入
addDockWidget(Qt::AllDockWidgetAreas,dockWidget);

// 中心部件设置
QTextEdit * edit = new QTextEdit(this);
setCentralWidget(edit);
```



## 资源文件添加：

引用方式  `:/前缀/文件名`



## 模态和非模态对话框：

模态对话框：显示期间不能对其他窗口进行操作

非模态对话框：可以对其他窗口进行操作

以 `.exec()` 方式创建的就是模态对话框，它会处于一种阻塞状态，就像main 文件中的App创建的方法一样

非模态的直接 `.show()`就行了

非模态对话框如果是在lambda表达式中创建的话，那么他关闭的时候不会进行销毁，多次的长时间的点击可能造成内存泄漏，所以需要设置他的属性：在关闭时删除，即可解决问题

`myDialog->setAttribute(Qt::WA_DeleteOnClose);`



## 消息对话框：

QMessageBox

```cpp
// 第一个参数是父级，第二个是标题，第三个是内容，第四个是窗口选项Button，第五个是默认选中项
QMessageBox::question(this,"标题","内容",QMessageBox::Save|QMessageBox::Cancel,QMessageBox::Cancel);
```

这个有不同类型的按钮

返回的是点击的按钮类型



## 文件选择框：

```cpp
// 返回的是选择的文件路径
// 参数1：父级，参数2：标题，参数3：默认路径，参数4：过滤的文件格式
QString fileName =  QFileDialog::getOpenFileName(this,"标题","E:\\Desktop","(*.exe)");
```



## 按钮：

QPushButton 常见选择按钮

QToolButton 通常用于显示图片，可以通过风格修改 toolButtonStyle 就可以选择不同的样式，也可以设置突起的样式

QRadioButton 单选按钮

QCheckBox 多选按钮，有三个状态 0 未选 1 半选 2 全选



## QListWidget:

一个列表，类似于 HTML 中的ul，内容默认为垂直排序

内容项为：QListWidgetItem	这个还可以设置对齐方式实现不同的布局效果

QStringList 可以通过 左移运算符 `<<` 进行赋值和拼接



## QTreeWidget:



## 自定义控件封装：



## Qt中的鼠标事件：

实现对应的虚函数，可以监听对应的鼠标动作

Qt中的字符串格式化：

`QString  a =  QString("字符串格式化 x=%1 , y=%2" ).arg("10","12");`

设置鼠标追踪的话，就可以在不点击的情况下可以捕获移动事件



## 定时器：

`QTimer::timerEvent(QTimerEvent * ev)`

重写对应的虚函数：`virtual void timerEvent(QTimerEvent * ev);`

定时器需要启动

`startTimer(时间间隔);`



定时器区分：

根据timerId 区分 这个可以在 event 中获取



定时器第二种方式：

创建一个QTimer对象，并加入到对象树上

```cpp
// 创建定时器
QTimer * timer = new QTimer(this);
// 启动定时器
timer->start(1000);

connect(timer,&QTimer::timeout,[=](){
   // 定时器内容 执行的操作
});
```



一个QTimer对象实现一个定时器执行操作



## 事件分发器：

`bool event(QEvent * ev);`

利用 	ev->type() == 事件类型进行判断

例子：`ev->type() == QEvent::MouseMove`



如果返回的是 true 那么就由用户自己处理，不向下分发，即：不触发对应的事件函数



C++补充知识：静态类型转换

```cpp
// 格式：需要转换的类型 = static_cast<需要转换的类型>(对象);
Myclass * mc =  static_cast<Myclass *>(obj);
```



## 事件过滤器：

事件过滤发生在事件分发之前

逻辑和事件分发器一致：如果返回的是true 那么由用户自己处理

事件过滤器处理步骤：

​	1.给组件安装过滤器

​	`ui->组件->installEventFilter(this)`

​	2.重写事件过滤函数

​	`bool eventFilter(QObject * ,QEvent *)`



## 绘图：

绘图事件：`void paintEvent()`

声明一个画家对象 QPainter painter(this) this 指定绘图设备

画线、画圆、画矩形、画文字

设置画笔 QPen 设置画笔宽度、风格

设置画刷 QBrush 设置画刷 风格



## 绘图高级设置：

抗锯齿

`setRenderHint(QPainter::类型)`

画板移动

`painter.translate(x方向移动距离,y方向移动距离)`



## 手动调用绘图事件：

调用 update() 

屏幕参数：this->width();   this->height()



## 绘图设备：

QPixmap QImage QBitmap(黑白色) QPicture QWidget

QPixmap 对不同平台做了显示的优化

```cpp
QPixmap pix(300,300);
pix.fill(填充颜色);
// 利用画家 王 oix 上画画
QPainter painter =(& pix);
// 保存到磁盘上
pix.save("磁盘路径");
```

QImage 可以对像素进行访问

使用和 QPixmap差不多 QImage img(300,300,QImage::Format_RGB32);

其他流程和 QPixmap 一样

可以对限售股进行修改 img.setPixel(i,j,value);

QPicture 记录和重现绘图指令

```cpp
QPicture pic;
painter.begin(&pic);
//保存
pic.save("磁盘路径，以及文件后缀");
// 重现绘图操作
painter.drawPicture(0,0,pic);
```



## QFile对文件进行读写：

QFile进行读写操作

QFile file(path 文件路径)

读：

​	file.open(打开方式) QIODevice::readOnly

​	全部读取 file.readAll()  按行读  file.readLine()  atend()判断是否读到文件尾

​	默认支持编码格式 utf-8

​	利用编码格式类 指定格式 QTextCodeC

​	QTextCodec * codec = QtextCodec::codecForName("gbk");

​	ui->textEdit->setText(codec->toUnicode(array));

​	文件对象关闭 close();

写：

​	file.open(QIOEdvice::writeOnly)

​	file.write(内容)

​	file.close() 关闭



## QFileInfo 获取文件信息：

大小，文件名，后缀，路径。。。
