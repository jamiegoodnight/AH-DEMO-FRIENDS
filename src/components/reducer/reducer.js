import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_FAILURE
} from "../actions/actions";

const initialState = {
  friends: [],
  loggingIn: false,
  error: null,
  loading: true,
  token: localStorage.getItem("token")
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Our reducer needs some code!
    default:
      return state;
  }
};

export default reducer;
