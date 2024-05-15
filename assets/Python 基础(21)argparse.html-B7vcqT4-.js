import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-D0Nm-BYw.js";const t={},p=e(`<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1.简介</span></a></h2><p>argparse 模块主要用于处理 Python 命令行参数和选项，程序定义好所需参数后，该模块会通过 <code>sys.argv</code> 解析出那些参数；除此之外，argparse 模块还会自动生成帮助和使用手册，并在用户给程序传入无效参数时报出错误信息。使用 argparse 模块，我们可以轻松的编写出用户友好的命令行接口。</p><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2.使用</span></a></h2><p>我们先来看一个简单示例：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> argparse

    <span class="token comment"># 创建解析对象</span>
    parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span><span class="token punctuation">)</span>

    parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件名为 <code>test.py</code>，在控制输入命令：<code>python test.py --help</code>，执行结果：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>usage<span class="token punctuation">:</span> test<span class="token punctuation">.</span>py <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token punctuation">]</span>

optional arguments<span class="token punctuation">:</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">help</span>  show this <span class="token builtin">help</span> message <span class="token keyword">and</span> exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的执行结果，我们可以看出 Python 的可选参数包括：<code>--help</code> 和其简写 <code>-h</code>，Python 使用 <code>-</code> 来指定短参数，使用 <code>--</code> 来指定长参数 ，我们执行一下 <code>python test.py -h</code>，执行结果：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>usage<span class="token punctuation">:</span> test<span class="token punctuation">.</span>py <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token punctuation">]</span>

optional arguments<span class="token punctuation">:</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">help</span>  show this <span class="token builtin">help</span> message <span class="token keyword">and</span> exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用未定义的参数会报错，如：执行命令 <code>python test.py -a</code>，执行结果：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>usage<span class="token punctuation">:</span> test<span class="token punctuation">.</span>py <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token punctuation">]</span>
test<span class="token punctuation">.</span>py<span class="token punctuation">:</span> error<span class="token punctuation">:</span> unrecognized arguments<span class="token punctuation">:</span> <span class="token operator">-</span>a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们看一下如何自定义参数，因为上面示例中 <code>ArgumentParser()</code> 和 <code>parse_args()</code> 函数，我们还没有详细说，所以这里我们也具体看一下：</p><p><strong>ArgumentParser(prog=None, usage=None, description=None, epilog=None, parents=[], formatter_class=argparse.HelpFormatter, prefix_chars=&#39;-&#39;, fromfile_prefix_chars=None, argument_default=None, conflict_handler=&#39;error&#39;, add_help=True, allow_abbrev=True)</strong></p><p>这个方法是用来创建解析器对象的，看一下方法中每一个参数的含义：</p><ul><li>prog：程序的名称（默认：sys.argv[0]）</li><li>usage：描述程序用途的字符串（默认值：从添加到解析器的参数生成）</li><li>description：在参数帮助文档之前显示的文本（默认值：无）</li><li>epilog：在参数帮助文档之后显示的文本（默认值：无）</li><li>parents：一个 ArgumentParser 对象的列表，它们的参数也应包含在内</li><li>formatter_class：用于自定义帮助文档输出格式的类</li><li>prefix_chars：可选参数的前缀字符集合（默认值：&#39;-&#39;）</li><li>fromfile_prefix_chars：当需要从文件中读取其他参数时，用于标识文件名的前缀字符集合（默认值：None）</li><li>argument_default：参数的全局默认值（默认值：None）</li><li>conflict_handler：解决冲突选项的策略（通常是不必要的）</li><li>add_help：为解析器添加一个 -h/--help 选项（默认值：True）</li><li>allow_abbrev：如果缩写是无歧义的，则允许缩写长选项 （默认值：True）</li></ul><p><strong>parse_args(args=None, namespace=None)</strong></p><p>用来解析参数，看一下参数说明：</p><ul><li>args：要分析的字符串列表，默认取自 sys.argv</li><li>namespace：命名空间</li></ul><p><strong>add_argument(name or flags...[, action][, nargs][, const][, default][, type][, choices][, required][, help][, metavar][, dest])</strong></p><p>定义单个的命令行参数应当如何解析，看一下参数说明：</p><ul><li>name or flags：一个命名或者一个选项字符串的列表，例如：-f，--foo</li><li>action：当参数在命令行中出现时使用的动作基本类型</li><li>nargs：命令行参数应当消耗的数目</li><li>const：被一些 action 和 nargs 选择所需求的常数</li><li>default：当参数未在命令行中出现时使用的值</li><li>type：命令行参数应当被转换成的类型</li><li>choices：可用的参数的容器</li><li>required：此命令行选项是否可省略</li><li>help：一个选项作用的简单描述</li><li>metavar：在使用方法消息中使用的参数值示例</li><li>dest：被添加到 parse_args() 所返回对象上的属性名</li></ul><p>下面我们通过具体示例看一下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> argparse

parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span>
        <span class="token string">&#39;-n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;--name&#39;</span><span class="token punctuation">,</span> dest<span class="token operator">=</span><span class="token string">&#39;rname&#39;</span><span class="token punctuation">,</span> required<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">&#39;increase output name&#39;</span>
    <span class="token punctuation">)</span>
args <span class="token operator">=</span> parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>
name <span class="token operator">=</span> args<span class="token punctuation">.</span>rname
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先在控制台执行命令 <code>python test.py -h</code>，执行结果：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>
usage<span class="token punctuation">:</span> test<span class="token punctuation">.</span>py <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token punctuation">]</span> <span class="token operator">-</span>n RNAME

optional arguments<span class="token punctuation">:</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">help</span>            show this <span class="token builtin">help</span> message <span class="token keyword">and</span> exit
  <span class="token operator">-</span>n RNAME<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token operator">-</span>name RNAME
                        increase output name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到参数已经添加进来了，接着执行命令 <code>python test.py -n Jhon</code> 或 <code>python test.py --name Jhon</code>，执行结果：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>Hello Jhon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从结果可以看出我们已经获取了控制台中输入的参数值了。</p>`,28),o=[p];function i(r,l){return a(),s("div",null,o)}const d=n(t,[["render",i],["__file","Python 基础(21)argparse.html.vue"]]),m=JSON.parse(`{"path":"/notes/python/%E5%9F%BA%E7%A1%80/Python%20%E5%9F%BA%E7%A1%80(21)argparse.html","title":"Python 基础(21)argparse","lang":"zh-CN","frontmatter":{"title":"Python 基础(21)argparse","description":"1.简介 argparse 模块主要用于处理 Python 命令行参数和选项，程序定义好所需参数后，该模块会通过 sys.argv 解析出那些参数；除此之外，argparse 模块还会自动生成帮助和使用手册，并在用户给程序传入无效参数时报出错误信息。使用 argparse 模块，我们可以轻松的编写出用户友好的命令行接口。 2.使用 我们先来看一个简单示...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/python/%E5%9F%BA%E7%A1%80/Python%20%E5%9F%BA%E7%A1%80(21)argparse.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"Python 基础(21)argparse"}],["meta",{"property":"og:description","content":"1.简介 argparse 模块主要用于处理 Python 命令行参数和选项，程序定义好所需参数后，该模块会通过 sys.argv 解析出那些参数；除此之外，argparse 模块还会自动生成帮助和使用手册，并在用户给程序传入无效参数时报出错误信息。使用 argparse 模块，我们可以轻松的编写出用户友好的命令行接口。 2.使用 我们先来看一个简单示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T15:41:59.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:modified_time","content":"2024-05-15T15:41:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 基础(21)argparse\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T15:41:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.使用","slug":"_2-使用","link":"#_2-使用","children":[]}],"git":{"createdTime":1715787719000,"updatedTime":1715787719000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":3.31,"words":993},"filePathRelative":"notes/python/基础/Python 基础(21)argparse.md","localizedDate":"2024年5月15日","excerpt":"<h2>1.简介</h2>\\n<p>argparse 模块主要用于处理 Python 命令行参数和选项，程序定义好所需参数后，该模块会通过 <code>sys.argv</code> 解析出那些参数；除此之外，argparse 模块还会自动生成帮助和使用手册，并在用户给程序传入无效参数时报出错误信息。使用 argparse 模块，我们可以轻松的编写出用户友好的命令行接口。</p>\\n<h2>2.使用</h2>\\n<p>我们先来看一个简单示例：</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'__main__'</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">import</span> argparse\\n\\n    <span class=\\"token comment\\"># 创建解析对象</span>\\n    parser <span class=\\"token operator\\">=</span> argparse<span class=\\"token punctuation\\">.</span>ArgumentParser<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n    parser<span class=\\"token punctuation\\">.</span>parse_args<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre></div>","autoDesc":true}`);export{d as comp,m as data};
