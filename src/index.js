import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router';
import 'antd/dist/antd.css';
import { Home } from './view/home';
import { Activity } from './view/activity';
import './index.css';
import * as serviceWorker from './serviceWorker';
// 引入react-router-dom react-router v4+ 版本抽离出来的浏览器路由管理包
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// 引入provider 包含router，以便组件可以访问到store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducersDemo } from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSage } from './sagas';
import { UserCenter } from './view/user-center';
import { Login } from './components/login';
import logger from 'redux-logger';
import { RouterGuarder } from './router/router-guarder';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware(rootSage);
// 创建store
let store = createStore(reducersDemo, applyMiddleware(sagaMiddleware, logger));
// then run the saga
sagaMiddleware.run(rootSage);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {/* <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/activity" component={Activity} />
        <Route path="/userCenter" component={UserCenter} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/home" /> */}
        <RouterGuarder config={routes} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
