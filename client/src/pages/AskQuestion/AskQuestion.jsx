import React,{useState} from 'react'
import './AskQuestion.css'
import {useDispatch ,useSelector}from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { askquestion } from '../../actions/question'
const AskQuestion = () => {
  const [questionTitle,setQuestionTitle]=useState('')
  const [questionBody,setQuestionBody]=useState('')
  const [questionTags,setQuestionTags]=useState('')
  
  const dispatch = useDispatch()
  const user = useSelector((state)=>(state.currentUserReducer)) 
   const navigate = useNavigate()

  const handleSubmit=(e)=>{
   e.preventDefault()
   //console.log({questionTitle,questionBody,questionTags})
   dispatch(
     askquestion(
       {
         questionTitle,
         questionBody,
         questionTags,
         userPosted: user.result.name,
         userId: user?.result?._id,
       },
       navigate
     )
   );
  }

  const handleEnter=(e)=>{
    if(e.key==='Enter'){
      setQuestionBody(questionBody+"\n")
    }
  }

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                placeholder="Title of your question"
               onChange={(e)=>{setQuestionTitle(e.target.value)}}
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                id="ask-ques-body" cols="30" rows="10"
                onChange={(e)=>{setQuestionBody(e.target.value)}}
                onKeyPress={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                placeholder="e.g. (xml typescript wordpress)"
                onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}}
              />
            </label>
          </div>
          <input
            type="Submit"
            value="Reivew your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
}

export default AskQuestion