---
title: "C++学习"
date: 2023-12-24
---
## 值传递：

方法内对值进行的操作不会影响到实际参数

普通形参不会影响到实参；

如果是传递引用：`&` 就会影响到实参的值



## 函数的声明：


作用：防止报错，告诉编译器，存在对应的函数，当调用函数在函数定义之前时，就需要使用到函数声明了


声明可以多次




## 函数的分文件编写：


头文件：


​	格式: `XXX.h`


源文件：


​	格式: `XXX.cpp`


规则：在头文件中写函数的声明，在源文件中写函数的定义


流程：


​	1.创建XXX.h 的头文件，引入需要的资源，并定义需要的函数声明


```cpp

#pragma once

#include<iostream>

void swap(int& a, int& b);

```




​	2.创建对应的XXX.cpp 的源文件，实现对应的函数


```cpp

#include"swap.h"


void swap(int& a, int& b) {

	a = a ^ b;

	b = a ^ b;

	a = a ^ b;

}

```




​	3.在需要引用的地方引入资源，并使用


```cpp

#include<iostream>

#include"swap.h"

using namespace std;



int main() {

	  int a = 10;

	  int b = 20;

	  cout << "a的值是：" << a << endl;

	  cout << "b的值是：" << b << endl;

	  swap(a, b);


	  cout << "a的值是："<<a<<endl;

	  cout << "b的值是：" << b << endl;

	 
	return 0;

}

```




## 指针：


指针就是指向一个内存单元：这个单元存储了对应的数据信息


指针定义方式，以及取址方式


```cpp

// 类型 * 变量名

int * p;

// 取址

p = &a;

```


使用指针：可以使用解引用的方式来找到指针指向的内存


```cpp

# 就是这么简单

*p;

cout<<"指针指向内存的信息"<<*p<<endl;

// 也可以对指针指向的内存进行修改操作

*p = 100;

cout<<"修改后的值"<<*p<<endl;

```




## 空指针和野指针：


空指针：指针变量指向内存中编号为0的空间；


用途：初始化指针变量


注意：空指针指向的内存是不可以访问的


```cpp

int * p = NULL;


// 空指针不能进行修改 会出现空指针异常

*p = 100;

// 0~255 之间的内存是被系统占用了，不允许用户访问

```




野指针：【我倒要看看你有多野】


就是用户将指针指向了自己定义的内存地址，属于一种违规操作


```cpp

int * p = (int *)0x1880;

cout << *p << endl; // 这行代码会保存，用户无权访问该内存空间

```




## const 修饰指针：


const 修饰指针 叫做 常量指针


const 修饰常量 叫做 指针常量


const 即修饰指针 又修饰常量 叫做 常量常指针


```cpp

// 常量指针

const char * p; // 对应的值为常量不能修改，但是可以修改指针指向

// 指针常量

char * const p; // 对应的指针是常量，无法修改指向，但是可以修改对应的值

// 常量常指针

const char * const  p; // 两个都是常量，都不能改，相当于 java 的 final static

```




## 指针与数组：


```cpp

int arr[10] = {1,2,3,4,5,6,7,8,9,10};

int * p = arr; // 指针会指向 arr 的首地址

cout<<*p<<endl;

// 如果想让指针指向数组的下一个空间，可以使指针偏移即可，因为数组是一片连续的存储单元

p++; // 不管什么类型都行

cout<<*p<<endl;

```




## 指针和函数


指针形参：接收地址，通过解引用的方式对参数进行处理


```cpp

// 交换值

void localSwap(int *p1,int * p2) {

	*p1 ^= *p2;

	*p2 ^= *p1;

	*p1 ^= *p2;

}


int main() {

	int a = 1;

	int b = 2;

	cout << a;

	cout << b;


	localSwap(&a, &b);


	cout << a;

	cout << b;


	return 0;

}

```


==当数组的形参为数组时，它可以退化为同类型的指针==


```cpp

// 下面两个是等价的

void doSome(int * arr);

void doSome(int arr[]);

```




## 结构体：


机构体相当于类型声明


### 结构体的定义和使用


语法：`struct 结构体名 { 结构体成员列表 };`


通过结构体创建变量的方式有三种


- struct 结构体名 变量名

- struct 结构体名 变量名 = { `成员值1`,`成员值2` }

- 定义结构体时顺便创建变量


==使用的时候`struct` 关键字可以省略，尽量写上用于区分类和结构体==


```cpp

// 定义结构体

struct Student

{

	string name;

	char gender;

	double grade;

	string address;

}s3;// 第三种定义方式，可以在 结构体中设置初值


// 第一种定义方式

struct Student s1;

s1.name = "曹云友";

s1.gender = 'F';

s1.grade = 100.00;

s1.address = "江西省上饶市余干县";


// 第二种定义方式

struct Student s2 = { "曹云友",'F',100.00, "江西省余干县"};


```


### 结构体数组：


定义方式可平常的数组没什么区别


`struct 结构体名 变量名[元素个数] = { {},{},{} }`


```cpp

// 关键字 struct 可写，可不写

struct Student stuArr[] = {

	{ "曹云友",'F',100.00, "江西省余干县"},

	{ "曹云友",'F',100.00, "江西省余干县"},

	{ "曹云友",'F',100.00, "江西省余干县"},

	{ "曹云友",'F',100.00, "江西省余干县"}

};

```


### 结构体指针：


`->`：这个不仅是结构体的指针，类也可以用，只要形参列表中接收的是指针就行


### 结构体嵌套：


结构体内的成员属性可以是结构体


## 静态参数传递，方式对参数进行修改


就是形参列表接收参数时，使用 `const` 修饰的常量或常量指针进行接收


效果：就是可以防止方法对变量的修改，也可以防止多次调用复制的变量变多




## 系统函数：


system("cls") // 清空屏幕




## 内存分区模型：


C++程序在执行时，将内存大方向划分为 4 个区域


- 代码区：存放函数的二进制代码。有操作系统进行管理

- 全局区：存放全局变量和静态变量以及常量

- 栈区：由编译器自动分配释放，存放幻术的参数值，局部变量等

- 堆区：由程序员分配和释放，若程序员不释放，程序结束时由操作系统回收


### 程序运行前：


在程序编译后，生成了exe可执行程序，未执行该程序前分为两个区域


代码区：


​	存放CPU执行的机器指令


​	代码区是共享的，共享的目的是对于频繁被执行的程序，只需要在内存中由一份代码即可


​	代码区是只读的，使其只读的原因是防止程序意外地修改了它的指令


全局区：


​	全局变量和静态变量存放在此


​	全局区还包含了常量区，字符串常量和其他常量也存放在此


​	该区域的数据在程序结束后由操作系统释放


栈区：


​	由编译器自动分配释放，存放函数的参数值，局部变量等


​	注释事项：不要返回局部变量的地址，栈区开辟的数据由编译器自动释放


堆区：


​	由程序员分配释放，若程序员不释放，程序结束时由操作系统回收


​	在C++中主要利用new在堆区开辟内存




## new 操作符：


C++中利用new操作符在堆区开辟数据


堆区开辟的数据，由程序员手动开辟，手动释放，释放利用操作符`delete`


语法：`new 数据类型`


利用new 创建的数据，会返回该数据对应的类型的指针


对于数组类型的数据的创建和删除操作有一点不同


```cpp

// 创建

int * arr = new int[10];

// 清除

delete[] arr;

```




## 引用：


引用的基本作用就是给变量取别名


语法：`数据类型 &别名 = 原名`


### 引用的注意事项：


- 引用必须初始化

- 引用在初始化后，不可以改变


### 引用做函数参数：


作用：函数传参时，可以利用引用的技术让形参修饰实参


优点：可以简化指针修改实参


### 引用做函数返回值：


作用：引用是可以作为函数的返回值存在的


注意：不要返回局部变量引用


用法：函数调用作为左值


### 引用的本质：


本质是一个指针常量


### 常量引用：


作用：常量引用主要用来修饰形参，防止误操作


在函数形参列表中，可以加 `const` 修饰形参，防止形参改变实参




## 函数默认参数：


这个和js一样，在形参列表中写参数的默认值


注意：普通参数必须在默认参数左边


如果函数声明有默认参数，函数实现就不能有默认参数


```cpp

void func(int a,int b = 8 ,int c = 10)

```




## 函数占位符：


C++中函数的形参列表里可以有占位参数，用来做占位，调用函数时，必须填补该位置


语法：`返回值类型 函数名(数据类型){}`


```cpp

// 函数占位参数，占位参数也可以有默认参数

void func(int a,int)

```




## 函数重载：


函数重载注意事项：


当函数重载碰到引用参数时，会发现 `&参数` 和 `const & 参数` 两个竟然可以满足重载条件，但是调用时，只会触发`&参数` 对应的函数


要想调用 `const & 参数`的方法，需要直接传值，而不是传递参数


当函数重载碰到了默认参数时，编译会出现错误




## 访问修饰符：


在C++中有三种访问修饰符：


​	public：公共


​	protected：保护


​	private：私有




## 构造体和class 的区别：


唯一的区别就是默认的访问权限不同


在struct 中 默认为 public


在 class 中 默认为 private




## 对象的初始化和清理：


我擦了，


就是构造函数进行初始化


析构函数进行清理


```cpp

class MyClass

{

public:

	MyClass();

	~MyClass();


private:


};


MyClass::MyClass()

{

}


MyClass::~MyClass()

{

}

```




其中 `~类名` 对应的函数就是析构函数




## 构造函数的分类及调用：


两种分类方式：


​	按参数分为：有参构造和无参构造


​	按类型分为：普通构造和拷贝构造


三种调用方式：


​	括号法


​	显示法


​	隐式转换法


```cpp

// 拷贝构造

MyClass(const MyClass &p);


// 调用构造函数

//1.括号法

MyClass a; // 如果调用的是无参构造，那么不能加(),因为编译器会看成是函数的声明,其他的要加

// 2.显示法

MyClass a = MyClass(10);

// 不能用拷贝构造函数，初始化匿名对应，因为编译器会把 () 去掉，相当于给 对象重新定义了

// 3.隐式转换法

MyClass a =10; // 相当于 MyClass a = MyClass(10)

```




## 构造函数调用规则：


默认情况下，C++编译器至少给一个类添加3个函数


1、默认构造函数


2、默认析构函数


3、默认拷贝构造函数，对属性进行值拷贝


构造函数调用规则如下：


- 如果用户定义有参构造函数，C++不再提供默认无参构造，但是会提供默认拷贝构造

- 如果用户定义拷贝构造函数，C++不会再提供其他构造函数




## 深拷贝和浅拷贝：


浅拷贝：简单的赋值拷贝操作


深拷贝：在堆区重新申请空间，进行拷贝操作




## 初始化列表：


C++提供了初始化列表语法，用来初始化属性


语法：`构造函数(参数列表): 属性1(值1),属性2(值2)...{}`


```cpp

Person(string name, int age) :m_Name(name), m_Age(age) {};

```




## C++对象模型和this指针：


成员变量和成员函数是分开存储的


空对象占用内存为1个字节




## 空指针访问成员函数：


C++中空指针也是可以调用成员函数的，但是也要注意有没有用到this指针


如果用到this指针，需要加以判断保证代码的健壮性




## const 修饰成员函数：


常函数：


- 成员函数加上 const 之后就是常函数，这个const 要在参数列表后面

- 常函数内不能修改成员属性【这个是因为加上了const 之后，里面的this变成了常量指针了，改变不了对应指向信息的值】

- 成员属性加上 mutable 之后，就能修改了


常对象：


- 声明对象加上 const 就是常对象，在前面加 const

- 常对象只能调用常函数




## 友元：


就是加一个关键字允许特殊的类访问自己的私有成员


关键字：`friend`


### 全局函数做友元：


```cpp

class Person {

    // 将对应的函数声明为友元函数，允许它对私有属性的访问

	friend void viewPersonInfo(Person* p);

private:

	string m_Name;

	int m_Age;


public:

	Person(string name, int age) :m_Name(name), m_Age(age) {};


	~Person() {

		// 析构函数

	};

	string getMName() {

		return m_Name;

	};

	int getMage() {

		return m_Age;

	}

};


// 访问私有成员

void viewPersonInfo(Person* p) {

	cout << p->m_Name << endl;;

}

```


### 类做友元：


和全局函数差不多，在类中需要用friend声明对应的类就行了


```cpp

class Person {

    // 将对应的函数声明为友元函数，允许它对私有属性的访问

	friend void viewPersonInfo(Person* p);

private:

	string m_Name;

	int m_Age;

public:

	Person(string name, int age) :m_Name(name), m_Age(age) {};


	~Person() {

		// 析构函数

	};

	string getMName() {

		return m_Name;

	};

	int getMage() {

		return m_Age;

	}

};


class T1 {

	Person* p;

	T1() {

		p = new Person("曹云友", 23);

	}


	void visitPersonInfo() {

		cout << p->m_Name << endl;

	}

};

```


### 成员函数做友元：


成员函数做友元需要注意方法声明的位置：需要在有声明或者有实现才能进行调用，要不然会出错


```cpp

class Person;

class T1 {

	Person* p;

	T1();

public:

	void visitPersonInfo();

};


class Person {

	friend void T1::visitPersonInfo();

private:

	string m_Name;

	int m_Age;


public:

	Person(string name, int age) :m_Name(name), m_Age(age) {};


	~Person() {

		// 析构函数

	};

	string getMName() {

		return m_Name;

	};

	int getMage() {

		return m_Age;

	}

};

T1::T1() {

	p = new Person("曹云友", 23);

}

void T1::visitPersonInfo() {

	cout << p->m_Age << endl;

}

```




## 运算符重载：


对于不同类型，进行运算符的重载，以便可以实现所需要的不同功能


声明方式：`返回类型 operator[运算符](形参列表)`


`+`号运算符重载


```cpp

class Person {

private:

	string m_Name;

	int m_Age;


public:

	Person(string name, int age) :m_Name(name), m_Age(age) {};


	~Person() {

		// 析构函数

	};

	string getMName() {

		return m_Name;

	};

	int getMage() {

		return m_Age;

	}

	Person* operator+(const Person* p) {

		this->m_Age = this->m_Age + p->m_Age;

		return this;

	}

};

// 全局函数实现运算符重载

Person operator+(Person& p1, Person& p2) {

	Person* temp = new Person();

	int a = p1.getMage();

	int b = p2.getMage();

	temp->setAge(a + b);

	return *temp;

};


// 主方法

int main() {

	Person p1("曹云友", 18);

	cout << p1.getMage() << p1.getMName() << endl;

	Person p2("曹云友", 23);

	Person* p3 = p1.operator+(&p2); // 也可以写成Person* p3 = p1+&p2;

	cout << p3->getMage() << p3->getMName() << endl;

	return 0;

}

```


`<<`左移运算符重载


左移运算符只能在全局重载，无法在类的内部进行重载，这个相当于`toString()`方法了


```cpp

// 重载 左移运算符，输出流 + 需要操作的类 【输出流 cout 在全局只能有一个，所以需要用引用的方式】

ostream& operator<<(ostream& cout, Person& p) {

	cout << "name:" << p.getMName() << "age:" << p.getMage() << endl;;

	return cout;

};

Person p1("曹云友", 18);

cout << p1<<endl;// 当重载运算符没有返回值时后面不能追加新东西：这种其实就是一个链式编程的变体


// 如果把这个重载运算符加入为友元，也可以访问私有成员

```


`++`递增运算符重载


递增分为：前置递增和后置递增，也就是前++和后++


对应的`--`运算符的重载与这个类似


```cpp

class Person {

	friend ostream& operator<<(ostream& cout, Person p);

private:

	string m_Name;

	int m_Age;


public:

	Person(string name, int age) :m_Name(name), m_Age(age) {};


	// 前置++ 运算符重载

	Person& operator++() {

		m_Age++;

		return *this;

	};


	//后置++运算符重载 使用占位参数 int 可以让编译器区分 前置还是后置

	// 注意：后置引用返回的是值：因为变量为局部变量，当方法结束后就被释放了，指针和引用就找不到对应的信息了

	Person operator++(int) {

		Person temp = *this;

		m_Age++;

		return temp;

	};

};


// 因为这个运算符使用的是 引用 & p 所以后置递增会出错，需要改成 普通参数

ostream& operator<<(ostream& cout, Person p) {

	cout << "name: " << p.m_Name << " age: " << p.m_Age << endl;;

	return cout;

};


// 主方法

int main() {

	Person p1("曹云友", 18);

	cout << ++(++p1) << endl;

	cout << p1++ << endl;

	return 0;

}

```




赋值运算符重载：


类的初始函数会有一个 `operator=`函数，进行值的拷贝


当类中存在指针变量【存在堆区】，进行赋值运算时就会因为一个对象的析构引发另一个对象的成员指向出现异常，所以需要修改为深拷贝


```cpp

class Person {

public:

	int* m_Age;

	Person(int age) {

		// 注意这个是指针变量，需要用 new 的方式创建在 堆区

		this->m_Age = new int(age);

	};


	Person& operator=(Person& p) {

		// 如果当前的指针变量已经有了堆区指向，需要先释放，再赋值

		if (m_Age != NULL)

		{

			delete m_Age;

			m_Age = NULL;

		}

		m_Age = new int(*p.m_Age);

		return *this;

	}

};


// 主方法

int main() {

	Person p1(18);

	Person p2(20);

	cout << *p1.m_Age << endl;

	cout << *p2.m_Age << endl;

	p1 = p2;

	cout << *p1.m_Age << endl;

	cout << *p2.m_Age << endl;

	return 0;

}

```




关系运算符重载


`> , < , == , >= , <=`


这种重载方便排序和值的比较


```cpp

class Person {

public:

	int m_Age;

	Person(int age) {

		this->m_Age = age;

	};


	bool operator>=(Person& p) {

		return this->m_Age >= p.m_Age;

	}


	bool operator==(Person& p) {

		return this->m_Age == p.m_Age;

	}


	bool operator<= (Person& p) {

		return this->m_Age <= p.m_Age;

	}


	bool operator!=(Person& p) {

		return this->m_Age != p.m_Age;

	}

};


// 主方法

int main() {

	Person p1(10);

	Person p2(12);


	cout << (p1 >= p2) << endl;

	cout << (p1 <= p2) << endl;

	cout << (p1 == p2) << endl;

	cout << (p1 != p2) << endl;

}

```




函数调用运算符重载：


`()` 函数调用运算符


由于重载后使用的方式非常像函数的调用，因此称为仿函数


仿函数没有固定写法，非常灵活


```cpp

class Person {

public:

	int m_Age;

	Person(int age) {

		this->m_Age = age;

	};


	//函数运算符重载，参数随意，返回值随意

	void operator()(string text) {

		cout << text << endl;

	}


	void operator()(string text, int age) {

		cout << text << age << endl;

	}

};


// 主方法

int main() {

	Person p1(10);

	p1("傻逼");

	p1("傻逼", 18);

}

```




## 继承：


在C++里面的继承关键字不是 `extends` 而是：`:` 这个符号


语法：`class 子类 : 继承方式 父类`


```cpp

class Person{

public:

    int a;

protected:

    int b;

private:

    int c;

};

// 继承

class Man : Person{};

```


继承方式一共有三种：


公共继承：


```cpp

class Man : public Person{

public:

    int a;

protected:

    int b;

不可访问:

    int c;

};

```


保护继承


```cpp

class Man : protected Person{

protected:

    int a;

    int b;

不可访问:

    int c;

};

```


私有继承


```cpp

class Man : private Person{

private	:

    int a;

    int b;

不可访问:

    int c;

};

```


不管哪种方式都只能继承公共和保护的属性，无法继承私有属性，继承方式是说，在子类中把继承到父类的成员置为对应的访问权限


和java一样，私有属性也继承了，但是无法访问




使用 VS开发人员命令提示符查看单个类的布局


```shell

# 查看单个类的布局

cl /dl reportSingleClassLayout[类名] [文件名]

cl /dl reportSingleClassLayoutPerson "HelloWorld.cpp"

```




继承类的构造函数和析构函数加载顺序：


父类构造->子类构造->子类析构->父类析构




继承同名成员处理方式：


访问子类，直接访问


访问父类，需要加作用域


```cpp

Man man;

// 访问子类的同名成员

man.a;

man.func();

// 访问父类的同名成员

man.Person::a;

man.Person::func();

```


如果子类创建的一个和父类一样的同名函数【不管几个，只要存在就会触发】，那么父类的其他的不同形参的同名函数都会被隐藏掉，无法直接调用，需要使用父类作用域进行调用




C++允许多继承，这个是和Java不一样的


因为多继承会出现多个同名成员，需要使用作用域进行隔离：突然理解了为什么重写了一个父类方法会隐藏掉所有的同名父类方法了


语法：`class 子类 : 继承方式 父类1,继承方式 父类2...`


实际开发不建议使用多继承




菱形继承：


​	两个派生类继承同一个基类


​	又有某个类同时继承两个派生类


​	这种继承被称为菱形继承，或者钻石继承


菱形继承的问题就是常见的多继承问题：在多个父类中存在同名成员，而且存在不同的位置，修改了一个另一个不会变


解决方式：虚继承


这种继承方式会把同名函数进行合并，不管修改了哪个作用域中的同名成员，其他的都会跟着改变


```cpp

class P1{

    int m_age;    

}



class T1: virtual P1{}


class T2:virtual P1{}


// 这样的话 就会把对应的同名属性指向其基类 P1，在 T1 和 T2 中存储的是 vbptr 【虚拟基类指针】

// vbptr 会指向 vbtable 里面记录的基类信息以及数据偏移量，以便找到对应的属性

class N1: T1,T2{}


```




## 多态：


多态分为两种


- 静态多态：函数重载和运算符重载属于静态多态，复用函数名

- 动态多态：派生类和虚函数实现运行时多态


静态多态和动态多态区别：


- 静态多态的函数地址早绑定 - 编译简短确定函数地址

- 动态多态的函数地址玩绑定 - 运行阶段决定函数地址


C++中的动态和Java中的动态有很多不一致的地方


在编译时方法会根据传入类型进行函数早绑定，即：传入参数是什么类型，那么调用的就是对应类型的函数


如果需要将函数地址晚绑定，即哪个调用就引用对应的方法，只需要在调用方法上面加一个 `virtual` 关键字即可


这个就相当于开启了重载一样


```cpp

class Animal{

public:

    // 将函数定义为虚函数

    virtual void speak(){

        cout<<"Animal 在说话"<<endl;

    }

}


class Cat : Animal{

public:

    // 子类重写虚函数时可以不写关键字

    void speak(){

        cout<<"Cat 在说话"<<endl;

    }

}


class Dog : Animal{

public:

    // 子类重写虚函数时可以不写关键字

    void speak(){

        cout<<"Dog 在说话"<<endl;

    }

}


// 调用对应的 soeack 方法

void doSpeack(Animal & animal){

    animal.speack();

}

```




纯虚函数和抽象类


在多态中，通常父类中虚函数的实现时毫无意义的，主要是调用子类重写的内容


因此可以将虚函数改为纯虚函数


纯虚函数语法：`virtual 返回值类型 函数名 (参数列表) = 0;`


当类中有了纯虚函数，这个类也称为==`抽象类`==


抽象类特点：


- 无法实例化对象

- 子类必须重写抽象类中的纯虚函数，否则也属于抽象类




虚析构和纯虚析构


多态使用时，如果子类中有属性开辟到堆区，那么父类指针在释放时无法调用到子类的析构代码


解决方式：将父类中的析构函数改为`虚析构`或者`纯虚析构`


虚析构和纯虚析构共性：


- 可以解决父类指针释放子类对象

- 都需要有具体的函数实现


虚析构和纯虚析构区别：


- 如果是纯虚析构，该类属于抽象类，无法实例化对象


当生成的实例是父类的类型的话，那么它销毁时，不会调用子类的析构函数，因为引用是指向父类的，为了解决这个问题，在父类上面加上`virtual` 关键字使其的析构函数成为虚析构，那么它销毁时，就会调用子类的析构函数了


纯虚析构：`virtural ~类名() = 0;`


纯虚析构无法单独实现：因为析构函数必须被调用，所以一定有函数体，所以在全局作用于下需要实现纯虚析构


有了纯虚析构，类也会被识别为纯虚析构，无法被实例化




## C++文件操作：


C++中对文件操作需要包含头文件==\<fstream\>==


文件类型分为两种


1.文本文件 - 文件以文本的ASCII吗形式存储在计算机中


2.二进制文件 - 文件以文本的二进制形式存储在计算机中，用户一本不能直接读懂它们


操作文件的三大类


1.ofstream:写操作


2.ifstream:读操作


3.fstream:读写操作


文件打开方式


| 打开方式 | 解释 |

| --- | ------- |

| ios::in | 只读模式 |

| ios::out | 只写模式 |

| ios::ate | 初始位置：文件尾 |

| ios::app | 追加方式写文件 |

| ios::trunc | 如果文件存在先删除，在创建 |

| ios::binary | 二进制方式 |


打开方式可配合使用，中间使用 `|` 间隔


读取数据的方式：


```cpp

fstream fs;

fs.open("E:\\Desktop\\test.txt", ios::in);


if (!fs.is_open())

{

	cout << "打开文件失败了:请确认文件是否存在" << endl;

}


// 第一种方式

/*char buf[1024] = { 0 };

while (fs >> buf)

{

	cout << buf;

}*/


// 第二种方式

/*char buf[1024] = { 0 };

while (fs.getline(buf, sizeof(buf)))

{

	cout << buf;

}*/


// 第三种方式

/*string buf;

while (getline(fs, buf)) // 这个geline 是 string 里面的

{

	cout << buf;

}*/


// 第四种方式

/*char c;

while ((c = fs.get()) != EOF)

{

	cout << c;

}*/

```




二进制文件读写




## 模板：


C++也支持泛型，利用到的技术就是模板


C++提供两种模板机制 函数模板 和类模板


### 函数模板：


作用：建立一个通用函数，其返回类型和形参类型使用泛型


语法：


```cpp

template<typename T>

函数声明或定义

```


函数模板会使用自动类型推导，当类型不一致时，会出现异常


对于没有形参的函数模板，必须在调用时就确定泛型的类型 类似于 `func<int>()`


