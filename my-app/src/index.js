import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18용
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

reportWebVitals();
