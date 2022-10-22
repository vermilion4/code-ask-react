import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import SignUp from './pages/SignUp/SignUp';
import { AskQuestions } from './pages/AskQuestions/AskQuestions';
import FAQ from './pages/FAQ/FAQ';



function App ()
{
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <LandingPage /> }></Route>
        <Route path='/about-us' element={ <AboutUs /> }></Route>
        <Route path='/sign-up' element={ <SignUp /> }></Route>
        <Route path='/ask-question' element={ <AskQuestions /> }></Route>
        <Route path='/faq' element={ <FAQ /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
