import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./init";

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const sendVerification = (user) => {
  sendEmailVerification(user)
    .then(() => {
      return {
        type: "SUCCESS",
        message: "Verification email sent to " + user.email,
      };
    })
    .catch((error) => {
      return {
        type: "ERROR",
        error: error,
        message: "Error sending verification email: " + error.message,
      };
    });
};

/**
 * Function serving as an interface to register the user with email and password
 * @param {string} email
 * @param {string} password
 */
const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    const verificationResult = await sendVerification(user);
    return {
      type: "SUCCESS",
      message: "Registration successful",
      ...verificationResult,
    };
  } catch (error) {
    return {
      type: "ERROR",
      error: error,
      message: "Registration error: " + error.message,
      code: error.code,
    };
  }
};

/**
 * Function serving as an interface to register the user with google authentication.
 * Uses a popup window for the authentication.
 */
const registerWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return {
      type: "SUCCESS",
      message: "Google sign-in successful",
      user,
    };
  } catch (error) {
    return {
      type: "ERROR",
      error: error,
      message: "Google sign-in error: " + error.message,
      code: error.code,
      email: error.customData.email,
    };
  }
};

/**
 * FUnction to authenticate the user with email and password
 * @param {string} email
 * @param {string} password
 */
const loginUser = async (email, password) => {
  try {
    let user;
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        user = userCredential.user;
      }
    );
    return {
      type: "SUCCESS",
      message: "Login successful",
      user: user,
    };
  } catch (error) {
    return {
      type: "ERROR",
      message: "Login error: " + error.message,
      code: error.code,
    };
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    return {
      type: "SUCCESS",
      message: "Sign-out successful",
    };
  } catch (error) {
    return {
      type: "ERROR",
      message: "Sign-out error: " + error.message,
    };
  }
};

export { registerUser, registerWithGoogle, loginUser, signOutUser };
