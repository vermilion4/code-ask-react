import React from "react";
import { AnswersBody } from "./AnswersBody";
import { AnswersHeader } from "./AnswersHeader";


export function AnswersLeftWrap (){
    return(
<>
        <AnswersHeader/>
                   
         <div className="left-side">
            <AnswersBody/>
        </div>

    </>         

    )
}
