import { useState } from "react";

export function StateForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  function handleSubmit(e) {

    e.preventDefault();

    setEmailError(emailError =>[])
    if(email.length == 0) {
      setEmailError(emailError => [...emailError, 'Email is empty'])
      return
    } else if(!email.endsWith('.com')) {
      setEmailError(emailError => [...emailError, 'Enter valid email'])
      return
    } else {
      setEmailError(emailError =>[])
      // submit form
    }
    alert(emailError)
    setPasswordError([])
    if(passwordError.length == 0) {
      setPasswordError(passwordError => [...passwordError, 'Password is empty'])
      return
    } else if(passwordError.length < 10) {
      setPasswordError(passwordError => [...passwordError, 'Must be more than 10 chars'])
      return
    }
  }

  return (
    
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group  ${emailError.length > 0 ? "error" : ""} `}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
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
