<!--
 * @Author: kanglang
 * @Date: 2020-07-12 10:20:29
 * @LastEditors: kanglang
 * @LastEditTime: 2020-10-13 09:05:49
 * @Description: 必读
-->

## 一个不起眼的react架构

### eslint集成配置

1. cd到我们的项目，安装ESlint：
> cnpm install eslint --save-dev

2. 创建ESlint配置文件.eslintrc.js：
> ./\node_modules\/.bin/\eslint --init

3. 安装 eslint-plugin-react 等相关依赖：
 > cnpm install babel-eslint eslint-plugin-react eslint-plugin-import  --save-dev

4. .eslintrc.js文件其他配置：

5. 在package.json中增加如下脚本指令：
```
{
  "scripts": {
    "lint": "eslint --ext .js --ext .jsx src",
    "lint-fix": "eslint --fix --ext .js --fix --ext .jsx src"
  }
}
```
添加完成之后，就可以执行如下命令对指定的文件进行eslint管理：
```
npm run lint
```
执行如下命令进行修正
```
npm run lint-fix
```