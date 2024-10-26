import React from 'react';
import  Backimg from "../compones/Backimg";
import  Navbar from "../compones/Navbar";
import Bookingcard from "./Comp2bookingcard"
import Datacomp2 from "./Comp2datacomp"
const NewPage2 = () => {
    return (
      <div>
          <div className="Como1Bookpage">
              <Navbar />
              <Backimg />
              <Datacomp2/>
               <Bookingcard/>
    </div>
      </div>
    );
  };
  
  export default NewPage2; 