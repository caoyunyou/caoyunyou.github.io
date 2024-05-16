import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-maqWBhbn.js";const p={},t=e(`<h2 id="值传递" tabindex="-1"><a class="header-anchor" href="#值传递"><span>值传递：</span></a></h2><p>方法内对值进行的操作不会影响到实际参数</p><p>普通形参不会影响到实参；</p><p>如果是传递引用：<code>&amp;</code> 就会影响到实参的值</p><h2 id="函数的声明" tabindex="-1"><a class="header-anchor" href="#函数的声明"><span>函数的声明：</span></a></h2><p>作用：防止报错，告诉编译器，存在对应的函数，当调用函数在函数定义之前时，就需要使用到函数声明了</p><p>声明可以多次</p><h2 id="函数的分文件编写" tabindex="-1"><a class="header-anchor" href="#函数的分文件编写"><span>函数的分文件编写：</span></a></h2><p>头文件：</p><p>​ 格式: <code>XXX.h</code></p><p>源文件：</p><p>​ 格式: <code>XXX.cpp</code></p><p>规则：在头文件中写函数的声明，在源文件中写函数的定义</p><p>流程：</p><p>​ 1.创建XXX.h 的头文件，引入需要的资源，并定义需要的函数声明</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.创建对应的XXX.cpp 的源文件，实现对应的函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&quot;swap.h&quot;</span></span>


<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	a <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>

	b <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>

	a <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.在需要引用的地方引入资源，并使用</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&quot;swap.h&quot;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>



<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	  <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

	  <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

	  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a的值是：&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b的值是：&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	  <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>


	  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a的值是：&quot;</span><span class="token operator">&lt;&lt;</span>a<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

	  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b的值是：&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	 
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针"><span>指针：</span></a></h2><p>指针就是指向一个内存单元：这个单元存储了对应的数据信息</p><p>指针定义方式，以及取址方式</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 类型 * 变量名</span>

<span class="token keyword">int</span> <span class="token operator">*</span> p<span class="token punctuation">;</span>

<span class="token comment">// 取址</span>

p <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用指针：可以使用解引用的方式来找到指针指向的内存</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
# 就是这么简单

<span class="token operator">*</span>p<span class="token punctuation">;</span>

cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;指针指向内存的信息&quot;</span><span class="token operator">&lt;&lt;</span><span class="token operator">*</span>p<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

<span class="token comment">// 也可以对指针指向的内存进行修改操作</span>

<span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;修改后的值&quot;</span><span class="token operator">&lt;&lt;</span><span class="token operator">*</span>p<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空指针和野指针" tabindex="-1"><a class="header-anchor" href="#空指针和野指针"><span>空指针和野指针：</span></a></h2><p>空指针：指针变量指向内存中编号为0的空间；</p><p>用途：初始化指针变量</p><p>注意：空指针指向的内存是不可以访问的</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">int</span> <span class="token operator">*</span> p <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>


<span class="token comment">// 空指针不能进行修改 会出现空指针异常</span>

<span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token comment">// 0~255 之间的内存是被系统占用了，不允许用户访问</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>野指针：【我倒要看看你有多野】</p><p>就是用户将指针指向了自己定义的内存地址，属于一种违规操作</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">int</span> <span class="token operator">*</span> p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0x1880</span><span class="token punctuation">;</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 这行代码会保存，用户无权访问该内存空间</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const-修饰指针" tabindex="-1"><a class="header-anchor" href="#const-修饰指针"><span>const 修饰指针：</span></a></h2><p>const 修饰指针 叫做 常量指针</p><p>const 修饰常量 叫做 指针常量</p><p>const 即修饰指针 又修饰常量 叫做 常量常指针</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 常量指针</span>

<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> p<span class="token punctuation">;</span> <span class="token comment">// 对应的值为常量不能修改，但是可以修改指针指向</span>

<span class="token comment">// 指针常量</span>

<span class="token keyword">char</span> <span class="token operator">*</span> <span class="token keyword">const</span> p<span class="token punctuation">;</span> <span class="token comment">// 对应的指针是常量，无法修改指向，但是可以修改对应的值</span>

<span class="token comment">// 常量常指针</span>

<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> <span class="token keyword">const</span>  p<span class="token punctuation">;</span> <span class="token comment">// 两个都是常量，都不能改，相当于 java 的 final static</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针与数组" tabindex="-1"><a class="header-anchor" href="#指针与数组"><span>指针与数组：</span></a></h2><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token operator">*</span> p <span class="token operator">=</span> arr<span class="token punctuation">;</span> <span class="token comment">// 指针会指向 arr 的首地址</span>

cout<span class="token operator">&lt;&lt;</span><span class="token operator">*</span>p<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

<span class="token comment">// 如果想让指针指向数组的下一个空间，可以使指针偏移即可，因为数组是一片连续的存储单元</span>

p<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 不管什么类型都行</span>

cout<span class="token operator">&lt;&lt;</span><span class="token operator">*</span>p<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针和函数" tabindex="-1"><a class="header-anchor" href="#指针和函数"><span>指针和函数</span></a></h2><p>指针形参：接收地址，通过解引用的方式对参数进行处理</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 交换值</span>

<span class="token keyword">void</span> <span class="token function">localSwap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p1<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">*</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token operator">*</span>p1 <span class="token operator">^=</span> <span class="token operator">*</span>p2<span class="token punctuation">;</span>

	<span class="token operator">*</span>p2 <span class="token operator">^=</span> <span class="token operator">*</span>p1<span class="token punctuation">;</span>

	<span class="token operator">*</span>p1 <span class="token operator">^=</span> <span class="token operator">*</span>p2<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> b<span class="token punctuation">;</span>


	<span class="token function">localSwap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>


	cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> b<span class="token punctuation">;</span>


	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>当数组的形参为数组时，它可以退化为同类型的指针</mark></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 下面两个是等价的</span>

<span class="token keyword">void</span> <span class="token function">doSome</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">doSome</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体"><span>结构体：</span></a></h2><p>机构体相当于类型声明</p><h3 id="结构体的定义和使用" tabindex="-1"><a class="header-anchor" href="#结构体的定义和使用"><span>结构体的定义和使用</span></a></h3><p>语法：<code>struct 结构体名 { 结构体成员列表 };</code></p><p>通过结构体创建变量的方式有三种</p><ul><li><p>struct 结构体名 变量名</p></li><li><p>struct 结构体名 变量名 = { <code>成员值1</code>,<code>成员值2</code> }</p></li><li><p>定义结构体时顺便创建变量</p></li></ul><p><mark>使用的时候<code>struct</code> 关键字可以省略，尽量写上用于区分类和结构体</mark></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 定义结构体</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span>

<span class="token punctuation">{</span>

	string name<span class="token punctuation">;</span>

	<span class="token keyword">char</span> gender<span class="token punctuation">;</span>

	<span class="token keyword">double</span> grade<span class="token punctuation">;</span>

	string address<span class="token punctuation">;</span>

<span class="token punctuation">}</span>s3<span class="token punctuation">;</span><span class="token comment">// 第三种定义方式，可以在 结构体中设置初值</span>


<span class="token comment">// 第一种定义方式</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span> s1<span class="token punctuation">;</span>

s1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">;</span>

s1<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token char">&#39;F&#39;</span><span class="token punctuation">;</span>

s1<span class="token punctuation">.</span>grade <span class="token operator">=</span> <span class="token number">100.00</span><span class="token punctuation">;</span>

s1<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&quot;江西省上饶市余干县&quot;</span><span class="token punctuation">;</span>


<span class="token comment">// 第二种定义方式</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token number">100.00</span><span class="token punctuation">,</span> <span class="token string">&quot;江西省余干县&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构体数组" tabindex="-1"><a class="header-anchor" href="#结构体数组"><span>结构体数组：</span></a></h3><p>定义方式可平常的数组没什么区别</p><p><code>struct 结构体名 变量名[元素个数] = { {},{},{} }</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 关键字 struct 可写，可不写</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span> stuArr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>

	<span class="token punctuation">{</span> <span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token number">100.00</span><span class="token punctuation">,</span> <span class="token string">&quot;江西省余干县&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token punctuation">{</span> <span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token number">100.00</span><span class="token punctuation">,</span> <span class="token string">&quot;江西省余干县&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token punctuation">{</span> <span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token number">100.00</span><span class="token punctuation">,</span> <span class="token string">&quot;江西省余干县&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token punctuation">{</span> <span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token number">100.00</span><span class="token punctuation">,</span> <span class="token string">&quot;江西省余干县&quot;</span><span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构体指针" tabindex="-1"><a class="header-anchor" href="#结构体指针"><span>结构体指针：</span></a></h3><p><code>-&gt;</code>：这个不仅是结构体的指针，类也可以用，只要形参列表中接收的是指针就行</p><h3 id="结构体嵌套" tabindex="-1"><a class="header-anchor" href="#结构体嵌套"><span>结构体嵌套：</span></a></h3><p>结构体内的成员属性可以是结构体</p><h2 id="静态参数传递-方式对参数进行修改" tabindex="-1"><a class="header-anchor" href="#静态参数传递-方式对参数进行修改"><span>静态参数传递，方式对参数进行修改</span></a></h2><p>就是形参列表接收参数时，使用 <code>const</code> 修饰的常量或常量指针进行接收</p><p>效果：就是可以防止方法对变量的修改，也可以防止多次调用复制的变量变多</p><h2 id="系统函数" tabindex="-1"><a class="header-anchor" href="#系统函数"><span>系统函数：</span></a></h2><p>system(&quot;cls&quot;) // 清空屏幕</p><h2 id="内存分区模型" tabindex="-1"><a class="header-anchor" href="#内存分区模型"><span>内存分区模型：</span></a></h2><p>C++程序在执行时，将内存大方向划分为 4 个区域</p><ul><li><p>代码区：存放函数的二进制代码。有操作系统进行管理</p></li><li><p>全局区：存放全局变量和静态变量以及常量</p></li><li><p>栈区：由编译器自动分配释放，存放幻术的参数值，局部变量等</p></li><li><p>堆区：由程序员分配和释放，若程序员不释放，程序结束时由操作系统回收</p></li></ul><h3 id="程序运行前" tabindex="-1"><a class="header-anchor" href="#程序运行前"><span>程序运行前：</span></a></h3><p>在程序编译后，生成了exe可执行程序，未执行该程序前分为两个区域</p><p>代码区：</p><p>​ 存放CPU执行的机器指令</p><p>​ 代码区是共享的，共享的目的是对于频繁被执行的程序，只需要在内存中由一份代码即可</p><p>​ 代码区是只读的，使其只读的原因是防止程序意外地修改了它的指令</p><p>全局区：</p><p>​ 全局变量和静态变量存放在此</p><p>​ 全局区还包含了常量区，字符串常量和其他常量也存放在此</p><p>​ 该区域的数据在程序结束后由操作系统释放</p><p>栈区：</p><p>​ 由编译器自动分配释放，存放函数的参数值，局部变量等</p><p>​ 注释事项：不要返回局部变量的地址，栈区开辟的数据由编译器自动释放</p><p>堆区：</p><p>​ 由程序员分配释放，若程序员不释放，程序结束时由操作系统回收</p><p>​ 在C++中主要利用new在堆区开辟内存</p><h2 id="new-操作符" tabindex="-1"><a class="header-anchor" href="#new-操作符"><span>new 操作符：</span></a></h2><p>C++中利用new操作符在堆区开辟数据</p><p>堆区开辟的数据，由程序员手动开辟，手动释放，释放利用操作符<code>delete</code></p><p>语法：<code>new 数据类型</code></p><p>利用new 创建的数据，会返回该数据对应的类型的指针</p><p>对于数组类型的数据的创建和删除操作有一点不同</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 创建</span>

<span class="token keyword">int</span> <span class="token operator">*</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 清除</span>

<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用：</span></a></h2><p>引用的基本作用就是给变量取别名</p><p>语法：<code>数据类型 &amp;别名 = 原名</code></p><h3 id="引用的注意事项" tabindex="-1"><a class="header-anchor" href="#引用的注意事项"><span>引用的注意事项：</span></a></h3><ul><li><p>引用必须初始化</p></li><li><p>引用在初始化后，不可以改变</p></li></ul><h3 id="引用做函数参数" tabindex="-1"><a class="header-anchor" href="#引用做函数参数"><span>引用做函数参数：</span></a></h3><p>作用：函数传参时，可以利用引用的技术让形参修饰实参</p><p>优点：可以简化指针修改实参</p><h3 id="引用做函数返回值" tabindex="-1"><a class="header-anchor" href="#引用做函数返回值"><span>引用做函数返回值：</span></a></h3><p>作用：引用是可以作为函数的返回值存在的</p><p>注意：不要返回局部变量引用</p><p>用法：函数调用作为左值</p><h3 id="引用的本质" tabindex="-1"><a class="header-anchor" href="#引用的本质"><span>引用的本质：</span></a></h3><p>本质是一个指针常量</p><h3 id="常量引用" tabindex="-1"><a class="header-anchor" href="#常量引用"><span>常量引用：</span></a></h3><p>作用：常量引用主要用来修饰形参，防止误操作</p><p>在函数形参列表中，可以加 <code>const</code> 修饰形参，防止形参改变实参</p><h2 id="函数默认参数" tabindex="-1"><a class="header-anchor" href="#函数默认参数"><span>函数默认参数：</span></a></h2><p>这个和js一样，在形参列表中写参数的默认值</p><p>注意：普通参数必须在默认参数左边</p><p>如果函数声明有默认参数，函数实现就不能有默认参数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">8</span> <span class="token punctuation">,</span><span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数占位符" tabindex="-1"><a class="header-anchor" href="#函数占位符"><span>函数占位符：</span></a></h2><p>C++中函数的形参列表里可以有占位参数，用来做占位，调用函数时，必须填补该位置</p><p>语法：<code>返回值类型 函数名(数据类型){}</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 函数占位参数，占位参数也可以有默认参数</span>

<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载"><span>函数重载：</span></a></h2><p>函数重载注意事项：</p><p>当函数重载碰到引用参数时，会发现 <code>&amp;参数</code> 和 <code>const &amp; 参数</code> 两个竟然可以满足重载条件，但是调用时，只会触发<code>&amp;参数</code> 对应的函数</p><p>要想调用 <code>const &amp; 参数</code>的方法，需要直接传值，而不是传递参数</p><p>当函数重载碰到了默认参数时，编译会出现错误</p><h2 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符"><span>访问修饰符：</span></a></h2><p>在C++中有三种访问修饰符：</p><p>​ public：公共</p><p>​ protected：保护</p><p>​ private：私有</p><h2 id="构造体和class-的区别" tabindex="-1"><a class="header-anchor" href="#构造体和class-的区别"><span>构造体和class 的区别：</span></a></h2><p>唯一的区别就是默认的访问权限不同</p><p>在struct 中 默认为 public</p><p>在 class 中 默认为 private</p><h2 id="对象的初始化和清理" tabindex="-1"><a class="header-anchor" href="#对象的初始化和清理"><span>对象的初始化和清理：</span></a></h2><p>我擦了，</p><p>就是构造函数进行初始化</p><p>析构函数进行清理</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span>

<span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token operator">~</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">private</span><span class="token operator">:</span>


<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token class-name">MyClass</span><span class="token double-colon punctuation">::</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token punctuation">}</span>


<span class="token class-name">MyClass</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>~类名</code> 对应的函数就是析构函数</p><h2 id="构造函数的分类及调用" tabindex="-1"><a class="header-anchor" href="#构造函数的分类及调用"><span>构造函数的分类及调用：</span></a></h2><p>两种分类方式：</p><p>​ 按参数分为：有参构造和无参构造</p><p>​ 按类型分为：普通构造和拷贝构造</p><p>三种调用方式：</p><p>​ 括号法</p><p>​ 显示法</p><p>​ 隐式转换法</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 拷贝构造</span>

<span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass <span class="token operator">&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 调用构造函数</span>

<span class="token comment">//1.括号法</span>

MyClass a<span class="token punctuation">;</span> <span class="token comment">// 如果调用的是无参构造，那么不能加(),因为编译器会看成是函数的声明,其他的要加</span>

<span class="token comment">// 2.显示法</span>

MyClass a <span class="token operator">=</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 不能用拷贝构造函数，初始化匿名对应，因为编译器会把 () 去掉，相当于给 对象重新定义了</span>

<span class="token comment">// 3.隐式转换法</span>

MyClass a <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 相当于 MyClass a = MyClass(10)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数调用规则" tabindex="-1"><a class="header-anchor" href="#构造函数调用规则"><span>构造函数调用规则：</span></a></h2><p>默认情况下，C++编译器至少给一个类添加3个函数</p><p>1、默认构造函数</p><p>2、默认析构函数</p><p>3、默认拷贝构造函数，对属性进行值拷贝</p><p>构造函数调用规则如下：</p><ul><li><p>如果用户定义有参构造函数，C++不再提供默认无参构造，但是会提供默认拷贝构造</p></li><li><p>如果用户定义拷贝构造函数，C++不会再提供其他构造函数</p></li></ul><h2 id="深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝"><span>深拷贝和浅拷贝：</span></a></h2><p>浅拷贝：简单的赋值拷贝操作</p><p>深拷贝：在堆区重新申请空间，进行拷贝操作</p><h2 id="初始化列表" tabindex="-1"><a class="header-anchor" href="#初始化列表"><span>初始化列表：</span></a></h2><p>C++提供了初始化列表语法，用来初始化属性</p><p>语法：<code>构造函数(参数列表): 属性1(值1),属性2(值2)...{}</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">m_Age</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-对象模型和this指针" tabindex="-1"><a class="header-anchor" href="#c-对象模型和this指针"><span>C++对象模型和this指针：</span></a></h2><p>成员变量和成员函数是分开存储的</p><p>空对象占用内存为1个字节</p><h2 id="空指针访问成员函数" tabindex="-1"><a class="header-anchor" href="#空指针访问成员函数"><span>空指针访问成员函数：</span></a></h2><p>C++中空指针也是可以调用成员函数的，但是也要注意有没有用到this指针</p><p>如果用到this指针，需要加以判断保证代码的健壮性</p><h2 id="const-修饰成员函数" tabindex="-1"><a class="header-anchor" href="#const-修饰成员函数"><span>const 修饰成员函数：</span></a></h2><p>常函数：</p><ul><li><p>成员函数加上 const 之后就是常函数，这个const 要在参数列表后面</p></li><li><p>常函数内不能修改成员属性【这个是因为加上了const 之后，里面的this变成了常量指针了，改变不了对应指向信息的值】</p></li><li><p>成员属性加上 mutable 之后，就能修改了</p></li></ul><p>常对象：</p><ul><li><p>声明对象加上 const 就是常对象，在前面加 const</p></li><li><p>常对象只能调用常函数</p></li></ul><h2 id="友元" tabindex="-1"><a class="header-anchor" href="#友元"><span>友元：</span></a></h2><p>就是加一个关键字允许特殊的类访问自己的私有成员</p><p>关键字：<code>friend</code></p><h3 id="全局函数做友元" tabindex="-1"><a class="header-anchor" href="#全局函数做友元"><span>全局函数做友元：</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token comment">// 将对应的函数声明为友元函数，允许它对私有属性的访问</span>

	<span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">viewPersonInfo</span><span class="token punctuation">(</span>Person<span class="token operator">*</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>

	string m_Name<span class="token punctuation">;</span>

	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span>


<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">m_Age</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 析构函数</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	string <span class="token function">getMName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Name<span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> <span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 访问私有成员</span>

<span class="token keyword">void</span> <span class="token function">viewPersonInfo</span><span class="token punctuation">(</span>Person<span class="token operator">*</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	cout <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span>m_Name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类做友元" tabindex="-1"><a class="header-anchor" href="#类做友元"><span>类做友元：</span></a></h3><p>和全局函数差不多，在类中需要用friend声明对应的类就行了</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token comment">// 将对应的函数声明为友元函数，允许它对私有属性的访问</span>

	<span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">viewPersonInfo</span><span class="token punctuation">(</span>Person<span class="token operator">*</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>

	string m_Name<span class="token punctuation">;</span>

	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">m_Age</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 析构函数</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	string <span class="token function">getMName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Name<span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> <span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">class</span> <span class="token class-name">T1</span> <span class="token punctuation">{</span>

	Person<span class="token operator">*</span> p<span class="token punctuation">;</span>

	<span class="token function">T1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>


	<span class="token keyword">void</span> <span class="token function">visitPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		cout <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span>m_Name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="成员函数做友元" tabindex="-1"><a class="header-anchor" href="#成员函数做友元"><span>成员函数做友元：</span></a></h3><p>成员函数做友元需要注意方法声明的位置：需要在有声明或者有实现才能进行调用，要不然会出错</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">T1</span> <span class="token punctuation">{</span>

	Person<span class="token operator">*</span> p<span class="token punctuation">;</span>

	<span class="token function">T1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token keyword">void</span> <span class="token function">visitPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

	<span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token class-name">T1</span><span class="token double-colon punctuation">::</span><span class="token function">visitPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>

	string m_Name<span class="token punctuation">;</span>

	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span>


<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">m_Age</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 析构函数</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	string <span class="token function">getMName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Name<span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> <span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">T1</span><span class="token double-colon punctuation">::</span><span class="token function">T1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">T1</span><span class="token double-colon punctuation">::</span><span class="token function">visitPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	cout <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符重载" tabindex="-1"><a class="header-anchor" href="#运算符重载"><span>运算符重载：</span></a></h2><p>对于不同类型，进行运算符的重载，以便可以实现所需要的不同功能</p><p>声明方式：<code>返回类型 operator[运算符](形参列表)</code></p><p><code>+</code>号运算符重载</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token keyword">private</span><span class="token operator">:</span>

	string m_Name<span class="token punctuation">;</span>

	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span>


<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">m_Age</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 析构函数</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	string <span class="token function">getMName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Name<span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> <span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

	Person<span class="token operator">*</span> <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Person<span class="token operator">*</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">+</span> p<span class="token operator">-&gt;</span>m_Age<span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 全局函数实现运算符重载</span>

Person <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span>Person<span class="token operator">&amp;</span> p1<span class="token punctuation">,</span> Person<span class="token operator">&amp;</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	Person<span class="token operator">*</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> a <span class="token operator">=</span> p1<span class="token punctuation">.</span><span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> b <span class="token operator">=</span> p2<span class="token punctuation">.</span><span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	temp<span class="token operator">-&gt;</span><span class="token function">setAge</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token operator">*</span>temp<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 主方法</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span><span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span><span class="token function">getMName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	Person <span class="token function">p2</span><span class="token punctuation">(</span><span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	Person<span class="token operator">*</span> p3 <span class="token operator">=</span> p1<span class="token punctuation">.</span><span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 也可以写成Person* p3 = p1+&amp;p2;</span>

	cout <span class="token operator">&lt;&lt;</span> p3<span class="token operator">-&gt;</span><span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> p3<span class="token operator">-&gt;</span><span class="token function">getMName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;&lt;</code>左移运算符重载</p><p>左移运算符只能在全局重载，无法在类的内部进行重载，这个相当于<code>toString()</code>方法了</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 重载 左移运算符，输出流 + 需要操作的类 【输出流 cout 在全局只能有一个，所以需要用引用的方式】</span>

ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> cout<span class="token punctuation">,</span> Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;name:&quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span><span class="token function">getMName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;age:&quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span><span class="token function">getMage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> cout<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cout <span class="token operator">&lt;&lt;</span> p1<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">// 当重载运算符没有返回值时后面不能追加新东西：这种其实就是一个链式编程的变体</span>


<span class="token comment">// 如果把这个重载运算符加入为友元，也可以访问私有成员</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>++</code>递增运算符重载</p><p>递增分为：前置递增和后置递增，也就是前++和后++</p><p>对应的<code>--</code>运算符的重载与这个类似</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

	<span class="token keyword">friend</span> ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> cout<span class="token punctuation">,</span> Person p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>

	string m_Name<span class="token punctuation">;</span>

	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span>


<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token function">Person</span><span class="token punctuation">(</span>string name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">m_Age</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token comment">// 前置++ 运算符重载</span>

	Person<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		m_Age<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token comment">//后置++运算符重载 使用占位参数 int 可以让编译器区分 前置还是后置</span>

	<span class="token comment">// 注意：后置引用返回的是值：因为变量为局部变量，当方法结束后就被释放了，指针和引用就找不到对应的信息了</span>

	Person <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		Person temp <span class="token operator">=</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>

		m_Age<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> temp<span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 因为这个运算符使用的是 引用 &amp; p 所以后置递增会出错，需要改成 普通参数</span>

ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> cout<span class="token punctuation">,</span> Person p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;name: &quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>m_Name <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; age: &quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> cout<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 主方法</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token string">&quot;曹云友&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">++</span><span class="token punctuation">(</span><span class="token operator">++</span>p1<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> p1<span class="token operator">++</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值运算符重载：</p><p>类的初始函数会有一个 <code>operator=</code>函数，进行值的拷贝</p><p>当类中存在指针变量【存在堆区】，进行赋值运算时就会因为一个对象的析构引发另一个对象的成员指向出现异常，所以需要修改为深拷贝</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token keyword">int</span><span class="token operator">*</span> m_Age<span class="token punctuation">;</span>

	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 注意这个是指针变量，需要用 new 的方式创建在 堆区</span>

		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>


	Person<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span>Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 如果当前的指针变量已经有了堆区指向，需要先释放，再赋值</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_Age <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>

		<span class="token punctuation">{</span>

			<span class="token keyword">delete</span> m_Age<span class="token punctuation">;</span>

			m_Age <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

		<span class="token punctuation">}</span>

		m_Age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">.</span>m_Age<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 主方法</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	Person <span class="token function">p2</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p1<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p2<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	p1 <span class="token operator">=</span> p2<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p1<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p2<span class="token punctuation">.</span>m_Age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关系运算符重载</p><p><code>&gt; , &lt; , == , &gt;= , &lt;=</code></p><p>这种重载方便排序和值的比较</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span>

	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">=</span> age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">&gt;=</span><span class="token punctuation">(</span>Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">&gt;=</span> p<span class="token punctuation">.</span>m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>


	<span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">==</span><span class="token punctuation">(</span>Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">==</span> p<span class="token punctuation">.</span>m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>


	<span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">&lt;=</span> <span class="token punctuation">(</span>Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>


	<span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">!=</span><span class="token punctuation">(</span>Person<span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">!=</span> p<span class="token punctuation">.</span>m_Age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 主方法</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	Person <span class="token function">p2</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>p1 <span class="token operator">&gt;=</span> p2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>p1 <span class="token operator">&lt;=</span> p2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>p1 <span class="token operator">==</span> p2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>p1 <span class="token operator">!=</span> p2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数调用运算符重载：</p><p><code>()</code> 函数调用运算符</p><p>由于重载后使用的方式非常像函数的调用，因此称为仿函数</p><p>仿函数没有固定写法，非常灵活</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span>

	<span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">this</span><span class="token operator">-&gt;</span>m_Age <span class="token operator">=</span> age<span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token comment">//函数运算符重载，参数随意，返回值随意</span>

	<span class="token keyword">void</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>string text<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		cout <span class="token operator">&lt;&lt;</span> text <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>


	<span class="token keyword">void</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>string text<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		cout <span class="token operator">&lt;&lt;</span> text <span class="token operator">&lt;&lt;</span> age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// 主方法</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	Person <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">p1</span><span class="token punctuation">(</span><span class="token string">&quot;傻逼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">p1</span><span class="token punctuation">(</span><span class="token string">&quot;傻逼&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承：</span></a></h2><p>在C++里面的继承关键字不是 <code>extends</code> 而是：<code>:</code> 这个符号</p><p>语法：<code>class 子类 : 继承方式 父类</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

    <span class="token keyword">int</span> a<span class="token punctuation">;</span>

<span class="token keyword">protected</span><span class="token operator">:</span>

    <span class="token keyword">int</span> b<span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>

    <span class="token keyword">int</span> c<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 继承</span>

<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token class-name">Person</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承方式一共有三种：</p><p>公共继承：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Person</span></span><span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

    <span class="token keyword">int</span> a<span class="token punctuation">;</span>

<span class="token keyword">protected</span><span class="token operator">:</span>

    <span class="token keyword">int</span> b<span class="token punctuation">;</span>

不可访问<span class="token operator">:</span>

    <span class="token keyword">int</span> c<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保护继承</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">protected</span> <span class="token class-name">Person</span></span><span class="token punctuation">{</span>

<span class="token keyword">protected</span><span class="token operator">:</span>

    <span class="token keyword">int</span> a<span class="token punctuation">;</span>

    <span class="token keyword">int</span> b<span class="token punctuation">;</span>

不可访问<span class="token operator">:</span>

    <span class="token keyword">int</span> c<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>私有继承</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">private</span> <span class="token class-name">Person</span></span><span class="token punctuation">{</span>

<span class="token keyword">private</span>	<span class="token operator">:</span>

    <span class="token keyword">int</span> a<span class="token punctuation">;</span>

    <span class="token keyword">int</span> b<span class="token punctuation">;</span>

不可访问<span class="token operator">:</span>

    <span class="token keyword">int</span> c<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不管哪种方式都只能继承公共和保护的属性，无法继承私有属性，继承方式是说，在子类中把继承到父类的成员置为对应的访问权限</p><p>和java一样，私有属性也继承了，但是无法访问</p><p>使用 VS开发人员命令提示符查看单个类的布局</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 查看单个类的布局</span>

cl /dl reportSingleClassLayout<span class="token punctuation">[</span>类名<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>

cl /dl reportSingleClassLayoutPerson <span class="token string">&quot;HelloWorld.cpp&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承类的构造函数和析构函数加载顺序：</p><p>父类构造-&gt;子类构造-&gt;子类析构-&gt;父类析构</p><p>继承同名成员处理方式：</p><p>访问子类，直接访问</p><p>访问父类，需要加作用域</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
Man man<span class="token punctuation">;</span>

<span class="token comment">// 访问子类的同名成员</span>

man<span class="token punctuation">.</span>a<span class="token punctuation">;</span>

man<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 访问父类的同名成员</span>

man<span class="token punctuation">.</span>Person<span class="token double-colon punctuation">::</span>a<span class="token punctuation">;</span>

man<span class="token punctuation">.</span><span class="token class-name">Person</span><span class="token double-colon punctuation">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果子类创建的一个和父类一样的同名函数【不管几个，只要存在就会触发】，那么父类的其他的不同形参的同名函数都会被隐藏掉，无法直接调用，需要使用父类作用域进行调用</p><p>C++允许多继承，这个是和Java不一样的</p><p>因为多继承会出现多个同名成员，需要使用作用域进行隔离：突然理解了为什么重写了一个父类方法会隐藏掉所有的同名父类方法了</p><p>语法：<code>class 子类 : 继承方式 父类1,继承方式 父类2...</code></p><p>实际开发不建议使用多继承</p><p>菱形继承：</p><p>​ 两个派生类继承同一个基类</p><p>​ 又有某个类同时继承两个派生类</p><p>​ 这种继承被称为菱形继承，或者钻石继承</p><p>菱形继承的问题就是常见的多继承问题：在多个父类中存在同名成员，而且存在不同的位置，修改了一个另一个不会变</p><p>解决方式：虚继承</p><p>这种继承方式会把同名函数进行合并，不管修改了哪个作用域中的同名成员，其他的都会跟着改变</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">P1</span><span class="token punctuation">{</span>

    <span class="token keyword">int</span> m_age<span class="token punctuation">;</span>    

<span class="token punctuation">}</span>



<span class="token keyword">class</span> <span class="token class-name">T1</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">virtual</span> <span class="token class-name">P1</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">T2</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">virtual</span> <span class="token class-name">P1</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token comment">// 这样的话 就会把对应的同名属性指向其基类 P1，在 T1 和 T2 中存储的是 vbptr 【虚拟基类指针】</span>

<span class="token comment">// vbptr 会指向 vbtable 里面记录的基类信息以及数据偏移量，以便找到对应的属性</span>

<span class="token keyword">class</span> <span class="token class-name">N1</span><span class="token operator">:</span> <span class="token base-clause"><span class="token class-name">T1</span><span class="token punctuation">,</span><span class="token class-name">T2</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态：</span></a></h2><p>多态分为两种</p><ul><li><p>静态多态：函数重载和运算符重载属于静态多态，复用函数名</p></li><li><p>动态多态：派生类和虚函数实现运行时多态</p></li></ul><p>静态多态和动态多态区别：</p><ul><li><p>静态多态的函数地址早绑定 - 编译简短确定函数地址</p></li><li><p>动态多态的函数地址玩绑定 - 运行阶段决定函数地址</p></li></ul><p>C++中的动态和Java中的动态有很多不一致的地方</p><p>在编译时方法会根据传入类型进行函数早绑定，即：传入参数是什么类型，那么调用的就是对应类型的函数</p><p>如果需要将函数地址晚绑定，即哪个调用就引用对应的方法，只需要在调用方法上面加一个 <code>virtual</code> 关键字即可</p><p>这个就相当于开启了重载一样</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

    <span class="token comment">// 将函数定义为虚函数</span>

    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;Animal 在说话&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token class-name">Animal</span></span><span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

    <span class="token comment">// 子类重写虚函数时可以不写关键字</span>

    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;Cat 在说话&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token class-name">Animal</span></span><span class="token punctuation">{</span>

<span class="token keyword">public</span><span class="token operator">:</span>

    <span class="token comment">// 子类重写虚函数时可以不写关键字</span>

    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;Dog 在说话&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token comment">// 调用对应的 soeack 方法</span>

<span class="token keyword">void</span> <span class="token function">doSpeack</span><span class="token punctuation">(</span>Animal <span class="token operator">&amp;</span> animal<span class="token punctuation">)</span><span class="token punctuation">{</span>

    animal<span class="token punctuation">.</span><span class="token function">speack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>纯虚函数和抽象类</p><p>在多态中，通常父类中虚函数的实现时毫无意义的，主要是调用子类重写的内容</p><p>因此可以将虚函数改为纯虚函数</p><p>纯虚函数语法：<code>virtual 返回值类型 函数名 (参数列表) = 0;</code></p><p>当类中有了纯虚函数，这个类也称为==<code>抽象类</code>==</p><p>抽象类特点：</p><ul><li><p>无法实例化对象</p></li><li><p>子类必须重写抽象类中的纯虚函数，否则也属于抽象类</p></li></ul><p>虚析构和纯虚析构</p><p>多态使用时，如果子类中有属性开辟到堆区，那么父类指针在释放时无法调用到子类的析构代码</p><p>解决方式：将父类中的析构函数改为<code>虚析构</code>或者<code>纯虚析构</code></p><p>虚析构和纯虚析构共性：</p><ul><li><p>可以解决父类指针释放子类对象</p></li><li><p>都需要有具体的函数实现</p></li></ul><p>虚析构和纯虚析构区别：</p><ul><li>如果是纯虚析构，该类属于抽象类，无法实例化对象</li></ul><p>当生成的实例是父类的类型的话，那么它销毁时，不会调用子类的析构函数，因为引用是指向父类的，为了解决这个问题，在父类上面加上<code>virtual</code> 关键字使其的析构函数成为虚析构，那么它销毁时，就会调用子类的析构函数了</p><p>纯虚析构：<code>virtural ~类名() = 0;</code></p><p>纯虚析构无法单独实现：因为析构函数必须被调用，所以一定有函数体，所以在全局作用于下需要实现纯虚析构</p><p>有了纯虚析构，类也会被识别为纯虚析构，无法被实例化</p><h2 id="c-文件操作" tabindex="-1"><a class="header-anchor" href="#c-文件操作"><span>C++文件操作：</span></a></h2><p>C++中对文件操作需要包含头文件==&lt;fstream&gt;==</p><p>文件类型分为两种</p><p>1.文本文件 - 文件以文本的ASCII吗形式存储在计算机中</p><p>2.二进制文件 - 文件以文本的二进制形式存储在计算机中，用户一本不能直接读懂它们</p><p>操作文件的三大类</p><p>1.ofstream:写操作</p><p>2.ifstream:读操作</p><p>3.fstream:读写操作</p><p>文件打开方式</p><p>| 打开方式 | 解释 |</p><p>| --- | ------- |</p><p>| ios::in | 只读模式 |</p><p>| ios::out | 只写模式 |</p><p>| ios::ate | 初始位置：文件尾 |</p><p>| ios::app | 追加方式写文件 |</p><p>| ios::trunc | 如果文件存在先删除，在创建 |</p><p>| ios::binary | 二进制方式 |</p><p>打开方式可配合使用，中间使用 <code>|</code> 间隔</p><p>读取数据的方式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
fstream fs<span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;E:\\\\Desktop\\\\test.txt&quot;</span><span class="token punctuation">,</span> ios<span class="token double-colon punctuation">::</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">is_open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;打开文件失败了:请确认文件是否存在&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token comment">// 第一种方式</span>

<span class="token comment">/*char buf[1024] = { 0 };

while (fs &gt;&gt; buf)

{

	cout &lt;&lt; buf;

}*/</span>


<span class="token comment">// 第二种方式</span>

<span class="token comment">/*char buf[1024] = { 0 };

while (fs.getline(buf, sizeof(buf)))

{

	cout &lt;&lt; buf;

}*/</span>


<span class="token comment">// 第三种方式</span>

<span class="token comment">/*string buf;

while (getline(fs, buf)) // 这个geline 是 string 里面的

{

	cout &lt;&lt; buf;

}*/</span>


<span class="token comment">// 第四种方式</span>

<span class="token comment">/*char c;

while ((c = fs.get()) != EOF)

{

	cout &lt;&lt; c;

}*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二进制文件读写</p><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板"><span>模板：</span></a></h2><p>C++也支持泛型，利用到的技术就是模板</p><p>C++提供两种模板机制 函数模板 和类模板</p><h3 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板"><span>函数模板：</span></a></h3><p>作用：建立一个通用函数，其返回类型和形参类型使用泛型</p><p>语法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>

函数声明或定义

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数模板会使用自动类型推导，当类型不一致时，会出现异常</p><p>对于没有形参的函数模板，必须在调用时就确定泛型的类型 类似于 <code>func&lt;int&gt;()</code></p>`,302),i=[t];function l(c,o){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","c__.html.vue"]]),v=JSON.parse('{"path":"/notes/c__/c__.html","title":"C++学习","lang":"zh-CN","frontmatter":{"title":"C++学习","description":"值传递： 方法内对值进行的操作不会影响到实际参数 普通形参不会影响到实参； 如果是传递引用：& 就会影响到实参的值 函数的声明： 作用：防止报错，告诉编译器，存在对应的函数，当调用函数在函数定义之前时，就需要使用到函数声明了 声明可以多次 函数的分文件编写： 头文件： ​ 格式: XXX.h 源文件： ​ 格式: XXX.cpp 规则：在头文件中写函数...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/c__/c__.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"C++学习"}],["meta",{"property":"og:description","content":"值传递： 方法内对值进行的操作不会影响到实际参数 普通形参不会影响到实参； 如果是传递引用：& 就会影响到实参的值 函数的声明： 作用：防止报错，告诉编译器，存在对应的函数，当调用函数在函数定义之前时，就需要使用到函数声明了 声明可以多次 函数的分文件编写： 头文件： ​ 格式: XXX.h 源文件： ​ 格式: XXX.cpp 规则：在头文件中写函数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T12:41:52.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:modified_time","content":"2024-05-15T12:41:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++学习\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T12:41:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":2,"title":"值传递：","slug":"值传递","link":"#值传递","children":[]},{"level":2,"title":"函数的声明：","slug":"函数的声明","link":"#函数的声明","children":[]},{"level":2,"title":"函数的分文件编写：","slug":"函数的分文件编写","link":"#函数的分文件编写","children":[]},{"level":2,"title":"指针：","slug":"指针","link":"#指针","children":[]},{"level":2,"title":"空指针和野指针：","slug":"空指针和野指针","link":"#空指针和野指针","children":[]},{"level":2,"title":"const 修饰指针：","slug":"const-修饰指针","link":"#const-修饰指针","children":[]},{"level":2,"title":"指针与数组：","slug":"指针与数组","link":"#指针与数组","children":[]},{"level":2,"title":"指针和函数","slug":"指针和函数","link":"#指针和函数","children":[]},{"level":2,"title":"结构体：","slug":"结构体","link":"#结构体","children":[{"level":3,"title":"结构体的定义和使用","slug":"结构体的定义和使用","link":"#结构体的定义和使用","children":[]},{"level":3,"title":"结构体数组：","slug":"结构体数组","link":"#结构体数组","children":[]},{"level":3,"title":"结构体指针：","slug":"结构体指针","link":"#结构体指针","children":[]},{"level":3,"title":"结构体嵌套：","slug":"结构体嵌套","link":"#结构体嵌套","children":[]}]},{"level":2,"title":"静态参数传递，方式对参数进行修改","slug":"静态参数传递-方式对参数进行修改","link":"#静态参数传递-方式对参数进行修改","children":[]},{"level":2,"title":"系统函数：","slug":"系统函数","link":"#系统函数","children":[]},{"level":2,"title":"内存分区模型：","slug":"内存分区模型","link":"#内存分区模型","children":[{"level":3,"title":"程序运行前：","slug":"程序运行前","link":"#程序运行前","children":[]}]},{"level":2,"title":"new 操作符：","slug":"new-操作符","link":"#new-操作符","children":[]},{"level":2,"title":"引用：","slug":"引用","link":"#引用","children":[{"level":3,"title":"引用的注意事项：","slug":"引用的注意事项","link":"#引用的注意事项","children":[]},{"level":3,"title":"引用做函数参数：","slug":"引用做函数参数","link":"#引用做函数参数","children":[]},{"level":3,"title":"引用做函数返回值：","slug":"引用做函数返回值","link":"#引用做函数返回值","children":[]},{"level":3,"title":"引用的本质：","slug":"引用的本质","link":"#引用的本质","children":[]},{"level":3,"title":"常量引用：","slug":"常量引用","link":"#常量引用","children":[]}]},{"level":2,"title":"函数默认参数：","slug":"函数默认参数","link":"#函数默认参数","children":[]},{"level":2,"title":"函数占位符：","slug":"函数占位符","link":"#函数占位符","children":[]},{"level":2,"title":"函数重载：","slug":"函数重载","link":"#函数重载","children":[]},{"level":2,"title":"访问修饰符：","slug":"访问修饰符","link":"#访问修饰符","children":[]},{"level":2,"title":"构造体和class 的区别：","slug":"构造体和class-的区别","link":"#构造体和class-的区别","children":[]},{"level":2,"title":"对象的初始化和清理：","slug":"对象的初始化和清理","link":"#对象的初始化和清理","children":[]},{"level":2,"title":"构造函数的分类及调用：","slug":"构造函数的分类及调用","link":"#构造函数的分类及调用","children":[]},{"level":2,"title":"构造函数调用规则：","slug":"构造函数调用规则","link":"#构造函数调用规则","children":[]},{"level":2,"title":"深拷贝和浅拷贝：","slug":"深拷贝和浅拷贝","link":"#深拷贝和浅拷贝","children":[]},{"level":2,"title":"初始化列表：","slug":"初始化列表","link":"#初始化列表","children":[]},{"level":2,"title":"C++对象模型和this指针：","slug":"c-对象模型和this指针","link":"#c-对象模型和this指针","children":[]},{"level":2,"title":"空指针访问成员函数：","slug":"空指针访问成员函数","link":"#空指针访问成员函数","children":[]},{"level":2,"title":"const 修饰成员函数：","slug":"const-修饰成员函数","link":"#const-修饰成员函数","children":[]},{"level":2,"title":"友元：","slug":"友元","link":"#友元","children":[{"level":3,"title":"全局函数做友元：","slug":"全局函数做友元","link":"#全局函数做友元","children":[]},{"level":3,"title":"类做友元：","slug":"类做友元","link":"#类做友元","children":[]},{"level":3,"title":"成员函数做友元：","slug":"成员函数做友元","link":"#成员函数做友元","children":[]}]},{"level":2,"title":"运算符重载：","slug":"运算符重载","link":"#运算符重载","children":[]},{"level":2,"title":"继承：","slug":"继承","link":"#继承","children":[]},{"level":2,"title":"多态：","slug":"多态","link":"#多态","children":[]},{"level":2,"title":"C++文件操作：","slug":"c-文件操作","link":"#c-文件操作","children":[]},{"level":2,"title":"模板：","slug":"模板","link":"#模板","children":[{"level":3,"title":"函数模板：","slug":"函数模板","link":"#函数模板","children":[]}]}],"git":{"createdTime":1715776912000,"updatedTime":1715776912000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":20.89,"words":6268},"filePathRelative":"notes/c++/c++.md","localizedDate":"2024年5月15日","excerpt":"<h2>值传递：</h2>\\n<p>方法内对值进行的操作不会影响到实际参数</p>\\n<p>普通形参不会影响到实参；</p>\\n<p>如果是传递引用：<code>&amp;</code> 就会影响到实参的值</p>\\n<h2>函数的声明：</h2>\\n<p>作用：防止报错，告诉编译器，存在对应的函数，当调用函数在函数定义之前时，就需要使用到函数声明了</p>\\n<p>声明可以多次</p>\\n<h2>函数的分文件编写：</h2>\\n<p>头文件：</p>\\n<p>​\\t格式: <code>XXX.h</code></p>\\n<p>源文件：</p>\\n<p>​\\t格式: <code>XXX.cpp</code></p>\\n<p>规则：在头文件中写函数的声明，在源文件中写函数的定义</p>","autoDesc":true}');export{r as comp,v as data};
