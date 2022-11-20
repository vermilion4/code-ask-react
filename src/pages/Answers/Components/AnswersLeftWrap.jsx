import React from "react";
import { AnswersBody } from "./AnswersBody";
import { AnswersHeader } from "./AnswersHeader";


export function AnswersLeftWrap (){
    return(
<>
        <AnswersHeader/>
                   
            <br />
            <br />


         <div className="left-side">
            <AnswersBody/>
        </div>

    </>         

    )
}
