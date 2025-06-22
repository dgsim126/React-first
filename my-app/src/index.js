import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18용
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();
