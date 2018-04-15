import React, { Component } from "react";
import MenuDynRender from './menuDyn';
import MenuDynRender1 from './menuDyn';
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
        <div style={{bottom: allignBottom, top: allignTop, position: 'absolute'}}>
          <MenuDynRender />  
        </div>
      </div>
    );
  }
}

export default App;
