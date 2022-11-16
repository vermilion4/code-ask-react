import React, { useState, useEffect } from "react";
import DiscussionModal from "./DiscussionModal";
import useAxiosPrivate from "../../../components/hooks/useAxiosPrivate";
import Spinner from "../../../components/Spinner";

const Forum = ({ setTopicId }) => {
  const [isLoading, setLoading] = useState(true);

  const [showModal, useShowModal] = useState(false);
  const [topics, setTopics] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    async function fetchDiscussions() {
      const res = await axiosPrivate.get(`discussions`);
      setTopics(res.data);
    }

    fetchDiscussions();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <>
            {topics.map(({ id, topic, createdAt, User: { username } }) => {
              return (
                <div
                  onClick={() => setTopicId(id)}
                  className="each-forum"
                  key={id}
                >
                  <p className="title">{topic}</p>
                  <div className="info">
                    <p className="time">posted {createdAt} ago by</p>
                    <p className="user">@{username}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Forum;
