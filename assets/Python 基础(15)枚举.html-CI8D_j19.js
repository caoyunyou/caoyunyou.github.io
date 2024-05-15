import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-u4-S3goL.js";const t="/assets/645-Bwv4hkxc.jpg",p="/assets/646-UvP8tKB3.jpg",o={},i=e('<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1 简介</span></a></h2><p>起初 Python 中并未内置枚举（enum）类型，枚举是在 Python3.4 添加的新功能，此时我们可能会有一个疑问：Python3.4 之前的版本还能不能使用枚举呢？</p><figure><img src="'+t+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>答案是可以使用，但是不能直接使用，使用之前需要先用 <code>pip install enum</code> 安装。</p><p><strong>什么是枚举？</strong></p><p>枚举可看作是一系列符号名称的集合，集合中每一个元素要保证唯一性和不可变，因此我们可以对枚举中元素进行恒等比较，通俗来讲枚举就是一系列常量的集合，枚举是可迭代的。</p><p><strong>枚举有什么作用？</strong></p><p>我们先来思考一个问题：不使用枚举我们如何定义常量呢？</p><figure><img src="'+p+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>常用的做法是采用变量名大写的方式来定义，这种方式虽然简单，但问题在于我们定义的仍然是变量、是可以被修改的，而常量是什么呢？简单来说就是不可变的量，枚举就有不可变的特性，所以枚举的主要作用就是用来定义常量的。</p><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2 使用</span></a></h2><h4 id="_2-1-创建" tabindex="-1"><a class="header-anchor" href="#_2-1-创建"><span>2.1 创建</span></a></h4><p>枚举语法与 class 语法相同，之前我们在Python 基础（十一）：面向对象中已经介绍过 class 了，枚举的定义可以通过继承 Enum 的方式来实现， 看一下示例：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum

    <span class="token keyword">class</span> <span class="token class-name">WeekDay</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Mon <span class="token operator">=</span> <span class="token number">0</span>
        Tue <span class="token operator">=</span> <span class="token number">1</span>
        Wed <span class="token operator">=</span> <span class="token number">2</span>
        Thu <span class="token operator">=</span> <span class="token number">3</span>
        Fri <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-访问" tabindex="-1"><a class="header-anchor" href="#_2-2-访问"><span>2.2 访问</span></a></h4><p>枚举成员及属性的访问如下所示：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment">## 枚举成员</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">)</span>
    <span class="token comment">## 枚举成员名称</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token comment">## 枚举成员值</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>枚举的迭代也很简单，如下所示：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment">## 方式1</span>
    <span class="token keyword">for</span> day <span class="token keyword">in</span> WeekDay<span class="token punctuation">:</span>
        <span class="token comment">## 枚举成员</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span>
        <span class="token comment">## 枚举成员名称</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>day<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token comment">## 枚举成员值</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>day<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

    <span class="token comment">## 方式2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-比较" tabindex="-1"><a class="header-anchor" href="#_2-3-比较"><span>2.3 比较</span></a></h4><p>枚举成员及属性可以使用 is 进行对象比较，还可以使用 == 进行值比较，看下示例</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">.</span>Mon <span class="token keyword">is</span> WeekDay<span class="token punctuation">.</span>Thu<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">.</span>Mon <span class="token operator">==</span> WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">.</span>name <span class="token operator">==</span> WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">.</span>value <span class="token operator">==</span> WeekDay<span class="token punctuation">.</span>Mon<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>枚举成员不能进行大小比较，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> WeekDay.Mon <span class="token operator">&lt;</span> WeekDay.Thu
TypeError: <span class="token string">&#39;&lt;&#39;</span> not supported between instances of <span class="token string">&#39;WeekDay&#39;</span> and <span class="token string">&#39;WeekDay&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-确保枚举值唯一" tabindex="-1"><a class="header-anchor" href="#_2-4-确保枚举值唯一"><span>2.4 确保枚举值唯一</span></a></h4><p>我们定义枚举时，成员名称是不可以重复的，但成员值是可以重复的，如果想要保证成员值不可重复，可以通过装饰器 <code>@unique</code> 来实现，如下所示：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum<span class="token punctuation">,</span> unique


<span class="token decorator annotation punctuation">@unique</span>
<span class="token keyword">class</span> <span class="token class-name">WeekDay</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    Mon <span class="token operator">=</span> <span class="token number">0</span>
    Tue <span class="token operator">=</span> <span class="token number">1</span>
    Wed <span class="token operator">=</span> <span class="token number">2</span>
    Thu <span class="token operator">=</span> <span class="token number">3</span>
    Fri <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),c=[i];function l(r,u){return s(),a("div",null,c)}const m=n(o,[["render",l],["__file","Python 基础(15)枚举.html.vue"]]),v=JSON.parse('{"path":"/notes/python/Python%20%E5%9F%BA%E7%A1%80(15)%E6%9E%9A%E4%B8%BE.html","title":"Python 基础(15)枚举","lang":"zh-CN","frontmatter":{"title":"Python 基础(15)枚举","description":"1 简介 起初 Python 中并未内置枚举（enum）类型，枚举是在 Python3.4 添加的新功能，此时我们可能会有一个疑问：Python3.4 之前的版本还能不能使用枚举呢？ 图片图片 答案是可以使用，但是不能直接使用，使用之前需要先用 pip install enum 安装。 什么是枚举？ 枚举可看作是一系列符号名称的集合，集合中每一个元素要...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/python/Python%20%E5%9F%BA%E7%A1%80(15)%E6%9E%9A%E4%B8%BE.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"Python 基础(15)枚举"}],["meta",{"property":"og:description","content":"1 简介 起初 Python 中并未内置枚举（enum）类型，枚举是在 Python3.4 添加的新功能，此时我们可能会有一个疑问：Python3.4 之前的版本还能不能使用枚举呢？ 图片图片 答案是可以使用，但是不能直接使用，使用之前需要先用 pip install enum 安装。 什么是枚举？ 枚举可看作是一系列符号名称的集合，集合中每一个元素要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T12:41:52.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:modified_time","content":"2024-05-15T12:41:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 基础(15)枚举\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T12:41:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2 使用","slug":"_2-使用","link":"#_2-使用","children":[]}],"git":{"createdTime":1715776912000,"updatedTime":1715776912000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":2.14,"words":641},"filePathRelative":"notes/python/Python 基础(15)枚举.md","localizedDate":"2024年5月15日","excerpt":"<h2>1 简介</h2>\\n<p>起初 Python 中并未内置枚举（enum）类型，枚举是在 Python3.4 添加的新功能，此时我们可能会有一个疑问：Python3.4 之前的版本还能不能使用枚举呢？</p>\\n<figure><figcaption>图片</figcaption></figure>\\n<p>答案是可以使用，但是不能直接使用，使用之前需要先用 <code>pip install enum</code> 安装。</p>\\n<p><strong>什么是枚举？</strong></p>\\n<p>枚举可看作是一系列符号名称的集合，集合中每一个元素要保证唯一性和不可变，因此我们可以对枚举中元素进行恒等比较，通俗来讲枚举就是一系列常量的集合，枚举是可迭代的。</p>","autoDesc":true}');export{m as comp,v as data};
