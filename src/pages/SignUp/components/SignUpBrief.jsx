function SignUpBrief(props){
    const {classname, text1, text2 } = props
    return (
        <p className={classname}>

       {text1} <span><a href="./signin.html">{text2}</a> </span>
        </p>
)}

export default SignUpBrief