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
import './config'
import Register from './container/register/register';
import Login from './container/login/login'
import AuthRoute from './component/authroute/authroute'
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

ReactDOM.render((<Provider store={store}>
    <BrowserRouter>
    <div>
        <AuthRoute></AuthRoute>
        <Switch>
            <Route path='/bossinfo' component={BossInfo}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
        </Switch>
    </div>
    </BrowserRouter>
</Provider>), 
document.getElementById('root'));
registerServiceWorker();

