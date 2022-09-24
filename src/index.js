import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Guard from './components/Guard';
import PostEditor from './pages/batman/posteditor/PostEditor';
import Login from './pages/batman/Login';
import Dashboard from './pages/batman/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/login" element={<Login />} />
      <Route path="/batman" element={<Guard />}>
        <Route path="batcave" element={<Dashboard />}/>
        <Route path="editor" element={<PostEditor/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
