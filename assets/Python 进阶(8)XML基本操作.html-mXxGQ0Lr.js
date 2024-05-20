import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-KMmNggxv.js";const e="/assets/659-DNulHM8Q.jpg",p={},o=t(`<h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h2><p>XML（Extensible Markup Language）中文译为可扩展标记语言，它是一种简单、灵活、易扩展的文本格式，它主要关注数据内容，常用来传送、存储数据。</p><p>当通过 XML 来传送数据时，自然会涉及到 XML 的解析工作，通常 Python 可以通过如下三种方式来解析 XML：</p><ul><li>**DOM：**该方式将整个 XML 读入内存，在内存中解析成一个树，通过对树的操作来操作 XML，该方式占用内存较大，解析速度较慢。</li><li>**SAX：**该方式将逐行扫描 XML 文档，边扫描边解析，占用内存较小，速度较快，缺点是不能像 DOM 方式那样长期留驻在内存，数据不是长久的，事件过后，若没保存数据，数据会丢失。</li><li>**ElementTree：**该方式几乎兼具了 DOM 方式与 SAX 方式的优点，占用内存较小、速度较快、使用也较为简单。</li></ul><h2 id="_2-写入" tabindex="-1"><a class="header-anchor" href="#_2-写入"><span>2. 写入</span></a></h2><p>首先，我们通过 Python 创建一个 XML 文档并向其中写入一些数据，实现代码如下所示：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> et
<span class="token keyword">import</span> xml<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>minidom <span class="token keyword">as</span> minidom

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建根节点</span>
    root <span class="token operator">=</span> et<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">)</span>
    names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">]</span>
    genders <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">]</span>
    ages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;18&#39;</span><span class="token punctuation">]</span>
    <span class="token comment"># 添加子节点</span>
    student1 <span class="token operator">=</span> et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&#39;student&#39;</span><span class="token punctuation">)</span>
    student2 <span class="token operator">=</span> et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&#39;student&#39;</span><span class="token punctuation">)</span>
    et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>student1<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>student1<span class="token punctuation">,</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text <span class="token operator">=</span> genders<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>student1<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text <span class="token operator">=</span> ages<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>student2<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>student2<span class="token punctuation">,</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text <span class="token operator">=</span> genders<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    et<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>student2<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text <span class="token operator">=</span> ages<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token comment"># 将根目录转化为树行结构</span>
    tree <span class="token operator">=</span> et<span class="token punctuation">.</span>ElementTree<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    rough_str <span class="token operator">=</span> et<span class="token punctuation">.</span>tostring<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 格式化</span>
    reparsed <span class="token operator">=</span> minidom<span class="token punctuation">.</span>parseString<span class="token punctuation">(</span>rough_str<span class="token punctuation">)</span>
    new_str <span class="token operator">=</span> reparsed<span class="token punctuation">.</span>toprettyxml<span class="token punctuation">(</span>indent<span class="token operator">=</span><span class="token string">&#39;\\t&#39;</span><span class="token punctuation">)</span>
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.xml&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 保存</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>new_str<span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看一下效果：</p><figure><img src="`+e+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="_3-解析" tabindex="-1"><a class="header-anchor" href="#_3-解析"><span>3. 解析</span></a></h2><p>我们分别使用 DOM、SAX、ElementTree 方式解析上面生成的 XML 文件。</p><h3 id="_3-1-dom-方式" tabindex="-1"><a class="header-anchor" href="#_3-1-dom-方式"><span>3.1 DOM 方式</span></a></h3><p>看一下如何通过 DOM 方式进行解析，实现代码如下所示：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>minidom <span class="token keyword">import</span> parse

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 读取文件</span>
    dom <span class="token operator">=</span> parse<span class="token punctuation">(</span><span class="token string">&#39;test.xml&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 获取文档元素对象</span>
    elem <span class="token operator">=</span> dom<span class="token punctuation">.</span>documentElement
    <span class="token comment"># 获取 student</span>
    stus <span class="token operator">=</span> elem<span class="token punctuation">.</span>getElementsByTagName<span class="token punctuation">(</span><span class="token string">&#39;student&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> stu <span class="token keyword">in</span> stus<span class="token punctuation">:</span>
        <span class="token comment"># 获取标签中内容</span>
        name <span class="token operator">=</span> stu<span class="token punctuation">.</span>getElementsByTagName<span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeValue
        gender <span class="token operator">=</span> stu<span class="token punctuation">.</span>getElementsByTagName<span class="token punctuation">(</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeValue
        age <span class="token operator">=</span> stu<span class="token punctuation">.</span>getElementsByTagName<span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeValue
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;name:&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">&#39;, gender:&#39;</span><span class="token punctuation">,</span> gender<span class="token punctuation">,</span> <span class="token string">&#39;, age:&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>name: 张三 , gender: 男 , age: <span class="token number">20</span>
name: 李四 , gender: 女 , age: <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-sax-方式" tabindex="-1"><a class="header-anchor" href="#_3-2-sax-方式"><span>3.2 SAX 方式</span></a></h3><p>看一下如何通过 SAX 方式进行解析，实现代码如下所示：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> xml<span class="token punctuation">.</span>sax


<span class="token keyword">class</span> <span class="token class-name">StudentHandler</span><span class="token punctuation">(</span>xml<span class="token punctuation">.</span>sax<span class="token punctuation">.</span>ContentHandler<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>CurrentData <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        self<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

    <span class="token comment"># 元素开始调用</span>
    <span class="token keyword">def</span> <span class="token function">startElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> attributes<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>CurrentData <span class="token operator">=</span> tag

    <span class="token comment"># 元素结束调用</span>
    <span class="token keyword">def</span> <span class="token function">endElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>CurrentData <span class="token operator">==</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;name:&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>CurrentData <span class="token operator">==</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;gender:&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>gender<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>CurrentData <span class="token operator">==</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;age:&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>CurrentData <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

    <span class="token comment"># 读取字符时调用</span>
    <span class="token keyword">def</span> <span class="token function">characters</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>CurrentData <span class="token operator">==</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>name <span class="token operator">=</span> content
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>CurrentData <span class="token operator">==</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>gender <span class="token operator">=</span> content
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>CurrentData <span class="token operator">==</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>age <span class="token operator">=</span> content


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建 XMLReader</span>
    parser <span class="token operator">=</span> xml<span class="token punctuation">.</span>sax<span class="token punctuation">.</span>make_parser<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 关闭命名空间</span>
    parser<span class="token punctuation">.</span>setFeature<span class="token punctuation">(</span>xml<span class="token punctuation">.</span>sax<span class="token punctuation">.</span>handler<span class="token punctuation">.</span>feature_namespaces<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment"># 重写 ContextHandler</span>
    Handler <span class="token operator">=</span> StudentHandler<span class="token punctuation">(</span><span class="token punctuation">)</span>
    parser<span class="token punctuation">.</span>setContentHandler<span class="token punctuation">(</span>Handler<span class="token punctuation">)</span>
    parser<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&#39;test.xml&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>name: 张三
gender: 男
age: <span class="token number">20</span>
name: 李四
gender: 女
age: <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-elementtree-方式" tabindex="-1"><a class="header-anchor" href="#_3-3-elementtree-方式"><span>3.3 ElementTree 方式</span></a></h3><p>看一下如何通过 ElementTree 方式进行解析，实现代码如下所示：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> xml<span class="token punctuation">.</span>etree<span class="token punctuation">.</span>ElementTree <span class="token keyword">as</span> et

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    tree <span class="token operator">=</span> et<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&#39;test.xml&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 根节点</span>
    root <span class="token operator">=</span> tree<span class="token punctuation">.</span>getroot<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> stu <span class="token keyword">in</span> root<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;name:&#39;</span><span class="token punctuation">,</span> stu<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&#39;, gender:&#39;</span><span class="token punctuation">,</span> stu<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&#39;, age:&#39;</span><span class="token punctuation">,</span> stu<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>name: 张三 , gender: 男 , age: <span class="token number">20</span>
name: 李四 , gender: 女 , age: <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),c=[o];function l(i,u){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","Python 进阶(8)XML基本操作.html.vue"]]),m=JSON.parse('{"path":"/notes/python/%E8%BF%9B%E9%98%B6/Python%20%E8%BF%9B%E9%98%B6(8)XML%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html","title":"Python 进阶(8)XML基本操作","lang":"zh-CN","frontmatter":{"title":"Python 进阶(8)XML基本操作","date":"2024-05-20T00:00:00.000Z","description":"1. 概述 XML（Extensible Markup Language）中文译为可扩展标记语言，它是一种简单、灵活、易扩展的文本格式，它主要关注数据内容，常用来传送、存储数据。 当通过 XML 来传送数据时，自然会涉及到 XML 的解析工作，通常 Python 可以通过如下三种方式来解析 XML： **DOM：**该方式将整个 XML 读入内存，在内...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/python/%E8%BF%9B%E9%98%B6/Python%20%E8%BF%9B%E9%98%B6(8)XML%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"Python 进阶(8)XML基本操作"}],["meta",{"property":"og:description","content":"1. 概述 XML（Extensible Markup Language）中文译为可扩展标记语言，它是一种简单、灵活、易扩展的文本格式，它主要关注数据内容，常用来传送、存储数据。 当通过 XML 来传送数据时，自然会涉及到 XML 的解析工作，通常 Python 可以通过如下三种方式来解析 XML： **DOM：**该方式将整个 XML 读入内存，在内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T15:12:12.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:published_time","content":"2024-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T15:12:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 进阶(8)XML基本操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-20T15:12:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. 写入","slug":"_2-写入","link":"#_2-写入","children":[]},{"level":2,"title":"3. 解析","slug":"_3-解析","link":"#_3-解析","children":[{"level":3,"title":"3.1 DOM 方式","slug":"_3-1-dom-方式","link":"#_3-1-dom-方式","children":[]},{"level":3,"title":"3.2 SAX 方式","slug":"_3-2-sax-方式","link":"#_3-2-sax-方式","children":[]},{"level":3,"title":"3.3 ElementTree 方式","slug":"_3-3-elementtree-方式","link":"#_3-3-elementtree-方式","children":[]}]}],"git":{"createdTime":1716217932000,"updatedTime":1716217932000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":2.64,"words":792},"filePathRelative":"notes/python/进阶/Python 进阶(8)XML基本操作.md","localizedDate":"2024年5月20日","excerpt":"<h2>1. 概述</h2>\\n<p>XML（Extensible Markup Language）中文译为可扩展标记语言，它是一种简单、灵活、易扩展的文本格式，它主要关注数据内容，常用来传送、存储数据。</p>\\n<p>当通过 XML 来传送数据时，自然会涉及到 XML 的解析工作，通常 Python 可以通过如下三种方式来解析 XML：</p>\\n<ul>\\n<li>**DOM：**该方式将整个 XML 读入内存，在内存中解析成一个树，通过对树的操作来操作 XML，该方式占用内存较大，解析速度较慢。</li>\\n<li>**SAX：**该方式将逐行扫描 XML 文档，边扫描边解析，占用内存较小，速度较快，缺点是不能像 DOM 方式那样长期留驻在内存，数据不是长久的，事件过后，若没保存数据，数据会丢失。</li>\\n<li>**ElementTree：**该方式几乎兼具了 DOM 方式与 SAX 方式的优点，占用内存较小、速度较快、使用也较为简单。</li>\\n</ul>","autoDesc":true}');export{d as comp,m as data};
