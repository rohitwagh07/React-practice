import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculate from './components/Calculate';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Football from './components/Football';
import Form from './components/Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Greet/>
    {/* <Welcome name="Rohit"/>
    <Welcome name="Aman"/>
    <Welcome name="Pramod"/> */}
    {/* <Calculate/> */}

    {/* <Welcome/> */}
    <Football/>
    <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
