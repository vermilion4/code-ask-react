
import React from "react"
import Label from "./Label"
import Input from "./Input"
import ErrorMessage from "./ErrorMessage"
import InputIcon from "./InputIcon"


function PasswordInput(){
return (
    <div class="form-wrapper">

<Label name={"password"} text={"Password"} />
            <Input classname={"signup-input"}
              type={"password"}
              id={"password"}
              name={"password"}
              placeholder={"Enter your Password"}
              title={"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"}
            />
              <InputIcon classname={"bi bi-eye-slash"} id={"togglePassword"}/>
    
    <ErrorMessage classname={"error-message"}/>
  </div>
)
  
}
export default PasswordInput