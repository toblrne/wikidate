import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Input from './components/Input'

import Navbar from './components/Navbar'


import './App.scss'
import './components/Input.scss'
import './components/Output.scss'

const App = () => {
  
  return (
    <div className="main-container">
      <Navbar />

      <Input />






      {/* <div className="output">
        {data.events[randomElement].description}
      </div> */}

    </div>
  );
}

export default App;