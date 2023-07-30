import{_ as s,v as n,b as a,R as l}from"./chunks/framework.38dfe814.js";const A=JSON.parse('{"title":"Forge 安装器","description":"","frontmatter":{},"headers":[],"relativePath":"ruRU/projbobcat/installers/forge.md","filePath":"ruRU/projbobcat/installers/forge.md"}'),e={name:"ruRU/projbobcat/installers/forge.md"},o=l(`<h1 id="forge-安装器" tabindex="-1">Forge 安装器 <a class="header-anchor" href="#forge-安装器" aria-label="Permalink to &quot;Forge 安装器&quot;">​</a></h1><p>在 ProjBobcat 中，我们支持了几乎所有主流 MineCraft 版本的 Forge 自动化安装。</p><nav class="table-of-contents"><ul><li><a href="#forge-安装器">Forge 安装器</a><ul><li><a href="#判断应该使用哪一种-forge-安装器">判断应该使用哪一种 Forge 安装器</a></li><li><a href="#初始化旧版安装器">初始化旧版安装器</a></li><li><a href="#初始化新版安装器">初始化新版安装器</a></li><li><a href="#根据-islegacy-值进行统一初始化">根据 isLegacy 值进行统一初始化</a></li><li><a href="#开始安装">开始安装</a></li><li><a href="#报告安装进度">报告安装进度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，ProjBobcat 仅实现了 Forge 自动化安装流程，您仍然需要自己实现 Forge 安装包的搜索、下载、保存流程。</p></div><h2 id="判断应该使用哪一种-forge-安装器" tabindex="-1">判断应该使用哪一种 Forge 安装器 <a class="header-anchor" href="#判断应该使用哪一种-forge-安装器" aria-label="Permalink to &quot;判断应该使用哪一种 Forge 安装器&quot;">​</a></h2><p>由于 Forge 团队在后续的版本中修改了 Forge 的打包规范以及安装流程。因此，您需要手动判断应该使用哪一种安装器。 在 ProjBobcat 中，我们已经为您实现了相关的判断逻辑。您只需要简单地调用下面的方法：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mcVersion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">forgeJarPath</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_FORGE_INSTALLER]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">forgeVersion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ForgeInstallerFactory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetForgeArtifactVersion</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mcVersion</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[FORGE_VERSION]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">isLegacy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ForgeInstallerFactory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsLegacyForgeInstaller</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">forgeJarPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> forgeVersion</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[MC_VERSION]</td><td style="text-align:center;">将 Forge 安装到的 MineCraft 版本，例如：1.19.2</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_FORGE_INSTALLER]</td><td style="text-align:center;">Forge 安装器 .jar 文件所在的路径</td></tr><tr><td style="text-align:center;">[FORGE_VERSION]</td><td style="text-align:center;">Forge 的具体版本，通常为 XX.X.X，例如：43.2.0</td></tr></tbody></table><p>在您完成替换并成功执行上述的代码片段之后，<strong>isLegacy</strong> 会指示当前 Forge 安装器应当使用哪一种 Forge 安装器。</p><h2 id="初始化旧版安装器" tabindex="-1">初始化旧版安装器 <a class="header-anchor" href="#初始化旧版安装器" aria-label="Permalink to &quot;初始化旧版安装器&quot;">​</a></h2><p>如果在上面的流程中，<strong>isLegacy</strong> 的值为 <strong>true</strong>，这意味着您需要使用旧版安装器来完成 Forge 的安装。 要初始化旧版安装器，只需实例化 <strong>LegacyForgeInstaller</strong> 并提供相应的参数：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">IForgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">forgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LegacyForgeInstaller</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                ForgeExecutablePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_FORGE_INSTALLER]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                CustomId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                ForgeVersion </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[FORGE_VERSION]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                InheritsFrom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION_OR_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可选项，自定义即将要安装的游戏的名称</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">Forge 继承的 MineCraft 原版游戏版本，通常为游戏版本。例如：1.19.2</td></tr></tbody></table><h2 id="初始化新版安装器" tabindex="-1">初始化新版安装器 <a class="header-anchor" href="#初始化新版安装器" aria-label="Permalink to &quot;初始化新版安装器&quot;">​</a></h2><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">IForgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">forgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HighVersionForgeInstaller</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                ForgeExecutablePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_FORGE_INSTALLER]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                JavaExecutablePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_JAVA_RUNTIME]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                VersionLocator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">VERSION_LOCATOR_INST</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">                DownloadUrlRoot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> “</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">LIBRARIES_URL_ROOT</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">”</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                CustomId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                MineCraftVersion </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                MineCraftVersionId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[ACTUAL_MC_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                InheritsFrom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION_OR_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[PATH_TO_YOUR_JAVA_RUNTIME]</td><td style="text-align:center;">Java （javaw.exe） 运行时所在的路径</td></tr><tr><td style="text-align:center;">[LIBRARIES_URL_ROOT]</td><td style="text-align:center;">下载源的根 URL，例如：&quot;<a href="https://bmclapi2.bangbang93.com/" target="_blank" rel="noreferrer">https://bmclapi2.bangbang93.com/</a>&quot;</td></tr><tr><td style="text-align:center;">[VERSION_LOCATOR_INST]</td><td style="text-align:center;">游戏版本定位器实例，即初始化游戏核心时的 <strong>VersionLocator</strong> 属性</td></tr><tr><td style="text-align:center;">[ACTUAL_MC_GAME_ID]</td><td style="text-align:center;">实际的 MineCraft 游戏名称，即原版游戏在 <strong>version</strong> 文件夹下的名称。一般情况下，这个值和 <strong>[MC_VERSION]</strong> 一致。</td></tr></tbody></table><h2 id="根据-islegacy-值进行统一初始化" tabindex="-1">根据 <strong>isLegacy</strong> 值进行统一初始化 <a class="header-anchor" href="#根据-islegacy-值进行统一初始化" aria-label="Permalink to &quot;根据 **isLegacy** 值进行统一初始化&quot;">​</a></h2><p>由于 <strong>LegacyForgeInstaller</strong> 和 <strong>HighVersionForgeInstaller</strong> 同时实现了 <strong>IForgeInstaller</strong> 接口。 因此，您可以很方便的使用一个三元运算符来选择性的初始化对应的安装器：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">isLegacy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ForgeInstallerFactory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsLegacyForgeInstaller</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">forgeJarPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> forgeVersion</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">IForgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">forgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> isLegacy</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LegacyForgeInstaller</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                ForgeExecutablePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_FORGE_INSTALLER]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                CustomId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                ForgeVersion </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[FORGE_VERSION]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                InheritsFrom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION_OR_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HighVersionForgeInstaller</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                ForgeExecutablePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_FORGE_INSTALLER]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                JavaExecutablePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_JAVA_RUNTIME]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                VersionLocator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">VERSION_LOCATOR_INST</span><span style="color:#89DDFF;">],</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                DownloadUrlRoot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> “</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">LIBRARIES_URL_ROOT</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">”</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                CustomId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                MineCraftVersion </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                MineCraftVersionId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[ACTUAL_MC_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                InheritsFrom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION_OR_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-label="Permalink to &quot;开始安装&quot;">​</a></h2><p>在您完成安装器的初始化后，您只需要调用 Forge 安装器的安装方法来完成安装。</p><p>在异步上下文中，使用 <strong>InstallForgeTaskAsync</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> forgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstallForgeTaskAsync</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在同步上下文中，使用 <strong>InstallForge</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">forgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstallForge</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="报告安装进度" tabindex="-1">报告安装进度 <a class="header-anchor" href="#报告安装进度" aria-label="Permalink to &quot;报告安装进度&quot;">​</a></h2><p>在某些情况下，Forge 安装器可能会需要数分钟的时间来完成安装。 因此，您可能需要实时向用户汇报安装器目前的进度。 为此，Forge 安装器提供了 <strong>StageChangedEventDelegate</strong> 事件来帮助您实现任务汇报。 您只需要简单地在 <strong>开始安装之前</strong> 注册下面的事件：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">InstallerBase</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">forgeInstaller).StageChangedEventDelegate += </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">ReportProgress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Progress </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CurrentStage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安装器当前的百分比进度。<strong>args.CurrentStage</strong> 则是安装器当前进度的文字描述。</p>`,32),p=[o];function t(r,c,D,F,y,i){return n(),a("div",null,p)}const g=s(e,[["render",t]]);export{A as __pageData,g as default};
