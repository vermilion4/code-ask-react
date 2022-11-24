import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../stylesheets/shared.css";
import LoggedOutHeaderMobile from "./LoggedOutHeaderMobile";
import { useAuth } from "../../components/hooks/useAuth";

export const LoggedOutHeader = () => {
  const [loaded, setLoaded] = useState(true);
  const { setSearchField } = useAuth();

  const closeNav = {
    marginLeft: "85px",
  };
  const openNav = {
    marginLeft: "250px",
    padding: "0.4rem 2rem",
  };

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function load() {
    // let watch = document.querySelector(".sidebar").classList.contains("openSidebar")
    // setLoaded(!watch);
    setLoaded(true);
  }
  document.addEventListener("mousemove", load);
  return (
    <React.Fragment>
      <header className={"question-header"} style={loaded ? closeNav : openNav}>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="search" placeholder="Search..."  onChange = {handleChange}/>
        </div>
        <div className="header-buttons">
          <button>
            <Link to={"/sign-in"} className="btn login">
              login
            </Link>
          </button>
          <button>
            <Link to={"/sign-up"} className="btn create">
              Create an account
            </Link>
          </button>
        </div>
      </header>
      <LoggedOutHeaderMobile />
    </React.Fragment>
  );
};
