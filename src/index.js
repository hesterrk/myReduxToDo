import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { toDoReducer } from "./components/reducers/toDoReducer";


//import AND pass in big reducer into here 
const store = createStore(toDoReducer);


const rootElement = document.getElementById('root');
ReactDOM.render( <Provider store={store}>
<App />
</Provider>, 
rootElement);