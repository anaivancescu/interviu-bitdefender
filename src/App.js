import './App.css';
import CustomizedHeader from "./components/CustomizedHeader.tsx";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeicons/primeicons.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {useState} from "react";
import MenuRight from "./components/MenuRight.tsx";
import * as React from "react";
import WindowComponent from "./components/WindowComponent.tsx";


function App() {
    const [visible, setVisible] = useState(false);

    return (
    <div className="container">
      <header >
          <CustomizedHeader/>
          <Sidebar visible={visible}  position="left" onHide={() => setVisible(false)}>
              <MenuRight/>
          </Sidebar>
          <div className="page-title">
          <h3 style={{color:'black'}}>Page Title</h3>
          </div>
          <div className="App">
          <h4 style={{color:'black'}}>Start creating reports</h4>
          <h5 style={{color:'black'}}>You don't have any reports defined yet</h5>
              <WindowComponent/>
          </div>

          <Button
              style={{position: 'absolute', top: 10, left:60 }}
              icon="pi pi-arrow-right"
              onClick={(e) => setVisible(true)}/>

      </header>
    </div>
  );
}

export default App;
