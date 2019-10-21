import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Api from './Api';
import * as serviceWorker from './serviceWorker';
import Tick from './Tick';
import TestState from './TestState';

ReactDOM.render(<Api />, document.getElementById('Api'));
ReactDOM.render(<Tick />, document.getElementById('tick'));
ReactDOM.render(<TestState />, document.getElementById('TestState'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
