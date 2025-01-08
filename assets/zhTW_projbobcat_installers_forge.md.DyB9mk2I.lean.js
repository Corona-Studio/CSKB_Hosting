import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.DzmM640o.js";const d=JSON.parse('{"title":"Forge 安裝器","description":"","frontmatter":{},"headers":[],"relativePath":"zhTW/projbobcat/installers/forge.md","filePath":"zhTW/projbobcat/installers/forge.md"}'),e={name:"zhTW/projbobcat/installers/forge.md"};function l(h,s,p,r,k,g){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="forge-安裝器" tabindex="-1">Forge 安裝器 <a class="header-anchor" href="#forge-安裝器" aria-label="Permalink to &quot;Forge 安裝器&quot;">​</a></h1><p>在 ProjBobcat 中，我們支援了幾乎所有主流 MineCraft 版本的 Forge 自動化安裝。</p><nav class="table-of-contents"><ul><li><a href="#forge-安裝器">Forge 安裝器</a><ul><li><a href="#判斷應該使用哪一種-forge-安裝器">判斷應該使用哪一種 Forge 安裝器</a></li><li><a href="#初始化舊版安裝器">初始化舊版安裝器</a></li><li><a href="#初始化新版安裝器">初始化新版安裝器</a></li><li><a href="#根據-islegacy-值進行統一初始化">根據 isLegacy 值進行統一初始化</a></li><li><a href="#開始安裝">開始安裝</a></li><li><a href="#報告安裝進度">報告安裝進度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>請注意，ProjBobcat 僅實現了 Forge 自動化安裝流程，您仍然需要自己實現 Forge 安裝包的搜尋、下載、儲存流程。</p></div><h2 id="判斷應該使用哪一種-forge-安裝器" tabindex="-1">判斷應該使用哪一種 Forge 安裝器 <a class="header-anchor" href="#判斷應該使用哪一種-forge-安裝器" aria-label="Permalink to &quot;判斷應該使用哪一種 Forge 安裝器&quot;">​</a></h2><p>由於 Forge 團隊在後續的版本中修改了 Forge 的打包規範以及安裝流程。因此，您需要手動判斷應該使用哪一種安裝器。 在 ProjBobcat 中，我們已經為您實現了相關的判斷邏輯。您只需要簡單地呼叫下面的方法：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mcVersion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> forgeJarPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> forgeVersion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ForgeInstallerFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetForgeArtifactVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mcVersion, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[FORGE_VERSION]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isLegacy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ForgeInstallerFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsLegacyForgeInstaller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(forgeJarPath, forgeVersion);  </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table tabindex="0"><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[MC_VERSION]</td><td style="text-align:center;">將 Forge 安裝到的 MineCraft 版本，例如：1.19.2</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_FORGE_INSTALLER]</td><td style="text-align:center;">Forge 安裝器 .jar 檔案所在的路徑</td></tr><tr><td style="text-align:center;">[FORGE_VERSION]</td><td style="text-align:center;">Forge 的具體版本，通常為 XX.X.X，例如：43.2.0</td></tr></tbody></table><p>在您完成替換併成功執行上述的程式碼片段之後，<strong>isLegacy</strong> 會指示當前 Forge 安裝器應當使用哪一種 Forge 安裝器。</p><h2 id="初始化舊版安裝器" tabindex="-1">初始化舊版安裝器 <a class="header-anchor" href="#初始化舊版安裝器" aria-label="Permalink to &quot;初始化舊版安裝器&quot;">​</a></h2><p>如果在上面的流程中，<strong>isLegacy</strong> 的值為 <strong>true</strong>，這意味著您需要使用舊版安裝器來完成 Forge 的安裝。 要初始化舊版安裝器，只需例項化 <strong>LegacyForgeInstaller</strong> 並提供相應的引數：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IForgeInstaller</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> forgeInstaller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LegacyForgeInstaller</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ForgeExecutablePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                RootPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                CustomId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ForgeVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[FORGE_VERSION]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                InheritsFrom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table tabindex="0"><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">遊戲根目錄，通常為 .minecraft 資料夾的路徑</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可選項，自定義即將要安裝的遊戲的名稱</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">Forge 繼承的 MineCraft 原版遊戲版本，通常為遊戲版本。例如：1.19.2</td></tr></tbody></table><h2 id="初始化新版安裝器" tabindex="-1">初始化新版安裝器 <a class="header-anchor" href="#初始化新版安裝器" aria-label="Permalink to &quot;初始化新版安裝器&quot;">​</a></h2><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IForgeInstaller</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> forgeInstaller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HighVersionForgeInstaller</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ForgeExecutablePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                JavaExecutablePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_JAVA_RUNTIME]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                RootPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                VersionLocator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [VERSION_LOCATOR_INST],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                DownloadUrlRoot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> “[LIBRARIES_URL_ROOT]”,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                CustomId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                MineCraftVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                MineCraftVersionId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[ACTUAL_MC_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                InheritsFrom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table tabindex="0"><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[PATH_TO_YOUR_JAVA_RUNTIME]</td><td style="text-align:center;">Java （javaw.exe） 執行時所在的路徑</td></tr><tr><td style="text-align:center;">[LIBRARIES_URL_ROOT]</td><td style="text-align:center;">下載源的根 URL，例如：&quot;<a href="https://bmclapi2.bangbang93.com/" target="_blank" rel="noreferrer">https://bmclapi2.bangbang93.com/</a>&quot;</td></tr><tr><td style="text-align:center;">[VERSION_LOCATOR_INST]</td><td style="text-align:center;">遊戲版本定位器例項，即初始化遊戲核心時的 <strong>VersionLocator</strong> 屬性</td></tr><tr><td style="text-align:center;">[ACTUAL_MC_GAME_ID]</td><td style="text-align:center;">實際的 MineCraft 遊戲名稱，即原版遊戲在 <strong>version</strong> 資料夾下的名稱。一般情況下，這個值和 <strong>[MC_VERSION]</strong> 一致。</td></tr></tbody></table><h2 id="根據-islegacy-值進行統一初始化" tabindex="-1">根據 <strong>isLegacy</strong> 值進行統一初始化 <a class="header-anchor" href="#根據-islegacy-值進行統一初始化" aria-label="Permalink to &quot;根據 **isLegacy** 值進行統一初始化&quot;">​</a></h2><p>由於 <strong>LegacyForgeInstaller</strong> 和 <strong>HighVersionForgeInstaller</strong> 同時實現了 <strong>IForgeInstaller</strong> 介面。 因此，您可以很方便的使用一個三元運算子來選擇性的初始化對應的安裝器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isLegacy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ForgeInstallerFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsLegacyForgeInstaller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(forgeJarPath, forgeVersion);</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IForgeInstaller</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> forgeInstaller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isLegacy</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            ?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LegacyForgeInstaller</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ForgeExecutablePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                RootPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                CustomId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ForgeVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[FORGE_VERSION]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                InheritsFrom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HighVersionForgeInstaller</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ForgeExecutablePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                JavaExecutablePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[PATH_TO_YOUR_JAVA_RUNTIME]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                RootPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                VersionLocator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [VERSION_LOCATOR_INST],</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                DownloadUrlRoot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> “[LIBRARIES_URL_ROOT]”,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                CustomId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                MineCraftVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                MineCraftVersionId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[ACTUAL_MC_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                InheritsFrom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="開始安裝" tabindex="-1">開始安裝 <a class="header-anchor" href="#開始安裝" aria-label="Permalink to &quot;開始安裝&quot;">​</a></h2><p>在您完成安裝器的初始化後，您只需要呼叫 Forge 安裝器的安裝方法來完成安裝。</p><p>在非同步上下文中，使用 <strong>InstallForgeTaskAsync</strong> 來完成安裝：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> forgeInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InstallForgeTaskAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在同步上下文中，使用 <strong>InstallForge</strong> 來完成安裝：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">forgeInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InstallForge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="報告安裝進度" tabindex="-1">報告安裝進度 <a class="header-anchor" href="#報告安裝進度" aria-label="Permalink to &quot;報告安裝進度&quot;">​</a></h2><p>在某些情況下，Forge 安裝器可能會需要數分鐘的時間來完成安裝。 因此，您可能需要實時向用戶彙報安裝器目前的進度。 為此，Forge 安裝器提供了 <strong>StageChangedEventDelegate</strong> 事件來幫助您實現任務彙報。 您只需要簡單地在 <strong>開始安裝之前</strong> 註冊下面的事件：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InstallerBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)forgeInstaller).StageChangedEventDelegate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ReportProgress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args.Progress </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, args.CurrentStage);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安裝器當前的百分比進度。<strong>args.CurrentStage</strong> 則是安裝器當前進度的文字描述。</p>`,32)]))}const o=i(e,[["render",l]]);export{d as __pageData,o as default};
