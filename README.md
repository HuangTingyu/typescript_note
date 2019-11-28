# typescript_note
typescript学习笔记

## 启动项目

```
npm run dev
```

## 初始化环境

1.初始化项目环境

```
npm init -y
```

2.初始化typescript

```
npm install typescript -g
tsc --init
```

3.初始化tslint

```
npm install tslint -g
tslint -i
```

4.初始化webpack

```
npm install webpack webpack-cli webpack-dev-server
```

`build` 文件夹下创建 `webpack.config.js`

`package.json` 添加 ——

```js
"dev": "cross-env NODE_ENV=development webpack-dev-server --mode=development --config build/webpack.config.js"
```

### 下载依赖

```
npm install clean-webpack-plugin html-webpack-plugin
npm install ts-loader typescript
```

