import{_ as s,c as a,o as i,U as n}from"./chunks/framework.F7EzL_yo.js";const g=JSON.parse('{"title":"创建和配置补全器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/resourceCompleter/createAndConfigCompleter.md","filePath":"zhCN/projbobcat/resourceCompleter/createAndConfigCompleter.md"}'),e={name:"zhCN/projbobcat/resourceCompleter/createAndConfigCompleter.md"},l=n(`<h1 id="创建和配置补全器" tabindex="-1">创建和配置补全器 <a class="header-anchor" href="#创建和配置补全器" aria-label="Permalink to &quot;创建和配置补全器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#创建和配置补全器">创建和配置补全器</a><ul><li><a href="#初始化补全器">初始化补全器</a></li><li><a href="#补全游戏资源">补全游戏资源</a></li><li><a href="#报告进度">报告进度</a><ul><li><a href="#报告资源检查器的进度">报告资源检查器的进度</a></li><li><a href="#报告补全器文件下载进度">报告补全器文件下载进度</a></li><li><a href="#报告下载中的文件的进度信息">报告下载中的文件的进度信息</a></li></ul></li></ul></li></ul></nav><h2 id="初始化补全器" tabindex="-1">初始化补全器 <a class="header-anchor" href="#初始化补全器" aria-label="Permalink to &quot;初始化补全器&quot;">​</a></h2><p>创建一个资源补全器的方法非常简单，您只需要使用下面的代码即可完成补全器的初始化：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> completer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DefaultResourceCompleter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MaxDegreeOfParallelism </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [MAX_DEGREE_OF_PARALLELISM],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ResourceInfoResolvers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IResourceInfoResolver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 资源信息解析器的初始化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TotalRetry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [NUMBER_OF_TOTAL_RETRY],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CheckFile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [CHECK_FILE_AFTER_DOWNLOADED],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DownloadParts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [TOTAL_DOWNLOAD_SEGMENTS_FOR_LARGE_FILE]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>资源信息解析器的初始化相关教程请参见 <a href="/zhCN/projbobcat/resourceCompleter/resourceInfoResolver/index.html">资源信息解析器</a> 章节</p></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:left;">数据类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[MAX_DEGREE_OF_PARALLELISM]</td><td style="text-align:left;">INT</td><td style="text-align:center;">资源检查并行程度（同时检查游戏资源的数量）</td></tr><tr><td style="text-align:center;">[CHECK_FILE_AFTER_DOWNLOADED]</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;">在文件下载完成后检查文件完整性（如果存在资源校检码）</td></tr><tr><td style="text-align:center;">[TOTAL_DOWNLOAD_SEGMENTS_FOR_LARGE_FILE]</td><td style="text-align:left;">INT</td><td style="text-align:center;">大文件下载时的分片数量</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>[MAX_DEGREE_OF_PARALLELISM]</strong> 和 <strong>[TOTAL_DOWNLOAD_SEGMENTS_FOR_LARGE_FILE]</strong> 的数值大小请视硬件性能酌情调整，设置过大的数值可能会导致会导致吞吐量的下降。</p></div><h2 id="补全游戏资源" tabindex="-1">补全游戏资源 <a class="header-anchor" href="#补全游戏资源" aria-label="Permalink to &quot;补全游戏资源&quot;">​</a></h2><p>在完成资源补全器的初始化操作后，您只需要调用补全方法即可开始执行检查和补全操作：</p><p>在异步上下文中，使用 <strong>CheckAndDownloadTaskAsync</strong> 来完成安装：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> completer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CheckAndDownloadTaskAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (result.TaskStatus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TaskResultStatus.Error </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (result.Value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.IsLibDownloadFailed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">??</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在完成补全后，资源检查器会返回执行结果。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 您可以检查 result 中的属性值来确定补全是否完成</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // IsLibDownloadFailed 会反映启动必须的库文件是否已经成功补全</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 通常来说，如果库文件的补全失败，很有可能会导致游戏的启动失败</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在同步上下文中，使用 <strong>CheckAndDownload</strong> 来完成安装：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> completer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CheckAndDownload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="报告进度" tabindex="-1">报告进度 <a class="header-anchor" href="#报告进度" aria-label="Permalink to &quot;报告进度&quot;">​</a></h2><p>在某些情况下，资源补全器可能会需要数分钟的时间来完成资源的检查和下载。 因此，您可能需要实时向用户汇报补全器目前的进度。</p><h3 id="报告资源检查器的进度" tabindex="-1">报告资源检查器的进度 <a class="header-anchor" href="#报告资源检查器的进度" aria-label="Permalink to &quot;报告资源检查器的进度&quot;">​</a></h3><p>您可以通过注册事件 <strong>GameResourceInfoResolveStatus</strong> 来获取实时的检查进度：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">completer.GameResourceInfoResolveStatus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReportProgress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args.Progress, args.Status); };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了检查器当前的百分比进度。<strong>args.Status</strong> 则是检查器当前进度的文字描述。</p><h3 id="报告补全器文件下载进度" tabindex="-1">报告补全器文件下载进度 <a class="header-anchor" href="#报告补全器文件下载进度" aria-label="Permalink to &quot;报告补全器文件下载进度&quot;">​</a></h3><p>您可以通过注册事件 <strong>DownloadFileCompletedEvent</strong> 来获取实时的检查进度：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">completer.DownloadFileCompletedEvent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // sender 参数为补全器上一个成功下载的文件，类型为 DownloadFile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // args 返回了该文件的下载状态（成功 / 失败），以及文件的重试计数，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 类型为 DownloadFileCompletedEventArgs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Class/Model/DownloadFile.cs" target="_blank" rel="noreferrer">DownloadFile 类结构</a></li><li><a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Event/DownloadFileCompletedEventArgs.cs" target="_blank" rel="noreferrer">DownloadFileCompletedEventArgs 事件结构</a></li></ul></div><h3 id="报告下载中的文件的进度信息" tabindex="-1">报告下载中的文件的进度信息 <a class="header-anchor" href="#报告下载中的文件的进度信息" aria-label="Permalink to &quot;报告下载中的文件的进度信息&quot;">​</a></h3><p>您可以通过注册事件 <strong>DownloadFileChangedEvent</strong> 来获取实时的检查进度：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rC.DownloadFileChangedEvent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // args 返回了下载中的文件的具体信息（已接收的字节数、总共的字节数、当前速度、百分比进度）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 类型为 DownloadFileChangedEventArgs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Event/DownloadFileChangedEventArgs.cs" target="_blank" rel="noreferrer">DownloadFileChangedEventArgs 事件结构</a></li></ul></div>`,29),t=[l];function p(r,h,k,d,o,c){return i(),a("div",null,t)}const b=s(e,[["render",p]]);export{g as __pageData,b as default};
