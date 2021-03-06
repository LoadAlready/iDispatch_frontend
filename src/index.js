import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import store from './store';


const API_KEY = `${process.env.REACT_APP_API_KEY}`

ReactDOM.render(
    <Provider store={store}>
        <Router><App /></Router>
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
