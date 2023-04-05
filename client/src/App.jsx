import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home";
import Events from "../src/Pages/Events";
import "./app.css"
import "./events.css"
import Pass from "../src/Pages/Pass"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/pass' element={<Pass/>} />
      </Routes>
    </div>
  );
};

export default App;
