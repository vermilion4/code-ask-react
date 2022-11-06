
import React, { useState, useMemo }  from "react";
import Pagination from '../../../components/Pagination/Pagination';
import AllQuestion from './AllQuestions';
import { questionsNewest, questionsUnanswered, questionsAnswered } from '../../../Data/questionsData.js';

const filters = [
  { id: 0, filter: "Newest"},
  { id: 1, filter: "Unanswered"},
  { id: 2, filter: "Answered"},
];

let PageSize = 3;

const QuestionBody = () => {

  const [currentPage, setCurrentPage] = useState(1);



                           
                             const [filterData, setFilterData] = useState(questionsNewest);
                             const [isActive, setIsActive] = useState(0);

                             let paginatedData = useMemo(() => {
                              const firstPageIndex = (currentPage - 1) * PageSize;
                              const lastPageIndex = firstPageIndex + PageSize;
                            
                              return filterData.slice(firstPageIndex, lastPageIndex);
                            }, [currentPage, filterData]);  

                           

                             const filterFunction = (id) => {
                               if (id === 0) {
                                
                                 setFilterData(questionsNewest);
                                 
                               } else if (id === 1) {
                               
                                 setFilterData(questionsUnanswered);
                               } else if (id === 2) {
                               
                                  setFilterData(questionsAnswered);
                               }

                               setIsActive(id);
                               setCurrentPage(1);
                               
                             };

                     

                             return (
                              <div>
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
                                
                                 <AllQuestion datas={paginatedData} />
                               </div>

                               <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={filterData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
                               </div>
                             );
                           };

export default QuestionBody;
