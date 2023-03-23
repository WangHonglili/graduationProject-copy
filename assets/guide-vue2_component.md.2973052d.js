import{_ as e,o,c,Q as a}from"./chunks/framework.7427aee3.js";const u=JSON.parse('{"title":"组件","description":"","frontmatter":{},"headers":[],"relativePath":"guide-vue2/component.md"}'),t={name:"guide-vue2/component.md"},d=a('<h1 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h1><h2 id="全局组件" tabindex="-1">全局组件 <a class="header-anchor" href="#全局组件" aria-label="Permalink to &quot;全局组件&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">说明</p><p>全局组件无需手动引入，框架会自动注册</p></div><p>全局组件存放在 <code>/src/components/</code> 目录下，需要注意各个组件按文件夹区分。每个组件的文件夹内至少保留一个文件名为 <code>index</code> 的组件入口，例如 <code>index.vue</code> 。</p><p>组件必须设置 <code>name</code> 并保证其唯一，自动注册会将组件的 <code>name</code> 设为组件名，可参考 <code>SvgIcon</code> 组件写法。虽然文件夹名称和组件 <code>name</code> 无关联，但建议与 <code>name</code> 保持一致。</p><p>如果组件是通过 js 进行调用，则确保组件入口文件为 index.js，可参考 <code>ExampleNotice</code> 组件，专业版用户可参考 <code>SpinkitLoading</code> 组件。</p><h2 id="局部组件" tabindex="-1">局部组件 <a class="header-anchor" href="#局部组件" aria-label="Permalink to &quot;局部组件&quot;">​</a></h2><p>局部组件没有提供专门的存放目录，不过我们建议局部组件跟随页面走，你可以在每个页面文件夹下，建立一个 <code>component</code> 文件夹用于存放局部组件。</p><p>按照这个规则，后续不管是修改还是调试，代码相对会比较清晰。</p>',9),n=[d];function i(s,r,p,_,l,m){return o(),c("div",null,n)}const f=e(t,[["render",i]]);export{u as __pageData,f as default};
