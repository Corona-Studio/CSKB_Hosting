---
url: /ruRU/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md
---
# Распознаватель информации о версии

\[\[toc]]

Распознаватель информации о версии предоставляет функции для разбора и проверки файлов ассетов игры, которые хранятся в каталоге `.minecraft/versions/{GAME_VERSION}/{GAME_VERSION}.jar`. Эти файлы являются основными файлами, необходимыми для запуска Minecraft.

## Инициализация распознавателя

Вы можете инициализировать распознаватель с помощью следующего кода:

```c#
var resolver = new VersionInfoResolver
{
    BasePath = "[GAME_ROOT_PATH]",
    VersionInfo = [SEARCHED_VERSION_INFO],
    CheckLocalFiles = [CHECK_LOCAL_FILES]
};
```

В приведенном выше блоке кода замените эти параметры в соответствии с вашей реальной ситуацией:

|           Элемент            |               Описание                |
|:-----------------------:|:-------------------------------:|
|    \[GAME\_ROOT\_PATH]     |   Корневой каталог игры, обычно путь к папке .minecraft   |
| \[SEARCHED\_VERSION\_INFO] | VersionInfo версии для проверки (получается через локатор игр) |
|   \[CHECK\_LOCAL\_FILES]   |    Проверка локальных файлов (если false, все проверки пропускаются)    |
