
import { useState } from 'react';
import './App.css';
import Navbar from './components/Nav';
import Text1 from './components/Text-area';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState(false);  //hooks
  const clicked =()=>{
    if(mode===false){
      setMode(true);
      document.getElementById("darkbtn").innerText="lightmode";
      document.getElementById("darkbtn").style.backgroundColor="black";
      document.getElementById("body").style.backgroundColor="black";
      document.getElementById("darkbtn").style.marginTop="8px";
      showAlert("dark mode enabled","sucess");
    }
    else{
      setMode(false)
      document.getElementById("darkbtn").innerText="darkmode";
      document.getElementById("darkbtn").style.backgroundColor="darkslategrey";
      document.getElementById("body").style.backgroundColor="white";
      showAlert("light mode enabled","sucess");

    }
  };

  const [alert,setAlert]=useState(null);

  const showAlert =(message,head)=>{
      setAlert({
        msg: message,
        hed: head
      })
 };

 const setnullalt =()=>{
    setAlert(null);
 };




  return (
    <Router>
    <div id="body">
    <button id="darkbtn" onClick={clicked}>darkmode</button>
    <Navbar title="TEXTUTILS" mode1 = {mode} />  {/*this is example of props*/}
    <Alert Alert={alert}  setnullalt={setnullalt}/>
 
    <Routes> 
      <Route exact path="/" element={<Text1 mode1 = {mode}  showAlert={showAlert}/>} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    </div>
    </Router>
  );
}
export default App;
