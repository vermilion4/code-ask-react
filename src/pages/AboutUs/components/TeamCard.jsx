import React from "react";

const TeamCard = ({imagePath, name, role, hobbies, linkedIn, twitter, portfolioWebsite, github}) => {

    return (
      <div className="team-card">
        <div className="image">
          <img src={imagePath} alt = {`${name} snapshot`}/>
        </div>
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="overlay">
          <div className="overlay-content">
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <p className="hobbies">
            {hobbies}
            </p>
            <div className="socials">
              <a href={linkedIn}>
                <i className="icons fab fa-linkedin" />
              </a>
              <a href={twitter}>
                <i className="icons fab fa-twitter" />
              </a>
              <a href={portfolioWebsite}>
                <i className="icons fas fa-globe" />
              </a>
              <a href={github}>
                <i className="icons fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default TeamCard;