import { useRef, useState } from "react";

export function RefForm() {

  const emailInputRef = useRef(null);
  const passInputRef = useRef(null);

  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError(emailError =>[])
    if(emailInputRef.current.value.length == 0)  {
      setEmailError(emailError => [...emailError, 'Email is empty'])
      return
    } else if(!emailInputRef.current.value.endsWith('.com')){
      setEmailError(emailError => [...emailError, 'Enter valid email number'])
      return
    }

    setPasswordError([])
    if(passInputRef.current.value.length == 0) {
      setPasswordError(passwordError => [...passwordError, 'Password is empty'])
      return
    } else if(passInputRef.current.value.length < 10) {
      setPasswordError(passwordError => [...passwordError, 'Must be more than 10 chars'])
      return
    }
  
  };
 return (
    
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group  ${emailError.length > 0 ? "error" : ""} `}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          ref = {emailInputRef} 
          id="email"
        />
        {emailError.length > 0 && (
          <div className="msg-email">{emailError}</div>
        )}
      </div>
      <div
        className={`form-group  ${
          passwordError.length > 0 ? "error" : ""
        } `}
      >
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          ref = {passInputRef} 
          type="password"
          id="password"
         
        />
        {passwordError.length > 0 && (
          <div className="msg-pass">{passwordError}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
