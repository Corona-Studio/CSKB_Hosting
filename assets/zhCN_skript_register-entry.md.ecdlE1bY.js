import{_ as n,c as s,o as a,a4 as e}from"./chunks/framework.c__b1DDI.js";const h=JSON.parse('{"title":"注册起始点","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/skript/register-entry.md","filePath":"zhCN/skript/register-entry.md"}'),p={name:"zhCN/skript/register-entry.md"},l=e(`<h1 id="注册起始点" tabindex="-1">注册起始点 <a class="header-anchor" href="#注册起始点" aria-label="Permalink to &quot;注册起始点&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">本文中起始点是包含了Event、Function、Command之类触发脚本具体逻辑的、作为一段脚本第一行和其相关配置的内容.</p></div><nav class="table-of-contents"><ul><li><a href="#注册起始点">注册起始点</a><ul><li><a href="#定义">定义</a></li><li><a href="#类型">类型</a><ul><li><a href="#event-事件">Event 事件</a></li><li><a href="#function-方法-函数">Function 方法/函数</a></li><li><a href="#command-命令">Command 命令</a></li></ul></li><li><a href="#扩展">扩展</a><ul><li><a href="#command声明时的可选属性">Command声明时的可选属性</a></li><li><a href="#options定义">options定义</a></li></ul></li></ul></li></ul></nav><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p><strong>起始点</strong> : 是定义一段脚本触发起点的语句, 一般包含事件、方法、指令. 严格来说, 指令注册相当于一种特殊的事件监听, 而指令也可以视为一种可以在游戏或控制台中快捷调用的方法.</p><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h2><h3 id="event-事件" tabindex="-1">Event 事件 <a class="header-anchor" href="#event-事件" aria-label="Permalink to &quot;Event 事件&quot;">​</a></h3><p>事件是最基础的、与Bukkit事件关联紧密的触发器, 一般随着事件触发也会附带一些和当前触发事件相关的局部变量, 但是这些事实上的局部变量使用 表达(expression) 的方式使用. 比如对于事件<code>on explode</code>, 存在表达<code>event-location</code>表示「单个爆炸事件发生时的位置」, 诸如此类. 它们传递了事件相关的具体信息. 此外, 如果您学过JavaScript, 可以将这一系列表达视为 object.addEventListener(event, eventCallback, …) 中, eventCallback可以作为参数接受的Event对象.</p><p>要注册事件, 将事件以0缩进置于单行, 并在事件名称后加上冒号, 换行后的内容直到下一个起始点之前都属于一段脚本.</p><div class="language-skript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> # 注册投掷物击中事件监听</span></span>
<span class="line"><span> on projectile hit:</span></span>
<span class="line"><span> 		event-block is gravel:</span></span>
<span class="line"><span> 				broadcast &quot;Hit on a gravel&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="function-方法-函数" tabindex="-1">Function 方法/函数 <a class="header-anchor" href="#function-方法-函数" aria-label="Permalink to &quot;Function 方法/函数&quot;">​</a></h3><p>方法是相对安全的一段被封装的逻辑, 可以返回一个值用于在调用后赋值给变量. 它可以接受多个参数并进行处理.</p><p>要注册方法, 以0缩进开始按照格式编写方法声明:</p><div class="language-skript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 如果需要返回值 (即, 如果方法计算结果需要被赋值给变量(插入字符串也算赋值变量)):</span></span>
<span class="line"><span>function NameOfFunction(argumentName: &lt;Type&gt; ...):: &lt;Optional Return Type&gt;:</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者, 如果不需要返回值(返回为void/&lt;null&gt;):</span></span>
<span class="line"><span>function NameOfFunction(argumentName: &lt;Type&gt;):</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 换行后的一个缩进内容开始即为方法的逻辑内容</span></span>
<span class="line"><span># &lt;Type&gt;/&lt;Optional Return Type&gt;为传入参数的sk内置类型, 比如: text, player, number...</span></span>
<span class="line"><span># 方法名不可重复.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>并在次行以一个单位的缩进开始编写逻辑.</p><p>换行后的内容直到下一个起始点之前都属于一段脚本方法的内容.</p><h3 id="command-命令" tabindex="-1">Command 命令 <a class="header-anchor" href="#command-命令" aria-label="Permalink to &quot;Command 命令&quot;">​</a></h3><p>命令可以视为一个可通过游戏内指令触发的方法, 因为它可以接受参数. 但是它不能替代方法, 原因是:</p><ul><li>不能直接返回值到调用的脚本语句中. 但是可以在处理逻辑的最后将结果赋值给一个全局变量.</li><li>脚本内调用任何命令都必须使用<code>make xxx execute command</code>, 因此传参类型的选择更少.</li></ul><p>要开始定义一个命令, 需要以0缩进开始按格式编写命令声明:</p><div class="language-skript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> # 请通过实际测试来确认同名指令覆盖的情况.</span></span>
<span class="line"><span>command /commandName &lt;...args&gt;: # 在此之后一个缩进的内容是声明命令的属性.</span></span>
<span class="line"><span>		&lt;...properties&gt;</span></span>
<span class="line"><span>		trigger:</span></span>
<span class="line"><span>				</span></span>
<span class="line"><span>				# 在trigger后一个缩进的内容会被视为命令的逻辑内容.</span></span>
<span class="line"><span>				</span></span>
<span class="line"><span> # &lt;...args&gt;: 可选的参数定义. 如果希望命令能够接受参数, 使用以下方式为参数添加「槽位」:</span></span>
<span class="line"><span> 		# command /commandName [&lt;Type&gt;]:  </span></span>
<span class="line"><span>    # 实际使用中, 预留的参数位可以不填. 对应的逻辑需要在编写脚本逻辑时候自行判断.</span></span>
<span class="line"><span>    # 依照定义的参数顺序, 可以在逻辑中使用expression “arg-x” (x为从1开始的参数序号)来取得传入的值.</span></span>
<span class="line"><span>    # 比如: command /ACommand [&lt;text&gt;] [&lt;text&gt;]: 接受两个参数, arg-1即为第一个[&lt;text&gt;]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span> # &lt;...properties&gt;: 除了trigger这个必要属性之外的一切可选属性. 下文会介绍各个可选属性.</span></span>
<span class="line"><span> # 这些属性都需要在trigger之前.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">请注意</p><p>在实际运用中, 可能会出现命令传入数字然后进行计算的情况. 但是Skript解释器有可能将<code>arg-1</code>识别为「arg减去1」.</p><p>为了避免这种情况引发的意外, 请尝试改用以下expression中的其他形式表达参数</p></div><p>源代码中, 解释器接受以下表达来指代参数:</p><div class="language-sk vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sk</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[the] last arg[ument][s]</span></span>
<span class="line"><span>[the] arg[ument][s](-| )%number%</span></span>
<span class="line"><span>[the] (1st|2nd|3rd|4-90th) arg[ument][s]</span></span>
<span class="line"><span>[the] arg[ument][s]</span></span>
<span class="line"><span>[the] %type%( |-)arg[ument][( |-)%number%]</span></span>
<span class="line"><span>[the] arg[ument]( |-)%type%[( |-)%number%]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>示例:</p><div class="language-sk vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sk</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>the last argument</span></span>
<span class="line"><span>arg-1</span></span>
<span class="line"><span>argument 6</span></span>
<span class="line"><span>13th arguments</span></span>
<span class="line"><span>the argument</span></span>
<span class="line"><span>the player argument</span></span>
<span class="line"><span>arg-item type-3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>摘抄自: <a href="https://skripthub.net/tutorials/10" target="_blank" rel="noreferrer">Skript Hub Tutorial文章 by Blueyescat</a>.</p><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><h3 id="command声明时的可选属性" tabindex="-1">Command声明时的可选属性 <a class="header-anchor" href="#command声明时的可选属性" aria-label="Permalink to &quot;Command声明时的可选属性&quot;">​</a></h3><p>可选属性的值直接用双引号包裹并写在属性名的冒号后方.</p><p><strong>executable by</strong>: 可被执行的对象, 可选: player, command block, console 　　<strong>usage</strong>: 接受text, 用于向客户端返回此命令的用法. 　　<strong>description</strong>: 接受text, 提供给其他插件的命令描述. 　　<strong>permission</strong>: 接受text, 可以是权限管理插件的权限组. 　　<strong>permission message</strong>: 接受text, 在无权限使用指令时的错误信息. 比如「你无权使用!」 　　<strong>cooldown</strong>: 接受数字+时间单位, 这是命令使用的冷却时间. 比如: cooldown: 10 seconds 　　<strong>cooldown message</strong>: 接受text, 在尝试于冷却期内使用命令时的错误信息. 　　<strong>cooldown bypass</strong>: 接受text, 可以绕过冷却的权限名称, 可以是权限管理插件的权限组. 　　<strong>cooldown storage</strong>: 接受一个变量, 将可以通过全局变量保存玩家的冷却阶段, 并且冷却将在服务器重启/插件重载后持续生效. <br>　　<strong>aliases</strong>: 接受直接输入, 定义这个指令的别名</p><p><em>待补充</em></p><h3 id="options定义" tabindex="-1">options定义 <a class="header-anchor" href="#options定义" aria-label="Permalink to &quot;options定义&quot;">​</a></h3><p>一般可以将这类入口声明在文件最开头的地方. 它接受一系列预设的变量定义. 它不包含具体的逻辑.</p><p>在此定义的内容可以通过<code>{@Name}</code>作为变量调用.</p>`,35),t=[l];function r(i,o,c,m,u,d){return a(),s("div",null,t)}const g=n(p,[["render",r]]);export{h as __pageData,g as default};
