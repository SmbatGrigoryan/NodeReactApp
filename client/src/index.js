import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);



//import axios from 'axios'; //DELETE
//window.axios = axios;      //DELETE

