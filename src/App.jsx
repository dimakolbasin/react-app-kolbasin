import './App.css';
import React from 'react';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";
import ProductDetails from "./components/product-details/product-details.component";
import LoginIn from "./components/login/loginIn.component"
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import products from "./data/products.mock";

async function getProducts() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(products),
            1000
        )
    })
}


const App = (props) => {

    const [product, setProduct] = useState([]);

    useEffect (() => {
        getProducts().then(response => setProduct(response));
    }, []);

    const [counter, setCounter] = useState(0);

    const updateData = (value) => {
        setCounter(value);
    }

    return (
    <div>
      <Header counter={counter}/>
      <Navigation/>
        <Switch>
            <Route path = "/" exact>
                    <Main
                        product = {product}
                        updateData={updateData}
                    />
            </Route>
            <Route path= "/product-details/:id">
                <ProductDetails />
            </Route>
            <Route path= "/login/">
                <LoginIn/>
            </Route>
            <Route>
                404 Page not found
            </Route>
        </Switch>
      <Footer/>
    </div>
  )
}

export default App;
