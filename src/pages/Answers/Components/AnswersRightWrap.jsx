
import TopWeekly from "../../Questions/components/TopWeekly";
import TrendingTags from "../../Questions/components/TrendingTags";
import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";


export function AnswersRightWrap (){
    return(
        <div className="right-side">
          <Link to={'/ask-question'} className="button">
          Ask Questions
          </Link>
        <br />
        <br />
                <TopWeekly />
               <TrendingTags />
              
      </div>
    )
}
