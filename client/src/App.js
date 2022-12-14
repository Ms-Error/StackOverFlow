import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from "./actions/users";
import Chatbot from "./components/chatbot/chatbot"


function App() {
  const dispatch= useDispatch()
  useEffect(() => {
  dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers());
  }, [dispatch])
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
       <Chatbot/>
      </Router>
    </div>
  );
}

export default App;
