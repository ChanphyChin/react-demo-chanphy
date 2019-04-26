import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入react-router-dom react-router v4+ 版本抽离出来的浏览器路由管理包
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// 引入provider 包含router，以便组件可以访问到store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { testReducers } from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSage } from './sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware(rootSage);
// 创建store
let store = createStore(testReducers, applyMiddleware(sagaMiddleware));
// then run the saga
sagaMiddleware.run(rootSage);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/app" component={App} />
        <Redirect from="*" to="/app" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
