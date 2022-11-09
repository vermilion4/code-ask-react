import { LoggedInSidebar } from "../../components/Sidebar/LoggedInSidebar";
import { LoggedInHeader } from "../../components/QuestionHeader/LoggedInHeader";
import React, { useState, useEffect} from "react";
import NavIcon from "../../components/QuestionHeader/NavIcon";
import '../../stylesheets/answers.css';
import { LoggedInMobile } from "../../components/Sidebar/LoggedInMobile";
// import { AnswersBody } from "./Components/AnswersBody";
import { AnswersWrap } from "./Components/AnswersWrap";
export const Answers= ({
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
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
        setHover(false);
        setHoverState(false);
      };
    }, []);
  
    let closeContent = {};
    let openContent = {};
  
    if (windowSize.innerWidth > 900) {
      closeContent = {
        marginLeft: '250px',
      };
      openContent = {
        marginLeft: '85px',
      };
    } else {
      closeContent = {
        marginLeft: '0px',
      };
      openContent = {
        marginLeft: '0px',
      };
    }
  
    function mobileNav() {
      setShow(!show);
    }
  
    if (show === false) {
      return (
        <React.Fragment>
          <LoggedInSidebar
            hover={hover}
            handleHoverClose={handleHoverClose}
            handleHoverOpen={handleHoverOpen}
          />
          <LoggedInHeader />
          <div
            id='main'
            className="answersWrap"
            style={hoverState ? closeContent : openContent}
          >
           <AnswersWrap/>
          </div>
          
          <NavIcon onclick={mobileNav} />
        </React.Fragment>
      );
    } else {
      return <LoggedInMobile onclick={mobileNav} />;
    }
  };
  