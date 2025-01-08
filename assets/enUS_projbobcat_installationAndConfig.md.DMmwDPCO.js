import{_ as i,c as a,a2 as s,o as t}from"./chunks/framework.DzmM640o.js";const u=JSON.parse('{"title":"Install and configure ProjBobcat","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/projbobcat/installationAndConfig.md","filePath":"enUS/projbobcat/installationAndConfig.md"}'),n={name:"enUS/projbobcat/installationAndConfig.md"};function o(r,e,l,p,c,h){return t(),a("div",null,e[0]||(e[0]=[s(`<h1 id="install-and-configure-projbobcat" tabindex="-1">Install and configure ProjBobcat <a class="header-anchor" href="#install-and-configure-projbobcat" aria-label="Permalink to &quot;Install and configure ProjBobcat&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#install-and-configure-projbobcat">Install and configure ProjBobcat</a><ul><li><a href="#install-from-distribution-package">Install from distribution package</a><ul><li><a href="#nuget">Nuget</a></li><li><a href="#net-cli">.NET CLI</a></li><li><a href="#packagereference">PackageReference</a></li></ul></li><li><a href="#get-from-source-code">Get from source code</a><ul><li><a href="#clone-the-projbobcat-repository">Clone the ProjBobcat repository</a></li><li><a href="#use-git-submodule-to-pull-projbobcat">Use Git Submodule to pull ProjBobcat</a></li><li><a href="#add-a-reference-to-projbobcat">Add a reference to ProjBobcat</a></li><li><a href="#modify-the-default-number-of-connections">Modify the default number of connections</a></li><li><a href="#register-and-initialize-basic-services">Register and initialize basic services</a></li><li><a href="#configure-microsoft-login-authenticator">Configure Microsoft Login Authenticator</a></li></ul></li></ul></li></ul></nav><h2 id="install-from-distribution-package" tabindex="-1">Install from distribution package <a class="header-anchor" href="#install-from-distribution-package" aria-label="Permalink to &quot;Install from distribution package&quot;">​</a></h2><h3 id="nuget" tabindex="-1">Nuget <a class="header-anchor" href="#nuget" aria-label="Permalink to &quot;Nuget&quot;">​</a></h3><p>Currently, you can easily search and download the ProjBobcat package from Nuget. You can search for ProjBobcat in the package manager of Visual Studio and add it to your project.</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NuGet\\Install-Package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ProjBobcat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.16.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="net-cli" tabindex="-1">.NET CLI <a class="header-anchor" href="#net-cli" aria-label="Permalink to &quot;.NET CLI&quot;">​</a></h3><p>To install ProjBobcat via the .NET CLI, you just need to switch the terminal to the project directory containing the .csproj file and execute in the terminal：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ProjBobcat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.16.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="packagereference" tabindex="-1">PackageReference <a class="header-anchor" href="#packagereference" aria-label="Permalink to &quot;PackageReference&quot;">​</a></h3><p>PackageReference is a new software package management specification launched by Microsoft for modern .NET projects. Details can be found at <a href="https://learn.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files" target="_blank" rel="noreferrer">MSDN</a> View in</p><p>All you need to do is add in your project&#39;s <strong>[project name].csproj</strong> file:</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PackageReference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ProjBobcat&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.16.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Among them, <strong>1.16.0</strong> is the version number of ProjBobcat. You can replace it with other version numbers. All released versions can be viewed at <a href="https://www.nuget.org/packages/ProjBobcat#versions-body-tab" target="_blank" rel="noreferrer">ProjBobcat - Nuget</a>.</p></div><h2 id="get-from-source-code" tabindex="-1">Get from source code <a class="header-anchor" href="#get-from-source-code" aria-label="Permalink to &quot;Get from source code&quot;">​</a></h2><p>Another way to use ProjBobcat is to add the code repository directly to your project reference.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Before executing the following command, you may need to install <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git CLI</a></p></div><h3 id="clone-the-projbobcat-repository" tabindex="-1">Clone the ProjBobcat repository <a class="header-anchor" href="#clone-the-projbobcat-repository" aria-label="Permalink to &quot;Clone the ProjBobcat repository&quot;">​</a></h3><p>Use the command line to switch to the root directory of the project solution and execute the following code in the command line to complete the cloning of the warehouse:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Corona-Studio/ProjBobcat.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="use-git-submodule-to-pull-projbobcat" tabindex="-1">Use Git Submodule to pull ProjBobcat <a class="header-anchor" href="#use-git-submodule-to-pull-projbobcat" aria-label="Permalink to &quot;Use Git Submodule to pull ProjBobcat&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Git Submodule is a very practical feature, and here we only show its most basic use cases. You can see more use cases in <a href="https://git-scm.com/book/en/v2/Git-Tools-Submodules" target="_blank" rel="noreferrer">Git Documentation</a>.</p></div><p>Use the command line to switch to the root directory of the project solution and execute the following code in the command line to complete the cloning of the warehouse:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Corona-Studio/ProjBobcat.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="add-a-reference-to-projbobcat" tabindex="-1">Add a reference to ProjBobcat <a class="header-anchor" href="#add-a-reference-to-projbobcat" aria-label="Permalink to &quot;Add a reference to ProjBobcat&quot;">​</a></h3><p>Next, in Visual Studio&#39;s Solution Explorer view, right-click the solution name at the top of the tree. And select <strong>Add-&quot;Existing Project&quot;</strong> and find <strong>ProjBobcat.csproj</strong> in the folder of the ProjBobcat project you just cloned in the file browser window.</p><p>Next, find the project you need to reference ProjBobcat in <strong>Solution Explorer</strong>, right-click, and select <strong>&quot;Add&quot;-&quot;Project Reference&quot;</strong>. Finally, check ProjBobcat in the pop-up window to complete the reference.</p><p>##Configure before use</p><h3 id="modify-the-default-number-of-connections" tabindex="-1">Modify the default number of connections <a class="header-anchor" href="#modify-the-default-number-of-connections" aria-label="Permalink to &quot;Modify the default number of connections&quot;">​</a></h3><p>Before using ProjBobcat, you need to set the entry point of your program (usually <strong>App.xaml.cs</strong> or <strong>Program.cs</strong>) Add some code to initialize ProjBobcat related services.</p><p>Due to the default maximum connection limit of the .NET runtime, you may encounter a performance bottleneck when using ProjBobcat to download modules. Therefore, you need to add the following code at the entrance to modify the default maximum number of connections:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> System</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Net</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ServicePointManager.DefaultConnectionLimit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="register-and-initialize-basic-services" tabindex="-1">Register and initialize basic services <a class="header-anchor" href="#register-and-initialize-basic-services" aria-label="Permalink to &quot;Register and initialize basic services&quot;">​</a></h3><p>Next, you need to add this code to the entry point to complete the initialization of the ProjBobcat service:</p><h4 id="initialize-service-container" tabindex="-1">Initialize service container <a class="header-anchor" href="#initialize-service-container" aria-label="Permalink to &quot;Initialize service container&quot;">​</a></h4><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ServiceHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="initialize-curseforge-api-service-optional" tabindex="-1">Initialize CurseForge API service (optional) <a class="header-anchor" href="#initialize-curseforge-api-service-optional" aria-label="Permalink to &quot;Initialize CurseForge API service (optional)&quot;">​</a></h4><p>This service is optional, if you are not using any CurseForge related services, you can ignore this step.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Before registering for the CurseForge service, you need to prepare the API KEY officially issued by CurseForge. If you haven&#39;t already, please go to the <a href="https://support.curseforge.com/en/support/solutions/articles/9000208346-about-the-curseforge-api-and-how-to-apply-for-a-key" target="_blank" rel="noreferrer">Application Page - CurseForge</a> to get your API KEY.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>API KEY is a sensitive personal credential. Please keep the API KEY properly and do not disclose it to others.</p></div><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CurseForgeAPIHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SetApiKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[YOUR API KEY]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Replace <strong>[YOUR API KEY]</strong> with the API KEY you officially obtained from CurseForge.</p><h4 id="initialize-download-service" tabindex="-1">Initialize download service <a class="header-anchor" href="#initialize-download-service" aria-label="Permalink to &quot;Initialize download service&quot;">​</a></h4><p>When initializing the download service, you can choose to customize the User Agent used when making requests (the default is &quot;ProjBobcat&quot;).</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HttpClientHelper.Ua </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[YOUR UA]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// OPTIONAL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HttpClientHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="configure-microsoft-login-authenticator" tabindex="-1">Configure Microsoft Login Authenticator <a class="header-anchor" href="#configure-microsoft-login-authenticator" aria-label="Permalink to &quot;Configure Microsoft Login Authenticator&quot;">​</a></h3><p>For specific registration methods for Azure Active Directory applications, please go to: <a href="/enUS/projbobcat/createNewAzureApp.html">Create New Azure Application</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Before configuring Microsoft Authenticator, you need to register your app with Azure and configure it correctly. After you complete the configuration, you will get a Client ID.</p><p>Relevant information:</p><ul><li><a href="https://azure.microsoft.com/en-us/" target="_blank" rel="noreferrer">Azure Website</a></li><li><a href="https://learn.microsoft.com/en-us/azure/active-directory/develop/scenario-desktop-acquire-token-device-code-flow?tabs=dotnet" target="_blank" rel="noreferrer">Device code flow</a></li></ul></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The CLIENT ID is a sensitive personal credential, please keep the CLIENT ID properly and do not disclose it to others.</p></div><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MicrosoftAuthenticator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MicrosoftAuthenticatorAPISettings</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ClientId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[YOUR CLIENT ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TenentId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;consumers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Scopes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;XboxLive.signin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;offline_access&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;openid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>After obtaining the Client ID, replace <strong>[YOUR CLIENT ID]</strong> with your Client ID.</p>`,51)]))}const k=i(n,[["render",o]]);export{u as __pageData,k as default};
