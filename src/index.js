import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { AuthProvider } from './Context/AuthProvider'
import App from './App';
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
