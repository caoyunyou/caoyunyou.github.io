import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,f as o}from"./app-u4-S3goL.js";const r="/assets/%E4%BA%8C%E5%8F%89%E6%A0%91%E6%A1%88%E4%BE%8B-A4UkYA5h.png",e="/assets/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%BB%93%E7%82%B9%E6%83%85%E5%86%B5-CRm2PD8a.png",p="/assets/%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E6%A1%88%E4%BE%8B-sWLcjmW-.png",l="/assets/%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91%E6%A1%88%E4%BE%8B-DwV6WfRL.png",a="/assets/B%E6%A0%91%E6%A1%88%E4%BE%8B-DVGI_7Az.png",i="/assets/B_%E6%A0%91%E6%A1%88%E4%BE%8B-BHiAQTt_.png",g="/assets/%E8%AE%B0%E5%BD%95%E7%AE%80%E5%8D%95%E6%A8%A1%E5%9E%8B-DmNHB8Ni.png",c="/assets/%E6%95%B0%E6%8D%AE%E9%A1%B5%E7%B1%BB%E5%9E%8B%E6%A1%88%E4%BE%8B-0BT26gmo.png",B="/assets/B_%E6%A0%91%E7%BB%93%E6%9E%84-DWXRVaeY.png",h={},m=o('<h1 id="mysql-b-树索引" tabindex="-1"><a class="header-anchor" href="#mysql-b-树索引"><span>MySQL-B+树索引</span></a></h1><h3 id="b-树是什么" tabindex="-1"><a class="header-anchor" href="#b-树是什么"><span>B+树是什么？</span></a></h3><h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述：</span></a></h4><p>B+树是B树的一种变体，属于平衡多路查找树。</p><h4 id="b-树的演变" tabindex="-1"><a class="header-anchor" href="#b-树的演变"><span>B+树的演变：</span></a></h4><p>二叉树 --&gt; 二叉查找树 --&gt; 平衡二叉树 --&gt; B树 --&gt; B+树</p><h5 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树：</span></a></h5><p><strong>概念：</strong></p><p>二叉树是n（n&gt;=0）个结点的有限集合</p><ol><li><strong>由一个根节点加上两棵称为左子树和右子树组成二叉树</strong></li><li><strong>可能为空</strong></li></ol><img src="'+r+'" alt="二叉树案例"><p><strong>特点：</strong></p><ol><li><strong>每个结点的度不超过2（可以理解为二孩政策下的结点最多只能有两个孩子</strong></li><li><strong>每个结点的左子树和右子树顺序不能颠倒，所以二叉树是有序树</strong></li></ol><p><strong>任意二叉树都是由下面几种情况所组成的</strong></p><img src="'+e+'" alt="二叉树结点情况"><h5 id="二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉查找树"><span>二叉查找树:</span></a></h5><p><strong>概念：</strong></p><p>二叉查找树(BST)也称<strong>二叉排序树</strong>或<strong>二叉搜索树</strong>，顾名思义，它的功能是为了查找数据的，它在二叉树的基础之上增加个几个限制条件。</p><p><strong>特点：</strong></p><ol><li>若它的左子树不为空，则左子树上所有节点的值都小于根节点的值。</li><li>若它的右子树不为空，则右子树上所有节点的值都大于根节点的值。</li><li>它的左右子树也分别为二叉搜索树。</li></ol><p>即：对于二叉搜索树而言，其中的每个结点必然满足，<strong>左子结点的值 &lt; 当前结点的值 &lt; 右子节点的值</strong> 【如果有左右子节点的话】</p><img src="'+p+'" alt="二叉搜索树案例"><h5 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树"><span>平衡二叉树：</span></a></h5><p><strong>概念：</strong></p><p>平衡二叉树(AVL)也叫自平衡二叉搜索树（Self-Balancing Binary Search Tree），所以其本质也是一颗<strong>二叉搜索树</strong>。</p><p>平衡指的是<strong>每个结点的左右子树的高度差值需要维持在1以内</strong>，不出现左右子树高度差异过大造成数据分散不平衡的情况。</p><p><strong>特点：</strong></p><ol><li>左子树和右子树的高度之差的<strong>绝对值小于等于1</strong></li><li><strong>左子树和右子树也是平衡二叉树</strong></li></ol><p>左右子树的高度差被称为平衡因子**（平衡因子=右子树高度-左子树高度）**</p><p>因此平衡二叉树所有结点的平衡因子只能是 -1，0，1</p><img src="'+l+'" alt="平衡二叉树案例"><h5 id="b树" tabindex="-1"><a class="header-anchor" href="#b树"><span>B树：</span></a></h5><p><strong>注意：</strong> <strong>B-树</strong>就是<strong>B树</strong>，中间的 <strong>-</strong> 只是连接符，不是减号，B-树 不叫 B减树 。这个名称是由 <strong>B-Tree</strong> 翻译过来的，只是翻译让人误解了。</p><p><strong>概念：</strong></p><p>B树又叫<strong>平衡多路查找树</strong>，平衡是左右子树平衡，多路是相对于二叉而言的。</p><p><strong>B树的阶：</strong></p><p>所谓的阶指的就是当前B树中，<strong>所有结点的的最大子节点个数</strong>，如果最大个数为 m ,那么这个B树就称为 m阶树。<strong>【m&gt;=2】</strong></p><p><strong>提要：</strong></p><ol><li><p><strong>关键字：k</strong></p><p>关键字其实就是B树进行搜索的key</p></li><li><p><strong>存储值(映射数据)：v</strong></p><p>对应关键字存储的数据信息value</p></li></ol><p><strong>特点：【假如B树的阶为 m】</strong></p><ol><li>根节点至少有两个子节点，即子树数量范围**[2,m]**</li><li>每个叶子结点结点至少有**ceil(m/2)**个子结点，这里ceil代表向上取整。<strong>除了根节点</strong></li><li>平衡、每个结点的所有子树高度一致，也就是说<strong>所有的叶子节点都在同一层</strong></li><li>对于非根结点，结点内的关键字个数范围为**[ceil(m/2)-1,m-1]**</li><li>结点内各关键字互不相等且按从小到大排列。</li><li>拥有二叉搜索树的性质。父结点的若干关键字作为分离值分成多个子树，左子树小于对应分离值，对应分离值小于右子树</li></ol><img src="'+a+'" alt="B树案例"><h5 id="b-树" tabindex="-1"><a class="header-anchor" href="#b-树"><span>B+树：</span></a></h5><p><strong>概念：</strong></p><p>B+树是B树的变体，也是一种 <strong>平衡多路查找树</strong>，B+树与B树的基本特征一致，但是又有一些区别。</p><p><strong>提要：</strong></p><ol><li><p><strong>关键字：k</strong></p><p>关键字其实就是B树进行搜索的key</p></li><li><p><strong>存储值(映射数据)：v</strong></p><p>对应关键字存储的数据信息value</p></li></ol><p><strong>特点：【假如B树的阶为 m】</strong></p><ol><li>每个分支结点最多有m棵子树(孩子结点)。</li><li>非叶根结点至少有两棵子树，其他每个分支结点至少有「m/2]棵子树。</li><li>结点的子树个数与数据信息个数相等。</li><li>结点的子树指针**p[i]<strong>指向关键字值大小在</strong>[k[i]，k[i+1])**区间之间</li><li>所有叶子节点增加一个链接指针链接在一起。</li><li>所有关键字及其映射数据都在叶子节点出现</li></ol><img src="'+i+'" alt="B+树案例"><p>B+树与B树最大的区别就是数据存放方式。B树的数据存放在每个结点，B+树的数据只存放在叶子结点。</p><h3 id="mysql中的b-树索引" tabindex="-1"><a class="header-anchor" href="#mysql中的b-树索引"><span>MySQL中的B+树索引：</span></a></h3><h4 id="mysql中的b-树索引与普通b-树的区别" tabindex="-1"><a class="header-anchor" href="#mysql中的b-树索引与普通b-树的区别"><span>MySQL中的B+树索引与普通B+树的区别：</span></a></h4><ol><li>MySQL中的结点使用的数据结构为数据页</li><li>MySQL中每一层的结点使用双向指针关联组成一个双向链表</li></ol><h4 id="mysql数据页的结构" tabindex="-1"><a class="header-anchor" href="#mysql数据页的结构"><span>MySQL数据页的结构：</span></a></h4><p>MySQL中数据页是由许多条记录组成的</p><p>其中记录的简化结构如下：</p><img src="'+g+'" alt="记录简单模型"><p>其中各部分具体含义为：</p><ol><li>record_type：记录头信息的一项属性，表示记录的类型。 <ul><li><code>0</code>:表示普通记录</li><li><code>1</code>:表示目录项记录</li><li><code>2</code>:表示最小记录</li><li><code>3</code>:表示最大记录</li></ul></li><li>next_record：记录头信息的一项属性，表示下一条地址相对于本条记录的地址偏移量。</li><li>各个列的值</li><li>其他信息：其他隐藏列的值以及记录的额外信息。</li></ol><p>数据页的格式：</p><img src="'+c+'" alt="数据页类型案例"><p>数据页左右两侧边界为record_type = 2 和 record_type = 3 的最大最小记录，中间的是record_type = 0的普通记录或者record_type = 1的目录项记录。数据页内的行记录形成单向链表。</p><p>当record_type = 0时，记录类型就是普通的数据记录（叶子结点），存储的是具体的数据。当record_type = 1时，记录的类型就是目录项（即非叶子结点），记录会携带子页指针信息，指向子页。</p><h4 id="b-树索引结构" tabindex="-1"><a class="header-anchor" href="#b-树索引结构"><span>B+树索引结构：</span></a></h4><p>在Mysql中，B+树以数据页作为结点，同一层的数据页使用双向指针形成双向链表。</p><p><strong>非叶子结点</strong>中的数据页组成为：最大最小记录、目录项记录</p><p><strong>叶子结点</strong>的数据页组成为：最大最小记录、普通数据记录</p><p>其中数据页中将 <code>最小记录 -&gt; 普通记录或者目录项记录 -&gt;最大记录</code> 由单向指针串联，组成一个单向链表，这样的好处是，范围查询时或者limit时，方便查询数据。</p><img src="'+B+'" alt="B+树结构">',70),d=[m];function E(y,_){return s(),n("div",null,d)}const f=t(h,[["render",E],["__file","MySQL-B_树索引.html.vue"]]),u=JSON.parse('{"path":"/notes/mysql/MySQL-B_%E6%A0%91%E7%B4%A2%E5%BC%95.html","title":"MySQL-B+树索引","lang":"zh-CN","frontmatter":{"description":"MySQL-B+树索引 B+树是什么？ 概述： B+树是B树的一种变体，属于平衡多路查找树。 B+树的演变： 二叉树 --> 二叉查找树 --> 平衡二叉树 --> B树 --> B+树 二叉树： 概念： 二叉树是n（n>=0）个结点的有限集合 由一个根节点加上两棵称为左子树和右子树组成二叉树 可能为空 二叉树案例 特点： 每个结点的度不超过2（可以理...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/mysql/MySQL-B_%E6%A0%91%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"MySQL-B+树索引"}],["meta",{"property":"og:description","content":"MySQL-B+树索引 B+树是什么？ 概述： B+树是B树的一种变体，属于平衡多路查找树。 B+树的演变： 二叉树 --> 二叉查找树 --> 平衡二叉树 --> B树 --> B+树 二叉树： 概念： 二叉树是n（n>=0）个结点的有限集合 由一个根节点加上两棵称为左子树和右子树组成二叉树 可能为空 二叉树案例 特点： 每个结点的度不超过2（可以理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T12:41:52.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:modified_time","content":"2024-05-15T12:41:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL-B+树索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T12:41:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":3,"title":"B+树是什么？","slug":"b-树是什么","link":"#b-树是什么","children":[]},{"level":3,"title":"MySQL中的B+树索引：","slug":"mysql中的b-树索引","link":"#mysql中的b-树索引","children":[]}],"git":{"createdTime":1715776912000,"updatedTime":1715776912000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":6.12,"words":1836},"filePathRelative":"notes/mysql/MySQL-B+树索引.md","localizedDate":"2024年5月15日","excerpt":"\\n<h3>B+树是什么？</h3>\\n<h4>概述：</h4>\\n<p>B+树是B树的一种变体，属于平衡多路查找树。</p>\\n<h4>B+树的演变：</h4>\\n<p>二叉树 --&gt;  二叉查找树 --&gt; 平衡二叉树 --&gt; B树 --&gt; B+树</p>\\n<h5>二叉树：</h5>\\n<p><strong>概念：</strong></p>\\n<p>二叉树是n（n&gt;=0）个结点的有限集合</p>\\n<ol>\\n<li><strong>由一个根节点加上两棵称为左子树和右子树组成二叉树</strong></li>\\n<li><strong>可能为空</strong></li>\\n</ol>","autoDesc":true}');export{f as comp,u as data};
