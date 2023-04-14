import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home";
import Events from "../src/Pages/Events";
import EventPage from "../src/Pages/EventPage";
import "./app.css"
import "./events.css"
import Pass from "../src/Pages/Pass"
<link rel="stylesheet" href="css/animate.css"/>


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/pass' element={<Pass/>} />
        <Route path='/:catName/:id' element={<EventPage/>} />
      </Routes>
    </div>
  );
};

export default App;