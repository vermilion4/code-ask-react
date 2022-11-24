import { Link } from "react-router-dom";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAuth } from "../../../components/hooks/useAuth";

const AllQuestion = (props) => {
  const { datas, filterType } = props;
  const { searchField } = useAuth();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchData, setSearchData] = useState(datas);
  const itemsPerPage = 5;


  
  useEffect(() => {

  if(searchField !== ""){
    setSearchData(datas.filter(
      data => {
        return (
          data
          .title
          .toLowerCase()
          .includes(searchField.toLowerCase()) 
        );
      }))
    }else{
      setSearchData(datas)
    }
    console.log(searchData)
  }, [datas, searchField]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    
    setCurrentItems(searchData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, datas, filterType, searchField]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchData.length;
    setItemOffset(newOffset);
  };
  
  return (
    <>
    <div className="questions-wrapper">
      {currentItems.map(
        ({
          Comments,
          Tags,
          User,
          body,
          createdAt,
          id,
          title,
        }) => {
          return (
            <Link key={id} to={`/answers/${id}`}>
              {" "}
              <div className="questions">
                <div className="question-box">
                  <img src={User.profile_image} alt="avatar profile" />
                  <div className="question-content">
                    <div className="question-statement">
                      <p>{title}</p>
                    </div>

                    <div className="question-box-tags">
                      {
                        <ul>
                          {Tags.map((tag, index) => {
                            return <li key={index}>{tag.name}</li>;
                          })}
                        </ul>
                      }
                      <p>
                        {`asked ${ moment(createdAt).fromNow()} by `}
                        <span>{`@${User.username}`}</span>
                      </p>
                    </div>
                  </div>
                  <div className="views-answers">
                    <p>
                      <span>0</span> Views
                      {/* <span>{views}</span> Views */}
                    </p>
                    <p>
                      <span>0</span> Answers
                      {/* <span>{answers}</span> Answers */}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
    
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkCLassName="page-num"
        nextClassName="page-num"
        activeLinkClassName="active"
        disabledClassName="disable-pagination"
      />
      </>
  );   
};

export default AllQuestion;
