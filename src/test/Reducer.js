import { GET_USERS,GET_POSTS,GET_DESCRIPTION, LOADING, } from "./types";

const initialState = {
  users: [],
  posts:[],
  desc:[],
  isLoading: false
};
const listReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return { users: payload, isLoading: false };
    case GET_POSTS:
      return { posts: payload, isLoading: false };
    case GET_DESCRIPTION:
      return { desc: payload, isLoading: false };
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
export default listReducer;
