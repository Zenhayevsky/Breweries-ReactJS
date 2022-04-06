import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BreweriesHome from './pages/BreweriesHome/BreweriesHome';
import reportWebVitals from './reportWebVitals';
import Font from './Fontes';

// import Routes from './routes';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BreweriesHome" element={<BreweriesHome />} />
      </Routes>
    </Router>
    <Font />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
