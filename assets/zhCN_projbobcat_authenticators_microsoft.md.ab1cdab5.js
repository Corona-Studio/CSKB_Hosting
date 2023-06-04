import{_ as s,o as n,c as a,R as l}from"./chunks/framework.f0ad3fb5.js";const F=JSON.parse('{"title":"Microsoft 验证模型","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/authenticators/microsoft.md","filePath":"zhCN/projbobcat/authenticators/microsoft.md"}'),e={name:"zhCN/projbobcat/authenticators/microsoft.md"},p=l(`<h1 id="microsoft-验证模型" tabindex="-1">Microsoft 验证模型 <a class="header-anchor" href="#microsoft-验证模型" aria-label="Permalink to &quot;Microsoft 验证模型&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#microsoft-验证模型">Microsoft 验证模型</a><ul><li><a href="#准备工作">准备工作</a><ul><li><a href="#配置缓存凭据提供方法">配置缓存凭据提供方法</a></li></ul></li><li><a href="#初始化验证器">初始化验证器</a></li><li><a href="#获取验证结果">获取验证结果</a></li><li><a href="#解读验证结果">解读验证结果</a><ul><li><a href="#失败的验证结果">失败的验证结果</a></li><li><a href="#成功的验证结果">成功的验证结果</a></li></ul></li></ul></li></ul></nav><p>该验证模型实现了新版基于 Azure 的全新验证流程，适用于目前仍在维护的全部 MineCraft 版本。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>由于新版验证流程使用了基于 Azure 的验证方式。 因此，在开始之前请确保您已经完成了 <a href="/zhCN/projbobcat/createNewAzureApp.html">Azure 应用的配置</a></p><p>在完成了 Azure 的应用注册后，请确保在程序入口点完成了<a href="/zhCN/projbobcat/installationAndConfig.html#配置微软登录验证器">微软验证器的初始化</a>。</p><h3 id="配置缓存凭据提供方法" tabindex="-1">配置缓存凭据提供方法 <a class="header-anchor" href="#配置缓存凭据提供方法" aria-label="Permalink to &quot;配置缓存凭据提供方法&quot;">​</a></h3><p>由于该验证模型的特殊性，开发者需要保存首次验证返回的 <strong>刷新令牌</strong> 和 <strong>失效时间</strong> 来帮助验证器完成验证。 验证器在验证时会首次调用该方法来查询本地令牌缓存的有效性，如果本地令牌仍然有效，则直接返回验证结果。 如本地缓存的令牌已失效，则需要开发者手动请求新令牌后并返回刷新后的令牌。</p><p>下面我们提供了一个该方法的样例实现：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#89DDFF;">&lt;(bool,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GraphAuthResultModel</span><span style="color:#89DDFF;">?)&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CacheTokenProviderAsync</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsNullOrEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">XBLToken</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> default</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsNullOrEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">XBLRefreshToken</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> default</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 计算失效时间 </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">expireDate</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> LastRefreshedTime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddSeconds</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ExpiresIn</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 如果本地缓存令牌依旧是有效的，则直接返回当前令牌 </span></span>
<span class="line has-focus"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 否则，使用刷新令牌请求新的令牌 </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">expireDate </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> DateTime</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Now</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">result</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GraphAuthResultModel</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">            ExpiresIn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(int)(</span><span style="color:#A6ACCD;">expireDate </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> DateTime</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Now</span><span style="color:#89DDFF;">).</span><span style="color:#A6ACCD;">TotalSeconds</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">            AccessToken </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> XBLToken</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">            RefreshToken </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> XBLRefreshToken </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line has-focus"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 请求新的登录令牌 </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">refreshReqDic</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KeyValuePair</span><span style="color:#89DDFF;">&lt;string,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">string&gt;&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">client_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MicrosoftAuthenticator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ApiSettings</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ClientId</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">refresh_token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> XBLRefreshToken</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grant_type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">refresh_token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">refreshReq</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HttpRequestMessage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">HttpMethod</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Post</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MicrosoftAuthenticator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MSRefreshTokenRequestUrl</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        Content </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormUrlEncodedContent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">refreshReqDic</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">refreshRes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> DefaultClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SendAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">refreshReq</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">refreshContent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> refreshRes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Content</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ReadAsStringAsync</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">refreshModel</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MicrosoftAuthenticator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ResolveMSGraphResult</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">refreshContent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    GraphAuthResultModelContext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Default</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">GraphAuthResultModel</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">refreshModel </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> GraphAuthResultModel model</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">refreshModel </span><span style="color:#F78C6C;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GraphResponseErrorModel</span><span style="color:#A6ACCD;"> error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 在这里处理失败的刷新操作 </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> default</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> model</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="初始化验证器" tabindex="-1">初始化验证器 <a class="header-anchor" href="#初始化验证器" aria-label="Permalink to &quot;初始化验证器&quot;">​</a></h2><p>您可以通过下面的代码初始化微软验证器：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">microsoftAuthenticator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MicrosoftAuthenticator</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    CacheTokenProvider </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> CacheTokenProviderAsync</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Email </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[EMAIL]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    LauncherAccountParser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> launcherAccountParser</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">launcherAccountParser</td><td style="text-align:center;">对于启动器账户解析器的初始化，详见此处</td></tr><tr><td style="text-align:center;">[EMAIL]</td><td style="text-align:center;">验证账户的邮箱地址</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>对于 <strong>launcherAccountParser</strong>（游戏档案解析器）的初始化，请参考<a href="/zhCN/projbobcat/additionalParsers/gameProfileParser.html">游戏档案解析器</a>页面</p></div><h2 id="获取验证结果" tabindex="-1">获取验证结果 <a class="header-anchor" href="#获取验证结果" aria-label="Permalink to &quot;获取验证结果&quot;">​</a></h2><p>在您完成验证模型的初始化后，您只需要调用离线验证器的验证方法来完成账户验证。</p><p>在异步上下文中，使用 <strong>AuthTaskAsync</strong> 来完成验证：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">authResult</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> offlineAuthenticator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AuthTaskAsync</span><span style="color:#89DDFF;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在同步上下文中，使用 <strong>Auth</strong> 来完成验证：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">authResult</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> offlineAuthenticator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Auth</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="解读验证结果" tabindex="-1">解读验证结果 <a class="header-anchor" href="#解读验证结果" aria-label="Permalink to &quot;解读验证结果&quot;">​</a></h2><p>在验证方法完成之后，验证模型会返回验证结果，这是父类型为 <a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Class/Model/Auth/AuthResultBase.cs" target="_blank" rel="noreferrer">AuthResultBase</a> 的对象。 所有的验证结果都包含一个枚举值 <strong>AuthStatus</strong>，该枚举值直接指示了验证结果的成功或是失败。 在下面您可以看到对验证结果的解读：</p><h3 id="失败的验证结果" tabindex="-1">失败的验证结果 <a class="header-anchor" href="#失败的验证结果" aria-label="Permalink to &quot;失败的验证结果&quot;">​</a></h3><p>通过判断 <strong>Error</strong> 是否为空，您可以很轻松的判断验证模型返回的验证结果是否是有效的， <strong>Error</strong> 对象会包含以下字段来告诉您一些细节：</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">authResult.Error.Cause</td><td style="text-align:center;">导致问题的具体原因</td></tr><tr><td style="text-align:center;">authResult.Error.Error</td><td style="text-align:center;">错误名称</td></tr><tr><td style="text-align:center;">authResult.Error.ErrorMessage</td><td style="text-align:center;">错误的详细信息，可能包含解决方案</td></tr></tbody></table><h3 id="成功的验证结果" tabindex="-1">成功的验证结果 <a class="header-anchor" href="#成功的验证结果" aria-label="Permalink to &quot;成功的验证结果&quot;">​</a></h3><p>如果验证结果中的 <strong>Error</strong> 字段为空，则表示本次验证是有效的，成功的验证结果会包含下面的信息：</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">authResult.Id</td><td style="text-align:center;">该用户名的唯一标识符，ProjBobcat 使用特定的生成方式来生成这个标识符</td></tr><tr><td style="text-align:center;">authResult.AccessToken</td><td style="text-align:center;">用户账户的授权凭据</td></tr><tr><td style="text-align:center;">authResult.Profiles</td><td style="text-align:center;">用户可用的角色列表，可能包含多个可用角色</td></tr><tr><td style="text-align:center;">authResult.SelectedProfile</td><td style="text-align:center;">用户当前选择的角色，该字段可能为空。如果为空则需要提示用户进行手动选择。</td></tr><tr><td style="text-align:center;">authResult.User</td><td style="text-align:center;">用户账户信息摘要，包含一些基础的账户信息</td></tr><tr><td style="text-align:center;">authResult.LocalId</td><td style="text-align:center;">本地 ID，通常为随机生成的 UUID</td></tr><tr><td style="text-align:center;">authResult.RemoteId</td><td style="text-align:center;">验证服务器返回的远程 ID，通常为该用户的唯一标识符</td></tr><tr><td style="text-align:center;">authResult.XBoxUid</td><td style="text-align:center;">XBox Live UID</td></tr><tr><td style="text-align:center;">authResult.Email</td><td style="text-align:center;">验证所使用的邮箱地址</td></tr><tr><td style="text-align:center;">authResult.CurrentAuthTime</td><td style="text-align:center;">当前的验证时间，<strong>开发者需要保存这个字段来帮助确认本地缓存令牌的有效性</strong></td></tr><tr><td style="text-align:center;">authResult.ExpiresIn</td><td style="text-align:center;">令牌失效时间（单位：秒），<strong>开发者需要保存这个字段来帮助确认本地缓存令牌的有效性</strong></td></tr><tr><td style="text-align:center;">authResult.RefreshToken</td><td style="text-align:center;">刷新令牌，<strong>开发者需要保存这个字段来帮助刷新失效的令牌</strong></td></tr><tr><td style="text-align:center;">authResult.Skin</td><td style="text-align:center;">用户账户的皮肤 URL</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请使用相应的限制或是加密等操作来安全的储存用户相关令牌的机密数据，这部分数据的泄露可能会造成损失。</p></div>`,31),t=[p];function o(r,c,D,y,C,A){return n(),a("div",null,t)}const u=s(e,[["render",o]]);export{F as __pageData,u as default};
