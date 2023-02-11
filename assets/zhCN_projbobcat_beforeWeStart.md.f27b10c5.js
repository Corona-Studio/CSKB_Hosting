import{_ as e,o as a,c as t,d as r}from"./app.179d3068.js";const b=JSON.parse('{"title":"在我们开始之前","description":"","frontmatter":{},"headers":[{"level":2,"title":"运行时要求","slug":"运行时要求","link":"#运行时要求","children":[]},{"level":2,"title":"项目属性","slug":"项目属性","link":"#项目属性","children":[]},{"level":2,"title":"32 位系统支持","slug":"_32-位系统支持","link":"#_32-位系统支持","children":[]}],"relativePath":"zhCN/projbobcat/beforeWeStart.md"}'),l={name:"zhCN/projbobcat/beforeWeStart.md"},i=r('<h1 id="在我们开始之前" tabindex="-1">在我们开始之前 <a class="header-anchor" href="#在我们开始之前" aria-hidden="true">#</a></h1><p>在我们正式开始使用 ProjBobcat，您需要对您的项目属性做一下必要的检查和调整以满足 ProjBobcat 的运行需要。</p><nav class="table-of-contents"><ul><li><a href="#在我们开始之前">在我们开始之前</a><ul><li><a href="#运行时要求">运行时要求</a></li><li><a href="#项目属性">项目属性</a></li><li><a href="#_32-位系统支持">32 位系统支持</a></li></ul></li></ul></nav><h2 id="运行时要求" tabindex="-1">运行时要求 <a class="header-anchor" href="#运行时要求" aria-hidden="true">#</a></h2><p>您需要保证您项目的 dotNET 框架至少运行在 .NET 6.0 及更高的版本当中以满足。</p><p>目前受支持的 .NET 版本：</p><ul><li>.NET 6.0</li><li>.NET 7.0 （推荐）</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>我们在先前的版本更新中已经移除了对 <strong>.NET 5.0</strong> 运行时的支持。</p></div><h2 id="项目属性" tabindex="-1">项目属性 <a class="header-anchor" href="#项目属性" aria-hidden="true">#</a></h2><p>由于 Windows 系统机制，您需要在项目属性中关闭 <strong>首选 32 位</strong> 的生成选项。否则您在使用 ProjBobcat 部分组件时会出现预料之外的结果。</p><p>您需要在 Visual Studio 中切换到项目的属性页面，并找到 <strong>首选 32 位</strong> 的勾选框，并将其取消勾选。</p><h2 id="_32-位系统支持" tabindex="-1">32 位系统支持 <a class="header-anchor" href="#_32-位系统支持" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>ProjBobcat 从项目立项开始就决定放弃对 32 位系统的全部支持，因为它真的很老，很老了（</p></div>',13),o=[i];function s(n,c,d,h,_,p){return a(),t("div",null,o)}const f=e(l,[["render",s]]);export{b as __pageData,f as default};
