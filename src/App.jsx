import './App.css';
import React from 'react';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";


class App extends React.Component {

    state = {
        counter: 0
    }

    updateData = (value) => {
        this.setState({ counter: value });
    }

  render() {
        return (
    <div>
      <Header counter={this.state.counter}></Header>
      <Navigation></Navigation>
      <Main updateData={this.updateData}></Main>
      <Footer></Footer>
    </div>
  )}
}

export default App;
