This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
Create by Chanphy on 2019-4-17
### 目录结构  
```
│-- pulic
│-- src
|   |-- components  
│       |-- index.js
|       |-- store.js
|       |-- test.1.js
|       |-- test.js
|   |-- store
|       |-- action-type.js
|       |-- actions.js
|       |-- index.js
|       |-- reducers.js
|   |-- App.css
|   |-- App.js
|   |-- App.test.js
|   |-- index.css
|   |-- index.js
|   |-- serviceWorker.js
|-- DS_Store
│-- .eslintrc.json
│-- .gitignore
│-- package-lock.json
│-- package.json
│-- README.md
└
```
### 描述
使用`react`路由，`redux` 结合`ant design` 构建的一个简洁项目模版
### 注意事项
 ###### `react-router v4+` 分离出了 `react-router-dom` 供web项目使用，使用方式和`react-router`区别点：
1. 把`<Route>`组件子路由的嵌套抽离出来，子路由需要在父路由所在组件里面进行管理
 ###### `redux`注意点： 
1. `action`创建函数用来修改state里的数据，`reducer`用来描述`action`创建函数修改`state`的细节
2. 多个`reducer`可以使用`combineReducers`来合并，合并之后`action`创建函数通过`dispatch`修改`state`依旧流入合并之后的`reducers`,单个`reducer`主要充当功能业务的管理区分，不影响对`action`创建函数的作用。