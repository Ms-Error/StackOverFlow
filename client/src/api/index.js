import axios from "axios";


const API = axios.create({
  baseURL: "https://stack-over-flow-fcwk-f5cfjcyj3-ms-error.vercel.app",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
})

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);
export const fetchAllUsers = () => API.get("/user/getAllUsers");

export const postQuestion = (questionData) => API.post("/questions/Ask",questionData)
export const getAllquestions = ()=> API.get("questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`); 

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered,userId) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered ,userId});
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

/*------------------------------------------------------------------------------*/
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

  export const postComment = (id, noOfComments, commentBody, userCommented,userId) =>
    API.patch(`/comments/post/${id}`, {
      noOfComments,
      commentBody,
      userCommented,
      userId
    });
  export const deleteComment = (id, commentId, noOfComments) =>
    API.patch(`/comments/delete/${id}`, { commentId, noOfComments });
  //export const updateComment = (id, commentId, updateData1) => API.patch(`/comments/update/${id}`, {commentId, updateData1})

  export const postAnswerComment = (
    id,
    ansId,
    anscommentBody,
    ansuserCommented,
    userId
  ) =>
    API.patch(`/comments/postAnswerComment/${id}`, {
      ansId,
      anscommentBody,
      ansuserCommented,
      userId,
    });
  export const deleteAnswerComment = (id, anscommentId, noOfAnswerComments) =>
    API.patch(`/comments/deleteAnswerComment/${id}`, {
      anscommentId,
      noOfAnswerComments,
    });
