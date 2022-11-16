import React, { useState, useEffect } from "react";
import { LoggedInHeader } from "../../components/QuestionHeader/LoggedInHeader";
import { LoggedInMobile } from "../../components/Sidebar/LoggedInMobile";
import NavIcon from "../../components/QuestionHeader/NavIcon";
import { LoggedInSidebar } from "../../components/Sidebar/LoggedInSidebar";
import DiscussionWrapper from "./components/DiscussionWrapper";
import "../../stylesheets/discussion.css";

export const Discussion = ({
  hover,
  setHover,
  hoverState,
  setHoverState,
  handleHoverClose,
  handleHoverOpen,
  windowSize,
  getWindowSize,
  setWindowSize,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      setHover(false);
      setHoverState(false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let closeContent = {};
  let openContent = {};

  if (windowSize.innerWidth > 900) {
    closeContent = {
      marginLeft: "155px",
      width: "87%",
    };
    openContent = {
      marginLeft: "0px",
    };
  } else {
    closeContent = {
      marginLeft: "0px",
    };
    openContent = {
      marginLeft: "0px",
    };
  }

  function mobileNav() {
    setShow(!show);
  }

  if (show === false) {
    return (
      <>
        <div className="desktopbackground"></div>
        <div className="question-main">
          <LoggedInSidebar
            hover={hover}
            handleHoverClose={handleHoverClose}
            handleHoverOpen={handleHoverOpen}
          />
          <LoggedInHeader />
          <main id="main" style={hoverState ? closeContent : openContent}>
            {/* CONTENT GOES IN HERE */}
            <DiscussionWrapper />

            {/* CONTENT ENDS HERE */}
          </main>
          <NavIcon onclick={mobileNav} />
        </div>
      </>
    );
  } else {
    return <LoggedInMobile onclick={mobileNav} />;
  }
};
