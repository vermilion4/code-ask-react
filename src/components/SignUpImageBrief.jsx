import React from "react";
import { Link } from "react-router-dom";
import CyclicDesign1 from "../pages/SignUp/components/CyclicDesign1"
import frame from "../assets/TabandPhoneImage.png"
import Logo2 from "../assets/Frame 33.png"


function SignUpImageBrief(){
    return (
      <React.Fragment>
         <div className="signup-image-brief">
          <CyclicDesign1/>

          <div className="signup-image-wrap">
            <Link to = {'/'}>
            <img
              className="codeask-logo"
              src={Logo2}
            />
            </Link>
            
          

          <h3>A Q&A platform for Software Developers</h3>
          <img
            className="tabletphone-image"
            src={frame}
          
          />
         </div>
        </div>
      </React.Fragment>
       
    )
}

export default SignUpImageBrief