const postsReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return { ...state };
    case "UPLOAD_VIDEO":
      return { ...state };
    case "GET_ALL_POSTS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default postsReducer;
