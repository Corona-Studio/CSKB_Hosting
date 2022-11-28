# CSKB_Hosting [![Deploy](https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml/badge.svg)](https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml)

CSKB 服务端

## 安装本地环境

+ NodeJS (16.15.1+)
+ yarn 包管理器
  ```bash
  npm install yarn -g
  yarn install
  ```
## 命令
  
  + 调试

  ```bash
  yarn run docs:dev
  ```

  + 编译

  ```bash
  yarn run docs:build
  ```

  + 部署

  ```bash
  yarn run docs:serve
  ```
## 目录结构

  + docs
    + .vitepress VitePress 配置
      + theme 主题配置
        - index.js 主题核心配置
      - config.ts 核心配置
    - index.md 主页
    
