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

console.log('REACT_APP_STRIPE_KEY', process.env.REACT_APP_STRIPE_KEY);
console.log('REACT_APP_STRIPE_KEY', process.env.NODE_ENV);



