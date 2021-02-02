import './App.css';
import React from 'react';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";


function App() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
