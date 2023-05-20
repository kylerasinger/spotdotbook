import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from 'atomize';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

// Create a root instance
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <App />
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>
);

reportWebVitals();
