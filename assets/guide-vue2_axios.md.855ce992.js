import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.7427aee3.js";const A=JSON.parse('{"title":"和服务端交互","description":"","frontmatter":{},"headers":[],"relativePath":"guide-vue2/axios.md"}'),o={name:"guide-vue2/axios.md"},p=e(`<h1 id="和服务端交互" tabindex="-1">和服务端交互 <a class="header-anchor" href="#和服务端交互" aria-label="Permalink to &quot;和服务端交互&quot;">​</a></h1><p>框架使用 <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">Axios</a> 做为异步请求工具，并进行了简单的封装。</p><h2 id="设置-baseurl" tabindex="-1">设置 baseURL <a class="header-anchor" href="#设置-baseurl" aria-label="Permalink to &quot;设置 baseURL&quot;">​</a></h2><p>在根目录 <code>.env.*</code> 文件里的 <code>VUE_APP_API_ROOT</code> 这个参数就是配置 axios 的 <code>baseURL</code> 。</p><h2 id="拦截器" tabindex="-1">拦截器 <a class="header-anchor" href="#拦截器" aria-label="Permalink to &quot;拦截器&quot;">​</a></h2><p>在 <code>/src/api/index.js</code> 文件里实例化了 axios 对象，并对 <code>request</code> 和 <code>response</code> 设置了拦截器，拦截器的用处就是拦截每一次的请求和响应，然后做一些全局的处理。例如接口响应报错，可以在拦截器里用统一的报错提示来展示，方便业务开发。因为每个公司提供的接口标准不同，所以该文件需要开发者根据实际情况去定制对应的拦截器。</p><p>代码很简单，首先初始化 axios 对象，然后 <code>axios.interceptors.request.use()</code> 和 <code>axios.interceptors.response.use()</code> 就分别是请求和响应的拦截代码了。</p><p>参考代码里只做了简单的拦截处理，例如请求的时候会自动带上 token ，响应的时候会根据错误信息判断是登录失效还是接口报错，并做相应动作，登录失效则跳转至登录页，接口报错则使用 Element UI 的 Message 组件提示用户。</p><h2 id="多数据源" tabindex="-1">多数据源 <a class="header-anchor" href="#多数据源" aria-label="Permalink to &quot;多数据源&quot;">​</a></h2><p>如果项目里需要从多个不同地址的数据源请求数据，你有两种方式可以实现。</p><p>如果只是几个接口需求从其它数据源请求，你可以使用覆盖 <code>baseURL</code> 的方式：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/new/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">baseURL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://baidu.com/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 直接覆盖 baseURL</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>这种方式的前提是，两个数据源的 <code>request</code> 和 <code>response</code> 规则要保持一致，因为只是覆盖 <code>baseURL</code> ，拦截器还是用的同一套规则。</p><p>所以如果两个数据源的请求和响应是完全不同的标准，你需要给第二个数据源单独实例化一个 axios 对象。首先在 <code>.env.*</code> 文件里配置第二个数据源的 <code>baseURL</code> ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 命名可随意，以 VUE_APP_ 开头即可</span></span>
<span class="line"><span style="color:#A6ACCD;">VUE_APP_API_ROOT_2 = 此处填写接口地址</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后把 <code>/src/api/index.js</code> 文件复制一份，例如就叫 <code>/src/api/index2.js</code> ，并且将代码中的 <code>baseURL</code> 替换为 <code>p<wbr>rocess.env.VUE_APP_API_ROOT_2</code> ，最后在 <code>/src/main.js</code> 文件里引入：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api2 </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./api/index2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$api2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> api2</span></span>
<span class="line"></span></code></pre></div><p>然后你就可以在页面中通过这种方式分别请求两个数据源的数据了：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 请求默认数据源</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/new/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 请求第 2 个数据源</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$api2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/new/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h2><p>生产环境的跨域需要服务端去解决，开发环境的跨域问题可在本地设置代理解决。</p><p>打开 <code>vue.config.js</code> 并将高亮部分代码注释去掉：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    devServer: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VUE_APP_API_ROOT</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">changeOrigin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>同时将 <code>/src/api/index.js</code> 文件里的 <code>baseURL</code> 配置删掉，这时候重新运行框架，请求代理就会生效了。</p><p>假设 <code>VUE_APP_API_ROOT</code> 配置的是 <code>http://baidu.com</code> ，那上述配置的结果就是，在请求 <code>/api/login</code> 时会转发到 <code>http://baidu.com/api/login</code> 。</p><p>更多代理设置请阅读《<a href="https://cli.vuejs.org/zh/config/#devserver-proxy" target="_blank" rel="noreferrer">Vue CLI - devServer.proxy</a>》</p>`,26),l=[p];function c(t,r,i,D,y,d){return a(),n("div",null,l)}const C=s(o,[["render",c]]);export{A as __pageData,C as default};
