import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateWrap } from './components/StateWrap';
import reducer, { inititalState } from './components/ReducerComponent';

ReactDOM.render(
  <React.StrictMode>
    <StateWrap initialState={inititalState} reducer={reducer}>
      <App />
    </StateWrap>
  </React.StrictMode>,
  document.getElementById('root')
);