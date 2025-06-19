---
url: /zhCN/projbobcat/additionalParsers.md
---
# 附加解析器

ProjBobcat 为了和 Mojang 官方的启动器保持同样的行为，
我们为其实现了一些额外的解析器来帮助我们和官方启动器保持数据和档案的同步。

下表是目前已经实现的解析器：

|              名称              |          说明           |
|:----------------------------:|:---------------------:|
| DefaultLauncherAccountParser | 用于将验证信息写入到官方启动器的配置文件  |
| DefaultLauncherProfileParser | 用于将搜索到的本地游戏写入启动器的配置文件 |
