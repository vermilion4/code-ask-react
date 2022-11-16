import React, { useState, useMemo } from "react";
import { useEffect } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import AllQuestion from "./AllQuestions";
import {
  questionsNewest,
  questionsUnanswered,
  questionsAnswered,
} from "../../../Data/questionsData.js";
import Spinner from "../../../components/Spinner";
import NoData from "../../../components/NoData";
import baseURL from "../../../components/baseURL.js";
import axios from "axios";

const filters = [
  { id: 0, filter: "Newest" },
  { id: 1, filter: "Unanswered" },
  { id: 2, filter: "Answered" },
];

let PageSize = 3;

const QuestionBody = () => {
  const [isLoading, setLoading] = useState(true);
  const [filterResult, setFilterResult] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      async function fetchQuestions() {
        const res = await baseURL.get(`questions/${filterResult}`);

        setData(res.data);

        setLoading(false);
      }

      fetchQuestions();
    } catch (err) {
      console.log(err);
    }
  }, [filterResult]);

  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState(questionsNewest);
  const [isActive, setIsActive] = useState(0);

  const filterFunction = (id) => {
    if (id === 0) {
      setFilterResult("");
      // setFilterData(data);
    } else if (id === 1) {
      setFilterResult("unanswered");
      // setFilterData(data);
    } else if (id === 2) {
      setFilterResult("answered");
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

        {isLoading ? <Spinner></Spinner> : <AllQuestion datas={data} />}
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
