import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store/store"



const root = document.getElementById('root')

const Root = () => (
        <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
        </Provider>

)

ReactDOM.render(<Root />, root)

reportWebVitals();
