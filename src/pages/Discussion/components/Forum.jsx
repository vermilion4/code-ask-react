import React, { useState } from "react";
import DiscussionModal from "./DiscussionModal";
import { forumData } from "../../../Data/forumData.js";

const Forum = () => {
  const [showModal, useShowModal] = useState(false);

  return (
    <div className="forum-wrapper">
      <button
        // onClick={() => {
        //   useShowModal(!showModal);
        // }}
      >
        Add Topic
      </button>
      {showModal ? (
        <DiscussionModal updateModal={useShowModal}></DiscussionModal>
      ) : null}

      <div className="forum">
        <h4>Forums</h4>
        {forumData.map(({ id, title, timePosted, user }) => {
          return (
            <div className="each-forum" key={id}>
              <p className="title">{title}</p>
              <div className="info">
                <p className="time">posted {timePosted} ago by</p>
                <p className="user">@{user}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forum;
