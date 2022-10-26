import React from "react"
function SignUpIntro(props){
const { classname, text, paragraph}= props

    return (

        <section className={classname}>
            <h3>{text}</h3>
            <p>{paragraph}</p>
          </section>
    )
}
export default SignUpIntro