# Fun

(have)Fun with Serverless

![logo.jpg](https://tan-blog.oss-cn-hangzhou.aliyuncs.com/img/20181123143028.png)

[English](https://github.com/aliyun/fun/blob/master/README-en.md)

[Fun](https://github.com/aliyun/fun) 是一个用于支持 Serverless 应用部署的工具，能帮助您便捷地管理函数计算、API 网关、日志服务等资源。它通过一个资源配置文件（template.yml），协助您进行开发、构建、部署操作。

如果你想使用旧版本的语法，请[参考](https://github.com/aliyun/fun/blob/v1.x/README.md).

## 开始使用

Fun 作为一个命令行工具，内置了多个子命令，比如 config、local、deploy 等。

其中，config 子命令可以用来配置 fun，local 子命令可以用来本地运行调试函数，deploy 子命令可以将资源发布到线上。

为了让您尽快上手，我们准备了一系列教程：

- [安装教程](https://github.com/aliyun/fun/blob/master/docs/usage/installation-zh.md)：介绍了如何在 Mac、Linux 或者 Windows 上安装 Fun。
- [使用](https://github.com/aliyun/fun/blob/master/docs/usage/getting_started-zh.md)：通过一个简单的示例介绍了 Fun 的基本用法。
- **系列文章**：
  - **自定义模板**：关于如何使用 fun init 快速构建项目的文章。
    - [开发函数计算的正确姿势 —— 使用 Fun Init 初始化项目](https://yq.aliyun.com/articles/674363)：介绍了 fun init 的基本用法。
    - [Fun Init 自定义模板](https://yq.aliyun.com/articles/674364)：介绍了如何开发 fun init 模板。
    - **第三方模板**: 第三方模板，可以直接通过 `fun init [repo]` 的方式快速初始化一个项目。
      - [puppeteer 模板项目](https://github.com/vangie/puppeteer-example/)：基于 puppeteer 的部署在函数计算上的截图服务。
      - [函数计算 R 语言模板项目](https://github.com/vangie/rlang-example)：R 语言的模板项目，可以直接使用。
      - [开发函数计算的正确姿势——支持 ES6 语法和 webpack 压缩](https://yq.aliyun.com/articles/701714)：帮助快速搭建一个函数计算 nodejs 项目骨架，支持 es6 代码编译成 es5。
  - **依赖安装**：关于如何使用 fun install 快速安装函数依赖的文章。
    - [开发函数计算的正确姿势 —— 安装第三方依赖](https://yq.aliyun.com/articles/688062)：介绍了 fun install 的基本用法。
    - [函数运行环境系统动态链接库版本太低？函数计算 fun 神助力分忧解难](https://yq.aliyun.com/articles/690856)：介绍了如何利用 fun install，升级系统动态链接库。
    - **install 原理介绍**：fun install 功能推出之前推荐的方法，现在更推荐优先使用 fun install。下面的文章，可以作为了解 install 的原理，以便更好的使用 fun install。
        - [函数计算安装依赖库方法小结](https://yq.aliyun.com/articles/602147)：总结了各个语言依赖安装的方法。
        - [函数计算 Python 连接 SQL Server 小结](https://yq.aliyun.com/articles/672131)：介绍了如何利用 fc-docker 安装 pymssql 库。该文章介绍的思路，与 fun install 的底层实现思路是类似的。
        - [手把手教您将 libreoffice 移植到函数计算平台](https://yq.aliyun.com/articles/674330)：介绍了如何利用 fc-docker 将 libreoffice 移植到函数计算。
  - **本地运行与调试**：关于如何本地运行、调试函数，以及介绍排查 bug 技巧的系列文章。
    - [开发函数计算的正确姿势 —— 使用 Fun Local 本地运行与调试](https://yq.aliyun.com/articles/672623)：介绍了 Fun Local 基本用法。
    - [开发函数计算的正确姿势 —— Http Trigger 本地运行调试](https://yq.aliyun.com/articles/683683): 介绍了如何使用 Fun Local 在本地运行、单步调试配置了 Http Trigger 的函数。
    - [开发函数计算的正确姿势 —— 本地运行、调试、发布 NAS 函数](https://yq.aliyun.com/articles/683684): 介绍了如何在本地运行、单步调试配置了 NAS 服务的函数。
    - [开发函数计算的正确姿势 —— Api 本地运行调试](https://yq.aliyun.com/articles/683685): 介绍了如何在通过 API 在本地运行、单步调试函数。
  - **部署**：关于如何快速部署云服务的文章。
    - [开发函数计算的正确姿势 —— 部署 API 网关](https://yq.aliyun.com/articles/689185)：介绍了如何部署 API 网关 + 函数计算应用。
    - [开发函数计算的正确姿势 —— OSS 触发器](https://yq.aliyun.com/articles/699379)：介绍了如何部署 OSS 触发器 + 函数计算应用。
    - [开发函数计算的正确姿势 —— CDN 触发器](https://yq.aliyun.com/articles/700808)：介绍了如何部署 CDN 触发器 + 函数计算应用。
  - **实战**：关于如何利用 init、local、install、deploy 等命令，快速开发一款 Serverless 应用的文章。
    - [开发函数计算的正确姿势 —— 爬虫](https://yq.aliyun.com/articles/672624): 通过一个实战场景，介绍了如何利用 Fun 工具从头开始开发一个 Serverless 应用。
    - [开发函数计算的正确姿势 —— 排查超时问题](https://yq.aliyun.com/articles/672627): 从一个 bug 出发，介绍了各种排查问题的技巧。
    - [开发函数计算的正确姿势 —— 开发 WordPress 应用](https://yq.aliyun.com/articles/683686): 通过一个实战场景，介绍了如何利用 Fun 工具本地开发 WordPress Web 应用。
    - [开发函数计算的正确姿势 —— 开发 NAS 文件管理应用](https://yq.aliyun.com/articles/685803): 介绍了如何使用 Fun Local 开发一个 NAS 文件管理 Web 应用。
    - [开发函数计算的正确姿势——网页截图服务](https://yq.aliyun.com/articles/688927)：介绍了如何利用函数计算快速开发网页截图服务。
    - [五分钟教你如何用函数计算部署钉钉群发机器人](https://yq.aliyun.com/articles/682133)：介绍了如何利用函数计算快速搭建钉钉群发机器人。
    - [五分钟上线——函数计算 Word 转 PDF 云服务](https://yq.aliyun.com/articles/674284)：介绍了如何将 libreoffice 迁移到函数计算，并进行 word 到 pdf 的转换。
    - [用函数计算搭建微服务——云客服访客名片](https://yq.aliyun.com/articles/674378)：介绍了如何利用函数计算搭建云客服访客名片微服务。
    - [三分钟学会如何在函数计算中使用 puppeteer](https://yq.aliyun.com/articles/602877)：介绍了如何在函数计算中使用 puppeteer。
    - [函数计算部署机器学习遇到的问题和解法](https://yq.aliyun.com/articles/630289)：介绍了机器学习部署到函数计算时可能会遇到的一些问题以及相关问的解法。

- [Fun 规范文档](https://github.com/aliyun/fun/blob/master/docs/specs/2018-04-03-zh-cn.md): 详细介绍了 Fun 规范文档的细节。
- [常见问题与解答](https://github.com/aliyun/fun/blob/master/docs/usage/faq-zh.md): 使用 Fun 时的常见问题与解答。
- [更多示例](https://github.com/aliyun/fun/tree/master/examples)

## 反馈

如您在使用中遇到问题，可以在这里反馈 https://github.com/aliyun/fun/issues

## 参考

- [以函数计算作为 API 网关后端服务](https://help.aliyun.com/document_detail/54788.html)
- [函数计算](https://www.aliyun.com/product/fc)
- [API Gateway](https://www.aliyun.com/product/apigateway)
- [Fun 发布 2.0 新版本啦](https://yq.aliyun.com/articles/604490)
- [函数计算工具链新成员 —— Fun Local 发布啦](https://yq.aliyun.com/articles/672656)
- [三十分钟快速搭建 serverless 网盘服务](https://yq.aliyun.com/articles/613780)
- [Fc Docker](https://github.com/aliyun/fc-docker)

## 开源许可

The MIT License
