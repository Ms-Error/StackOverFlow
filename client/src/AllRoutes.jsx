import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Question'
import DisplayQuestion from './pages/Questions/DisplayQuesiton'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Auth" element={<Auth />} />
      <Route exact path="/Questions" element={<Questions />} />
      <Route exact path="/AskQuestion" element={<AskQuestion />} />
      <Route exact path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags></Tags>}></Route>
      <Route path="/User" element={<Users></Users>}></Route>
      <Route path="/User/:id" element={<UserProfile></UserProfile>}></Route>
    </Routes>
  );
}

export default AllRoutes