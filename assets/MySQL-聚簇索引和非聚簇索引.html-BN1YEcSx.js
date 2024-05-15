import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as t,f as n}from"./app-u4-S3goL.js";const r={},a=n('<h2 id="什么是聚簇索引" tabindex="-1"><a class="header-anchor" href="#什么是聚簇索引"><span>什么是聚簇索引？</span></a></h2><h4 id="概括" tabindex="-1"><a class="header-anchor" href="#概括"><span>概括：</span></a></h4><p>对于InnoDB而言，所谓的聚簇索引其实就是<code>_row_id</code>所在列(真实列或者伪列)或者列组对应的索引。</p><h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题：</span></a></h4><p>很多人就有点奇怪：不是主键的索引就是聚簇索引吗？</p><p>这个解答对，但是不完全对。</p><h4 id="解答" tabindex="-1"><a class="header-anchor" href="#解答"><span>解答：</span></a></h4><p>其实在<strong>InnoDB每个表都会有一个聚簇索引</strong>，因为按照InnoDB的格式而言，<strong>数据和聚簇索引是同一个文件，数据存放在聚簇索引的叶子结点。</strong></p><p>这种结构下，每个表都需要一个标识行记录唯一性的字段作为聚簇索引的键值。</p><p>在Mysql中存在一个隐藏列<code>_rowid</code>作为行记录的唯一标识，但是需要注意的是<code>_rowid</code> 并不是真实存在的列，本质是一个非空唯一列的别名。</p><ol><li><strong>如果表有主键,那么<code>_rowid</code>本质上就是主键,聚簇索引的键值就是主键值。</strong></li><li><strong>如果表没有主键,但有唯一非空索引,那么<code>_rowid</code>就对应该表的唯一索引列或列组，聚簇索引的键值也就是这个唯一非空索引列或列组。</strong></li><li><strong>如果1和2都不存在,才会使用InnoDB自动生成的6字节<code>_rowid</code>伪列作为聚簇索引键值。</strong></li></ol><h2 id="什么是非聚簇索引" tabindex="-1"><a class="header-anchor" href="#什么是非聚簇索引"><span>什么是非聚簇索引？</span></a></h2><h4 id="概括-1" tabindex="-1"><a class="header-anchor" href="#概括-1"><span>概括：</span></a></h4><p><strong>其实不管是聚簇索引还是非聚簇索引，结构其实都一样</strong>，都是B+树。只是<strong>聚簇索引叶子结点存的是行数据</strong>，而<strong>非聚簇索引叶子结点存的是<code>_rowid</code>所对应的值</strong>。【如果有疑问可以看看上面对<code>row_id</code>的解释】</p><h4 id="引申" tabindex="-1"><a class="header-anchor" href="#引申"><span>引申：</span></a></h4><p>所以这也是为什么有<strong>回表</strong>和<strong>覆盖索引</strong>的说法了。</p><p>对于非聚簇索引而言，如果<strong>查询的字段刚好存在于SQL使用到索引所在的列或者列组</strong>，那么他就不需要再通过<code>_rowid</code>对应的值去找聚簇索引了。这个情况就是<strong>索引覆盖</strong>。</p><p>反之，他就需要在<strong>查询完非聚簇索引之后，再通过<code>_rowid</code>对应的值重新查聚簇索引来补全所需要查询的字段。</strong>，这种情况就称之为<strong>回表</strong>。因为它进行了二次查询。</p><h4 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1"><span>问题：</span></a></h4><p>那么怎么避免回表呢？</p><p>很简单，先查出ID，再通过ID查一次。虽然有点离谱，但是方法其实就是这样。</p><p>案例：</p><p><code>SELECT a.NAME,a.AGE,a.GENDER FROM USER a,(SELECT ID FROM USER WHERE AGE &gt; 10) b WHERE a.ID = b.ID</code></p><p>当然这个方法实际上并不一定能提高效率，一般而言可以使用联合索引将需要查询的字段覆盖。</p><p>其实上面两种方法在理解了什么是非聚簇索引之后其实自己就能想出来。</p>',25),s=[a];function p(i,c){return o(),t("div",null,s)}const l=e(r,[["render",p],["__file","MySQL-聚簇索引和非聚簇索引.html.vue"]]),g=JSON.parse('{"path":"/notes/mysql/MySQL-%E8%81%9A%E7%B0%87%E7%B4%A2%E5%BC%95%E5%92%8C%E9%9D%9E%E8%81%9A%E7%B0%87%E7%B4%A2%E5%BC%95.html","title":"聚簇索引和非聚簇索引","lang":"zh-CN","frontmatter":{"title":"聚簇索引和非聚簇索引","description":"什么是聚簇索引？ 概括： 对于InnoDB而言，所谓的聚簇索引其实就是_row_id所在列(真实列或者伪列)或者列组对应的索引。 问题： 很多人就有点奇怪：不是主键的索引就是聚簇索引吗？ 这个解答对，但是不完全对。 解答： 其实在InnoDB每个表都会有一个聚簇索引，因为按照InnoDB的格式而言，数据和聚簇索引是同一个文件，数据存放在聚簇索引的叶子结...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/mysql/MySQL-%E8%81%9A%E7%B0%87%E7%B4%A2%E5%BC%95%E5%92%8C%E9%9D%9E%E8%81%9A%E7%B0%87%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"曹云友的博客"}],["meta",{"property":"og:title","content":"聚簇索引和非聚簇索引"}],["meta",{"property":"og:description","content":"什么是聚簇索引？ 概括： 对于InnoDB而言，所谓的聚簇索引其实就是_row_id所在列(真实列或者伪列)或者列组对应的索引。 问题： 很多人就有点奇怪：不是主键的索引就是聚簇索引吗？ 这个解答对，但是不完全对。 解答： 其实在InnoDB每个表都会有一个聚簇索引，因为按照InnoDB的格式而言，数据和聚簇索引是同一个文件，数据存放在聚簇索引的叶子结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T12:41:52.000Z"}],["meta",{"property":"article:author","content":"曹云友"}],["meta",{"property":"article:modified_time","content":"2024-05-15T12:41:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"聚簇索引和非聚簇索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T12:41:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"曹云友\\",\\"url\\":\\"https://caoyunyou.github.io\\"}]}"]]},"headers":[{"level":2,"title":"什么是聚簇索引？","slug":"什么是聚簇索引","link":"#什么是聚簇索引","children":[]},{"level":2,"title":"什么是非聚簇索引？","slug":"什么是非聚簇索引","link":"#什么是非聚簇索引","children":[]}],"git":{"createdTime":1715776912000,"updatedTime":1715776912000,"contributors":[{"name":"曹云友","email":"caoyunyou@foxmail.com","commits":1}]},"readingTime":{"minutes":2.4,"words":721},"filePathRelative":"notes/mysql/MySQL-聚簇索引和非聚簇索引.md","localizedDate":"2024年5月15日","excerpt":"<h2>什么是聚簇索引？</h2>\\n<h4>概括：</h4>\\n<p>对于InnoDB而言，所谓的聚簇索引其实就是<code>_row_id</code>所在列(真实列或者伪列)或者列组对应的索引。</p>\\n<h4>问题：</h4>\\n<p>很多人就有点奇怪：不是主键的索引就是聚簇索引吗？</p>\\n<p>这个解答对，但是不完全对。</p>\\n<h4>解答：</h4>\\n<p>其实在<strong>InnoDB每个表都会有一个聚簇索引</strong>，因为按照InnoDB的格式而言，<strong>数据和聚簇索引是同一个文件，数据存放在聚簇索引的叶子结点。</strong></p>\\n<p>这种结构下，每个表都需要一个标识行记录唯一性的字段作为聚簇索引的键值。</p>","autoDesc":true}');export{l as comp,g as data};
