import { Link } from "react-router-dom";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const AllQuestion = (props) => {
  const { datas, filterType } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    
    setCurrentItems(datas.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(datas.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, datas, filterType]);

  const handlePageClick = (event) => {
    alert(event.selected)
    const newOffset = (event.selected * itemsPerPage) % datas.length;
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
