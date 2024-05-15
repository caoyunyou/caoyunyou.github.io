import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,e as s}from"./app-D0Nm-BYw.js";const a={},i=s(`<h2 id="错误" tabindex="-1"><a class="header-anchor" href="#错误"><span>错误</span></a></h2><p>错误 通常是指程序中的 语法错误 或 逻辑错误，来通过两个 Python 例子看一下：</p><p><strong>语法错误示例</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># print前面少了:</span>
<span class="token keyword">if</span> <span class="token boolean">True</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们编写程序通常使用开发工具编写，比如：我使用 Pycharm 工具编写 Python 程序，像这种语法错误，在编写程序时，编译器就会检测出来并提示我们，因此，我们编写好的程序几乎不会出现这种问题。</p><p><strong>逻辑错误示例</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 除0异常</span>
a <span class="token operator">=</span> <span class="token number">5</span>
b <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token operator">/</span>b<span class="token punctuation">)</span>

<span class="token comment"># 执行结果：ZeroDivisionError: division by zero</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑错误编译器是不会提示我们的，因此，我们编写程序时，对一些基本常识要有一定了解，从而，避免出现逻辑错误。</p><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h2><p>即便 Python 程序的语法是正确的，在运行它的时候，也有可能发生错误，运行期检测到的错误被称为异常；大多数的异常都不会被程序处理，都以错误信息的形式展现。</p><h3 id="python-内置异常" tabindex="-1"><a class="header-anchor" href="#python-内置异常"><span>Python 内置异常</span></a></h3><p>我们先来看一下异常层次结构：</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>BaseException
 +-- SystemExit
 +-- KeyboardInterrupt
 +-- GeneratorExit
 +-- Exception
      +-- StopIteration
      +-- StopAsyncIteration
      +-- ArithmeticError
      |    +-- FloatingPointError
      |    +-- OverflowError
      |    +-- ZeroDivisionError
      +-- AssertionError
      +-- AttributeError
      +-- BufferError
      +-- EOFError
      +-- ImportError
      |    +-- ModuleNotFoundError
      +-- LookupError
      |    +-- IndexError
      |    +-- KeyError
      +-- MemoryError
      +-- NameError
      |    +-- UnboundLocalError
      +-- OSError
      |    +-- BlockingIOError
      |    +-- ChildProcessError
      |    +-- ConnectionError
      |    |    +-- BrokenPipeError
      |    |    +-- ConnectionAbortedError
      |    |    +-- ConnectionRefusedError
      |    |    +-- ConnectionResetError
      |    +-- FileExistsError
      |    +-- FileNotFoundError
      |    +-- InterruptedError
      |    +-- IsADirectoryError
      |    +-- NotADirectoryError
      |    +-- PermissionError
      |    +-- ProcessLookupError
      |    +-- TimeoutError
      +-- ReferenceError
      +-- RuntimeError
      |    +-- NotImplementedError
      |    +-- RecursionError
      +-- SyntaxError
      |    +-- IndentationError
      |         +-- TabError
      +-- SystemError
      +-- TypeError
      +-- ValueError
      |    +-- UnicodeError
      |         +-- UnicodeDecodeError
      |         +-- UnicodeEncodeError
      |         +-- UnicodeTranslateError
      +-- Warning
           +-- DeprecationWarning
           +-- PendingDeprecationWarning
           +-- RuntimeWarning
           +-- SyntaxWarning
           +-- UserWarning
           +-- FutureWarning
           +-- ImportWarning
           +-- UnicodeWarning
           +-- BytesWarning
           +-- ResourceWarning
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的异常层次结构，我们可以清晰的看出，BaseException为所有异常的基类，其下面分为：SystemExit、KeyboardInterrupt、GeneratorExit、Exception 四类异常，Exception 为所有非系统退出类异常的基类，Python 提倡继承 Exception 或其子类派生新的异常；Exception 下包含我们常见的多种异常如：MemoryError（内存溢出）、BlockingIOError（IO异常）、SyntaxError（语法错误异常）... 详细说明可以查看下面列表：</p><table><thead><tr><th style="text-align:left;">异常名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">BaseException</td><td style="text-align:left;">所有异常的基类</td></tr><tr><td style="text-align:left;">SystemExit</td><td style="text-align:left;">解释器请求退出</td></tr><tr><td style="text-align:left;">KeyboardInterrupt</td><td style="text-align:left;">用户中断执行(通常是输入^C)</td></tr><tr><td style="text-align:left;">Exception</td><td style="text-align:left;">常规错误的基类</td></tr><tr><td style="text-align:left;">StopIteration</td><td style="text-align:left;">迭代器没有更多的值</td></tr><tr><td style="text-align:left;">GeneratorExit</td><td style="text-align:left;">生成器(generator)发生异常来通知退出</td></tr><tr><td style="text-align:left;">StandardError</td><td style="text-align:left;">所有的内建标准异常的基类</td></tr><tr><td style="text-align:left;">ArithmeticError</td><td style="text-align:left;">所有数值计算错误的基类</td></tr><tr><td style="text-align:left;">FloatingPointError</td><td style="text-align:left;">浮点计算错误</td></tr><tr><td style="text-align:left;">OverflowError</td><td style="text-align:left;">数值运算超出最大限制</td></tr><tr><td style="text-align:left;">ZeroDivisionError</td><td style="text-align:left;">除(或取模)零 (所有数据类型)</td></tr><tr><td style="text-align:left;">AssertionError</td><td style="text-align:left;">断言语句失败</td></tr><tr><td style="text-align:left;">AttributeError</td><td style="text-align:left;">对象没有这个属性</td></tr><tr><td style="text-align:left;">EOFError</td><td style="text-align:left;">没有内建输入,到达EOF 标记</td></tr><tr><td style="text-align:left;">EnvironmentError</td><td style="text-align:left;">操作系统错误的基类</td></tr><tr><td style="text-align:left;">IOError</td><td style="text-align:left;">输入/输出操作失败</td></tr><tr><td style="text-align:left;">OSError</td><td style="text-align:left;">操作系统错误</td></tr><tr><td style="text-align:left;">WindowsError</td><td style="text-align:left;">系统调用失败</td></tr><tr><td style="text-align:left;">ImportError</td><td style="text-align:left;">导入模块/对象失败</td></tr><tr><td style="text-align:left;">LookupError</td><td style="text-align:left;">无效数据查询的基类</td></tr><tr><td style="text-align:left;">IndexError</td><td style="text-align:left;">序列中没有此索引(index)</td></tr><tr><td style="text-align:left;">KeyError</td><td style="text-align:left;">映射中没有这个键</td></tr><tr><td style="text-align:left;">MemoryError</td><td style="text-align:left;">内存溢出错误(对于Python 解释器不是致命的)</td></tr><tr><td style="text-align:left;">NameError</td><td style="text-align:left;">未声明/初始化对象 (没有属性)</td></tr><tr><td style="text-align:left;">UnboundLocalError</td><td style="text-align:left;">访问未初始化的本地变量</td></tr><tr><td style="text-align:left;">ReferenceError</td><td style="text-align:left;">弱引用(Weak reference)试图访问已经垃圾回收了的对象</td></tr><tr><td style="text-align:left;">RuntimeError</td><td style="text-align:left;">一般的运行时错误</td></tr><tr><td style="text-align:left;">NotImplementedError</td><td style="text-align:left;">尚未实现的方法</td></tr><tr><td style="text-align:left;">SyntaxError</td><td style="text-align:left;">Python 语法错误</td></tr><tr><td style="text-align:left;">IndentationError</td><td style="text-align:left;">缩进错误</td></tr><tr><td style="text-align:left;">TabError</td><td style="text-align:left;">Tab 和空格混用</td></tr><tr><td style="text-align:left;">SystemError</td><td style="text-align:left;">一般的解释器系统错误</td></tr><tr><td style="text-align:left;">TypeError</td><td style="text-align:left;">对类型无效的操作</td></tr><tr><td style="text-align:left;">ValueError</td><td style="text-align:left;">传入无效的参数</td></tr><tr><td style="text-align:left;">UnicodeError</td><td style="text-align:left;">Unicode 相关的错误</td></tr><tr><td style="text-align:left;">UnicodeDecodeError</td><td style="text-align:left;">Unicode 解码时的错误</td></tr><tr><td style="text-align:left;">UnicodeEncodeError</td><td style="text-align:left;">Unicode 编码时错误</td></tr><tr><td style="text-align:left;">UnicodeTranslateError</td><td style="text-align:left;">Unicode 转换时错误</td></tr><tr><td style="text-align:left;">Warning</td><td style="text-align:left;">警告的基类</td></tr><tr><td style="text-align:left;">DeprecationWarning</td><td style="text-align:left;">关于被弃用的特征的警告</td></tr><tr><td style="text-align:left;">FutureWarning</td><td style="text-align:left;">关于构造将来语义会有改变的警告</td></tr><tr><td style="text-align:left;">OverflowWarning</td><td style="text-align:left;">旧的关于自动提升为长整型(long)的警告</td></tr><tr><td style="text-align:left;">PendingDeprecationWarning</td><td style="text-align:left;">关于特性将会被废弃的警告</td></tr><tr><td style="text-align:left;">RuntimeWarning</td><td style="text-align:left;">可疑的运行时行为(runtime behavior)的警告</td></tr><tr><td style="text-align:left;">SyntaxWarning</td><td style="text-align:left;">可疑的语法的警告</td></tr><tr><td style="text-align:left;">UserWarning</td><td style="text-align:left;">用户代码生成的警告</td></tr></tbody></table><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h3><p>Python 程序捕捉异常使用 try/except 语句，先看个例子：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>
<span class="token comment">#1、被除数为 0，未捕获异常</span>
<span class="token keyword">def</span> <span class="token function">getNum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> n
<span class="token keyword">print</span><span class="token punctuation">(</span>getNum<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#输出结果：ZeroDivisionError: division by zero</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getNum</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">10</span><span class="token operator">/</span>num
        <span class="token keyword">except</span> IOError<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Error IOError argument.&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Error ZeroDivisionError argument.&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>getNum<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
输出结果：
Error: ZeroDivisionError argument.
None
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>try 语句的工作方式为：</p><ul><li>首先，执行 try 子句 （在 try 和 except 关键字之间的部分）；</li><li>如果没有异常发生， except 子句 在 try 语句执行完毕后就被忽略了；</li><li>如果在 try 子句执行过程中发生了异常，那么该子句其余的部分就会被忽略；</li><li>如果异常匹配于 except 关键字后面指定的异常类型，就执行对应的except子句，然后继续执行 try 语句之后的代码；</li><li>如果发生了一个异常，在 except 子句中没有与之匹配的分支，它就会传递到上一级 try 语句中；</li><li>如果最终仍找不到对应的处理语句，它就成为一个 未处理异常，终止程序运行，显示提示信息。</li></ul><p>try/except 语句还可以带有一个 else、finally子句，示例如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getNum</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;try --&gt;&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token operator">/</span> num<span class="token punctuation">)</span>
        <span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;except --&gt; Error: ZeroDivisionError argument.&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;else --&gt;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">finally</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;finally --&gt;&#39;</span><span class="token punctuation">)</span>


    <span class="token keyword">print</span><span class="token punctuation">(</span>getNum<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
1、调用：getNum(0)
输出结果：
except --&gt; Error: ZeroDivisionError argument.
finally --&gt;

2、调用：getNum(1)
输出结果：
try --&gt;  10.0
else --&gt;
finally --&gt;
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，else 子句只能出现在所有 except 子句之后，只有在没有出现异常时执行；finally 子句放在最后，无论是否出现异常都会执行。</p><h3 id="抛出异常" tabindex="-1"><a class="header-anchor" href="#抛出异常"><span>抛出异常</span></a></h3><p>使用 raise 语句允许强制抛出一个指定的异常，要抛出的异常由 raise 的唯一参数标识，它必需是一个异常实例或异常类（继承自 Exception 的类），如：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">raise</span> NameError<span class="token punctuation">(</span><span class="token string">&#39;llll&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常"><span>自定义异常</span></a></h3><p>正常来说，Python 提供的异常类型已经满足我们的使用了,但是有时候我们有定制性的需求，我们可以自定义异常类，继承自 Error 或 Exception 类就可以了，看个例子：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyExc</span><span class="token punctuation">(</span>Exception<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 继承Exception</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;被除数不能为0&#39;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">getNum</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                exc <span class="token operator">=</span> MyExc<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>exc<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">/</span> n<span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">pass</span>


    <span class="token keyword">print</span><span class="token punctuation">(</span>getNum<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
1、调用 getNum(1)，输出结果为：
10.0

2、调用 getNum(0)，输出结果为：
被除数不能为0
&#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个自定义的异常例子中，当参数 n 不为 0 时，则正常，当 n 等于 0，则抛出异常，自定义异常在实际应用中很少用到，了解即可。</p>`,30),l=[i];function r(o,d){return t(),e("div",null,l)}const u=n(a,[["render",r],["__file","Python 基础(14)错误和异常.html.vue"]]),v=JSON.parse(`{"path":"/notes/python/%E5%9F%BA%E7%A1%80/Python%20%E5%9F%BA%E7%A1%80(14)%E9%94%99%E8%AF%AF%E5%92%8C%E5%BC%82%E5%B8%B8.html","title":"Python 基础(14)错误和异常","lang":"zh-CN","frontmatter":{"title":"Python 基础(14)错误和异常","description":"错误 错误 通常是指程序中的 语法错误 或 逻辑错误，来通过两个 Python 例子看一下： 语法错误示例 我们编写程序通常使用开发工具编写，比如：我使用 Pycharm 工具编写 Python 程序，像这种语法错误，在编写程序时，编译器就会检测出来并提示我们，因此，我们编写好的程序几乎不会出现这种问题。 逻辑错误示例 逻辑错误编译器是不会提示我们的，...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/python/%E5%9F%BA%E7%A1%80/Python%20%E5%9F%BA%E7%A1%80(14)%E9%94%99%E8%AF%AF%E5%92%8C%E5%BC%82%E5%B8%B8.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"Python 基础(14)错误和异常"}],["meta",{"property":"og:description","content":"错误 错误 通常是指程序中的 语法错误 或 逻辑错误，来通过两个 Python 例子看一下： 语法错误示例 我们编写程序通常使用开发工具编写，比如：我使用 Pycharm 工具编写 Python 程序，像这种语法错误，在编写程序时，编译器就会检测出来并提示我们，因此，我们编写好的程序几乎不会出现这种问题。 逻辑错误示例 逻辑错误编译器是不会提示我们的，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T15:41:59.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:modified_time","content":"2024-05-15T15:41:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 基础(14)错误和异常\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T15:41:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":2,"title":"错误","slug":"错误","link":"#错误","children":[]},{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[{"level":3,"title":"Python 内置异常","slug":"python-内置异常","link":"#python-内置异常","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]},{"level":3,"title":"抛出异常","slug":"抛出异常","link":"#抛出异常","children":[]},{"level":3,"title":"自定义异常","slug":"自定义异常","link":"#自定义异常","children":[]}]}],"git":{"createdTime":1715776912000,"updatedTime":1715787719000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":5.38,"words":1615},"filePathRelative":"notes/python/基础/Python 基础(14)错误和异常.md","localizedDate":"2024年5月15日","excerpt":"<h2>错误</h2>\\n<p>错误 通常是指程序中的 语法错误 或 逻辑错误，来通过两个 Python 例子看一下：</p>\\n<p><strong>语法错误示例</strong></p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\"># print前面少了:</span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token boolean\\">True</span>\\n\\t<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'hello'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}`);export{u as comp,v as data};
