import './App.css';
import {SignUp} from "./SignUp";
import {useState} from "react";
import Pwd from "./Pwd";


function App() {
  const [email, setEmail] = useState(null);
  const onEmailChange = (mail) => {
    setEmail(mail);
  };
  return (
      email === null || email === "" ?
    <SignUp setMail ={onEmailChange} /> : <Pwd mail = {email} />
  );
}

export default App;
