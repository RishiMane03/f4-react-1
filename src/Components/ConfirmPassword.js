import React, { useState } from "react";
import './ConPass.css';


const ConfirmPass = ({ originalPassword }) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = () => {
    if (originalPassword === confirmPassword  && originalPassword) {
      alert('Form Submitted successfully!');
    } 
     
    else{
        alert('Form cannot be submitted!');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const enteredConfirmPassword = e.target.value;
    setConfirmPassword(enteredConfirmPassword);

    // Check for password match and update the error message
    setError(enteredConfirmPassword === originalPassword ? '' : 'Passwords do not match!');
  };
 
  return (
    <div className="ConPassDiv">
      <label>Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {error && <div style={{ color: 'red', fontSize:"14px"}}>{error}</div>}

      
      <div>
        <button className="SignupBtn" onClick={handleLoginClick}>Sign In</button>
      </div>
    </div>
  );
};

export default ConfirmPass;

