import './App.css';
import React from 'react';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";
import ProductDetails from "./components/product-details/product-details.component";
import Registration from "./components/registration/registration.component"
import { Route, Switch } from 'react-router-dom';


const App = (props) => {


    return (
    <div>
      <Header/>
      <Navigation/>
        <Switch>
            <Route path = "/" exact>
                    <Main/>
            </Route>
            <Route path= "/product-details/:id">
                <ProductDetails />
            </Route>
            <Route path= "/registration/">
                <Registration/>
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
