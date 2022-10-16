import React from 'react';
import './App.css';
import { LandingPage } from './pages/LandingPage/LandingPage';
// import { AboutUs } from './pages/AboutUs/AboutUs';


function App ()
{
  return (
    <React.Fragment>
      <LandingPage />
      {/* <AboutUs /> */}
    </React.Fragment>
  );
}

export default App;
