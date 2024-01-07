import{_ as s,c as i,o as a,U as n}from"./chunks/framework.F7EzL_yo.js";const g=JSON.parse('{"title":"docs","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md"}'),l={name:"README.md"},e=n(`<h1 id="docs" tabindex="-1">docs <a href="https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml" target="_blank" rel="noreferrer"><img src="https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml/badge.svg" alt="Deploy"></a> <a class="header-anchor" href="#docs" aria-label="Permalink to &quot;docs [![Deploy](https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml/badge.svg)](https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml)&quot;">​</a></h1><p>日冕知识库文档，使用 Markdown 撰写。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>这里是日冕知识库官方仓库，里面包含了有关于团队项目的详细介绍以及开发文档。同时也包含部分 MineCraft 游戏内容的相关规范。 目前已经支持包括 简体中文、繁体中文、俄罗斯语等语言。项目使用 MIT 协议开源，欢迎广大热心网友帮助我们支持更多的语言！</p><img width="1031" alt="image" src="https://user-images.githubusercontent.com/25716486/218275312-68e63c3b-97d8-49d7-ae07-bc86f6e68fb0.png"><h2 id="帮助我们添加一个新语言支持" tabindex="-1">帮助我们添加一个新语言支持？ <a class="header-anchor" href="#帮助我们添加一个新语言支持" aria-label="Permalink to &quot;帮助我们添加一个新语言支持？&quot;">​</a></h2><ol><li>首先，您需要点击右上方的 <code>Fork</code> 来取得可修改的仓库副本</li><li>将项目克隆到本地，使用您常用的 IDE 打开项目</li><li><a href="https://segmentfault.com/a/1190000019287972" target="_blank" rel="noreferrer">确定您即将翻译的语言的 i18n 缩写</a>。假如您即将翻译的语言是 <strong>繁体中文（台湾）</strong>，您在之后使用到的名称则是 <strong>zhTW</strong>，呈现在页面中的语言名称必须对应的是“繁体中文（台湾）”（或“台湾繁体”）。“繁体中文（香港）”、简体中文（新加坡）与Español(Mexico)、Русский(Украина)同理。 <strong>请注意, 您将要为一个或多个地区适配适合当地语言习惯的本地化文本。您首先需要考虑的即是国际承认和地区习惯之间的平衡。任何我们认为会造成不良影响的内容均会被移除, 且制造此内容者将会被移出贡献者列表。</strong></li><li>跳转到项目目录下的 <code>docs/.vitepress</code> 文件夹，您将在这个目录下找到如下内容：</li></ol><ul><li>navBar（用于存放顶部导航条的翻译内容）</li><li>searchBar（用于存放搜索条的翻译内容）</li><li>sideBar（用于存放侧边导航栏的翻译内容）</li><li><code>i18n 缩写</code>.ts（用于整合上述翻译内容）</li><li>config.ts（配置文件总成）</li></ul><ol start="5"><li>您需要分别在 <code>navBar</code>、<code>searchBar</code>、<code>sideBar</code> 下创建新的翻译配置文件，代码定义参照各目录下的 <code>zhCN.ts</code>，<strong>部分代码变量名可能包含 i18n 字段</strong>，请将其修改为您将要翻译的语言的 i18n 缩写！</li><li>在完成上一步的文件创建和翻译工作后，您需要在 <code>docs/.vitepress</code> 目录下创建 <code>i18n 缩写</code>.ts<code>，代码定义参照与同目录下的 </code>zhCN.ts\` 保持一致，<strong>代码变量名包含 i18n 字段</strong>，请将其修改为您将要翻译的语言的 i18n 缩写！</li><li>在 <code>docs/.vitepress/sharedConfig.ts</code> 文件中找到如下内容：</li></ol><p><strong>注意在顶部添加相应的 import</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">algolia</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  appId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  apiKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  indexName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;kb-corona&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  locales</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: zhSearchBarLocale,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ruRU</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ruSearchBarLocale,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    zhTW</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: zhTWSearchBarLocale,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    enUS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: enUSSearchBarLocale,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 在此处添加您的搜索条的翻译内容 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="8"><li>在 <code>docs/.vitepress/config.ts</code> 中找到如下内容：</li></ol><p><strong>注意在顶部添加相应的 import</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">locales</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;简体中文&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zhConfig },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ruRU</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Русский&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ru-RU&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ruConfig },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  zhTW</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;繁體中文(台)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zh-TW&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zhTWConfig },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enUS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;English(US)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enUSConfig },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 在此处添加您的翻译内容整合 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="9"><li>最后，在 <code>docs</code> 目录下创建一个新的文件夹，文件夹名称为您将要翻译的语言的 <strong>i18n 缩写</strong>，并将同目录下 <code>zhCN</code> 文件夹中的内容 <strong>复制</strong> 到您刚刚创建的文件夹中。 <strong>请注意：翻译文稿命名需要符合国际公认的标准。</strong></li><li>同时，将 <code>docs</code> 目录下的 index.md 也复制到在上一步创建的文件夹中。</li><li>将文件夹中的所有内容翻译为目标语言。在完成后，您即可向本仓库提交 PR！</li><li>在我们审核完成后，将会决定是否合并到主分支。感谢您的参与！</li></ol><h2 id="贡献" tabindex="-1">贡献 <a class="header-anchor" href="#贡献" aria-label="Permalink to &quot;贡献&quot;">​</a></h2><p>感谢每一位翻译作者的无私奉献！</p><h3 id="多语言贡献者" tabindex="-1">多语言贡献者 <a class="header-anchor" href="#多语言贡献者" aria-label="Permalink to &quot;多语言贡献者&quot;">​</a></h3><a href="https://github.com/Corona-Studio/docs/graphs/contributors"><img src="https://contrib.rocks/image?repo=Corona-Studio/docs"></a><br><br><ul><li><a href="https://github.com/fr1g" target="_blank" rel="noreferrer">法棍面包</a><ul><li>俄罗斯语（ru-RU）</li><li>西班牙语（es-US）</li></ul></li><li><a href="https://github.com/KormiMeiko" target="_blank" rel="noreferrer">KormiMeiko</a><ul><li>繁体中文（zh-TW）</li></ul></li><li><a href="https://github.com/japerz12138" target="_blank" rel="noreferrer">Japerz</a><ul><li>英语(美国) (en-US)</li></ul></li></ul><p><br><br></p><p><img src="https://repobeats.axiom.co/api/embed/243ea556dfcaf8738e432d5347cbcf91855f6ddd.svg" alt="Alt" title="Repobeats analytics image"></p>`,24),t=[e];function h(p,r,k,o,d,E){return a(),i("div",null,t)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
