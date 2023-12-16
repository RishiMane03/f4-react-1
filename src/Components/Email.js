import React,{useState} from "react";
import './Email.css';

function Email() {

    const [email, setEmail] = useState('');
  
    const isValidEmail = (email) => {
      // Use a simple regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleInputChange = (event) => {
      const inputValue = event.target.value.trim();
      setEmail(inputValue);
    };
  
    const inputStyle = {
      border: isValidEmail(email) ? '2px solid green' : '2px solid red',
      padding: '6px',
      width: '400px',
      

    };
  
    return (
      <div className="emailDiv" >
        <label>Email:</label>
        <input
          type="text"
          id="emailInput"
          
          value={email}
          onChange={handleInputChange}
          style={inputStyle}
        />
       {!isValidEmail(email)&&
       <p>invalid email format</p>} 
      </div>
    );
  }
  
  export default Email;
  


