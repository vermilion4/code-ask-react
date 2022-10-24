
import React from "react"
import Label from "./Label"
import Input from "./Input"
import ErrorMessage from "./ErrorMessage";
import InputIcon from "./InputIcon";

function  NameInput(){
return(
 <div class="form-wrapper"> 
           <Label name={"name"} text={"Name"} />
            <Input classname={"signup-input"}
              type={"text"}
              id={"name"}
              name={"name"}
              placeholder={"Enter your name"}
            />
            <InputIcon classname={"bi"}/>
           
           <ErrorMessage classname={"error-message"}/>
    </div>
)
}

export default NameInput