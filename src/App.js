

import "./App.css"; //yaha pr file direct import ho rahi hian.
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { useState } from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {          // App.js main file hain ya render ho gi sab components iss ma ay gy;

    const [mode  , setmode] = useState("light");           // mode value {ture or false} bi set kr saktaay hain;
    const [btnTooggle , setbtnToogle] = useState("Enable Dark Mode");
    const [alert , setalert] = useState(null);
     
   const toogle  = ()=>{
    if (mode === "light") {
     setmode("dark");
     document.body.style.backgroundColor = "black";
     setbtnToogle("Enable Light Mode");
     showalert("Dark Mode has been Enable" , "success");
    //  Dynamically Title Change;
     document.title = "Textutils - DarkMode";
    //  Title change hota raha:::
    setInterval(()=>{
            document.title = "Textutils - is Amazing";
           },2000);

               setInterval(()=>{
            document.title = "Textutils - Downloaded Now";
           },1500);
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      setbtnToogle("Enable Dark Mode");
      showalert("Light Mode has been Enable" , "success");
      document.title = "Textutils - LightMode";

    }
   }


   const showalert = (massage , type)=>{
     setalert({
      msg: massage,
      type: type,
     })
    // Alert kud he khatam ho jy;  iss liya.
     setTimeout(() => {
       setalert(null);
     },1400);
   }




  return (
    <>


     
      {/* <BrowserRouter> */}
     <Navbar title = "Textutils" about = "About us"     mode={mode}   toogle = {toogle}       btnTooggle={btnTooggle}/>   
     {/*  <Navbar title = "Amazon" about = "cart-payment"/>  */}    {/*----> reuse krnay ka liya parent sa value change kr day gy; */}
     <Alert alert = {alert}/>
      {/* <Routes> */}
        {/* <Route exact path="/" element={} /> */}
        <Textform heading = "Enter the Text to analyize below | Change your Text | Uppercase and Lower case" mode = {mode}  showalert = {showalert}/>
        {/* <Route  exact path="/about" element={<About />} /> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}



     {/* <About heading = "About us"/> */}


    </>
  );
}

export default App; ///iss ka matlab hain by-default ya function export ho raha hain;
