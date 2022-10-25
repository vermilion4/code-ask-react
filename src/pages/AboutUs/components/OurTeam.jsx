import React from 'react';
import TeamCard from './TeamCard';

import {teamData} from '../../../Data/teamData';


const OurTeam = () => {
    return (
      <div className="container">
        <div className="heading">
          <h1>Meet our Team</h1>
          <p>
            Collectively, we desire to provide the best platform for developers
          </p>
        </div>

        <div className="grid">
        {teamData.map(({id,  imagePath, name, role, hobbies, linkedIn, twitter, portfolioWebsite, github }) => {
            return (
                <TeamCard
                key = {id}
                imagePath = {imagePath}
                name = {name}
                role = {role}
                hobbies = {hobbies}
                linkedIn = {linkedIn}
                twitter = {twitter}
                portfolioWebsite = {portfolioWebsite}
                github = {twitter}
                />
            );
        })}
        </div>
      </div>
    );
}
 
export default OurTeam;