---
url: /zhCN/lxguide/features/tricks/debug-lang-file.md
---
# 我想贡献多语言了！

::: tip 太好了！

感谢您，热心市民！贡献多语言的仓库在这里：[Corona-Studio/LauncherX-i18n: The i18n project for LauncherX (github.com)](https://github.com/Corona-Studio/LauncherX-i18n)。

关于提交，您若有不了解的地方，可以参考：[提交本地化翻译贡献 | 日冕知识库](/zhCN/guide/general/contribute-to-i18n)

:::

当LauncherX文件夹（与LauncherX.json同级的名为LauncherX的文件夹）中包含有一个`External.axaml`之后，启动LauncherX，就可以在LauncherX的**设置-外观-文本**中找到一个名为 `[开发者]使用外部语言文档进行调试` 的开关。打开它后，将会强制使用这个External.axaml作为当前的语言文件，并且伴有明显的水印注明这是测试模式。

## 为什么需要这个？

实际上，LauncherX中许多文本块只是针对汉语汉字量身定制的。这意味着，如果使用其他语言表达，则或多或少会出现以下问题：

* 显示效果不佳
* 无法完整显示内容
* 文本使界面变形
* ...

使用这个功能可以帮助翻译贡献者灵活确认表达方式，是否需要使用缩写？这样/那样写会不会导致表意不明？总之，需要找到一种 “ ‘信达雅’ 与 ‘合适’ 之间的平衡点”。

## 为什么崩溃？

或许您在使用过程中，某次重启LauncherX时候遇到了崩溃，可能有以下原因：

* 标签、键名等出现重复
* 文件无效或损坏
* 标签或键名的尖括号或引号未闭合/或发生了意外的闭合
* 模板字符串的大括号（比如：{0} 需要使用 {1}）被破坏
* 文件内出现了非法的符号（有没有在标签之外的地方出现奇怪的符号？）
* ...

请在其中找到问题然后解决，然后再次尝试打开LauncherX。如果想要获得详细的崩溃原因，请参考：[好好利用日志文件! | 日冕知识库](/zhCN/lxguide/others/report-with-logs)
