import{_ as a,o as r,c as t,ag as o}from"./chunks/framework.CC5dk9o4.js";const n="/img/lxguide/reportWithLogs/lx_log_folder_direction.png",i="/img/lxguide/reportWithLogs/lx_launcher_log_example.png",l="/img/lxguide/reportWithLogs/win_r.png",c="/img/lxguide/reportWithLogs/expand_eventvwr_navigation.png",h="/img/lxguide/reportWithLogs/lx_eventvwr_item.jpg",s="/img/lxguide/reportWithLogs/lx_macos_logs.png",v=JSON.parse('{"title":"好好利用日志文件!","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/lxguide/others/report-with-logs.md","filePath":"zhCN/lxguide/others/report-with-logs.md"}'),p={name:"zhCN/lxguide/others/report-with-logs.md"};function u(d,e,g,m,x,_){return r(),t("div",null,e[0]||(e[0]=[o('<h1 id="好好利用日志文件" tabindex="-1">好好利用日志文件! <a class="header-anchor" href="#好好利用日志文件" aria-label="Permalink to &quot;好好利用日志文件!&quot;">​</a></h1><p>本文将介绍如何在参与测试时或遭遇自己无法解决的问题时使用程序日志来帮助解决问题。当然，这种信息对于我们排除问题也是十分有用的。部分内容不可避免地可能存在一些隐私痕迹，但请相信我们只是需要解决问题，并会帮您保护隐私.</p><nav class="table-of-contents"><ul><li><a href="#好好利用日志文件">好好利用日志文件!</a><ul><li><a href="#launcherx日志">LauncherX日志</a></li><li><a href="#eventvwr日志-仅windows">EventVwr日志(仅Windows)</a><ul><li><a href="#什么是eventvwr">什么是EventVwr?</a></li></ul></li><li><a href="#macos日志">macOS日志</a><ul><li><a href="#不是崩溃弹窗吗">不是崩溃弹窗吗?</a></li><li><a href="#如何获取launcherx崩溃瞬间的日志">如何获取LauncherX崩溃瞬间的日志</a></li></ul></li><li><a href="#linux日志">Linux日志</a></li><li><a href="#游戏日志">游戏日志</a></li></ul></li></ul></nav><h2 id="launcherx日志" tabindex="-1">LauncherX日志 <a class="header-anchor" href="#launcherx日志" aria-label="Permalink to &quot;LauncherX日志&quot;">​</a></h2><p>LauncherX日志存在于LauncherX目录下。在Windows中，该目录和LauncherX本体存在于一个文件夹里; 而对于macOS，它存在于 <code>用户文件夹(小房子图标)/资源库(图书馆图标)/Application Support/</code>之中 (可以在此目录中按下按键<code>L</code>来快速定位L开头的项目。如果您手足够快可以快速点击<code>La</code>); 而对于Linux，该目录存在于/home/documents/ 下。其中的LauncherLog文件夹中储存着启动器的日志，而如果启动过游戏则会产生GameLog以储存部分游戏日志。如下图所示:</p><p><img src="'+n+'" alt="LauncherX目录"></p><p>如下图所示的是LauncherX的日志文件内容。您应该将距离错误发生时最新的那个文件用于问题分析.</p><p><img src="'+i+'" alt="LauncherX Log Example"> ...</p><h2 id="eventvwr日志-仅windows" tabindex="-1">EventVwr日志(仅Windows) <a class="header-anchor" href="#eventvwr日志-仅windows" aria-label="Permalink to &quot;EventVwr日志(仅Windows)&quot;">​</a></h2><h3 id="什么是eventvwr" tabindex="-1">什么是EventVwr? <a class="header-anchor" href="#什么是eventvwr" aria-label="Permalink to &quot;什么是EventVwr?&quot;">​</a></h3><p>EventVwr，即Event Viewer 事件查看器。它存在于System32目录下，名称为<code>eventvwr.exe</code>，可以通过<code>Win + R</code>快捷键「运行」窗口直接打开。它会事无巨细地记录系统中的事件，包括作为应用程序的LauncherX的部分崩溃信息.</p><p>首先，使用上述快捷键，输入eventvwr并点击运行.</p><p><img src="'+l+'" alt="run new"></p><p>在新出现的<code>事件查看器</code>窗口里找到默认就在左侧的目录导航栏，如图选中 <code>Windows日志 - 应用程序</code></p><p><img src="'+c+'" alt="choose"></p><p>在中间靠上的窗口中依次点击<strong>红色错误图标，且来源为「.NET Runtime」的项目</strong> ，并在下方确认是否是来自LauncherX的项目.</p><p><img src="'+h+'" alt="figure correct item"></p><p>调整下半部分的大小 (鼠标拖拽上下窗口的中间分界线) 确认是否如上图所示: Application: LauncherX.Avalonia.exe<br>并且包含许多「at」开头的错误信息。如果是，您可以将这些错误信息复制发给我们 (LXIT/邮箱等，详见: <a href="/zhCN/lxguide/report-issue.html">向我们反馈</a>)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请记好LauncherX发生错误时的时间，这有助于快速寻找对应的事件项目。<br>如若需要刷新事件管理器展示的列表，请点击左上角菜单栏的「操作-刷新」</p></div><h2 id="macos日志" tabindex="-1">macOS日志 <a class="header-anchor" href="#macos日志" aria-label="Permalink to &quot;macOS日志&quot;">​</a></h2><h3 id="不是崩溃弹窗吗" tabindex="-1">不是崩溃弹窗吗? <a class="header-anchor" href="#不是崩溃弹窗吗" aria-label="Permalink to &quot;不是崩溃弹窗吗?&quot;">​</a></h3><p>崩溃弹窗中的内容往往包含的是与系统内核深度相关的信息，一般对诊断LauncherX没有任何帮助.</p><h3 id="如何获取launcherx崩溃瞬间的日志" tabindex="-1">如何获取LauncherX崩溃瞬间的日志 <a class="header-anchor" href="#如何获取launcherx崩溃瞬间的日志" aria-label="Permalink to &quot;如何获取LauncherX崩溃瞬间的日志&quot;">​</a></h3><p>首先，请确认这个错误会<strong>稳定复现</strong>.</p><p>然后，打开终端，并找到您的LauncherX主文件 (一般应该放在<strong>应用程序</strong>文件夹，文件名称一般是<code>LauncherX.Avalonia.app</code>)</p><p>右键点击它并点击“显示包内容”</p><p>在包内容中，依次打开目录: Contents/MacOS/ 。这里面应该可以找到一个名为LauncherX.Avalonia的文件。这是LauncherX的入口.</p><p>将这个文件拖入终端并点击Enter，LauncherX就会伴随着终端窗口中的日志滚动而开始运行.</p><p>在这个状态下尝试复现导致崩溃的问题。如果确实崩溃了，终端窗口中应该会显示如图的内容:</p><p><img src="'+s+'" alt="figure correct item"></p><p>请将这一段<strong>Unhandled Exception</strong>复制给我们作为线索.</p><h2 id="linux日志" tabindex="-1">Linux日志 <a class="header-anchor" href="#linux日志" aria-label="Permalink to &quot;Linux日志&quot;">​</a></h2><p>使用终端运行LauncherX将会显示完整的日志。请参考上文关于<strong>macOS日志</strong>的内容向我们提供线索!</p><h2 id="游戏日志" tabindex="-1">游戏日志 <a class="header-anchor" href="#游戏日志" aria-label="Permalink to &quot;游戏日志&quot;">​</a></h2><p>敬请期待。与此相关的阅读: <a href="/zhCN/lxguide/features/log-window.html">了解更多关于日志窗口的信息</a></p>',35)]))}const w=a(p,[["render",u]]);export{v as __pageData,w as default};
