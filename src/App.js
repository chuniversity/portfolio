import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import "animate.css/animate.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}
export default App;
