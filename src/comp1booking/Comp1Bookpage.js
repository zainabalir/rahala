import React from 'react';
import  Backimg from "../compones/Backimg";
import  Navbar from "../compones/Navbar";
import Datacomp from "./Datacomp"
import Bookingcard from './Comp1Bookingcard';
function Como1Bookpage() {
  return (
    <div className="Como1Bookpage">
      <Navbar />
      <Backimg />
     <Datacomp/>
     <Bookingcard/>
    </div>
  );
}
export default Como1Bookpage;
