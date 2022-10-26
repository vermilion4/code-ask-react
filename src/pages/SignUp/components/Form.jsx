import React from 'react';
import { Link } from 'react-router-dom';
// import EmailInput from "./EmailInput"
// import NameInput from "./NameInput"
// import PasswordInput from "./PasswordInput"
// import ConfirmPasswordInput from "./ConfirmPasswordInput"
import { CreateAccount } from './CreateAccount';
import BackButton from "./BackButton";
import GoogleButton from "./GoogleButton";
import LinkedInGithub from "./LinkedInGithub";
import SignUpBrief from "./SignUpBrief";



function Form (){
    return (
        <section class="signup-form">
        
         {/* <NameInput/>
       
         <EmailInput/>
      
         <PasswordInput/>
    
         <ConfirmPasswordInput/>
   
         
        <button className="signup-btn get" onClick="collectData()">Get Started</button> */}

          <CreateAccount/>
          <hr class="hr" />

          <GoogleButton classname ={"signup-btn link"} svgclassname={"signup-link-icons"} width={"16"} height={"16"} viewbox={"0 0 16 16"} fill={"none"} colorFill1={"#FFC107"} colorFill2={"#FF3D00"} colorFill3={"#4CAF50"} colorFill4={"#1976D2"}
           text= {"Sign up with Google"}/>
          

          <LinkedInGithub classname ={"signup-btn link"} svgclassname={"signup-link-icons"} width={"16"} height={"16"} viewbox={"0 0 16 16"} fill={"none"} path={"M14.1328 13.633H11.7621V9.92029C11.7621 9.03498 11.7463 7.89529 10.5291 7.89529C9.29431 7.89529 9.10538 8.85991 9.10538 9.85585V13.6327H6.73475V5.99798H9.01056V7.04135H9.04244C9.27019 6.65192 9.59931 6.33155 9.99474 6.11436C10.3902 5.89718 10.8371 5.79131 11.2879 5.80804C13.6908 5.80804 14.1338 7.38854 14.1338 9.44466L14.1328 13.633ZM4.05975 4.95441C3.29994 4.95454 2.68387 4.33866 2.68375 3.57885C2.68362 2.81904 3.29944 2.20298 4.05925 2.20285C4.81906 2.20266 5.43512 2.81854 5.43525 3.57835C5.43532 3.94323 5.29044 4.29319 5.03248 4.55125C4.77453 4.80931 4.42463 4.95433 4.05975 4.95441ZM5.24512 13.633H2.87194V5.99798H5.24506V13.633L5.24512 13.633ZM15.3146 0.00116449H1.68069C1.03631 -0.00608551 0.507875 0.510102 0.5 1.15448V14.8453C0.507625 15.49 1.036 16.0067 1.68062 15.9999H15.3146C15.9606 16.0079 16.4911 15.4912 16.5 14.8453V1.15341C16.4908 0.507789 15.9603 -0.00833551 15.3146 0.000101993"
               } colorFill={"#0A66C2"}
           text={"Sign up with LinkedIn"}/>
          

          <LinkedInGithub classname ={"signup-btn link"} svgclassname={"signup-link-icons"} width={"16"} height={"16"} viewbox={"0 0 16 16"} fill={"none"} path={"M8.5 3.05176e-05C4.08 3.05176e-05 0.5 3.58003 0.5 8.00003C0.5 11.54 2.79 14.53 5.97 15.59C6.37 15.66 6.52 15.42 6.52 15.21C6.52 15.02 6.51 14.39 6.51 13.72C4.5 14.09 3.98 13.23 3.82 12.78C3.73 12.55 3.34 11.84 3 11.65C2.72 11.5 2.32 11.13 2.99 11.12C3.62 11.11 4.07 11.7 4.22 11.94C4.94 13.15 6.09 12.81 6.55 12.6C6.62 12.08 6.83 11.73 7.06 11.53C5.28 11.33 3.42 10.64 3.42 7.58003C3.42 6.71003 3.73 5.99003 4.24 5.43003C4.16 5.23003 3.88 4.41003 4.32 3.31003C4.32 3.31003 4.99 3.10003 6.52 4.13003C7.16 3.95003 7.84 3.86003 8.52 3.86003C9.2 3.86003 9.88 3.95003 10.52 4.13003C12.05 3.09003 12.72 3.31003 12.72 3.31003C13.16 4.41003 12.88 5.23003 12.8 5.43003C13.31 5.99003 13.62 6.70003 13.62 7.58003C13.62 10.65 11.75 11.33 9.97 11.53C10.26 11.78 10.51 12.26 10.51 13.01C10.51 14.08 10.5 14.94 10.5 15.21C10.5 15.42 10.65 15.67 11.05 15.59C12.6382 15.054 14.0183 14.0334 14.996 12.6718C15.9737 11.3102 16.4997 9.67627 16.5 8.00003C16.5 3.58003 12.92 3.05176e-05 8.5 3.05176e-05Z"} colorFill={"#212529"}
           text={"Sign up with Github"}/>


          <div className="signin-wrap">
          <SignUpBrief classname={"signup-brief"} text1={"Already have an Account? "}/>
          
          <Link to = {'/sign-in'}>
          <SignUpBrief classname={"signup-brief"} text2={"LogIn"}/>
        
          </Link>
         
          </div>
        
           <Link to = {'/'}>
           <BackButton className={"back-button"} icon={"←"} text = {"Back"}/>
    
           </Link>
          
      </section>
    )
}

export default Form