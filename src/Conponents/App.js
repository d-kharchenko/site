import React, { Component } from 'react';
import Menu from './Menu';
import OurCompany from "./OurCompany";
import IndexProducts from "./IndexProducts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <OurCompany />
        <IndexProducts />
      </div>
    );
  }
}

export default App;
