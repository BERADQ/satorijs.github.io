import{_ as t,R as s,l as o,f as i,$ as e,m as a,w as d,a6 as r,a as n}from"./chunks/framework.DbNgHyU8.js";const y=JSON.parse('{"title":"群组角色 (GuildRole) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/resources/role.md","filePath":"en-US/resources/role.md"}'),g={name:"en-US/resources/role.md"},h={id:"群组角色",tabindex:"-1"},c=i("a",{class:"header-anchor",href:"#群组角色","aria-label":'Permalink to "群组角色 (GuildRole) <badge type="warning">实验性</badge>"'},"​",-1),u=r(`<h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> GuildRole</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  color</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  position</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-setguildmemberrole" tabindex="-1">bot.setGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-setguildmemberrole" aria-label="Permalink to &quot;bot.setGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>设置群组内用户的角色。</p><h3 id="bot-unsetguildmemberrole" tabindex="-1">bot.unsetGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-unsetguildmemberrole" aria-label="Permalink to &quot;bot.unsetGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>取消群组内用户的角色。</p><h3 id="bot-getguildrolelist" tabindex="-1">bot.getGuildRoleList(guildId, next?) <a class="header-anchor" href="#bot-getguildrolelist" aria-label="Permalink to &quot;bot.getGuildRoleList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;GuildRole&gt;&gt;</code> 角色列表</li></ul><p>获取群组角色列表。</p><h3 id="bot-createguildrole" tabindex="-1">bot.createGuildRole(guildId, data) <a class="header-anchor" href="#bot-createguildrole" aria-label="Permalink to &quot;bot.createGuildRole(guildId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;string&gt;</code> 角色 ID</li></ul><p>创建群组角色。</p><h3 id="bot-modifyguildrole" tabindex="-1">bot.modifyGuildRole(guildId, roleId, data) <a class="header-anchor" href="#bot-modifyguildrole" aria-label="Permalink to &quot;bot.modifyGuildRole(guildId, roleId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改群组角色。</p><h3 id="bot-deleteguildrole" tabindex="-1">bot.deleteGuildRole(guildId, roleId) <a class="header-anchor" href="#bot-deleteguildrole" aria-label="Permalink to &quot;bot.deleteGuildRole(guildId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>删除群组角色。</p>`,21);function p(k,b,I,m,_,B){const l=s("badge");return n(),o("div",null,[i("h1",h,[e("群组角色 (GuildRole) "),a(l,{type:"warning"},{default:d(()=>[e("实验性")]),_:1}),e(),c]),u])}const D=t(g,[["render",p]]);export{y as __pageData,D as default};
