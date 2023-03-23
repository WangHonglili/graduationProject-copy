import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7427aee3.js";const i=JSON.parse('{"title":"私有 Storage 数据","description":"","frontmatter":{},"headers":[],"relativePath":"guide/storage.md"}'),o={name:"guide/storage.md"},p=l(`<h1 id="私有-storage-数据" tabindex="-1">私有 Storage 数据 <sup class="pro-badge"></sup> <a class="header-anchor" href="#私有-storage-数据" aria-label="Permalink to &quot;私有 Storage 数据 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h1><p>由于 localStorage 和 sessionStorage 的同源策略，同一域名下的 storage 数据会共享。如果你恰好需要在同一域名下部署两套(及以上)系统，不可避免会出现 storage 数据冲突，框架提供了一个 storage 类来解决这个问题。</p><p>解决同源 storage 数据冲突的方式就是增加前缀区分，首先需要在应用配置中设置一个唯一且不重名的前缀：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">storagePrefix</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fa_</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>然后在需要使用到 storage 的地方引入：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> storage </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/storage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>这个类封装了 <code>setItem()</code> ，<code>getItem()</code> ，<code>removeItem()</code> ，<code>clear()</code> 方法，同时还增加了一个 <code>has()</code> 方法用来判断对象是否存在：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// localStorage</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// sessionStorage</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>由于 localStorage 有容量上限，一般为 5M ，如果一同域名下部署两套系统，意味着两套系统共享 5M 容量，所以不建议在同一域名部署太多套系统，避免出现 localStorage 不够用的情况。</p></div>`,9),e=[p];function t(c,r,D,y,A,F){return a(),n("div",null,e)}const g=s(o,[["render",t]]);export{i as __pageData,g as default};
