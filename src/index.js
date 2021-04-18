import React from 'react';
import ReactDOM from 'react-dom';
// 引入react-router-dom react-router v4+ 版本抽离出来的浏览器路由管理包
import { HashRouter, Route, Switch } from 'react-router-dom';
// 引入provider 包含router，以便组件可以访问到store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import routes from './router';
import * as serviceWorker from './serviceWorker';
import { reducersDemo } from './store/reducers';
import { rootSage } from './sagas';
import { Login } from './view/login';
import { PageNotFound } from './view/page-not-found';
import logger from 'redux-logger';
import { RouterGuarder } from './router/router-guarder';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import './index.css';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware(rootSage);
// 创建store
let store = createStore(reducersDemo, applyMiddleware(sagaMiddleware, logger));
// then run the saga
sagaMiddleware.run(rootSage);

const lang = localStorage.getItem('lang');
!lang && localStorage.setItem('lang', 'zh_CN');

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Switch>
          {/* <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/activity" component={Activity} />
          <Route path="/userCenter" component={UserCenter} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/home" /> */}
          <Route path="/login" component={Login} />
          <Route path="/404" component={PageNotFound} />
          <RouterGuarder config={routes} />
        </Switch>
      </HashRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
