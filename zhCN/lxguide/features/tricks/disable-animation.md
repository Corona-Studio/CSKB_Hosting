---
url: /zhCN/lxguide/features/tricks/disable-animation.md
---
# 禁用动画

虽然LauncherX提供性能更好的动画接口，但是此接口存在暂未解决的问题，故作为【实验性动画】提供。这个动画接口的问题包括但不限于：

* 动画可能出现抽搐
* 同一类的动画在LauncherX启动后需要触发一次之后才能正常渲染，否则将不显示动画触发后的内容

如果您确实能舍弃动画，我们提供一种手动禁用动画的方式。很简单。

1. 关闭LauncherX（可选），前往LauncherX目录  （这个目录是和默认游戏目录和LauncherX.json同级的）
2. 在其中新建文件，命名为`REDUCE_ANI`，不要给它留下后缀名，这个文件应该是个完全的空文件。
3. 重新打开LauncherX，即可禁用动画。
