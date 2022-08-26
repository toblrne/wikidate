import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar'
import Input from './components/Input'
import Output from './components/Output'

import './App.scss'

const App = () => {

  const [data, setData] = useState({
    events: [{description : ""}]
  });

  const url = "https://byabbe.se/on-this-day/6/12/events.json"

  useEffect(() => {
    axios
      .get(url)
      .then(res => setData(res.data))
  }, [])

  


  return (
    <div className="main-container">
      <Navbar />
      <Input data={data} />
      <Output data={data} />

    </div>
  );
}

export default App;