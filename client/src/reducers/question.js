const questionsReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "POST_QUESTION":
      return { ...state };
    case "POST_ANSWER":
      return { ...state };
    case "FETCH_ALL_QUESTIONS":
      return { ...state, data: action.payload };
    case "POST_COMMENT":
      return { ...state };
    case "POST_ANSWERCOMMENT":
      return { ...state };
    default:
      return state;
  }
};
export default questionsReducer;
