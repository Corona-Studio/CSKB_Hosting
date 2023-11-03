import{_ as t,a as e,b as o,c as r,d as a,e as i,f as n,g as s,h as l,i as c}from"./chunks/about_block.01ab87c9.js";import{_ as p,o as u,c as g,Q as h}from"./chunks/framework.f6675ff2.js";const P=JSON.parse('{"title":"Configure Azure application","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/projbobcat/createNewAzureApp.md","filePath":"enUS/projbobcat/createNewAzureApp.md"}'),f={name:"enUS/projbobcat/createNewAzureApp.md"},d=h('<h1 id="configure-azure-application" tabindex="-1">Configure Azure application <a class="header-anchor" href="#configure-azure-application" aria-label="Permalink to &quot;Configure Azure application&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#configure-azure-application">Configure Azure application</a><ul><li><a href="#start-configuration">Start configuration</a></li><li><a href="#view-client-id">View Client ID</a></li></ul></li></ul></nav><h2 id="start-configuration" tabindex="-1">Start configuration <a class="header-anchor" href="#start-configuration" aria-label="Permalink to &quot;Start configuration&quot;">​</a></h2><p>Before you get started, you first need a Microsoft account. There is no cost to register an Azure Active Directory app.</p><p>Sign in to <a href="https://portal.azure.com/#home" target="_blank" rel="noreferrer">Azure Portal</a> using your Microsoft account After logging in, the page you see should look like this:</p><p><img src="'+t+'" alt="Azure Portal"></p><p>Click <strong>Azure Active Directory</strong> under <strong>Azure Services</strong></p><p><img src="'+e+'" alt="Azure AD"></p><p>You will see a page similar to the following</p><p><img src="'+o+'" alt="Azure Portal"></p><p>Then click <strong>App Registration</strong> on the left tool bar:</p><p><img src="'+r+'" alt="Azure Portal"></p><p>Click <strong>New Registration</strong> on the top toolbar and fill in the name of the application. And select <strong>Microsoft Personal Account Only</strong> in <strong>Supported Account Types</strong>. Since we are not using URI callback based authentication. Therefore, you do not need to fill in the <strong>Redirect URI</strong> below the form.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Please check the information in the form carefully, otherwise unexpected problems may occur in subsequent steps.</p></div><p><img src="'+a+'" alt="Azure Portal"></p><p>After clicking Create, wait for Azure AD to finish creating the app. Once created, the webpage will redirect you to the app&#39;s details page:</p><p><img src="'+i+'" alt="Azure Portal"></p><p>Then click <strong>Authentication</strong> in the left column:</p><p><img src="'+n+'" alt="Azure Portal"></p><p>Then find the <strong>Advanced Settings</strong> section on the right and make sure that <strong>Advanced SDK Support</strong> and <strong>Allow Public Client Flow</strong> in the section are turned on. If they are not turned on, turn them on manually.</p><p><img src="'+s+'" alt="Azure Portal"></p><p>Then click the save button below and wait for the saving to complete.</p><h2 id="view-client-id" tabindex="-1">View Client ID <a class="header-anchor" href="#view-client-id" aria-label="Permalink to &quot;View Client ID&quot;">​</a></h2><p>Congratulations! You have completed the application registration with Azure. Next, you only need to go to the <strong>Overview</strong> page to view the Client ID of the application. Click the <strong>Overview</strong> button in the left column to view the basic information of the application:</p><p><img src="'+l+'" alt="Azure Portal"></p><p>On the right you will see the details of your application, find the <strong>Application (Client) ID</strong> in <strong>Summary</strong>, This ID will be the Client ID you need to use during the <a href="/enUS/projbobcat/installationAndConfig.html">Microsoft Authenticator Configuration</a> phase.</p><p><img src="'+c+'" alt="Azure Portal"></p>',27),m=[d];function A(_,b,w,z,v,k){return u(),g("div",null,m)}const S=p(f,[["render",A]]);export{P as __pageData,S as default};
