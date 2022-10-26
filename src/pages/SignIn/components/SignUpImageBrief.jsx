import React from "react"
import CyclicDesign1 from "../../SignUp/components/CyclicDesign1"
import frame from "../assets/TabandPhoneImage.png"
import Logo2 from "../assets/Frame 33.png"

function SignUpImageBrief(){
    return (
        <div className="signup-image-brief">
          <CyclicDesign1/>

         <div className="signup-image-wrap">
           <a href="./index.html">
            <img
              className="codeask-logo"
              src={Logo2}
            />
          </a>

          <h3>A Q&A platform for Software Developers</h3>
          <img
            className="tabletphone-image"
            src={frame}
          
          />
         </div>
        </div>
    )
}

export default SignUpImageBrief