import{_ as e,o as r,c as t,ag as i}from"./chunks/framework.CC5dk9o4.js";const u=JSON.parse('{"title":"一起玩吗? 联机游戏指南","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/mc-starter/play-together.md","filePath":"zhCN/mc-starter/play-together.md"}'),l={name:"zhCN/mc-starter/play-together.md"};function n(o,a,s,h,c,p){return r(),t("div",null,a[0]||(a[0]=[i('<h1 id="一起玩吗-联机游戏指南" tabindex="-1">一起玩吗? 联机游戏指南 <a class="header-anchor" href="#一起玩吗-联机游戏指南" aria-label="Permalink to &quot;一起玩吗? 联机游戏指南&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本文将介绍几种常见的流行的联机方式。需要注意的是，由于实现原理不同，不同的方法有不同的特点，应用于游戏中可能造成不同的优劣势.</p></div><p>或许你一个人在原野上漫步的时候听着Minecraft的背景音乐，感受到了一丝孤独? 此时或许会想，要是我能和我的好友——三年二班的李子明同学一起玩、一起建设装点这个世界就好了! 对于基岩版玩家，或许可以考虑使用XBox提供的好友联机，但是Java版目前 (2024-06-20) 并没有这种联机方式。如果你希望使用Java版进行多人游戏，或许需要费一番功夫了。 <code>i</code></p><nav class="table-of-contents"><ul><li><a href="#一起玩吗-联机游戏指南">一起玩吗? 联机游戏指南</a><ul><li><a href="#联机游戏一般能达成什么效果">联机游戏一般能达成什么效果?</a></li><li><a href="#不同的联机方式以及对应的特点">不同的联机方式以及对应的特点</a><ul><li><a href="#局域网联机">局域网联机</a></li><li><a href="#p2p联机">P2P联机</a></li><li><a href="#构建虚拟专属网络">构建虚拟专属网络</a></li><li><a href="#内网穿透">内网穿透</a></li><li><a href="#使用云服务器">使用云服务器</a></li></ul></li></ul></li></ul></nav><h2 id="联机游戏一般能达成什么效果" tabindex="-1">联机游戏一般能达成什么效果? <a class="header-anchor" href="#联机游戏一般能达成什么效果" aria-label="Permalink to &quot;联机游戏一般能达成什么效果?&quot;">​</a></h2><p>联机游戏，顾名思义就是“一起玩”，最终能够使得多个使用不同设备的玩家能够连接进入同一个 “世界”</p><h2 id="不同的联机方式以及对应的特点" tabindex="-1">不同的联机方式以及对应的特点 <a class="header-anchor" href="#不同的联机方式以及对应的特点" aria-label="Permalink to &quot;不同的联机方式以及对应的特点&quot;">​</a></h2><h3 id="局域网联机" tabindex="-1">局域网联机 <a class="header-anchor" href="#局域网联机" aria-label="Permalink to &quot;局域网联机&quot;">​</a></h3><p>通俗而言，多台电脑处于一个wifi或通过网线连接到同一台路由器，可以认为它们<strong>接入了同一个局域网</strong>。在同一局域网中，一台电脑进入一个单人世界后，可以在暂停菜单中选择「在LAN」，然后其他电脑就可以在「多人游戏」中找到这个世界了.</p><p>这种方式需要一台电脑保持游戏运行、世界开放，当那台电脑断开网络连接/退出世界/关机，其他玩家就不能加入到此世界了.</p><h3 id="p2p联机" tabindex="-1">P2P联机 <a class="header-anchor" href="#p2p联机" aria-label="Permalink to &quot;P2P联机&quot;">​</a></h3><p>P2P联机的常用方式是将不同地区的电脑通过P2P网络连结在同一个虚拟的「局域网」，因此实际操作方法与局域网联机类似，但是多了一些启用P2P的步骤。接下来将介绍LauncherX P2P方法和Zerotier P2P组网方法。</p><details class="details custom-block"><summary>关于P2P和Radmin VPN的区别</summary><p>LauncherX内置的联机方式基于P2P技术，通过软件管理一个虚拟的房间，然后将其他人连入房主的虚拟内网中映射。而Radmin相当于在房主电脑上部署了一个VPN服务器，其他人连入Radmin房间相当于直接接入了房主的本地内网。</p></details><p>需要注意的是，由于P2P技术的特殊性，仍然具备一定的情况会使得用户无法建立有效的连接，或是出现体验偏差的情况。这是由诸多网络环境因素导致的，比如网络运营商设置的<strong>NAT类型</strong>，可以阅读<a href="https://www.cnblogs.com/ssyfj/p/14791064.html" target="_blank" rel="noreferrer">P2P学习: NAT的四种类型以及类型探测</a><em>by - 山上有风景 - 博客园</em> 来进一步了解。<strong>总而言之，NAT一般分别有以下类型</strong>:</p><p>1。 全锥型(Full Cone) 2。 受限锥型(Restricted Cone)， 或者说是IP受限锥型 3。 端口受限锥型(Port Restricted Cone)，或者说是IP + PORT受限锥型 4。 对称型(Symmetric)</p><p>其中，1、2、3都是锥形NAT，编号越大限制越多; 4是对称型NAT，具有这四种中最大的限制。网络环境中NAT限制越大，成功实现P2P网络的可能越小.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>内容施工中</p></div><h3 id="构建虚拟专属网络" tabindex="-1">构建虚拟专属网络 <a class="header-anchor" href="#构建虚拟专属网络" aria-label="Permalink to &quot;构建虚拟专属网络&quot;">​</a></h3><h4 id="_1、使用radmin-lan" tabindex="-1">1、使用Radmin LAN <a class="header-anchor" href="#_1、使用radmin-lan" aria-label="Permalink to &quot;1、使用Radmin LAN&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p>内容施工中</p></div><h4 id="_0、知道其他工具吗" tabindex="-1">0、知道其他工具吗? <a class="header-anchor" href="#_0、知道其他工具吗" aria-label="Permalink to &quot;0、知道其他工具吗?&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">欢迎直接向我们的文档仓库提交issue或pull request来完善本文内容!</p><p>如果你选择提交pull request来完善本文，欢迎!</p><p>不过如果你选择通过issue来告诉我们更多类似Radmin LAN的工具，亦不甚感激!</p></div><h3 id="内网穿透" tabindex="-1">内网穿透 <a class="header-anchor" href="#内网穿透" aria-label="Permalink to &quot;内网穿透&quot;">​</a></h3><p>内网穿透将内网的电脑上特定端口通过转发来在公网的某个端口暴露出来，以供连接。市面上成熟的内网穿透（FRP）服务提供商有很多，比如OpenFRP。如果你有一个性能不足以运行服务端的VPS但是它足够用来搭建FRP服务器，也可以自行搭建。你需要自行确认当前所在地区和VPS服务商对FRP的管理政策。接下来介绍两种借助内网穿透的联机方法。</p><h4 id="_1、将局域网世界暴露到公网" tabindex="-1">1、将局域网世界暴露到公网 <a class="header-anchor" href="#_1、将局域网世界暴露到公网" aria-label="Permalink to &quot;1、将局域网世界暴露到公网&quot;">​</a></h4><div class="warning custom-block"><p class="custom-block-title">保持世界开启</p><p>要保持大家都能玩，请保证：</p><ul><li>不要退出世界，更不要退出游戏</li><li>不要断开网络连接</li><li>只有这个世界还在运转，大家才能在一起游玩。</li></ul></div><p>这个方案相当于将自己电脑上的Minecraft的内部服务器暴露给其他人，只需要将内网的服务转到外网即可。具体操作步骤如下：</p><ul><li><p>启动游戏，进入要一起游玩的世界</p></li><li><p>暂停游戏，点击【对局域网开放】</p></li><li><p>在不同版本游戏中，这一步的操作不一样。</p><ul><li><p>对于较老版本的游戏，Minecraft会寻找一个未被占用的端口，然后在那个端口上暴露游戏。具体使用的端口将会在聊天区显示出来类似如下文字：</p><div class="language-pascal vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">pascal</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">本地游戏已在端口[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11451</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]上开启</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>对于较新版本的游戏，在点击【对局域网开放】后会有另外一个界面，在这里可以自定义端口号，留空以允许Minecraft选择找到的一个随机的未被占用的端口，点击【创建局域网世界】以确认配置。端口号显示同上。</p></li></ul></li><li><p>现在你已经准备好世界了，记下这个端口号，然后在你选择的 <strong>FRP服务商控制台</strong> 中挑选合适的节点以创建FRP隧道或修改现有隧道（具体操作方法参考服务商提供的文档和教程）</p></li><li><p>将端口号输入到本地端口那一栏，保存，回到自己的电脑上启动FRP启动器</p></li><li><p>确保你的隧道已创建，然后开启它</p></li><li><p>开启成功后，将该隧道的链接连同对应的端口（可能并非游戏给你的端口，而是你在FRP控制台选择或被分配的端口）发送给一起玩的玩家。一起玩的玩家只需要使用同样的游戏客户端，在【多人游戏-添加服务器/直接连接】的【服务器地址】一栏填入你提供的地址即可连接。</p></li><li><p>每次启动世界所使用的端口号可能不相同，为此你需要每次都更改隧道中记录的本地端口号。</p></li><li><p>如果需要修改这种世界的联机服务器设置，你可能需要借助Mod来修改，比如：<a href="https://www.mcmod.cn/class/2754.html" target="_blank" rel="noreferrer">自定义局域网联机 (Lan Server Properties) - MC百科</a></p></li></ul><p>相关阅读：<a href="https://doc.openfrp.net/use/" target="_blank" rel="noreferrer">基本教程 | OpenFrp Docs</a> | <a href="https://doc.openfrp.net/use/desktop-launcher.html" target="_blank" rel="noreferrer">Windows 桌面启动器 | OpenFrp Docs</a> | <a href="https://doc.openfrp.net/use/configuration/minecraft.html" target="_blank" rel="noreferrer">我的世界（Minecraft）服务端配置 | OpenFrp Docs</a> | <a href="https://nitwikit.8aka.org/advance/Linux/frp/" target="_blank" rel="noreferrer">搭建内网穿透(Frp) | 笨蛋 MC 开服教程</a> | <a href="https://nitwikit.8aka.org/Java/basic" target="_blank" rel="noreferrer">基础知识 | 笨蛋 MC 开服教程</a></p><h4 id="_2、使用家庭电脑作为服务器" tabindex="-1">2、使用家庭电脑作为服务器 <a class="header-anchor" href="#_2、使用家庭电脑作为服务器" aria-label="Permalink to &quot;2、使用家庭电脑作为服务器&quot;">​</a></h4><p>你可以下载服务端到自己的电脑上来运行，这样，在你的电脑上就相当于有一个Minecraft游戏服务器了。我们称这个行为为 <strong>开服</strong>。</p><blockquote><p>开服，就是相当于，你在这个游戏里面，创建了一个24h永久不断开的联机房间。不管是作为创建服务器的你，还是说加入到你这个服务器的玩家，你们的进入与退出都不会影响到服务器的开放使用。（引用自：<a href="https://www.yuque.com/dongyue-ygyej/ny8uqi/de0g6uvzy31eebmg?singleDoc#" target="_blank" rel="noreferrer">服务器大体框架知识（搭建必看）</a>）</p></blockquote><p>已经有相当数量的教程介绍了如何开服。在这里，笔者仅将大体步骤抽象出来：</p><ul><li>准备环境（可以认为是：新建文件夹存放服务端，准备Java环境，下载服务端到新建文件夹）</li><li>准备运行脚本</li><li>首次运行脚本，然后阅读创建的EULA并决定是否同意。只有同意了EULA才能继续开服。（EULA：最终用户许可协议，是一种具备法律效力的文本。在这里主要是对Minecraft知识产权的保护。至少，首先，开服不要想着赚钱。Minecraft官方的EULA原文也可以在<a href="https://www.minecraft.net/zh-hans/eula" target="_blank" rel="noreferrer">这里看到</a>，或者查看<a href="https://www.minecraft.net/zh-hans/usage-guidelines" target="_blank" rel="noreferrer">Usage Guidelines | Minecraft</a> 来确认哪些可以做，哪些不可以做。）</li><li>等待服务器就绪，然后加入服务器的世界吧！</li></ul><p>推荐阅读：</p><ul><li>Minecraft Wiki：<a href="https://minecraft.wiki/w/Tutorial:Setting_up_a_server" target="_blank" rel="noreferrer">Tutorial: Setting up a server – Minecraft Wiki</a></li><li>笨蛋开服教程：<a href="https://nitwikit.8aka.org/intro" target="_blank" rel="noreferrer">开始 | 笨蛋 MC 开服教程</a></li><li>冬月的大体框架知识：<a href="https://www.yuque.com/dongyue-ygyej/ny8uqi/de0g6uvzy31eebmg?singleDoc#" target="_blank" rel="noreferrer">服务器大体框架知识（搭建必看）</a></li><li>官方下载服务端的链接：<a href="https://www.minecraft.net/zh-hans/download/server" target="_blank" rel="noreferrer">Download server for Minecraft | Minecraft</a></li><li>Java版服务端核心文件解释：<a href="https://zh.minecraft.wiki/w/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%A0%B8%E5%BF%83%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">服务端核心文件 | Minecraft Wiki</a></li></ul><p><em>这些内容对于接下来的内容同样有用。</em></p><h3 id="使用云服务器" tabindex="-1">使用云服务器 <a class="header-anchor" href="#使用云服务器" aria-label="Permalink to &quot;使用云服务器&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">谨慎辨别在线购买的服务</p><p>使用购物平台可以搜索到很多看起来很适合 “小白” 的云服务器，尤其是面板服。但是，商家可能利用信息差赚取更高额的服务费用。建议在付款前请求试用，或者在各大交流群、论坛中尝试询问有经验的 “大佬”、“菊苣”，抑或是仔细参考商品信息和商品评价，尽可能避免上当。</p><p>此外，可以尝试通过多种渠道了解和分析商家的信用水平，以避免出现纠纷或是遇到商家跑路的问题。</p><p>我们建议先了解的一些基础知识：<a href="https://nitwikit.8aka.org/Java/basic" target="_blank" rel="noreferrer">基础知识 | 笨蛋 MC 开服教程</a></p></div><h4 id="_0、真的需要云服务器吗" tabindex="-1">0、真的需要云服务器吗？ <a class="header-anchor" href="#_0、真的需要云服务器吗" aria-label="Permalink to &quot;0、真的需要云服务器吗？&quot;">​</a></h4><p>据笔者所知，只有在这些情况下才真正 <strong>有必要</strong> 租用云服务器来维持多人游戏：</p><p>1。 玩家数量较多，且需要运行世界的主机长期开启以保持玩家随时可连接 2。 在本文中其他方法无法维持游戏体验（包括但不限于：自己电脑无法维持多人游戏）</p><p>使用云服务器来组织多人游戏是有一定技术门槛和经济能力要求的。对于新手而言，只要愿意付出精力和时间，总是能够积累起技术来运营和维护属于自己的Minecraft多人游戏服务器。在真正租用服务器之前，首先要试着做：</p><p>1。 在自己的电脑上练习开服，同时学习一些计算机和网络的基础概念； 2。 学习一些JVM优化方面的概念（参考阅读：<a href="/zhCN/lxguide/others/adjust-ram-gc-ja.html">合理分配游戏内存、选择GC、配置JavaAgent | 日冕知识库</a>，<a href="/zhCN/lxguide/others/download-jre.html">下载合适的Java运行时 | 日冕知识库</a>，<a href="https://nitwikit.8aka.org/lava/overview" target="_blank" rel="noreferrer">Java 相关 | 笨蛋 MC 开服教程</a>）至少要知道如何调整服务器分配的内存、如何指定垃圾回收器（甚至 <strong>垃圾回收器</strong> 是干什么的也需要了解一下） 3。 了解并遵守有关的 <strong>涉及版权的具备法律效力的协议</strong> （比如 著名的 Minecraft EULA），确保你开服并不会侵犯他人权益来赚钱 4。 了解你将要开的服务器的类型（使用 什么样的服务端？性能需求有多大？又如何使用类似Spark这样的工具来分析服务器性能和占用？参考阅读：<a href="https://nitwikit.8aka.org/start/basic/what-is-server" target="_blank" rel="noreferrer">什么是服务端？ | 笨蛋 MC 开服教程</a>，<a href="https://snowcutieowo.github.io/spark/" target="_blank" rel="noreferrer">Spark Wiki：前言 | Continue Project</a>） 5。 其间，如果遇到问题可以到相关社区请教有经验的人。不要忘了 <strong>你并不比别人差</strong> ，并且无论如何 <strong>勤能补拙</strong> ，如果能做到 <strong>虚心请教</strong> 并且 <strong>独立人格、不讨人厌</strong> ，那么你将能获得不少人的帮助。（参考阅读：<a href="https://nitwikit.8aka.org/start/ask-for-help" target="_blank" rel="noreferrer">如何向大佬求助 | 笨蛋 MC 开服教程</a>，<a href="https://kb.corona.studio/zhCN/mc-starter/#%E8%87%AA%E9%A3%9F%E5%85%B6%E5%8A%9B%E3%80%81%E8%87%AA%E7%BB%99%E8%87%AA%E8%B6%B3" target="_blank" rel="noreferrer">Minecraft新手上路! #自食其力、自给自足| 日冕知识库</a>）</p><p>然后，你才真正准备好开服了。</p><h4 id="_1、云服务器分类" tabindex="-1">1、云服务器分类 <a class="header-anchor" href="#_1、云服务器分类" aria-label="Permalink to &quot;1、云服务器分类&quot;">​</a></h4><p><em>可以租用的云服务器有许多种。此处不讨论《我的世界》租赁服务器。</em></p><h5 id="a。minecraft-realms" tabindex="-1">a。Minecraft Realms <a class="header-anchor" href="#a。minecraft-realms" aria-label="Permalink to &quot;a。Minecraft Realms&quot;">​</a></h5><p>这是由Mojang提供的官方租赁服务器，存在Java版和基岩版两种版本。 <code>i</code></p><h6 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h6><ul><li>十分稳定，随着游戏主版本更新而更新</li></ul><h6 id="缺点" tabindex="-1">缺点： <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点：&quot;">​</a></h6><ul><li>大多部署在中国大陆境外，连接可能存在一些延迟</li><li>相比而言不那么便宜</li></ul><h6 id="特性" tabindex="-1">特性： <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性：&quot;">​</a></h6><ul><li>玩家必须拥有正版Minecraft，无法通过离线模式游玩</li><li>一般有严格的游玩人数限制，适合朋友一起玩</li><li>扩展性局限于原版游戏</li><li>基岩版和Java版Realms都有，但是分离</li></ul><h6 id="如何购买" tabindex="-1">如何购买： <a class="header-anchor" href="#如何购买" aria-label="Permalink to &quot;如何购买：&quot;">​</a></h6><p>前往Minecraft官网即可购买：<a href="https://www.minecraft.net/en-us/msaprofile/myrealms" target="_blank" rel="noreferrer">Wallet &amp; Realms | Minecraft</a></p><p>参考阅读（官方）：<a href="https://www.minecraft.net/zh-hans/realms/realms-tutorial" target="_blank" rel="noreferrer">Minecraft Realms 教程和指南 | Minecraft</a></p><hr><h5 id="b。vps" tabindex="-1">b。VPS <a class="header-anchor" href="#b。vps" aria-label="Permalink to &quot;b。VPS&quot;">​</a></h5><p>VPS可能包含NAT类和独立IP类，对于Minecraft游戏而言，两者的区别在技术上并不会引起很大影响。如果是独立IP，那么开放默认的25565端口后，服务器地址可以不用在末尾追加端口（比如：<code>thatsmine.kami.su:25565</code>中，末尾的<code>:25565</code>是没必要的，可以省略）；而如果是NAT类VPS，那么端口在暴露到公网时会被转发，也就是说原本的25565端口在暴露到公网时候会变成别的端口（具体变成什么端口请询问服务商）这时候如果想要抹掉地址末尾的端口号，需要用你的域名创建一个SRV解析指向你的服务器。相关阅读：<a href="https://nitwikit.8aka.org/advance/domain-application-and-dns-resolution/#srv-%E8%AE%B0%E5%BD%95" target="_blank" rel="noreferrer">域名申请与解析 | 笨蛋 MC 开服教程</a>。 <code>i</code></p><p>相对而言，使用VPS开服将会有最高的自由度。 <code>i</code></p><h6 id="优点-1" tabindex="-1">优点： <a class="header-anchor" href="#优点-1" aria-label="Permalink to &quot;优点：&quot;">​</a></h6><ul><li>自由度超高，完全自选服务端核心</li><li>扩展性超高，可以选用Forge、Fabric、Arclight、Mohist等服务端</li><li>可以在VPS中运行群组服，满足更多需求</li></ul><h6 id="缺点-1" tabindex="-1">缺点： <a class="header-anchor" href="#缺点-1" aria-label="Permalink to &quot;缺点：&quot;">​</a></h6><ul><li>运维技术门槛更高</li><li>要求对硬件需求有明确认知</li><li>开服的经济成本相对较高</li></ul><h6 id="特性-1" tabindex="-1">特性： <a class="header-anchor" href="#特性-1" aria-label="Permalink to &quot;特性：&quot;">​</a></h6><ul><li>允许非正版玩家加入游戏</li><li>由于有最高的自由度，不仅可以在VPS上运行Java版服务器，还可以运行基岩版服务器；在VPS上开启的Java版服务器甚至可以做到让Java版和基岩版玩家一起游玩（参考：<a href="https://nitwikit.8aka.org/Java/process/mobile-player/Geyser/introduction/overview" target="_blank" rel="noreferrer">Geyser概览 | 笨蛋 MC 开服教程</a>）也可以做到让正版玩家、外置登录玩家和离线玩家一起游玩（参考：<a href="https://github.com/CaaMoe/MultiLogin/wiki" target="_blank" rel="noreferrer">MultiLogin Wiki</a>）</li></ul><h5 id="如何购买-1" tabindex="-1">如何购买： <a class="header-anchor" href="#如何购买-1" aria-label="Permalink to &quot;如何购买：&quot;">​</a></h5><p>除了阿里、腾讯云等云计算大厂，还有许多二线三线云服务商提供VPS租赁服务。一般而言，针对Minecraft特化的VPS由专注于提供游戏服务器的服务商提供，性能更贴合实际需求，价格相比大厂更便宜。但是要小心，有一些不那么正规的商家可能会兜售 “超开服务器” ，即单台宿主服务器（可以理解为一台电脑）上本来性能只够4个人平分，但是商家在上面部署了8个或更多VPS来售卖——这样会导致峰值网络性能和算力变差，使得游玩体验大打折扣。 <code>i</code></p><p>在购买租赁VPS之前，请尽可能地打听商家的名誉，再三确认算力需求，然后再下单。 <code>i</code></p><hr><h5 id="c。面板服" tabindex="-1">c。面板服 <a class="header-anchor" href="#c。面板服" aria-label="Permalink to &quot;c。面板服&quot;">​</a></h5><p>面板服，顾名思义，就是提供一个网页面板以供管理，系统环境配置等基本上都不需要你自己考虑。这可能是最简单的方案。有的服务商会专门出租这种服务，甚至有的服务商会在面板中提供一些整合包以供一键开服，一般情况下他们提供的预设在稳定性上有足够保障，只是快捷开服想要玩玩的话，这个方案是最合适的，但是如果需要自己排除错误，仍然需要学习一些基础知识（参考上文关于VPS的部分）。 <code>i</code></p><p>与此同时，如果你租用了VPS，也可以请求技术人员为你部署类似MCSManager的面板便于管理。 <code>i</code></p><div class="warning custom-block"><p class="custom-block-title">小心贩子</p><p>面板服市场上除了可能出现超开问题，还可能有贩子。贩子从上游渠道进货得到实例开启权限，然后将其售卖给客户，实际的技术细节很少涉及；并且由于要保证利润，实际上的价格缺乏竞争力，但是他们会为自己的宣传投资以保证成交量。有能力的情况下，请选择能没有中间商的面板服租赁。</p></div><h6 id="优点-2" tabindex="-1">优点： <a class="header-anchor" href="#优点-2" aria-label="Permalink to &quot;优点：&quot;">​</a></h6><ul><li>便于随时访问和管理</li><li>可能可以很方便地进行服务端部署</li></ul><h6 id="缺点-2" tabindex="-1">缺点： <a class="header-anchor" href="#缺点-2" aria-label="Permalink to &quot;缺点：&quot;">​</a></h6><ul><li>自由度受限</li><li>如果恰好买到配备功能缺失的面板的面板服，功能会进一步受到限制</li><li>被坑的可能性提升</li></ul><h6 id="特性-2" tabindex="-1">特性： <a class="header-anchor" href="#特性-2" aria-label="Permalink to &quot;特性：&quot;">​</a></h6><ul><li>整体会比VPS便宜一些，适合轻量化需求的服主</li></ul><h6 id="如何购买-2" tabindex="-1">如何购买： <a class="header-anchor" href="#如何购买-2" aria-label="Permalink to &quot;如何购买：&quot;">​</a></h6><p>预制面板服多见于电商平台和专攻Minecraft等游戏服务器供应的服务商。 <code>i</code></p><hr>',85)]))}const f=e(l,[["render",n]]);export{u as __pageData,f as default};
