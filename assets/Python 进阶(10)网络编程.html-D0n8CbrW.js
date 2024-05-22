import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as t,e as a}from"./app-DhJvd_8z.js";const e={},p=a(`<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>网络编程主要的工作就是在发送端将信息通过指定的协议进行组装包，在接收端按照规定好的协议对包进行解析并提取出对应的信息，最终达到通信的目的。传输协议主要有 TCP 和 UDP，TCP 需要建立连接，是可靠的、基于字节流的协议，通常与 IP 协议共同使用；UDP 不需要建立连接，可靠性差，但速度更快。</p><p>网络编程有一个重要的概念 socket（套接字），应用程序可以通过它发送或接收数据，套接字允许应用程序将 I/O 插入到网络中，并与网络中的其他应用程序进行通信。</p><p>Python 提供了如下两个 socket 模块：</p><ul><li><strong>Socket</strong>：提供了标准的 BSD Sockets API，可以访问底层操作系统 Socket 接口的全部方法。</li><li><strong>SocketServer</strong>：提供了服务器中心类，可以简化网络服务器的开发。</li></ul><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2.使用</span></a></h2><h3 id="_2-1-api介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-api介绍"><span>2.1 API介绍</span></a></h3><p>Python 中通过 socket() 函数来创建套接字对象，具体格式如下：</p><p><strong>socket.socket(family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)</strong></p><ul><li>family：套接字协议族，可以使用 AF_UNIX（只能用于单一的 Unix 系统进程间通信）、AF_INET（服务器之间网络通信）</li><li>type：套接字类型，可以使用 SOCK_STREAM（面向连接的）、SOCK_DGRAM（非连接的）</li></ul><p>套接字对象服务端方法：</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">bind(address)</td><td style="text-align:left;">将套接字绑定到地址，在 AF_INET 下以元组 (host,port) 的形式表示地址</td></tr><tr><td style="text-align:left;">listen([backlog])</td><td style="text-align:left;">开始监听 TCP 传入连接，backlog 指定在拒绝连接之前，操作系统可以挂起的最大连接数量，至少为1，大部分应用程序设为 5 就可以了</td></tr><tr><td style="text-align:left;">accept()</td><td style="text-align:left;">接受 TCP 连接并返回 (conn,address)，conn 是新的套接字对象，可以用来接收、发送数据，address 是连接客户端的地址</td></tr></tbody></table><p>套接字对象客户端方法：</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">connect(address)</td><td style="text-align:left;">连接到 address 处的套接字，格式一般为元组 (hostname,port)，如果连接出错，返回 socket.error 错误</td></tr><tr><td style="text-align:left;">connect_ex(address)</td><td style="text-align:left;">功能与 connect(address) 相同，但是成功返回 0，失败返回 errno 的值</td></tr></tbody></table><p>套接字对象公用方法：</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">recv(bufsize[, flags])</td><td style="text-align:left;">接受 TCP 套接字的数据，数据以字符串形式返回，bufsize 指定要接收的最大数据量，flag 提供有关消息的其他信息，通常可以忽略</td></tr><tr><td style="text-align:left;">send(bytes[, flags])</td><td style="text-align:left;">发送 TCP 数据，将 string 中的数据发送到连接的套接字，返回值是要发送的字节数量，该数量可能小于 string 的字节大小</td></tr><tr><td style="text-align:left;">sendall(bytes[, flags])</td><td style="text-align:left;">完整发送 TCP 数据，将 string 中的数据发送到连接的套接字，但在返回之前会尝试发送所有数据，成功返回 None，失败则抛出异常</td></tr><tr><td style="text-align:left;">recvfrom(bufsize[, flags])</td><td style="text-align:left;">接受 UDP 套接字的数据，与 recv() 类似，但返回值是 (data,address)，其中 data 是包含接收数据的字符串，address 是发送数据的套接字地址</td></tr><tr><td style="text-align:left;">sendto(bytes, flags, address)</td><td style="text-align:left;">发送 UDP 数据，将数据发送到套接字，address 是形式为 (ipaddr,port) 的元组，指定远程地址，返回值是发送的字节数</td></tr><tr><td style="text-align:left;">close()</td><td style="text-align:left;">关闭套接字</td></tr><tr><td style="text-align:left;">getpeername()</td><td style="text-align:left;">返回连接套接字的远程地址，类型通常是元组 (ipaddr,port)</td></tr><tr><td style="text-align:left;">getsockname()</td><td style="text-align:left;">返回套接字自己的地址，通常是一个元组 (ipaddr,port)</td></tr><tr><td style="text-align:left;">setsockopt(level,optname,value)</td><td style="text-align:left;">设置给定套接字选项的值</td></tr><tr><td style="text-align:left;">getsockopt(level, optname[, buflen])</td><td style="text-align:left;">返回套接字选项的值</td></tr><tr><td style="text-align:left;">settimeout(value)</td><td style="text-align:left;">设置套接字操作的超时时间，单位是秒</td></tr><tr><td style="text-align:left;">gettimeout()</td><td style="text-align:left;">返回当前超时时间</td></tr><tr><td style="text-align:left;">fileno()</td><td style="text-align:left;">返回套接字的文件描述符</td></tr><tr><td style="text-align:left;">setblocking(flag)</td><td style="text-align:left;">如果 flag 为 0，则将套接字设为非阻塞模式，否则将套接字设为阻塞模式（默认值）；非阻塞模式下，如果调用 recv() 没有发现任何数据或 send() 调用无法立即发送数据，那么将引起 socket.error 异常</td></tr><tr><td style="text-align:left;">makefile()</td><td style="text-align:left;">创建一个与该套接字相关连的文件</td></tr></tbody></table><h3 id="_2-2-tcp方式" tabindex="-1"><a class="header-anchor" href="#_2-2-tcp方式"><span>2.2 TCP方式</span></a></h3><p>我们来看一下如何通过 socket 以 TCP 方式进行通信。</p><p>服务端基本思路：</p><ul><li>创建套接字，绑定套接字到 IP 与端口</li><li>监听连接</li><li>不断接受客户端的连接请求</li><li>接收请求的数据，并向对方发送响应数据</li><li>传输完毕后，关闭套接字</li></ul><p>具体代码实现如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建端口套接字</span>
    sc <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># 绑定地址</span>
    sc<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 监听连接</span>
    sc<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  <span class="token comment"># 等待连接</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;等待客户端发送信息。。。&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 建立连接</span>
        sock<span class="token punctuation">,</span> addr <span class="token operator">=</span> sc<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 接收数据</span>
        data <span class="token operator">=</span> sock<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;服务端接收到消息：&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span>
        <span class="token comment"># 返回响应数据</span>
        sock<span class="token punctuation">.</span>sendall<span class="token punctuation">(</span>data<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># 关闭连接</span>
        sc<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端基本思路：</p><ul><li>创建套接字，连接服务端</li><li>连接后发送、接收数据</li><li>传输完毕后，关闭套接字</li></ul><p>具体代码实现如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># 连接服务器</span>
    s<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 向服务端发送数据</span>
    s<span class="token punctuation">.</span>sendall<span class="token punctuation">(</span><span class="token string">b&#39;hello&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 接收服务器响应</span>
    data <span class="token operator">=</span> s<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;客户端接收到响应数据：&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 关闭套接字</span>
    s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-udp方式" tabindex="-1"><a class="header-anchor" href="#_2-3-udp方式"><span>2.3 UDP方式</span></a></h3><p>我们再来看一下如何通过 socket 以 UDP 方式进行通信。</p><p>服务端基本思路：</p><ul><li>创建套接字，绑定套接字到 IP 与端口</li><li>接收客户端请求的数据</li><li>向客户端发送响应数据</li></ul><p>具体代码实现如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建端口套接字</span>
    sc <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
    <span class="token comment"># 绑定地址</span>
    sc<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  <span class="token comment"># 等待连接</span>

        <span class="token comment"># 接收数据</span>
        data<span class="token punctuation">,</span> addr <span class="token operator">=</span> sc<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;服务端接收到消息：&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># 返回响应数据</span>
        sc<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端基本思路：</p><ul><li>创建套接字</li><li>向服务端发送数据</li><li>接受服务端响应数据</li></ul><p>具体代码实现如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
    <span class="token comment"># 向服务端发送数据</span>
    s<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token string">b&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 接收服务器响应</span>
    data <span class="token operator">=</span> s<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;客户端接收到响应数据：&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 关闭套接字</span>
    s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),l=[p];function o(c,i){return s(),t("div",null,l)}const r=n(e,[["render",o],["__file","Python 进阶(10)网络编程.html.vue"]]),k=JSON.parse('{"path":"/notes/python/%E8%BF%9B%E9%98%B6/Python%20%E8%BF%9B%E9%98%B6(10)%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B.html","title":"Python 进阶(10)网络编程","lang":"zh-CN","frontmatter":{"title":"Python 进阶(10)网络编程","date":"2024-05-22T00:00:00.000Z","description":"1. 简介 网络编程主要的工作就是在发送端将信息通过指定的协议进行组装包，在接收端按照规定好的协议对包进行解析并提取出对应的信息，最终达到通信的目的。传输协议主要有 TCP 和 UDP，TCP 需要建立连接，是可靠的、基于字节流的协议，通常与 IP 协议共同使用；UDP 不需要建立连接，可靠性差，但速度更快。 网络编程有一个重要的概念 socket（套...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/python/%E8%BF%9B%E9%98%B6/Python%20%E8%BF%9B%E9%98%B6(10)%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"Python 进阶(10)网络编程"}],["meta",{"property":"og:description","content":"1. 简介 网络编程主要的工作就是在发送端将信息通过指定的协议进行组装包，在接收端按照规定好的协议对包进行解析并提取出对应的信息，最终达到通信的目的。传输协议主要有 TCP 和 UDP，TCP 需要建立连接，是可靠的、基于字节流的协议，通常与 IP 协议共同使用；UDP 不需要建立连接，可靠性差，但速度更快。 网络编程有一个重要的概念 socket（套..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-22T09:40:46.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:published_time","content":"2024-05-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-22T09:40:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 进阶(10)网络编程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-22T09:40:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.使用","slug":"_2-使用","link":"#_2-使用","children":[{"level":3,"title":"2.1 API介绍","slug":"_2-1-api介绍","link":"#_2-1-api介绍","children":[]},{"level":3,"title":"2.2 TCP方式","slug":"_2-2-tcp方式","link":"#_2-2-tcp方式","children":[]},{"level":3,"title":"2.3 UDP方式","slug":"_2-3-udp方式","link":"#_2-3-udp方式","children":[]}]}],"git":{"createdTime":1716370846000,"updatedTime":1716370846000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":5.13,"words":1540},"filePathRelative":"notes/python/进阶/Python 进阶(10)网络编程.md","localizedDate":"2024年5月22日","excerpt":"<h2>1. 简介</h2>\\n<p>网络编程主要的工作就是在发送端将信息通过指定的协议进行组装包，在接收端按照规定好的协议对包进行解析并提取出对应的信息，最终达到通信的目的。传输协议主要有 TCP 和 UDP，TCP 需要建立连接，是可靠的、基于字节流的协议，通常与 IP 协议共同使用；UDP 不需要建立连接，可靠性差，但速度更快。</p>\\n<p>网络编程有一个重要的概念 socket（套接字），应用程序可以通过它发送或接收数据，套接字允许应用程序将 I/O 插入到网络中，并与网络中的其他应用程序进行通信。</p>\\n<p>Python 提供了如下两个 socket 模块：</p>\\n<ul>\\n<li><strong>Socket</strong>：提供了标准的 BSD Sockets API，可以访问底层操作系统 Socket 接口的全部方法。</li>\\n<li><strong>SocketServer</strong>：提供了服务器中心类，可以简化网络服务器的开发。</li>\\n</ul>","autoDesc":true}');export{r as comp,k as data};
