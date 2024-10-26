import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './compones/Hom';
import Comp1Bookpage from './comp1booking/Comp1Bookpage';
import Comp2Bookpage from './comp2booking/Comp2booking';
import Comp3bookpage from './comp3book/Comp3booking';

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/new-page" element={<Comp1Bookpage/>} /> 
        <Route path="/new-page-2" element={<Comp2Bookpage/>} /> 
        <Route path="/new-page-3" element={<Comp3bookpage/>} /> 
        


      </Routes>
    </Router>
  );
}

export default App;


