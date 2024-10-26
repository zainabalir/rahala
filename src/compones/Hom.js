import React from 'react';
import  Backimg from "./Backimg";
import  Navbar from "./Navbar";
import Comcard from "./Comcard";
function Home() {
  return (
    
    <div className="Home">
    <Navbar/>
   <Backimg/>
   <Comcard/>
  
    </div>
  );
}

export default Home;