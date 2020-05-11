import { all, call, takeLatest, put } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
  getCurrentUser,
  firestore,
} from "../../firebase/firebase.utils";

export function* getUserSnapshot(user, additionalData) {
  console.log("additinalData &&&&&&&&", additionalData);
  console.log("user &&&&&&&&", user);
  const userRef = yield call(createUserProfileDocument, user, additionalData);
  const userSnapshot = yield userRef.get();
  console.log("userSnapshot.id &&&&&&&&", userSnapshot.id);
  console.log("userSnapshot.id &&&&&&&&", userSnapshot.data());
  yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
}

export function* googleSignInStartAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* checkUserSessionAsync() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getUserSnapshot(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* emailSignInStartAsync({ payload: { email, password } }) {
  try {
    const currentUser = auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(currentUser);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const currentUser = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    yield put(signUpSuccess({ currentUser, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* signInAfterSignUP({
  payload: { currentUser, additionalData },
}) {
  console.log("user $$$$$$$$$$$$$$$$$", additionalData);
  console.log("user $$$$$$$$$$$$", additionalData);
  yield getUserSnapshot({ currentUser, additionalData });
}

export function* googleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInStartAsync);
}

export function* emailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignInStartAsync);
}

export function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserSessionAsync);
}

export function* signOutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signOut);
}

export function* signUpStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUP);
}

export default function* userSaga() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutStart),
    call(signUpStart),
    call(onSignUpSuccess),
  ]);
}
