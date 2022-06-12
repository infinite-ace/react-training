import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './main-page';
import reportWebVitals from './tests/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' //Bootstrap is now available in the whole app.
import Header from "./main-page/header"
import './main-page/main-page.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className="App">
      <Header />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
