import{_ as r,a as t,b as e,c as a,d as s,e as o,f as i,g as n,h as p,i as l}from"./chunks/about_block.01ab87c9.js";import{_ as c,o as _,c as g,d as u}from"./app.179d3068.js";const N=JSON.parse('{"title":"配置 Azure 应用","description":"","frontmatter":{},"headers":[{"level":2,"title":"开始配置","slug":"开始配置","link":"#开始配置","children":[]},{"level":2,"title":"查看 Client ID","slug":"查看-client-id","link":"#查看-client-id","children":[]}],"relativePath":"ruRU/projbobcat/createNewAzureApp.md"}'),d={name:"ruRU/projbobcat/createNewAzureApp.md"},m=u('<h1 id="配置-azure-应用" tabindex="-1">配置 Azure 应用 <a class="header-anchor" href="#配置-azure-应用" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#配置-azure-应用">配置 Azure 应用</a><ul><li><a href="#开始配置">开始配置</a></li><li><a href="#查看-client-id">查看 Client ID</a></li></ul></li></ul></nav><h2 id="开始配置" tabindex="-1">开始配置 <a class="header-anchor" href="#开始配置" aria-hidden="true">#</a></h2><p>在开始之前，您首先需要一个微软账号。注册 Azure Active Directory 应用无需任何费用。</p><p>使用您的微软账户登录 <a href="https://portal.azure.com/#home" target="_blank" rel="noreferrer">Azure 门户</a> 在完成登录后，您看到的页面应该是这样的：</p><p><img src="'+r+'" alt="Azure Portal"></p><p>点击 <strong>Azure 服务</strong> 下的 <strong>Azure Active Directory</strong></p><p><img src="'+t+'" alt="Azure AD"></p><p>您将会看到类似于下面的页面</p><p><img src="'+e+'" alt="Azure Portal"></p><p>接着点击左侧功能栏的 <strong>应用注册</strong>：</p><p><img src="'+a+'" alt="Azure Portal"></p><p>点击顶部工具栏的 <strong>新注册</strong>，填写应用的名称。并且在 <strong>受支持的账户类型</strong> 中选择 <strong>仅 Microsoft 个人账户</strong>。 由于我们不使用基于 URI 回调的认证方式。因此，您不需要填写表单下方的 <strong>重定向 URI</strong>。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请仔细核对表单中的信息，否则可能会导致后续的步骤出现意料之外的问题。</p></div><p><img src="'+s+'" alt="Azure Portal"></p><p>点击创建后，等待 Azure AD 完成应用的创建。在创建完成后，网页会将您重定向至该应用的详细页面：</p><p><img src="'+o+'" alt="Azure Portal"></p><p>接着点击左侧栏的 <strong>身份验证</strong>：</p><p><img src="'+i+'" alt="Azure Portal"></p><p>接着在右侧找到 <strong>高级设置</strong> 板块，确保板块中的 <strong>高级 SDK 支持</strong> 和 <strong>允许公共客户端流</strong> 为开启状态。 如果他们没有开启，请手动将他们打开。</p><p><img src="'+n+'" alt="Azure Portal"></p><p>接着点击下方的保存按钮，等待保存完成。</p><h2 id="查看-client-id" tabindex="-1">查看 Client ID <a class="header-anchor" href="#查看-client-id" aria-hidden="true">#</a></h2><p>恭喜！您已经完成了 Azure 的应用注册，接下来您只需要前往 <strong>概述</strong> 页面查看应用的 Client ID。 点击左侧栏的 <strong>概述</strong> 按钮，即可查看应用的基础信息：</p><p><img src="'+p+'" alt="Azure Portal"></p><p>在右侧您会看到应用的详细信息，在 <strong>概要</strong> 中找到 <strong>应用程序(客户端) ID</strong>， 该 ID 将是您需要在 <a href="/ruRU/projbobcat/installationAndConfig.html">微软验证器配置</a> 阶段需要使用到的 Client ID。</p><p><img src="'+l+'" alt="Azure Portal"></p>',27),h=[m];function A(z,f,b,D,I,P){return _(),g("div",null,h)}const k=c(d,[["render",A]]);export{N as __pageData,k as default};
