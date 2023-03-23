import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.7427aee3.js";const D=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide-vue2/configure.md"}'),o={name:"guide-vue2/configure.md"},t=n(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><p>默认提供开发环境、测试环境和生产环境三套配置，分别对应根目录下 <code>.env.development</code> 、<code>.env.test</code> 和 <code>.env.production</code> 文件。</p><p>如果要新增一个环境配置，或者环境变量，请保证原配置文件里默认提供的环境变量名不变，避免因修改环境变量名导致运行或打包错误。</p><p>扩展阅读：《<a href="https://cli.vuejs.org/zh/guide/mode-and-env.html" target="_blank" rel="noreferrer">Vue CLI - 环境变量和模式</a>》</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>环境配置修改后，需要重新运行才会生效</p></div><h2 id="框架配置" tabindex="-1">框架配置 <a class="header-anchor" href="#框架配置" aria-label="Permalink to &quot;框架配置&quot;">​</a></h2><p>框架所有可选的配置信息都在 <code>/src/settings.js</code> 文件里统一存放。例如你想要修改布局为定宽居中布局，则修改并设置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> globalSettings </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">	layout: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),l=[t];function p(c,r,i,d,h,u){return a(),e("div",null,l)}const g=s(o,[["render",p]]);export{D as __pageData,g as default};
