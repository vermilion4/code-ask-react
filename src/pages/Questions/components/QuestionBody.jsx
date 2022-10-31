
import React, { useState}  from "react";
import AllQuestion from './AllQuestions';
import { questionsNewest, questionsUnanswered, questionsAnswered } from '../../../Data/questionsData.js';

const filters = [
  { id: 0, filter: "Newest"},
  { id: 1, filter: "Unanswered"},
  { id: 2, filter: "Answered"},
];



const QuestionBody = () => {
                           
                             const [filterData, setFilterData] = useState(questionsNewest);
                             const [isActive, setIsActive] = useState(0);

                             const filterFunction = (id) => {
                               if (id === 0) {
                                
                                 setFilterData(questionsNewest);
                               } else if (id === 1) {
                               
                                 setFilterData(questionsUnanswered);
                               } else if (id === 2) {
                               
                                  setFilterData(questionsAnswered);
                               }

                               setIsActive(id);
                             };

                             return (
                               <div className="question-page" id="questionPage">
                                 <div className="question-top-navbar">
                                   <ul>
                                     {filters.map(({ id, filter }) => {
                                       return (
                                         <li key={id}>
                                           <button
                                             className={
                                               isActive === id ? "active" : ""
                                             }
                                             onClick={() => filterFunction(id)}
                                           >
                                             {filter}
                                           </button>
                                         </li>
                                       );
                                     })}

                                   </ul>
                                 </div>
                                 {/* Rendering will occur based on filter which will call different APIs using axios therefore different data will be rendered */}
                                 <AllQuestion datas={filterData} />
                               </div>
                             );
                           };

export default QuestionBody;
