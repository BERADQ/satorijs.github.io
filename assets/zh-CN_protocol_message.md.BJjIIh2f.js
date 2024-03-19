import{_ as t,l as i,a as s,a6 as a}from"./chunks/framework.DbNgHyU8.js";const y=JSON.parse('{"title":"消息编码","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/protocol/message.md","filePath":"zh-CN/protocol/message.md"}'),e={name:"zh-CN/protocol/message.md"},l=a(`<h1 id="消息编码" tabindex="-1">消息编码 <a class="header-anchor" href="#消息编码" aria-label="Permalink to &quot;消息编码&quot;">​</a></h1><p>Satori 中的消息使用消息元素 (Message Element) 进行编码。消息元素的语法与 XHTML 类似。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><p>消息元素的语法与 HTML 类似，但是不完全相同。</p><h3 id="字符" tabindex="-1">字符 <a class="header-anchor" href="#字符" aria-label="Permalink to &quot;字符&quot;">​</a></h3><p>你可以在消息元素内使用任何字符。不过部分特殊字符需要转义：</p><table><thead><tr><th style="text-align:center;">原始字符</th><th style="text-align:center;">转义写法</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&quot;</code></td><td style="text-align:center;"><code>&amp;quot;</code></td></tr><tr><td style="text-align:center;"><code>&amp;</code></td><td style="text-align:center;"><code>&amp;amp;</code></td></tr><tr><td style="text-align:center;"><code>&lt;</code></td><td style="text-align:center;"><code>&amp;lt;</code></td></tr><tr><td style="text-align:center;"><code>&gt;</code></td><td style="text-align:center;"><code>&amp;gt;</code></td></tr></tbody></table><p>根据上下文的不同，有些字符可能不需要被转义或使用其他的转义方式。</p><p>除此以外，你可以使用十进制或十六进制转义任何字符。例如 <code>&#39;</code> 也可以被书写成 <code>&amp;#39;</code> 或 <code>&amp;#x27;</code>。</p><h3 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-label="Permalink to &quot;标签&quot;">​</a></h3><p>使用一对尖括号包裹元素名，加上可选的属性、闭合指示符，就构成了一个标签。</p><p>元素名由小写字母、数字和连字符组成，且必须以字母开头。在元素名前后添加 <code>/</code> 表示这是一个结束标签或自闭合标签，没有 <code>/</code> 符号时则表示这是一个起始标签：</p><ul><li><code>&lt;tag&gt;</code> 一个起始标签</li><li><code>&lt;/tag&gt;</code> 一个结束标签</li><li><code>&lt;tag/&gt;</code> 一个自闭合标签</li></ul><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><p>起始或自闭合标签的元素名后接受可选的属性列表。每个属性必须形如以下形式：</p><ul><li><code>key</code></li><li><code>key=&quot;value&quot;</code> (此时 <code>value</code> 中的 <code>&quot;</code> 需要被转义)</li><li><code>key=&#39;value&#39;</code> (此时 <code>value</code> 中的 <code>&#39;</code> 需要被转义)</li></ul><p>下面是一段示例：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">tag</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><h3 id="元素" tabindex="-1">元素 <a class="header-anchor" href="#元素" aria-label="Permalink to &quot;元素&quot;">​</a></h3><p>一个元素要么是自闭合标签，要么由一对同名的起始标签和结束标签构成。元素的内容指起始标签和结束标签中间的部分，可以包含文本内容或其他元素。对于自闭合标签，元素的内容为空。下面是一段示例：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">parent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  text content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">child</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">parent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>当存在未配对的元素时，将自动视为文本内容的一部分。文本内容前后如果存在包含换行符的连续空白字符，则会被忽略。这意味着下面两段代码是等价的：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; bar</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  &lt;!-- comment --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">&amp;lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">foo</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">&amp;gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> bar&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h3><p>使用成对的 <code>&lt;!--</code> 和 <code>--&gt;</code> 插入一段注释。注释中的部分不会被渲染。</p><h2 id="资源反向代理" tabindex="-1">资源反向代理 <a class="header-anchor" href="#资源反向代理" aria-label="Permalink to &quot;资源反向代理&quot;">​</a></h2><p>一些平台会使用 ID 标识资源文件 (例如 Lark)。当你接收到来自平台的消息时，拿到的是资源 ID 而非资源链接。此时你需要将资源 ID 转换为资源链接，才能构造合法的资源元素。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Telegram 是另一种特殊情况。尽管其提供的资源链接是可用的，但这个链接中会明文包含机器人令牌，并非可以公开使用的链接。因此 Telegram 和其他类似平台也适用于这一节的内容。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一种<strong>不推荐</strong>的做法是直接下载资源，并转存为 <code>data:</code> 链接放入消息中。之所以不推荐，是因为这种做法有两大致命缺点：</p><ol><li>这些图片本来可以按需加载，但现在却被强制下载到本地，造成额外的带宽消耗。</li><li>编码为 <code>data:</code> 会导致消息体积大幅增加，极大影响消息处理的性能。</li></ol></div><p>对于这种情况，我们建议使用实现资源反向代理。SDK 额外提供一个用于访问资源的路由 (类似 <code>/v1/assets/xxx</code>)，将资源 ID 映射到资源链接，并编码到消息元素中。这样一来，上面提到的两个问题也就都解决了。</p><h2 id="标准元素" tabindex="-1">标准元素 <a class="header-anchor" href="#标准元素" aria-label="Permalink to &quot;标准元素&quot;">​</a></h2><p>关于 Satori 内置的消息元素，请参考 <a href="./elements.html">标准元素</a>。</p>`,33),h=[l];function n(o,d,p,c,r,k){return s(),i("div",null,h)}const B=t(e,[["render",n]]);export{y as __pageData,B as default};
