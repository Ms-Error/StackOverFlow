import React,{useState}from 'react'
import {useParams,useNavigate,useLocation} from 'react-router-dom'
import './Questions.css'
import { useSelector ,useDispatch} from 'react-redux'
import DisplayAnswer from './DisplayAnswer'
import Avatar from "../../components/Avatar/Avatar"
import DisplayQComment from "./DisplayQComment";
import {postAnswer,postComment} from '../../actions/question'
import { Link } from 'react-router-dom'
import moment from 'moment'
import  copy from 'copy-to-clipboard'
import { deleteQuestion,voteQuestion } from '../../actions/question'

const upVote = (
  <svg
    className="votes-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
  </svg>
);
const downVote = (
  <svg
    className="votes-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
  </svg>
);
const QuestionDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  const [Answer, setAnswer] = useState("");
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };
  const handlePostCom = (e, commentLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to post a comment");
      Navigate("/Auth");
    } else {
      if (Comment === "") {
        alert("Enter a comment before submitting");
      } else {
        dispatch(
          postComment({
            id,
            noOfComments: commentLength + 1,
            commentBody: comment,
            userCommented: User.result.name,
            userId: User.result._id,
          })
        );
        setShow(!show);
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url: " + url + location.pathname);
  };
  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote", User.result._id));
  };
  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };

  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <div style={{ width: "18px" }} onClick={handleUpVote}>
                        {upVote}
                      </div>
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <div style={{ width: "18px" }} onClick={handleDownVote}>
                        {downVote}
                      </div>
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>

                          {User?.result?._id === question?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <section className="comments">
                    <div className="comment">
                      <section>
                        <DisplayQComment
                          key={question._id}
                          question={question}
                          handlePostCom={handlePostCom}
                        />
                      </section>
                    </div>
                    <p onClick={() => setShow(!show)} className="comment-main">
                      Add a comment
                    </p>
                    {show && (
                      <div className="comment-title">
                        <form
                          onSubmit={(e) => {
                            handlePostCom(e);
                          }}
                        >
                          <textarea
                            type="text"
                            placeholder="Add Your Comment"
                            cols="30"
                            rows="10"
                            className="comment-textarea"
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                          <br />
                          <input
                            type="Submit"
                            className="comment-btn"
                            value="Add Comment"
                          />
                        </form>
                      </div>
                    )}
                  </section>
                </section>

                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="Submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
}


export default QuestionDetails