import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
// import { counter } from './index.redux';
import reducer from './reducer'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import {BrowserRouter,  Route, Switch, Redirect} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'
const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState);
// class Test extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(this.props);
//         return <h2>测试组件{this.props.match.params.location}</h2>
//     }
// }
ReactDOM.render((<Provider store={store}>
    <BrowserRouter>
    <Switch>
        <Route path='/login'  component={Auth}></Route> 
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to="/dashboard"></Redirect>
    </Switch>
    </BrowserRouter>
</Provider>), 
document.getElementById('root'));
registerServiceWorker();

