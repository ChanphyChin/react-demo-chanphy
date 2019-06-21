This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)  

Create by Chanphy on 2019-4-17
### 目录结构  
```
│-- pulic
│-- src
|   |-- components  
│       |-- common
|           |-- bread-crumbs.js
|           |-- nav-menu.js
|           |-- silder-menu.js
|       |-- login
|           |-- index.js
|   |-- store
|       |-- action-type.js
|       |-- actions.js
|       |-- index.js
|       |-- reducers.js
|   |-- view
|       |-- activity
|           |-- index.js
|           |-- running.js
|       |-- home
|           |-- dashboard.js
|           |-- index.js
|           |-- store.js
|           |-- test1.js
|       |-- user-center
|           |-- index.js
|           |-- setting.js
|   |-- router
|       |-- index.js
|   |-- App.css
|   |-- App.js
|   |-- App.test.js
|   |-- index.css
|   |-- index.js
|   |-- serviceWorker.js
│-- package-lock.json
│-- package.json
│-- README.md
└
```
### 描述
使用`react`路由，`redux` 结合`ant design` 构建的一个简洁项目模版
### 注意事项
 ###### `react-router v4+` 分离出了 `react-router-dom` 供web项目使用，使用方式和`react-router`区别点：
1. 把`<Route>`组件子路由的嵌套抽离出来，~~子路由需要在父路由所在组件里面进行管理~~  
    路由统一抽离至`/src/router`进行管理。需要再`/src/index.js`进行引入（保证组件成功加载而不是在`router`里面`import`的时候加载），子路由在父级路由进行配置，相当于每个父级路由是每个子路由的展示入口。
 [react-router文档参考](https://reacttraining.com/react-router/web/guides/quick-start)
 ###### `redux`注意点： 
1. `action`创建函数用来修改state里的数据，`reducer`用来描述`action`创建函数如何修改`state`的细节
2. 多个`reducer`可以使用`combineReducers`来合并，合并之后`action`创建函数通过`dispatch`修改`state`依旧流入合并之后的`reducers`,单个`reducer`主要充当功能业务的管理区分，不影响对`action`创建函数的作用。

### saga 
1. 定义：`redux`本身是无副作用（不做数据更改，逻辑处理），`redux-saga`为拓展`redux`能力而存在的插件，例如在`redux`里面发起异步请求。
2. 几个`redux-saga/effects`的函数
    2.1. `takeEvery` 用于监听`state`是否改变，第一个参数为监听的`action`类型，第二个参数为回调函数。且每次`action`被`dispatch`时回调都会执行。
    ```javascript
        import { takeEvery } from 'redux-saga';
        function incrementAsync() {
            console.log('watching TEST');
        }
        export function* test() {
            yield takeEvery('TEST', incrementAsync);
        }
    ```    
    2.2 `takeLatest` 用于监听`state`是否改变，参数同`takeEvery`，区别是最新的`action`调用如果前面的任务没有完成会取消未完成的任务执行最新的任务。
    ```javascript
        import { takeLatest } from 'redux-saga';
        function incrementAsync() {
            console.log('watching TEST');
        }
        export function* test() {
            yield takeLatest('TEST', incrementAsync);
        }
    ```  
    2.3 `call`,`apply`方法来执行异步调用，`call` 和 `apply` 非常适合返回 `Promise` 结果的函数。另外一个函数 `cps `可以用来处理 `Node` 风格的函数 
    ```javascript
        // yield call([obj, obj.method], arg1, arg2, ...)
        // yield apply(obj, obj.method, [arg1, arg2, ...])
        // 像极了Object.call和Object.apply的关系
        // a demo:
        function apiFn (path) {
            return new Promise((resolve, reject) => {
                axios.get(path).then(res => {
                    resolve(res.data.result);
                }).catch(err => {
                    reject(err);
                })
            })
        }

        function* incrementAsync() {
            const result = yield call(apiFn, '/getResult');
            yield put({type: SAGA_TEST, sagaTest: result});
        }
    ```
3. 发起 action 到 store
    `put`函数用于创建 `dispatch Effect`。就是等于说使用`put`来执行`dispatch`。
    ```javascript
        function* incrementAsync() {
            const result = yield call(apiFn, '/getResult');
            yield put({type: SAGA_TEST, sagaTest: result});
        }
    ```
4. 错误处理  

    4.1 `try/catch`进行异常的捕获
    ```javascript
        import Api from './path/to/api'
        import { call, put } from 'redux-saga/effects'

        function fetchProductsApi() {
        return Api.fetch('/products')
            .then(response => ({ response }))
            .catch(error => ({ error }))
        }

        function* fetchProducts() {
            try {
                const response = yield call(fetchProductsApi)
                yield put({ type: 'PRODUCTS_RECEIVED', products: response })
            }catch(error) {
                yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
            }
        }
    ```
    4.2 结合后台返回的特定字段用来区别是否错误
    ```javascript
        import Api from './path/to/api'
        import { call, put } from 'redux-saga/effects'

        function fetchProductsApi() {
        return Api.fetch('/products')
            .then(response => ({ response }))
            .catch(error => ({ error }))
        }

        function* fetchProducts() {
        const { response, error } = yield call(fetchProductsApi)
        if (response)
            yield put({ type: 'PRODUCTS_RECEIVED', products: response })
        else
            yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
        }
    ```
5. soga到底可以做什么？    
    soga可以检测到某一个（每一个）redux中的state发生变化，从而做出相对应的处理。
