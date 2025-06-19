---
url: /zhCN/lxguide/features/installing-games.md
---
# 安装游戏

LauncherX提供多种游戏安装方式。

\[\[toc]]

## 通过下载

通过内置的游戏下载，可以下载包括可选扩展组件（比如Forge、Fabric）在内的许多游戏。操作步骤如下：

* 点击导航栏上的【下载】

* 在列表中寻找或搜索想要下载的游戏版本，点击对应的下载按钮

* 在弹出的 “安装” 弹窗中，至少选择一项以继续安装。

  * 如果要安装原版游戏，直接让列表中第一项保持选中，然后点击【安装】

  * 如果要安装带有附属组件的游戏，选中它并选择一个具体的版本，然后点击【安装】

    ::: tip 关键信息

    得益于LauncherX强大的任务队列管理系统，你可以一次性选中多个游戏进行安装。

    但是请注意，如果在对应的原版游戏未被安装的情况下安装了附属组件，那么该游戏将无法启动。

    你可以在安装界面的每一个输入框更改对应游戏的名称。

    :::

* 等待下载安装完成。若在任务中心发现安装失败，请先确认自己的网络连接正常。参考：[管理账户 | 日冕知识库](/zhCN/lxguide/settings/special/manage-accounts.html)

## 安装整合包

LauncherX支持 **Modrinth格式** 和 **Curseforge格式** 的整合包。只需要将这类整合包拖入LauncherX窗口（或在【游戏列表】中使用【更多-添加游戏资源-整合包】选择将安装的整合包）即可开始安装。了解更多：[LauncherX的整合包支持 | 日冕知识库](/zhCN/lxguide/features/modpack-support.html#导入)

## 迁移游戏

LauncherX可以使用其他目录作为游戏目录，如果想要LauncherX正确识别一个已有游戏的目录，这个目录必须是启用了一般版本隔离的（并非MultiMC类的版本隔离）。或者直接将包含 **已版本隔离的游戏版本根目录**（在`.minecraft/versions/`下的文件夹）粘贴到LauncherX当前选中的游戏目录的versions文件夹中。但是后者并不一定总是有效，具体取决于游戏类型，参考：[游戏列表 | 日冕知识库](/zhCN/lxguide/features/gamelist.html)
