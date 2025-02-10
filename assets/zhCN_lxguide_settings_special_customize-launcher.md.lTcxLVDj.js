import{_ as l,o as e,c as i,ag as t}from"./chunks/framework.CC5dk9o4.js";const d=JSON.parse('{"title":"关于个性化LauncherX外观的一些提示","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/lxguide/settings/special/customize-launcher.md","filePath":"zhCN/lxguide/settings/special/customize-launcher.md"}'),r={name:"zhCN/lxguide/settings/special/customize-launcher.md"};function c(s,a,n,o,h,u){return e(),i("div",null,a[0]||(a[0]=[t('<h1 id="关于个性化launcherx外观的一些提示" tabindex="-1">关于个性化LauncherX外观的一些提示 <a class="header-anchor" href="#关于个性化launcherx外观的一些提示" aria-label="Permalink to &quot;关于个性化LauncherX外观的一些提示&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">遇到个性化问题了吗？</p><p>背景图片换上之后，按钮难以看到？还是一通操作之后发现自己的个性化方案性能开销过大？这里将 就<strong>当前（2024年7月24日）</strong> LauncherX存在的一些个性化上可能有点难以理解的问题进行解答。</p></div><nav class="table-of-contents"><ul><li><a href="#关于个性化launcherx外观的一些提示">关于个性化LauncherX外观的一些提示</a><ul><li><a href="#背景图片导致的问题">背景图片导致的问题</a></li><li><a href="#半透明类背景导致的问题">半透明类背景导致的问题</a></li><li><a href="#渐进式模糊性能问题">渐进式模糊性能问题</a><ul><li><a href="#_1。渐进式模糊不生效">1。渐进式模糊不生效</a></li><li><a href="#_2。渐进式模糊性能太差或模糊质量太低">2。渐进式模糊性能太差或模糊质量太低</a></li></ul></li><li><a href="#透视效果和动画效果性能问题">透视效果和动画效果性能问题</a></li></ul></li></ul></nav><h2 id="背景图片导致的问题" tabindex="-1">背景图片导致的问题 <a class="header-anchor" href="#背景图片导致的问题" aria-label="Permalink to &quot;背景图片导致的问题&quot;">​</a></h2><p>背景图片可能导致窗口内部分组件辨识度变差。您可以依照以下思路寻求最优解：</p><ul><li>【设置-外观-基础设定】禁用 “在主界面隐藏底部导航条”：以确保导航条的内容的可见度</li><li>【设置-外观-基础设定】尝试更多 “主界面前景文字颜色” 的选择：不同颜色的文字可能在启用背景时有更好的效果，自动选择可能不总是最优选择。</li><li>【设置-外观-背景】启用 “通过渐进式模糊优化上层文字显示效果”：将会在图片上应用一种模糊效果，借助模糊来衬托文字和其他元素。</li><li>【设置-外观-背景】尝试更多 “渐进式模糊效果强度” 的选择：调整这项设置以期寻求最佳的背景图片与主界面元素之间的平衡。</li><li>【设置-外观-背景】启用 “显示上层文字阴影”：尝试启用或禁用此项来调整文字自身的显示效果</li><li>【在其他图片调整软件中】调整图片的饱和度、亮度、对比度等参数：从根本上解决问题。毕竟并不是所有图片在一开始都是适合作为背景的。<br>记得做好备份。</li></ul><h2 id="半透明类背景导致的问题" tabindex="-1">半透明类背景导致的问题 <a class="header-anchor" href="#半透明类背景导致的问题" aria-label="Permalink to &quot;半透明类背景导致的问题&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">关于Mica材质背景</p><p>这种背景也算是一种半透明背景，但是仅在Windows11上可用。</p></div><p>半透明背景由于涉及实时计算，故可能存在以下问题：</p><ul><li>可能需要有兼容的显卡驱动以供功能正常可用</li><li>如果频繁变更LauncherX窗口的位置或其背后的显示内容，将会额外增加不少的系统资源占用。</li></ul><p>此外，在进行截图的时候，请留意半透明背景后方是否包含敏感信息。</p><h2 id="渐进式模糊性能问题" tabindex="-1">渐进式模糊性能问题 <a class="header-anchor" href="#渐进式模糊性能问题" aria-label="Permalink to &quot;渐进式模糊性能问题&quot;">​</a></h2><h3 id="_1。渐进式模糊不生效" tabindex="-1">1。渐进式模糊不生效 <a class="header-anchor" href="#_1。渐进式模糊不生效" aria-label="Permalink to &quot;1。渐进式模糊不生效&quot;">​</a></h3><p>前往【设置-外观-性能】，找到 “清理渐进式模糊缓存”，点击重置，然后尝试重启LauncherX</p><h3 id="_2。渐进式模糊性能太差或模糊质量太低" tabindex="-1">2。渐进式模糊性能太差或模糊质量太低 <a class="header-anchor" href="#_2。渐进式模糊性能太差或模糊质量太低" aria-label="Permalink to &quot;2。渐进式模糊性能太差或模糊质量太低&quot;">​</a></h3><p>前往【设置-外观-性能】，找到 “背景图片渐进式模糊质量”，选择更高或更低的选择，然后如有必要的话，重启LauncherX</p><h2 id="透视效果和动画效果性能问题" tabindex="-1">透视效果和动画效果性能问题 <a class="header-anchor" href="#透视效果和动画效果性能问题" aria-label="Permalink to &quot;透视效果和动画效果性能问题&quot;">​</a></h2><p>若您的电脑在渲染动画时候较为吃力，可以依照现实情况尝试以下操作：</p><ul><li><p>【在系统电源设置中】关闭省电模式：省电模式将会降低电脑的性能</p></li><li><p>【在电脑的固件设置中】尝试提升CPU和GPU的频率：通过 “超频” 行为，更高的频率会在一定程度上优化渲染效果和速度</p><div class="danger custom-block"><p class="custom-block-title">危险！这么做的话，您应该知道您自己在做什么</p><p>超频行为可能会导致您的硬件保修失效，或是给电脑稳定性造成负面影响，甚至造成硬件损坏。这些都属于您的个人行为，您完全没必要这么做，因而您的个人行为造成的任何损失均不由我们负责。</p></div></li><li><p>【关闭动画】关闭动画：如果您不需要LauncherX动画可以将其关闭。参考：<a href="/zhCN/lxguide/features/tricks/disable-animation.html">禁用动画 | 日冕知识库</a></p></li><li><p>【其他】尝试更新显卡驱动：可能新的显卡驱动包含动画渲染方面的优化</p></li><li><p>【其他】升级硬件配置：如果可以的话。</p></li></ul>',19)]))}const m=l(r,[["render",c]]);export{d as __pageData,m as default};
