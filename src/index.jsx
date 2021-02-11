import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<Root />, root)

reportWebVitals();
