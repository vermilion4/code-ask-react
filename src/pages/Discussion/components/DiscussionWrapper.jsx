import React, { useState } from "react";
import Forum from "./Forum";
import Thread from "./Thread";

const DiscussionWrapper = () => {
  const [topicId, setTopicId] = useState(1);

  return (
    <main className="discussion_main">
      {/*ANSWER CODE STARTS HERE */}

      <Forum setTopicId={setTopicId} />
      <Thread topicId={topicId} />
    </main>
  );
};

export default DiscussionWrapper;
