import * as api from "../api";

export const postImage = (postData) => async (dispatch) => {
  try {
    const { data } = await api.postimage(postData);
    dispatch({ type: "UPLOAD_IMAGE", payload: data });
    dispatch(getAllPosts());
  } catch (error) {
    console.log(error);
  }
};

export const postVideo = (postData) => async (dispatch) => {
  try {
    const { data } = await api.postimage(postData);
    dispatch({ type: "UPLOAD_VIDEO", payload: data });
    dispatch(getAllPosts());
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getallposts();
    dispatch({ type: "GET_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (postId, userId) => async (dispatch) => {
  try {
    await api.likepost(postId, userId);
    dispatch(getAllPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletepost(id);
    dispatch(getAllPosts());
  } catch (error) {
    console.log(error);
  }
};
