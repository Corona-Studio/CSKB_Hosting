---
url: /ruRU/projbobcat/installers/curseforge.md
---
# Установщик модпаков CurseForge

\[\[toc]]

::: tip

Обратите внимание, что ProjBobcat реализует только автоматизированный процесс установки модпаков CurseForge. Вам все равно нужно самостоятельно реализовать процессы поиска, загрузки и сохранения модпаков CurseForge.

:::

## Полезные ресурсы

* [Официальный сайт CurseForge](https://www.curseforge.com/)
* [CurseForge API](https://docs.curseforge.com/)

## Инициализация установщика

Инициализировать установщик CurseForge очень просто:

```c#
var curseForgeInstaller = new CurseForgeInstaller
{
    GameId = "[CUSTOM_INSTALL_GAME_ID]",
    ModPackPath = "[PATH_TO_YOUR_MODPACK]",
    RootPath = "[GAME_ROOT_PATH]"
};
```

В приведенном выше блоке кода замените эти параметры в соответствии с вашей реальной ситуацией:

|                  Элемент                  |             Описание              |
|:------------------------------------:|:---------------------------:|
|           \[GAME\_ROOT\_PATH]           | Корневой каталог игры, обычно путь к папке .minecraft |
|       \[CUSTOM\_INSTALL\_GAME\_ID]       |     Необязательно, пользовательское имя игры, которую вы собираетесь установить      |
|        \[PATH\_TO\_YOUR\_MODPACK]        |     Путь к вашему модпаку CurseForge     |

## Начало установки

После завершения инициализации установщика вам нужно только вызвать метод установки установщика CurseForge для завершения установки.

В асинхронном контексте используйте **InstallTaskAsync** для завершения установки:

```c#
await curseForgeInstaller.InstallTaskAsync();
```

В синхронном контексте используйте **Install** для завершения установки:

```c#
curseForgeInstaller.Install();
```

## Отчет о ходе установки

В некоторых случаях установка с помощью установщика CurseForge может занять несколько минут.
Поэтому вам может потребоваться сообщать пользователю о текущем ходе установки в режиме реального времени.
Для этого установщик CurseForge предоставляет событие **StageChangedEventDelegate**, чтобы помочь вам реализовать отчет о задачах.
Вам просто нужно зарегистрировать следующее событие **перед началом установки**:

```c#
curseForgeInstaller.StageChangedEventDelegate += (_,  args) => {
    ReportProgress(args.Progress,  args.CurrentStage);
};
```

Где **args.Progress** указывает текущий процент выполнения установщика. **args.CurrentStage** — это текстовое описание текущего этапа установщика.
