import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar'


const App = () => {

  const [data, setData] = useState({});

  const url = "https://byabbe.se/on-this-day/6/12/events.json"

  useEffect(() => {
    axios
      .get(url)
      .then(res => setData(res.data))
  }, [])

  console.log(data)

  return (
    <div>
      <Navbar />
      {data.events ? data.events[0].description : ""}
    </div>
  );
}

export default App;