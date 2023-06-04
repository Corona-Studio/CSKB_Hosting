import{_ as a,o as s,c as e,R as n}from"./chunks/framework.f0ad3fb5.js";const P=JSON.parse('{"title":"游戏账号解析器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/additionalParsers/accountProfileParser.md","filePath":"zhCN/projbobcat/additionalParsers/accountProfileParser.md"}'),o={name:"zhCN/projbobcat/additionalParsers/accountProfileParser.md"},r=n(`<h1 id="游戏账号解析器" tabindex="-1">游戏账号解析器 <a class="header-anchor" href="#游戏账号解析器" aria-label="Permalink to &quot;游戏账号解析器&quot;">​</a></h1><p>游戏档案解析器负责将用户账户写入到官方启动器的配置文件中。</p><h2 id="初始化解析器" tabindex="-1">初始化解析器 <a class="header-anchor" href="#初始化解析器" aria-label="Permalink to &quot;初始化解析器&quot;">​</a></h2><p>初始化解析器的方式非常简单：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var launcherAccountParser</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DefaultLauncherAccountParser</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rootPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> clientToken</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其中，<strong>rootPath</strong> 为核心所在的根目录（即 .minecraft 文件夹所在的目录）。 <strong>clientToken</strong> 为一个随机生成的 GUID。</p>`,6),t=[r];function l(c,p,i,d,h,_){return s(),e("div",null,t)}const A=a(o,[["render",l]]);export{P as __pageData,A as default};
