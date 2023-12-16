import React,{useState} from "react";
import './Pass.css';
import ConfirmPass from "./ConfirmPassword";
const Password = ()=>{

    const [pass, setPass] = useState('');

    function isValidPassword(pass){
        return (pass.length >= 8 ? true : false)
    }

    function handleInputChange(event){
        const inputValue = event.target.value.trim();
        setPass(inputValue);
    }

    const inputStyle = {
        border: isValidPassword(pass) ? '2px solid green' : '2px solid red',
        padding: '5px',
        width: '400px',
    }

    return(
        <div className="passDiv">
            <div className="passwordDiv">
            <label>Password:</label>
            <input
                type="text"
                id="passwordInput"
                
                value={pass}
                onChange={handleInputChange}
                style={inputStyle}
            />

            {
                 pass.length < 8 &&(
                    <p>Password must be atleast 8 Characters</p>
                )
            }
            </div>
           
            <ConfirmPass originalPassword={pass} />
        </div>
    )
}

export default Password

