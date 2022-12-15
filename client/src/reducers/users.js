const usersReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case "UPDATE_CURRENT_USER":
      return states.map((state) =>
        state._id === action.payload._id ? action.payload : state
      );
    case "follow":
      return {
        ...states,
        user: {
          ...states.user,
          followings: [...states.user.followings, action.payload],
        },
      };
    case "unfollow":

      return {
        ...states,
        user: {
          ...states.user,
          followings: states.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return states;
  }
};

export default usersReducer;
