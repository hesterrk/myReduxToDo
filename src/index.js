import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './components/reducers';

//import AND pass in big reducer into here 
const store = createStore(rootReducer);


const rootElement = document.getElementById('root');
ReactDOM.render( <Provider store={store}>
<App />
</Provider>, 
rootElement);