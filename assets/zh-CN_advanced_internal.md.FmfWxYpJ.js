import{_ as i,R as e,l as d,f as a,$ as t,m as n,w as l,a6 as o,a as h}from"./chunks/framework.DbNgHyU8.js";const v=JSON.parse('{"title":"内部接口 可选","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/advanced/internal.md","filePath":"zh-CN/advanced/internal.md"}'),p={name:"zh-CN/advanced/internal.md"},r={id:"内部接口",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#内部接口","aria-label":'Permalink to "内部接口 <badge>可选</badge>"'},"​",-1),k=o(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这是一个可选功能。</p></div><p>Satori 提供了访问任意平台原生接口的能力。这意味着，你可以大多数情况下编写通用代码，并在需要的时候使用原生接口来实现平台特定功能。</p><p>这些原生 API 和事件被统称为内部接口。你可以名为 <code>internal</code> 的路由或事件来访问它们。</p><h2 id="api-扩展" tabindex="-1">API 扩展 <a class="header-anchor" href="#api-扩展" aria-label="Permalink to &quot;API 扩展&quot;">​</a></h2><p>SDK 可以通过 <code>/{path}/{version}/internal/{method}</code> 路由代理平台原生 API。通信方式与 <a href="./../protocol/api.html">HTTP API</a> 类似。返回值与平台返回值一致。</p><p>一个合法的请求示例形如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>POST /v1/internal/get_channel</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>Authorization: Bearer 1234567890</span></span>
<span class="line"><span>X-Platform: discord</span></span>
<span class="line"><span>X-Self-ID: 1234567890</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[&quot;1234567890&quot;]</span></span></code></pre></div><h2 id="事件扩展" tabindex="-1">事件扩展 <a class="header-anchor" href="#事件扩展" aria-label="Permalink to &quot;事件扩展&quot;">​</a></h2><h3 id="平台原生事件" tabindex="-1">平台原生事件 <a class="header-anchor" href="#平台原生事件" aria-label="Permalink to &quot;平台原生事件&quot;">​</a></h3><p>SDK 可以通过 <code>internal</code> 事件的 <code>_type</code> 和 <code>_data</code> 属性代理平台原生事件。它的结构如下：</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>number</td><td>事件 ID</td></tr><tr><td><code>type</code></td><td>string</td><td>事件类型 (固定为 <code>internal</code>)</td></tr><tr><td><code>platform</code></td><td>string</td><td>接收者的平台名称</td></tr><tr><td><code>self_id</code></td><td>string</td><td>接收者的平台账号</td></tr><tr><td><code>timestamp</code></td><td>number</td><td>事件的时间戳</td></tr><tr><td><code>_type</code></td><td>string</td><td>原生事件类型</td></tr><tr><td><code>_data</code></td><td>object</td><td>原生事件数据</td></tr></tbody></table><h3 id="标准事件的扩展字段" tabindex="-1">标准事件的扩展字段 <a class="header-anchor" href="#标准事件的扩展字段" aria-label="Permalink to &quot;标准事件的扩展字段&quot;">​</a></h3><p>标准事件的平台原生字段也可以通过上述 <code>_type</code> 和 <code>_data</code> 访问。它的结构如下：</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>type</code></td><td>string</td><td>事件类型 (不应该是 <code>internal</code>)</td></tr><tr><td><code>_type</code></td><td>string</td><td>平台通用名称</td></tr><tr><td><code>_data</code></td><td>object</td><td>原生事件数据</td></tr><tr><td>其他字段</td><td></td><td>其他标准事件字段</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>有些平台原生事件可以直接对应到标准事件。当这些事件触发时，SDK 可以同时触发标准事件和平台原生事件。这两个事件都带有 <code>_type</code> 和 <code>_data</code> 字段，但这两个字段的值可能是不同的。</p></div><h2 id="消息元素扩展" tabindex="-1">消息元素扩展 <a class="header-anchor" href="#消息元素扩展" aria-label="Permalink to &quot;消息元素扩展&quot;">​</a></h2><h3 id="平台原生消息元素" tabindex="-1">平台原生消息元素 <a class="header-anchor" href="#平台原生消息元素" aria-label="Permalink to &quot;平台原生消息元素&quot;">​</a></h3><p>平台可以提供原生消息元素，但需要加上平台通用名称作为前缀。下面是一个例子：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">kook:card</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;lg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">kook:countdown</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> end-time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1608819168000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">kook:card</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="标准元素的扩展属性" tabindex="-1">标准元素的扩展属性 <a class="header-anchor" href="#标准元素的扩展属性" aria-label="Permalink to &quot;标准元素的扩展属性&quot;">​</a></h3><p>标准元素的平台原生属性也可以通过加上平台通用名称作为前缀的方式声明。下面是一个例子：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- src 是 audio 元素的标准属性。 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 但 cover 并未标准化，所以需要加前缀。 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">audio</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;url1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> kook:cover</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;url2&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>平台原生消息元素的属性是否需要前缀由 SDK 实现自行决定。如果某个消息元素希望在未来标准化，那么加上前缀可以降低迁移成本。如果没有标准化需要，那么去掉前缀在书写上更方便。</p></div>`,23);function g(u,y,b,m,B,_){const s=e("badge");return h(),d("div",null,[a("h1",r,[t("内部接口 "),n(s,null,{default:l(()=>[t("可选")]),_:1}),t(),c]),k])}const A=i(p,[["render",g]]);export{v as __pageData,A as default};
