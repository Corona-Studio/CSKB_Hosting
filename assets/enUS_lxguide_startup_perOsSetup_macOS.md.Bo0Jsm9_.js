import{_ as t,c as a,a2 as r,o as i}from"./chunks/framework.DzmM640o.js";const h=JSON.parse('{"title":"Special settings for macOS","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/lxguide/startup/perOsSetup/macOS.md","filePath":"enUS/lxguide/startup/perOsSetup/macOS.md"}'),o={name:"enUS/lxguide/startup/perOsSetup/macOS.md"};function n(s,e,l,c,p,u){return i(),a("div",null,e[0]||(e[0]=[r('<h1 id="special-settings-for-macos" tabindex="-1">Special settings for macOS <a class="header-anchor" href="#special-settings-for-macos" aria-label="Permalink to &quot;Special settings for macOS&quot;">​</a></h1><p>For macOS users, if you see a &quot;Corrupted&quot; error pop-up when opening LauncherX, please do the following:</p><ul><li>Open &quot;Terminal.app&quot;</li><li>Open your Finder and find your LauncherX executable (LauncherX.app or LauncherX.Avalonia.app)</li><li>Enter <code>sudo xattr -d com.apple.quarantine</code> in the terminal BUT DON&#39;T HIT ENTER YET!</li><li>As long as there is a space at the end of the above command, drag your <strong>LauncherX APP</strong> into the terminal window</li><li>Now hit enter, the terminal will ask you to enter the password of the administrator account. Please enter it according to your feelings since the terminal will not display any input records in the display area.</li><li>After typing the password, press <code>Enter</code> on the keyboard to confirm. There will be no prompt if the execution is successful.</li><li>Then try launching LauncherX again, and if it fails again, be sure to give us feedback at <a href="https://github.com/Corona-Studio/LXIT" target="_blank" rel="noreferrer">LXIT (GitHub)</a>.</li></ul>',3)]))}const m=t(o,[["render",n]]);export{h as __pageData,m as default};
