import React, { Component } from "react";
import MenuDynRender from './menuDyn';
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MenuDynRender />
      </div>
    );
  }
}

export default App;
