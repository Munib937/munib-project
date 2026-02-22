









import './App.css';          //yaha pr file direct import ho rahi hian.
import Apps from './Apps';        // ya component hain;  
import logo from  './logo.svg';    // img ko phly import krna parta hain , phir use krtay hain;

function App() {
  let name = "Munib"      // Variable use kr saktay hain;    (<b> Munib </b>)   React Extenal html ko ko wasay he lik dayta hain resolve ni krta;
 
  let obj = {              //object use kr rahay hain
    fullName: "Ali",
    cgpa: 3.22,
  }
  return (
    <>

    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Hello <b> {name} </b></li>        {/* curly bracket ma javascript liki jati hain*/}
      <li>My name is {obj.fullName}</li>
      <li>My cgpa is {obj.cgpa}</li>
       {/* <img src={logo} className='logo'></img>; */}
       <img src= {logo} className='logo' alt="react-logo" />    {/* iss trah img use krni hain */}

    </nav>
    <div className="container">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aliquam temporibus ad fugiat ut provident.</p>
    </div>
     
     <Apps/>      {/* component import kiya hain;*/}
    
    </>
    
  );

}


  // use Condition in React

   

export default App;        ///iss ka matlab hain by-default ya function export ho raha hain;





