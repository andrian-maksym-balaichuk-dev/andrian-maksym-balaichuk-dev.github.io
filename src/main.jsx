import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initScrollBar, initSmoothScroll, initCodeBackground } from './effects/background';

initScrollBar();
initSmoothScroll();
initCodeBackground();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
