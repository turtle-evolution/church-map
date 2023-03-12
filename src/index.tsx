import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@elastic/eui/dist/eui_theme_light.min.css';
import './index.css';

import 'styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
