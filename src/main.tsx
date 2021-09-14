import ReactDOM from 'react-dom';
import theme from './theme.json';
import React from 'react';
import 'normalize.css';
import App from './containers/App';
import { createOvermind } from 'overmind';
import { config } from './state';
import { Provider } from 'overmind-react';

document.body.style.backgroundColor = theme.colors['editor.background'];

const overmind = createOvermind(config);

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById('root')
);
