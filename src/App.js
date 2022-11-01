import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import SignUp from './pages/SignUp/SignUp';
import { SignIn } from './pages/SignIn/SignIn';
import { Questions } from './pages/Questions/Questions';
import { AskQuestions } from './pages/AskQuestions/AskQuestions';
import FAQ from './pages/FAQ/FAQ';
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";
import { useState } from 'react';



function App ()
{
  const [hoverState, setHoverState] = useState(false);
  const [hover, setHover] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize ()
  {
    const { innerWidth } = window;
    return { innerWidth };
  }
  function handleHover ()
  {
    setHover(!hover);
    hover ? setHoverState(false) : setHoverState(true);
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <LandingPage /> }></Route>
        <Route path='/about-us' element={ <AboutUs /> }></Route>
        <Route path='/sign-up' element={ <SignUp /> }></Route>
        <Route path='/sign-in' element={ <SignIn /> }></Route>
        <Route path='/questions' element={ <Questions hover={ hover } setHover={ setHover } handleHover={ handleHover } hoverState={ hoverState } setHoverState={ setHoverState } windowSize={ windowSize } setWindowSize={ setWindowSize } getWindowSize={ getWindowSize } /> }></Route>
        <Route path='/ask-question' element={ <AskQuestions hover={ hover } setHover={ setHover } handleHover={ handleHover } hoverState={ hoverState } setHoverState={ setHoverState } windowSize={ windowSize } setWindowSize={ setWindowSize } getWindowSize={ getWindowSize } /> }></Route>
        <Route path='/faq' element={ <FAQ /> }></Route>
        <Route path='/reset-password' element={ <ResetPassword /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
