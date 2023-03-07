import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@elastic/eui/dist/eui_theme_light.css';
import './index.css';

import 'styles/styles.scss';
import 'styles/styles2.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
