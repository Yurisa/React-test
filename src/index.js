import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
// import { counter } from './index.redux';
import reducer from './reducer'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import {BrowserRouter,  Route} from 'react-router-dom'
import './config'
import Register from './container/register/register';
import Login from './container/login/login'
import AuthRoute from './component/authroute/authroute'
const store = createStore(reducer, applyMiddleware(thunk));
function Boss(){
    return <h2>Boss页面</h2>
}
ReactDOM.render((<Provider store={store}>
    <BrowserRouter>
    <div>
        <AuthRoute></AuthRoute>
        <Route path='/boss' component={Boss}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
    </div>
    </BrowserRouter>
</Provider>), 
document.getElementById('root'));
registerServiceWorker();

