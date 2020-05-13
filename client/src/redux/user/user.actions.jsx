import userActionTypes from "./user.types";

export const setCurrentUser = (currentUser) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: currentUser,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (currentUser) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: currentUser,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGNOUT_FAILURE,
  payload: error,
});

export const signUPStart = (userCredntial) => ({
  type: userActionTypes.SIGNUP_START,
  payload: userCredntial,
});

export const signUpSuccess = ({ currentUser, additionalData }) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: { currentUser, additionalData },
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error,
});
