import React, { Component } from "react";
import MenuDynRender from './menuDyn';
import { menuConfig } from './menuDyn/menuConfig';
import "./App.css";

class App extends Component {
  
  render() {
    const random = Math.random();
    let allignTop = 20;
    let allignBottom = 'auto';
    if (random >= .45) {
      allignTop = 'auto';
      allignBottom = 20;
    }
    
    return (
      <div className="App">
        <div style={{top: 150, position: 'absolute'}}>
          <MenuDynRender data={menuConfig} />
        </div>
      </div>
    );
  }
}

export default App;
