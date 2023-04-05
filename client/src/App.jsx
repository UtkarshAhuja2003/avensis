import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home";
import Events from "../src/Pages/Events";
import "./app.css"
import "./events.css"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
    </div>
  );
};

export default App;

