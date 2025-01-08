import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.DzmM640o.js";const g=JSON.parse('{"title":"log4j 日志格式化组件解析器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md","filePath":"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"}'),t={name:"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"};function l(p,s,r,h,k,o){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="log4j-日志格式化组件解析器" tabindex="-1">log4j 日志格式化组件解析器 <a class="header-anchor" href="#log4j-日志格式化组件解析器" aria-label="Permalink to &quot;log4j 日志格式化组件解析器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#log4j-日志格式化组件解析器">log4j 日志格式化组件解析器</a><ul><li><a href="#初始化解析器">初始化解析器</a></li></ul></li></ul></nav><p>log4j 日志格式化组件解析器提供了对游戏资产文件的解析和验证功能，这些文件存放在 <code>.minecraft/logging</code> 目录下</p><p>使用该资源解析器可以使 MineCraft 输出经过 log4j 格式化后的日志内容，类似于如下的内容：</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log4j:Event</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ekb&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1676012129&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INFO&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Render thread&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log4j:Message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &lt;![CDATA[Created: 512x512x4 minecraft:textures/atlas/shulker_boxes.png-atlas]]&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log4j:Message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log4j:Event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="初始化解析器" tabindex="-1">初始化解析器 <a class="header-anchor" href="#初始化解析器" aria-label="Permalink to &quot;初始化解析器&quot;">​</a></h2><p>你可以通过下面的代码来初始化 log4j 日志格式化组件解析器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GameLoggingInfoResolver</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BasePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    VersionInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [SEARCHED_VERSION_INFO],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CheckLocalFiles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [CHECK_LOCAL_FILES]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table tabindex="0"><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">要检查的版本的 VersionInfo （通过游戏定位器获得）</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">检查本地文件（如果为 false，则跳过所有检查）</td></tr></tbody></table>`,10)]))}const E=a(t,[["render",l]]);export{g as __pageData,E as default};
