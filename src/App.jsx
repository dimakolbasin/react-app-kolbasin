import './App.css';
import React from 'react';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";
import {useEffect, useState} from 'react'

const App = (props) => {

    const [counter, setCounter] = useState(0)

    const updateData = (value) => {
        setCounter(value)
    }

    return (
    <div>
      <Header counter={counter}/>
      <Navigation/>
      <Main updateData={updateData}/>
      <Footer/>
    </div>
  )
}

export default App;
