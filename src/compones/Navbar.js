 import"../sours/css/Navbar.css"
 import logo from "../sours/imges/logo.png"
 import login from "../sours/imges/login.png"

function Navbar () {
    return(
<div className="navbar">
       <div className="logo">
       <img src={logo} alt="Logo"  width="150px" /> 
       </div>

        <div className='mune'>
        <ul className='muneul'>
         <li>Home</li>
         <li>Culture</li>
         <li>Attractions</li>
         <li>Services</li>
         <li>About Us</li>
        </ul>
        </div>
        <div className="login">
        <img src={login} alt="Login"/> 
        </div>

 </div>
    );
}

export default Navbar;