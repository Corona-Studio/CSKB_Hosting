import{_ as e,a as o,b as t,c as i,d as a,e as n}from"./chunks/image-20230227091559255.tUaJHRxy.js";import{_ as r,c,o as s,U as l}from"./chunks/framework.F7EzL_yo.js";const _=JSON.parse('{"title":"Add a game account to LauncherX","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/lxguide/add-game-account.md","filePath":"enUS/lxguide/add-game-account.md"}'),u={name:"enUS/lxguide/add-game-account.md"},h=l('<h1 id="add-a-game-account-to-launcherx" tabindex="-1">Add a game account to LauncherX <a class="header-anchor" href="#add-a-game-account-to-launcherx" aria-label="Permalink to &quot;Add a game account to LauncherX&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#add-a-game-account-to-launcherx">Add a game account to LauncherX</a><ul><li><a href="#preface">Preface</a></li><li><a href="#initial-setup">Initial Setup</a><ul><li><a href="#microsoft-acount-login">Microsoft Acount Login</a></li><li><a href="#offline-mode">Offline Mode</a></li><li><a href="#authlib">AuthLib</a></li></ul></li><li><a href="#more-setup">More setup</a></li></ul></li></ul></nav><p>Edited date: February 27, 2023 | Feiron Iguista | Japerz</p><h2 id="preface" tabindex="-1">Preface <a class="header-anchor" href="#preface" aria-label="Permalink to &quot;Preface&quot;">​</a></h2><p>In this guide, we recommend that you prioritize using an official Microsoft account to log in to your Minecraft. Although the official has not made clear its opposition to games without genuine verification such as offline mode, we still recommend that you support and maintain intellectual property rights by purchasing Minecraft. <strong>Using an offline copy of Minecraft may result in infringement, so all consequences will be borne by you and LauncherX is not responsible for it.</strong></p><p>This article will guide you in using LauncherX to add <strong>Local Only</strong> game accounts during initial use and subsequent use, including the following types:</p><ul><li>Microsoft Account</li><li>Offline Mode Account</li><li>AuthLib Account(Original Mojang account login)</li></ul><p><em>Since the official has stopped supporting Mojang accounts and started migrating Mojang accounts to Microsoft accounts, LauncherX will no longer support Mojang account login. For More Details: <a href="https://help.minecraft.net/hc/en-us/articles/19615552270221" target="_blank" rel="noreferrer">Mojang Java Edition Minecraft Account Move | Minecraft</a></em></p><h2 id="initial-setup" tabindex="-1">Initial Setup <a class="header-anchor" href="#initial-setup" aria-label="Permalink to &quot;Initial Setup&quot;">​</a></h2><p>When you use LauncherX for the first time, you will see LauncherX greet you and ask you to perform some initial settings necessary to use LauncherX. When you reach the &quot;Add Account&quot; step, you can choose one of the following operations. Click the &quot;Add&quot; button to get started.</p><h3 id="microsoft-acount-login" tabindex="-1">Microsoft Acount Login <a class="header-anchor" href="#microsoft-acount-login" aria-label="Permalink to &quot;Microsoft Acount Login&quot;">​</a></h3><p>Click the &quot;Microsoft Account&quot; button in the pop-up window, LauncherX will pop up another window (verification information window) containing a verification link, a one-time verification code and some buttons.</p><p><img src="'+e+'" alt="image-20230222204440416"></p><p>The entire process takes about 10 seconds to complete (this may take a little longer depending on network performance and whether your browser saves your Microsoft account login information). Taking into account Microsoft&#39;s privacy policy, we recommend that you complete this process within 3 minutes to avoid invalidation of the one-time verification code. If the one-time code fails, you need to close the current verification information window and repeat the operation of adding a Microsoft account.</p><ul><li>Click &quot;Copy Code&quot; to copy the one-time code you need to use for this login to the clipboard. <em><a href="https://support.microsoft.com/en-us/windows/clipboard-in-windows-c436501e-985d-1c8d-97ea-fe46ddf338c6" target="_blank" rel="noreferrer">[Microsoft]Clipboard in Windows</a></em></li><li>Click &quot;Open Verification Page&quot; to open the Microsoft account verification page through your default browser.</li><li>Paste the one-time code you copied into the specified location as prompted on the web page. If Microsoft requires you to log in, please log in to your Microsoft account on the web page first.</li><li>After this window pops up, you need to &quot;agree&quot; to continue adding the account.</li></ul><p><img src="'+o+'" alt="image-20230222204659302"></p><p>While LauncherX is verifying your account, you can continue with the next step of setup.</p><p>If you think the verification process is too slow or failing, consider optimizing your current network environment (for example, using an accelerator for Xbox login or trying to move closer to your wireless network source, if you are using one.)</p><h4 id="unexpected-situation-edge-browser-pops-up-requiring-security-verification-device" tabindex="-1">Unexpected situation: Edge browser pops up requiring security verification device: <a class="header-anchor" href="#unexpected-situation-edge-browser-pops-up-requiring-security-verification-device" aria-label="Permalink to &quot;Unexpected situation: Edge browser pops up requiring security verification device:&quot;">​</a></h4><p><img src="'+t+'" alt="image-20230222204732083"></p><p>For this case, you need:</p><ul><li>Hit &quot;Cancel&quot;</li><li>Click &quot;Other login methods&quot; on the web page, as shown in the figure:<img src="'+i+'" alt="image-20230222204925338"></li><li>Click &quot;Use my password&quot; or choose any login method that&#39;s convenient for you: <img src="'+a+'" alt="image-20230222205034775"></li></ul><h3 id="offline-mode" tabindex="-1">Offline Mode <a class="header-anchor" href="#offline-mode" aria-label="Permalink to &quot;Offline Mode&quot;">​</a></h3><p>This is arguably the easiest way to add an account. You can use LauncherX to enable custom skins for your local game. This feature will only take effect on your local client. See: Game Account Management/Skin Preview <strong>But I still want to remind you that using the offline version may be illegal and result in legal consequences, and you will be responsible for all the consequences.</strong></p><ul><li>Click &quot;Offline Account&quot;</li><li>Enter any player name you want. Note that some versions (especially older versions) do not support non-English and English character IDs.</li><li>Offline mode only allows you to play local games and servers that support offline login.</li></ul><h3 id="authlib" tabindex="-1">AuthLib <a class="header-anchor" href="#authlib" aria-label="Permalink to &quot;AuthLib&quot;">​</a></h3><p>Use a special login verification service with the help of <a href="https://github.com/yushijinhun/authlib-injector" target="_blank" rel="noreferrer">AuthLib-Injector</a>. Before choosing this option to log in, you should confirm that you have an AuthLib external login service from one party.</p><p>To do this, you need to prepare:</p><ul><li>External login verification email</li><li>Corresponding password</li><li>The AuthLib server address corresponding to the authentication service (this is necessary for external logins, because LauncherX does not know whose Yggdrasil API you need to authenticate to. Typically, this address is something like &quot;https://&lt;service provider&#39;s domain name&gt;/api/yggdrasil”)&quot;</li></ul><p>Click &quot;External Login&quot; to get started.</p><ul><li>A window as shown in the picture will pop up: <img src="'+n+'" alt="image-20230227091559255"></li><li>Enter the information you should have prepared previously</li><li>Save account. This information will be encrypted and used as credentials, which will be used for verification after you log in to the server that supports the corresponding AuthLib service.</li></ul><h2 id="more-setup" tabindex="-1">More setup <a class="header-anchor" href="#more-setup" aria-label="Permalink to &quot;More setup&quot;">​</a></h2><p>After completing the initial setup, you can enter <strong>Settings-Account</strong> to add more game accounts.</p><p>After clicking &quot;Add Account&quot;, everything is exactly the same as when you first set up LauncherX. We recommend that you add an offline account with the same ID after adding a Microsoft account to avoid the problem that some games cannot be started when online or not.</p>',34),d=[h];function p(f,g,m,y,b,w){return s(),c("div",null,d)}const A=r(u,[["render",p]]);export{_ as __pageData,A as default};
