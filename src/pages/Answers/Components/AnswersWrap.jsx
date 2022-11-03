// import { AnswersBody } from "./AnswersBody";
import TopWeekly from "../../Questions/components/TopWeekly";
import TrendingTags from "../../Questions/components/TrendingTags";


export function AnswersWrap (){
    <div className="flex-question">
         <div className= "left-side">
      {/* <AnswersBody /> */}
        </div>

    <div className="right-side">
      <TopWeekly />
      <TrendingTags />
    </div>
  </div>

}