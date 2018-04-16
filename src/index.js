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
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render((<Provider store={store}>
    <BrowserRouter>
    <div>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
    </div>
    </BrowserRouter>
</Provider>), 
document.getElementById('root'));
registerServiceWorker();

