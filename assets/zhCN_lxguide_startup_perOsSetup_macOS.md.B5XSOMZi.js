import{_ as e}from"./chunks/azul-website.DZT0TgXR.js";import{_ as r,c as t,a2 as o,o as s}from"./chunks/framework.DzmM640o.js";const g=JSON.parse('{"title":"针对 macOS 系统的特殊设置","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/lxguide/startup/perOsSetup/macOS.md","filePath":"zhCN/lxguide/startup/perOsSetup/macOS.md"}'),l={name:"zhCN/lxguide/startup/perOsSetup/macOS.md"};function n(c,a,i,p,u,d){return s(),t("div",null,a[0]||(a[0]=[o('<h1 id="针对-macos-系统的特殊设置" tabindex="-1">针对 macOS 系统的特殊设置 <a class="header-anchor" href="#针对-macos-系统的特殊设置" aria-label="Permalink to &quot;针对 macOS 系统的特殊设置&quot;">​</a></h1><h2 id="一般问题" tabindex="-1">一般问题 <a class="header-anchor" href="#一般问题" aria-label="Permalink to &quot;一般问题&quot;">​</a></h2><p>对于 macOS 用户, 若您在打开 LauncherX 时候出现“已损坏”相关的错误弹窗，请执行以下操作：</p><ul><li>打开 “终端.app”</li><li>打开您的访达窗口, 并找您的LauncherX执行文件 (LauncherX.app 或 LauncherX.Avalonia.app)</li><li>在终端输入 <code>sudo xattr -d com.apple.quarantine</code> 或者 <code>sudo xattr -cr</code> (任选其一即可)</li><li>在上述指令末尾有一个空格的前提下, 将您的 <strong>LauncherX APP</strong> 拖入到终端窗口</li><li>运行. 终端将会要求您输入管理员账户的密码. 请凭感觉如实输入，终端不会在显示区域呈现您任何的输入记录</li><li>在键入密码之后按下键盘上的 <code>Enter</code> 确认，执行成功不会有任何提示。</li><li>然后再次尝试启动 LauncherX，如果再次失败，请务必<a href="/zhCN/lxguide/report-issue.html">向我们反馈</a>。</li></ul><h2 id="对于基于-arm64-架构的macos" tabindex="-1">对于基于 ARM64 架构的macOS <a class="header-anchor" href="#对于基于-arm64-架构的macos" aria-label="Permalink to &quot;对于基于 ARM64 架构的macOS&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于 Mojang 官方还并未正式支持 ARM64 版本的 macOS 游戏与对应的JRE下载, 因此，在使用 LauncherX 之前，您需要手动下载并安装 JRE 运行时。</p></div><h3 id="下载并安装-jre-运行时" tabindex="-1">下载并安装 JRE 运行时 <a class="header-anchor" href="#下载并安装-jre-运行时" aria-label="Permalink to &quot;下载并安装 JRE 运行时&quot;">​</a></h3><p>在这里我们将使用 <a href="https://www.azul.com/downloads/#zulu" target="_blank" rel="noreferrer">Azul JDK</a> 来演示 JRE 的安装。</p><p>在 <a href="https://www.azul.com/downloads/#zulu" target="_blank" rel="noreferrer">Azul JDK 官方网站</a> 中，稍微下拉一点即可看到 JDK 版本筛选框：</p><p><img src="'+e+'" alt="azul-website"></p><p>在 <strong>Operating System</strong> 处选择 macOS，在 <strong>Architecture</strong> 处选择 <strong>ARM 64-bit</strong> 即可获取到所有可用的 JDK 版本。</p><p>在右侧的 <strong>Download</strong> 按钮中选择 <code>.zip</code> 格式的 JDK 运行时，下载后将其解压到任意一处本地文件夹。 随后在 LauncherX 中选择 <strong>手动添加</strong>，并选择 JDK 文件夹 <strong>bin/</strong> 目录下的 <strong>java</strong> 可执行文件即可。</p><p>有关于JRE的选择, 参见: <a href="/zhCN/lxguide/others/adjust-ram-gc-ja.html">配置内存和GC、JavaAgent</a></p>',13)]))}const f=r(l,[["render",n]]);export{g as __pageData,f as default};
