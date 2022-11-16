import React, { useState, useEffect } from "react";
import { LoggedInHeader } from "../../components/QuestionHeader/LoggedInHeader";
import { LoggedInMobile } from "../../components/Sidebar/LoggedInMobile";
import NavIcon from "../../components/QuestionHeader/NavIcon";
import { LoggedInSidebar } from "../../components/Sidebar/LoggedInSidebar";
import QuestionsWrapper from "./components/QuestionsWrapper";
import "../../stylesheets/questions.css";
import QuestionModal from "./components/QuestionModal";
import { useAuth } from "../../components/hooks/useAuth.js";

export const Questions = ({
  hover,
  setHover,
  hoverState,
  setHoverState,
  handleHoverClose,
  handleHoverOpen,
  windowSize,
  getWindowSize,
  setWindowSize,
  // isModalActive,
  // setIsModalActive,
}) => {
  const [show, setShow] = useState(false);
  const { auth } = useAuth();

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
      marginLeft: "150px",
      width: "85%",
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
          <main
            id="main"
            className="question-main "
            style={hoverState ? closeContent : openContent}
          >
            {/* CONTENT GOES IN HERE */}
            <QuestionsWrapper />

            {/* Modal only shows for unregistered users */}
            {auth.AccessToken ? null : <QuestionModal />}

            {/* <QuestionModal /> */}
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
