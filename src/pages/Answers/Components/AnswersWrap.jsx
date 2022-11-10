
import TopWeekly from "../../Questions/components/TopWeekly";
import TrendingTags from "../../Questions/components/TrendingTags";
import React from "react";
import { AnswersBody } from "./AnswersBody";


export function AnswersWrap (){
    return(
    <div className="flex-question">
         <div className= "left-side">
       <AnswersBody/>
    
        </div>

        <div class="right-side">
        <a href="./question.html" class="btn">Ask Questions</a>
        <br />
        <br />
        <TopWeekly/>
       
        <TrendingTags/>
      </div>
  </div>
    )
}
