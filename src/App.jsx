import React, { useState, useEffect } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import './App.css';

import EnumerateDevices from './components/enumerateDevices';
import Home from './components/home';
import Camera from './components/camera';
function App() {
  
  return (
    <div>
      <Switch>
        <Route path="/enumerate" >
          <EnumerateDevices />
        </Route>
        <Route path="/camera" >
          <Camera />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
