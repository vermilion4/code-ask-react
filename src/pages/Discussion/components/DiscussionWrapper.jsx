import React from "react";
import Forum from "./Forum";
import Thread from "./Thread";

const DiscussionWrapper = () => {
  return (
    <main className="discussion_main">
      {/*ANSWER CODE STARTS HERE */}
      
      <Forum />
      <Thread />
    </main>
  );
};

export default DiscussionWrapper;
