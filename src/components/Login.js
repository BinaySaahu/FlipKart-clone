import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Login.css";
import loginImg from "../img/loginimg.png";
import { firebase, auth} from "../firebase.js";
function Login(props) {
  const [showOtp, setShowOtp] = useState(false);
  const [reqShowOtp, setReqShowOtp] = useState(false);
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const handleClick = () => {
    props.setShowLogin(false);
    props.setShowRegister(false);
    props.setShowContinue(false);
  };
  const handleRegister = () => {
    props.setShowRegister(true);
    props.setShowLogin(false);
    props.setShowContinue(true);
  };
  const handleBack = () => {
    props.setShowLogin(true);
    props.setShowRegister(false);
    props.setShowContinue(false);
  };
  const handleOtp = () => {
    setShowOtp(true);
    props.setShowContinue(false);
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };
  const handleRequest = (e) => {
    e.preventDefault();
    if (mynumber === "" || mynumber.length < 10) {
      alert("Enter a valid mobile number");
      return;
    }

    setReqShowOtp(true);
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });

  };
  const validateOtp = (e)=>{
    if (otp === null || final === null)
            return;
        if(final.confirm(otp)){
            alert("Successfully logged in!!");
            e.preventDefault();
            props.setIsLoggedIn(true);
        }
  }
  return (
    <div className="login">
      <div className="login_left">
        <div className="login_left_container1">
          <div className="login_left_title">
            <h2>{props.login_left_title}</h2>
          </div>
          <div className="login_left_info">
            <p>{props.login_left_info1}</p>
            <p>{props.login_left_info2}</p>
            <p>{props.login_left_info3}</p>
          </div>
        </div>
        <div className="login_left_img">
          <img src={loginImg} alt="" />
        </div>
      </div>
      <div className="login_right">
        <form className="login_right_form">
          <input type="text" placeholder="Enter mobile number/Email" value={mynumber} onChange = {(e)=>{setnumber(e.target.value)}} />
          <div id="recaptcha-container"></div>
          {showOtp && <p className="login_right_otptext">OTP sent to mobile</p>}
          {showOtp && <input type="text" placeholder="Enter OTP" onChange = {(e)=>{setotp(e.target.value)}}/>}

          {showOtp && <button onClick={validateOtp}>SignUp</button>}
          <span>
            By continuing, you agree to Flipkart's <a href="">Terms of Use</a>{" "}
            and <a href="">Privacy Policy</a>.
          </span>
          {reqShowOtp && <input type="text" placeholder="Enter OTP" onChange = {(e)=>{setotp(e.target.value)}}/>}
          {props.showLogin && !reqShowOtp &&(
            <button onClick={handleRequest}>Request OTP</button>
          )}
          {props.showLogin && reqShowOtp && (
            <button onClick={validateOtp}>Verify</button>
          )}
          {props.showContinue && <button onClick={handleOtp}>Continue</button>}
          {props.showRegister && (
            <button className="back_to_login" onClick={handleBack}>
              Existing user? Login
            </button>
          )}
        </form>
        <div className="login_right_foot">
          {props.showLogin && (
            <p onClick={handleRegister}>New to Flipkart? Create an account</p>
          )}
        </div>
      </div>
      <CloseIcon className="closeIcon" onClick={handleClick} />
    </div>
  );
}
export default Login;
