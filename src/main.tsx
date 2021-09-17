import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css';
import App from './containers/App';
import { createOvermind } from 'overmind';
import { config } from './state';
import { Provider } from 'overmind-react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './utils/theme';

const overmind = createOvermind(config);

globalThis.React = React;

ReactDOM.render(
  <Provider value={overmind}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
