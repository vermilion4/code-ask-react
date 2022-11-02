import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import SignUp from './pages/SignUp/SignUp';
import { SignIn } from './pages/SignIn/SignIn';
import { Questions } from './pages/Questions/Questions';
import { AskQuestions } from './pages/AskQuestions/AskQuestions';
import FAQ from './pages/FAQ/FAQ';
import {ResetPassword} from "./pages/ResetPassword/ResetPassword";
// import { Answers } from './pages/Answers/Answers';



function App ()
{
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <LandingPage /> }></Route>
        <Route path='/about-us' element={ <AboutUs /> }></Route>
        <Route path='/sign-up' element={ <SignUp /> }></Route>
        <Route path='/sign-in' element= {<SignIn/> }></Route>
        <Route path='/questions' element={ <Questions /> }></Route>
        <Route path='/ask-question' element={ <AskQuestions /> }></Route>
        <Route path='/faq' element={ <FAQ /> }></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        {/* <Route path= '/answers' element = {<Answers/>}></Route>  */}
      </Routes>
    </Router>
  );
}

export default App;
