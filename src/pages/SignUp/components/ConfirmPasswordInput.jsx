 import Input from "./Input"
 import Label from "./Label"
 import ErrorMessage from "./ErrorMessage"

 
 function ConfirmPasswordInput(){
return (
    <div class="form-wrapper  cpwrapper">

<Label name={"password"} text={"Confirm Password"} /> 
            <Input classname={"signup-input"}
              type={"password"}
              id={"confirm-password"}
              name={"confirm-password"}
              placeholder={"confirm-password"}
              title={"Must be the above password"}
            />
        
       { /*<!-- <i class="bi bi-exclamation-circle"></i> */}
       <i class="bi bi-eye-slash" id="toggleCPassword"></i>
        <ErrorMessage classname={"error-message"}/>
   
 </div>

)
   
 }
 export default ConfirmPasswordInput