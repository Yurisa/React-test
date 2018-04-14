import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { counter } from './index.redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
const store = createStore(counter, applyMiddleware(thunk));
ReactDOM.render((<Provider>
    <App store={store}/>
</Provider>), 
document.getElementById('root'));
registerServiceWorker();

