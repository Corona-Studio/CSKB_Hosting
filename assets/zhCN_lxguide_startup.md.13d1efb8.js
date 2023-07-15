import{_ as a,o as e,c as r,U as i}from"./chunks/framework.90171eb7.js";const f=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/lxguide/startup.md","filePath":"zhCN/lxguide/startup.md"}'),t={name:"zhCN/lxguide/startup.md"},l=i('<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="欢迎使用launcherx-我们不断致力于为您打造美观便捷的使用体验。" tabindex="-1">欢迎使用LauncherX！我们不断致力于为您打造美观便捷的使用体验。 <a class="header-anchor" href="#欢迎使用launcherx-我们不断致力于为您打造美观便捷的使用体验。" aria-label="Permalink to &quot;欢迎使用LauncherX！我们不断致力于为您打造美观便捷的使用体验。&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>由于设备不同，您在初次启动时可能会遇到些小麻烦，为此我们感到十分抱歉。我们正在努力解决这些严重影响体验的问题，因而本文将会不定期发生变更，恕不另行通知。</p></div><p><em>本文创建日期：2023年7月14日，修改日期：2023年7月14日，作者：Feiron Iguista</em></p><nav class="table-of-contents"><ul><li><a href="#开始">开始</a><ul><li><a href="#欢迎使用launcherx-我们不断致力于为您打造美观便捷的使用体验。">欢迎使用LauncherX！我们不断致力于为您打造美观便捷的使用体验。</a></li><li><a href="#启动launcherx以供启动minecraft">启动LauncherX以供启动Minecraft</a></li><li><a href="#共有的问题">共有的问题</a></li><li><a href="#不同系统的配置">不同系统的配置</a><ul><li><a href="#windows">Windows</a></li><li><a href="#macos">macOS</a></li><li><a href="#linux">Linux</a></li></ul></li><li><a href="#所有发行版">所有发行版</a></li></ul></li></ul></nav><hr><h2 id="启动launcherx以供启动minecraft" tabindex="-1">启动LauncherX以供启动Minecraft <a class="header-anchor" href="#启动launcherx以供启动minecraft" aria-label="Permalink to &quot;启动LauncherX以供启动Minecraft&quot;">​</a></h2><p>基本上，对于所有的桌面环境，前置条件基本上是一致的。</p><p>下载<strong>配置助手</strong>，是最适合普通用户的方案（该工具暂未确定其项目，敬请期待。）；而对于分发环境，推荐使用<strong>包含运行时的稳定版</strong>（将在第一个稳定版发布时发布）；此外，您可以自行手动在<strong>完成本地的运行时安装后，直接放置您想要使用的LauncherX执行文件到您的目录</strong>。这正是“配置助手”自动化完成的步骤。</p><p>那么现在，无论是Windows，macOS还是Linux某个带桌面环境的发行版，也无论架构是x86-64，x86-S，amd64还是ARM64，您已经根据当前操作系统下载好了对应的LauncherX到您希望其所运行的文件夹中，并且<a target="_blank" href="https://dotnet.microsoft.com/zh-cn/download/dotnet/7.0">对应地准备好了运行时环境</a>（配置助手将会自动完成，而包含运行时无需此步骤），那么您就可以像运行其他程序一样双击它的图标来运行了。</p><p>接下来，我将列出所有已知可能出现的问题。</p><h2 id="共有的问题" tabindex="-1">共有的问题 <a class="header-anchor" href="#共有的问题" aria-label="Permalink to &quot;共有的问题&quot;">​</a></h2><p>由于我们的Java RE检测机制是通过“搜索-执行”模式工作以确认该运行时是否可用，所以在您启动LauncherX时候，可能会遇到来自Java的错误弹窗。您完全可以直接将它关闭，因为这并不影响LauncherX运行。您可以将该受损的运行时<strong>移除</strong>，或者用自动化窗口关闭工具（比如 火绒弹窗拦截）对其精准打击。</p><h2 id="不同系统的配置" tabindex="-1">不同系统的配置 <a class="header-anchor" href="#不同系统的配置" aria-label="Permalink to &quot;不同系统的配置&quot;">​</a></h2><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请注意，<strong>LauncherX不支持Windows7以下的操作系统，以及任意一个版本的Windows S、32位Windows系统。</strong></p></div><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><p>对于macOS用户, 若您在打开LauncherX时候出现“已损坏”相关的错误弹窗，请执行以下操作：</p><ul><li>打开“终端.app”</li><li>打开您的访达窗口, 并找您的LauncherX执行文件 (LauncherX.app或LauncherX.Avalonia.app)</li><li>在终端输入<code>sudo xattr -d com.apple.quarantine </code></li><li>在上述指令末尾有一个空格的前提下, 将您的LauncherX执行文件 拖入到终端窗口</li><li>运行. 终端将会要求您输入管理员账户的密码. 请凭感觉如实输入，终端不会在显示区域呈现您任何的输入记录</li><li>在键入密码之后按下键盘上的<code>Enter</code>确认，执行成功不会有任何提示。</li><li>然后再次尝试启动LauncherX，如果再次失败，请务必前往<a target="_blank" href="https://github.com/Corona-Studio/LXIT">LXIT</a>向我们反馈。</li></ul><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><h2 id="所有发行版" tabindex="-1">所有发行版 <a class="header-anchor" href="#所有发行版" aria-label="Permalink to &quot;所有发行版&quot;">​</a></h2><p>您在初次启动LauncherX时候可能会出现一个伴随一堆错误信息的终端窗口。这是受限于框架和环境的问题，且我们<strong>暂时还没有</strong>为其应用主动解决方案。</p><p>您需要作出以下操作：</p><ul><li>打开新的终端，或者使用刚才出现的终端</li><li>在其中键入 <code>export LC_CTYPE=en_US.UTF-8</code>，执行</li><li>（如果有必要的话，上述步骤可以使用管理员权限[sudo]）</li><li>再次尝试运行。如果失败，尝试重新登录。</li><li>如果再次失败，请务必前往<a target="_blank" href="https://github.com/Corona-Studio/LXIT">LXIT</a>向我们反馈。</li></ul><h5 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h5>',25),n=[l];function o(c,h,s,u,d,p){return e(),r("div",null,n)}const x=a(t,[["render",o]]);export{f as __pageData,x as default};
