import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css';
import App from './containers/App';
import { createOvermind } from 'overmind';
import { config } from './state';
import { Provider } from 'overmind-react';

const overmind = createOvermind(config);

globalThis.React = React;

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById('root')
);
