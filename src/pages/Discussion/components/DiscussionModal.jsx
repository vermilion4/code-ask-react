import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DiscussionModal = ({updateModal}) => {
  return (
    <div className="discussion-background">
      <div className="discussion-modal">
        <div>
       
   
        <div className="title">
          <h4>Topic</h4>
          <AiOutlineClose onClick={()=>{
            updateModal(false)
          }}></AiOutlineClose>
        </div>
        <p>Enter a new forum topic</p>

        <input type="text" name="" id="" placeholder="e.g Beginner Questions"/>
        </div>
        <button>POST</button>
      </div>
    </div>
  );
};

export default DiscussionModal;
