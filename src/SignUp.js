import {Link} from "react-router-dom";
import Logo from './assets/logo.png'
import Key from './assets/key.png'
import {useState} from "react";
export function SignUp({setMail}) {
    const [email, setEmail] = useState("");
    const [invalidMail, setInvalidMail] = useState(false);
    const onInputChange = (e) => {
        setEmail(e.target.value)
    }
    const checkValidity = () => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        let flag = emailPattern.test(email);
        if(flag)
        {
            setInvalidMail(false);
            setMail(email);
        }else
        {
            setInvalidMail(true);
        }
    }
    return <div className="App">
        <section id="section_uname">
            {invalidMail && <p style={{color:"red", fontSize:"18px", textAlign: "left"}}>Invalid Email</p>}
            <div className="auth-wrapper">
                <img src={Logo} alt="Microsoft"/>
                <h2 className="title mb-16 mt-16">Sign in</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-16">
                        <p id="error_uname" className="error"></p>
                        <input onChange={onInputChange} value={email} id="inp_uname" type="email" name="email" className="input" placeholder="Email, phone, or Skype"/>
                    </div>
                </form>
                <div>
                    <p className="mb-16 fs-13">No account? <Link to="/" className="link">Create one!</Link></p>
                    <p className="mb-16 fs-13">
                        <Link to="#" className="link">Can’t access your account?</Link>
                    </p>
                </div>
                <div className="btns">
                    <button className="btn btn-back" id="btn_next">Back</button>
                    <button onClick={checkValidity} className="btn" id="btn_next">Next</button>
                </div>
            </div>
            <div className="opts">
                <p className="has-icon mb-0" style={{fontSize:"15px"}}><span className="icon"><img src={Key} alt="keyImage" style={{width:"30px"}}/></span> Sign-in
                    options</p>
            </div>
        </section>
        <footer className="footer">
            <Link to="/">Terms of use</Link>
            <Link to="/">Privacy & cookies</Link>
            <span>.&nbsp;.&nbsp;.</span>
        </footer>
    </div>;
}