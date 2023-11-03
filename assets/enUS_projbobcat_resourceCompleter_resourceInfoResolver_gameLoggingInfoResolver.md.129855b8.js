import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.f6675ff2.js";const u=JSON.parse('{"title":"log4j log formatting component resolver","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md","filePath":"enUS/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"}'),l={name:"enUS/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"},o=e(`<h1 id="log4j-log-formatting-component-resolver" tabindex="-1">log4j log formatting component resolver <a class="header-anchor" href="#log4j-log-formatting-component-resolver" aria-label="Permalink to &quot;log4j log formatting component resolver&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#log4j-log-formatting-component-resolver">log4j log formatting component resolver</a><ul><li><a href="#initialize-resolver">Initialize Resolver</a></li></ul></li></ul></nav><p>The log4j log formatting component resolver provides parsing and verification functions for game asset files. These files are stored in <code>.minecraft/logging</code> directory</p><p>Using this resource resolver allows MineCraft to output log content formatted by log4j, similar to the following:</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">log4j:Event</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">logger</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ekb&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">timestamp</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1676012129&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">level</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;INFO&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">thread</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Render thread&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">log4j:Message</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&lt;![CDATA[Created: 512x512x4 minecraft:textures/atlas/shulker_boxes.png-atlas]]&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">log4j:Message</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">log4j:Event</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">log4j:Event</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">logger</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ekb&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">timestamp</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1676012129&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">level</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;INFO&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">thread</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Render thread&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">log4j:Message</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&lt;![CDATA[Created: 512x512x4 minecraft:textures/atlas/shulker_boxes.png-atlas]]&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">log4j:Message</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">log4j:Event</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="initialize-resolver" tabindex="-1">Initialize Resolver <a class="header-anchor" href="#initialize-resolver" aria-label="Permalink to &quot;Initialize Resolver&quot;">​</a></h2><p>You can initialize the log4j log formatting component resolver with the following code:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolver</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GameLoggingInfoResolver</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    BasePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    VersionInfo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [SEARCHED_VERSION_INFO],</span></span>
<span class="line"><span style="color:#E1E4E8;">    CheckLocalFiles </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [CHECK_LOCAL_FILES]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolver</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GameLoggingInfoResolver</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    BasePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    VersionInfo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [SEARCHED_VERSION_INFO],</span></span>
<span class="line"><span style="color:#24292E;">    CheckLocalFiles </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [CHECK_LOCAL_FILES]</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In the above code block, please replace these parameters according to your actual situation:</p><table><thead><tr><th style="text-align:center;">Project</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">The game root directory, usually the path to the <strong>.minecraft</strong> folder</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">VersionInfo of the version to check (obtained via game locator)</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">Check local files (if false, skip all checks)</td></tr></tbody></table>`,10),t=[o];function p(r,c,i,E,y,g){return n(),a("div",null,t)}const m=s(l,[["render",p]]);export{u as __pageData,m as default};
