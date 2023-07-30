import{_ as s,v as a,b as e,R as n}from"./chunks/framework.38dfe814.js";const C=JSON.parse('{"title":"CurseForge 整合包安裝器","description":"","frontmatter":{},"headers":[],"relativePath":"zhTW/projbobcat/installers/curseforge.md","filePath":"zhTW/projbobcat/installers/curseforge.md"}'),l={name:"zhTW/projbobcat/installers/curseforge.md"},r=n(`<h1 id="curseforge-整合包安裝器" tabindex="-1">CurseForge 整合包安裝器 <a class="header-anchor" href="#curseforge-整合包安裝器" aria-label="Permalink to &quot;CurseForge 整合包安裝器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#curseforge-整合包安裝器">CurseForge 整合包安裝器</a><ul><li><a href="#實用資源">實用資源</a></li><li><a href="#初始化安裝器">初始化安裝器</a></li><li><a href="#開始安裝">開始安裝</a></li><li><a href="#報告安裝進度">報告安裝進度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>請注意，ProjBobcat 僅實現了 CurseForge 整合包的自動化安裝流程，您仍然需要自己實現 CurseForge 整合包的搜尋、下載、儲存流程。</p></div><h2 id="實用資源" tabindex="-1">實用資源 <a class="header-anchor" href="#實用資源" aria-label="Permalink to &quot;實用資源&quot;">​</a></h2><ul><li><a href="https://www.curseforge.com/" target="_blank" rel="noreferrer">CurseForge 官方網站</a></li><li><a href="https://docs.curseforge.com/" target="_blank" rel="noreferrer">CurseForge API</a></li></ul><h2 id="初始化安裝器" tabindex="-1">初始化安裝器 <a class="header-anchor" href="#初始化安裝器" aria-label="Permalink to &quot;初始化安裝器&quot;">​</a></h2><p>初始化 CurseForge 安裝器的方式非常簡單：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">curseForgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CurseForgeInstaller</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    GameId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ModPackPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_MODPACK]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">遊戲根目錄，通常為 .minecraft 資料夾的路徑</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可選項，自定義即將要安裝的遊戲的名稱</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_MODPACK]</td><td style="text-align:center;">CurseForge 整合包所在的路徑</td></tr></tbody></table><h2 id="開始安裝" tabindex="-1">開始安裝 <a class="header-anchor" href="#開始安裝" aria-label="Permalink to &quot;開始安裝&quot;">​</a></h2><p>在您完成安裝器的初始化後，您只需要呼叫 CurseForge 安裝器的安裝方法來完成安裝。</p><p>在非同步上下文中，使用 <strong>InstallTaskAsync</strong> 來完成安裝：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstallTaskAsync</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在同步上下文中，使用 <strong>Install</strong> 來完成安裝：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Install</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="報告安裝進度" tabindex="-1">報告安裝進度 <a class="header-anchor" href="#報告安裝進度" aria-label="Permalink to &quot;報告安裝進度&quot;">​</a></h2><p>在某些情況下，CurseForge 安裝器可能會需要數分鐘的時間來完成安裝。 因此，您可能需要實時向用戶彙報安裝器目前的進度。 為此，CurseForge 安裝器提供了 <strong>StageChangedEventDelegate</strong> 事件來幫助您實現任務彙報。 您只需要簡單地在 <strong>開始安裝之前</strong> 註冊下面的事件：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StageChangedEventDelegate </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">ReportProgress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CurrentStage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安裝器當前的百分比進度。<strong>args.CurrentStage</strong> 則是安裝器當前進度的文字描述。</p>`,20),t=[r];function o(p,c,i,F,D,u){return a(),e("div",null,t)}const y=s(l,[["render",o]]);export{C as __pageData,y as default};
