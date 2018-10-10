import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from './Slider/'
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './redux';

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
  );

const store = createStore(
	reducers,
	applyMiddleware(logger),
	enhancers
);

ReactDOM.render(
    <Provider store={store}>
        <Slider />
    </Provider>    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
