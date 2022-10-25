import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import SignUp from './pages/SignUp/SignUp';
<<<<<<< HEAD
import { SignIn } from './pages/SignIn/SignIn';
import { Sidebar } from './components/Sidebar/Sidebar';
// import { Test } from './components/Sidebar/Test';
=======
import { Questions } from './pages/Questions/Questions';
>>>>>>> eb36ee7155e4652bb07cfec155c072a57f8e2db7
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
<<<<<<< HEAD
        <Route path='/sign-in' element={ <SignIn/> }></Route>
=======
        <Route path='/questions' element={ <Questions /> }></Route>
>>>>>>> eb36ee7155e4652bb07cfec155c072a57f8e2db7
        <Route path='/ask-question' element={ <AskQuestions /> }></Route>
        <Route path='/faq' element={ <FAQ /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
