import React from "react"
function LinkedInGithub(props){
    const {classname,svgclassname, width, height, viewbox, fill, path, colorFill, text}= props
return(
    <button class= {classname}>
            <svg
              class={svgclassname}
              width={width}
              height={height}
              viewBox={viewbox}
              fill={fill}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={path}
                fill={colorFill}
              /></svg
            >{text}
          </button>
)

}

export default LinkedInGithub