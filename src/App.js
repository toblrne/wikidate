import React from 'react';
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
    </div>
  );
}

export default App;