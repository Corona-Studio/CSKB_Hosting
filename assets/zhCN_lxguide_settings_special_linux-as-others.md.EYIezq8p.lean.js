import{_ as e,c as l,a2 as a,o as n}from"./chunks/framework.DzmM640o.js";const t="/img/lxguide/killTitleBarLinux/an-optional-manual-operation.png",r="/img/lxguide/killTitleBarLinux/be-sure-to-config.png",s="/img/lxguide/killTitleBarLinux/config-forever.png",o="/img/lxguide/killTitleBarLinux/done.png",L=JSON.parse('{"title":"Linux：干掉标题栏，还我一致感","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/lxguide/settings/special/linux-as-others.md","filePath":"zhCN/lxguide/settings/special/linux-as-others.md"}'),u={name:"zhCN/lxguide/settings/special/linux-as-others.md"};function c(p,i,d,x,g,h){return n(),l("div",null,i[0]||(i[0]=[a('<h1 id="linux-干掉标题栏-还我一致感" tabindex="-1">Linux：干掉标题栏，还我一致感 <a class="header-anchor" href="#linux-干掉标题栏-还我一致感" aria-label="Permalink to &quot;Linux：干掉标题栏，还我一致感&quot;">​</a></h1><p>不知道诸位Linux用户是否遇到过这样的烦人场景：</p><p>本来是希望LauncherX在Linux上也是简洁美观的，结果一打开发现窗口顶部有一个可憎的标题栏，盘踞在那里，破坏着LauncherX天生的和谐感？</p><p>抑或是打开LauncherX发现没有最小化、最大化、关闭 这三个按钮？</p><p>不要急！本文将给您一个“恢复LauncherX美貌”的方法。</p><nav class="table-of-contents"><ul><li><a href="#linux-干掉标题栏-还我一致感">Linux：干掉标题栏，还我一致感</a></li></ul></nav><div class="info custom-block"><p class="custom-block-title">先决条件</p><ul><li>您正在使用Wayland作为显示服务器。参见：<a href="/zhCN/lxguide/startup/perOsSetup/linux.html">针对 Linux 系统的特殊设置 | 日冕知识库</a> 的最后一段</li><li>您已经将LauncherX更新到最新版本</li></ul></div><p>接下来以Manjaro KDE Plasma Wayland为基础示范如何让Linux上的LauncherX看起来和其他平台（Windows，macOS）一样。</p><ol><li>启动LauncherX，前往<code>设置 -&gt; 外观 -&gt; 基础设定</code>，找到<code>主界面按钮组可见性</code> 或 <code>窗口按钮组可见性</code> 设置项；</li><li>【自动】将根据系统环境来判断是否应该显示按钮组。这个功能较为实验性，您可以考虑将其设置为“可见”：<br><img src="'+t+'" alt="这项设置的截图"></li><li>如果此时LauncherX存在系统给与的标题栏，请<strong>右键</strong>点击它，然后点击“配置特殊应用程序设置”：<br><img src="'+r+'" alt="这项设置的截图">不要点击“无标题栏和边框”，因为这个设置在重启后就不会再生效了。</li><li>按照下图进行配置：<br><img src="'+s+'" alt="这项设置的截图">“外观和修正” 下方的 “无标题栏和边框” 需要先点击下方的 “添加属性” 来添加，然后如图配置。</li><li>点击底部的 “应用” 和 “确定”，如果需要的话，请重启LauncherX。</li></ol><p>一切顺利的话，您的LauncherX将可以是这个样子：</p><p><img src="'+o+'" alt="这项设置的截图"></p><p>开始享用吧！</p>',12)]))}const _=e(u,[["render",c]]);export{L as __pageData,_ as default};
