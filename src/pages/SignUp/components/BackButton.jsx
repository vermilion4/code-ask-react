function BackButton (props ){
    const {classname,text, icon}= props
   return  <p className={classname}> {icon} <a href="./index.html">{text}</a></p>

}
export default BackButton