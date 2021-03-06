import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
// import { counter } from './index.redux';
import reducer from './reducer'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import './config'
import Register from './container/register/register';
import Login from './container/login/login'
import AuthRoute from './component/authroute/authroute'
import DashBoard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
//boss genius me msg 4个页面
ReactDOM.render((<Provider store={store}>
    <BrowserRouter>
    <div>
        <AuthRoute></AuthRoute>
        <Switch>
            <Route path='/bossinfo' component={BossInfo}></Route>
            <Route path='/geniusinfo' component={GeniusInfo}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/chat/:user' component={Chat}></Route>
            <Route component={DashBoard}></Route>
        </Switch>
    </div>
    </BrowserRouter>
</Provider>), 
document.getElementById('root'));
registerServiceWorker();

