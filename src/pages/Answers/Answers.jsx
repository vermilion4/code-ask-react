import { LoggedInSidebar } from "../../components/Sidebar/LoggedInSidebar";
import { LoggedInHeader } from "../../components/QuestionHeader/LoggedInHeader";
import React, { useState, useEffect} from "react";
import NavIcon from "../../components/QuestionHeader/NavIcon";
import '../../stylesheets/answers.css';
import { LoggedInMobile } from "../../components/Sidebar/LoggedInMobile";
import TrendingTags from "../Questions/components/TrendingTags";
import TopWeekly from "../Questions/components/TopWeekly";
import { AnswersHeader } from "./Components/AnswersHeader";

export const Answers = ({
    hover,
    setHover,
    setHoverState,
    hoverState,
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
        width: '80%',
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
        <>
          <LoggedInSidebar
            hover={hover}
            handleHoverClose={handleHoverClose}
            handleHoverOpen={handleHoverOpen}
          />
          <LoggedInHeader />
            <main >
              <div className="answer-page" id="mainPage" style={ hoverState? closeContent: openContent}>
                   <AnswersHeader/>
                   <div className="left-side">

                    </div>

              </div>
                <div className="right-side">
                <TopWeekly />
               <TrendingTags />
                </div>
            </main>
          
          <NavIcon onclick={mobileNav} />
        </>
      );
    } else {
      return <LoggedInMobile onclick={mobileNav} />;
    }
  }