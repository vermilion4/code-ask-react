import React, { useState, useEffect } from "react";
import { Editor } from "./Editor";
import useAxiosPrivate from "../../../components/hooks/useAxiosPrivate";
import Spinner from "../../../components/Spinner";
import ThreadContent from "./ThreadContent";

const Thread = ({ topicId }) => {
  const [topic, setTopic] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    async function fetchDiscussions() {
      const res = await axiosPrivate.get(`discussions/${topicId}`);

      setTopic(() => res.data);
      setLoading(false)
    }

    fetchDiscussions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  return <>{isLoading ? <Spinner></Spinner> : <ThreadContent topic={topic} />}</>;
};

export default Thread;
