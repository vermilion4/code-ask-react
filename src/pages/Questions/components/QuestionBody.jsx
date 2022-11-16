import React, { useState, useMemo }  from "react";
import { useEffect }  from "react";
import Pagination from '../../../components/Pagination/Pagination';
import AllQuestion from './AllQuestions';
import { questionsNewest, questionsUnanswered, questionsAnswered } from '../../../Data/questionsData.js';
import Spinner from '../../../components/Spinner';
import NoData from '../../../components/NoData';
import baseURL from '../../../components/baseURL.js';
import axios from "axios";

const filters = [
  { id: 0, filter: "Newest"},
  { id: 1, filter: "Unanswered"},
  { id: 2, filter: "Answered"},
];

let PageSize = 3;


const QuestionBody = () => {
  
  const [isLoading, setLoading] = useState(true);
  const [filterResult, setFilterResult] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {

    try{
    async function fetchQuestions() {
      const res = await baseURL.get(`questions/${filterResult}`);

      console.log(res.data);
     setData(res.data) 
     
      setLoading(false);
    }
    
    fetchQuestions();
    
    
  }catch(err){
    console.log(err);
  }

  }, [filterResult]);



  const [currentPage, setCurrentPage] = useState(1);
  const [isEmpty, setEmpty] = useState(false);

  const [filterData, setFilterData] = useState(questionsNewest);
  const [isActive, setIsActive] = useState(0);

  let paginatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return filterData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterData]);

  const filterFunction = (id) => {


    if (id === 0) {
      setFilterResult("")
      // setFilterData(data);
      
    } else if (id === 1) {
      setFilterResult("unanswered")
      // setFilterData(data);
     
    } else if (id === 2) {
      setFilterResult("answered")
      setFilterData(data);
     
    }
    setFilterData(data);
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
                    className={isActive === id ? "active" : ""}
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

        {/* Will add loader and no data her now */}

        {isLoading ? <Spinner></Spinner> : <AllQuestion datas={paginatedData} />}




                                 {/* {isEmpty ? <NoData></NoData> : null}
                                 {!isEmpty ? <AllQuestion datas={paginatedData} /> : null}  */}
        {/* <AllQuestion datas={paginatedData} /> */}
      </div>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={filterData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default QuestionBody;


// baseURL
    //   .get("questions")
    //   .then((response) => {
    //     alert(response.data);
    //     setLoading(false) //stop loading when data is fetched

    //     if(response.data.length === 0){
    //       setEmpty(true);
    //     }

    //   })
    //   .catch((error) => {
    //     alert(error);
    //   })
    //   .then(() => {
    //     // Always execute
    //   });