import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext();

const gooogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create email and password
  const createUserFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in email password
  const signInUserFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in gooogle
  const signInGooleUserFunc = () => {
    return signInWithPopup(auth, gooogleProvider);
  };

  const fontgetPasswordUser = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // sign out user
  const signOutUserFunc = () => {
    return signOut(auth);
  };

  //onAuthStateChanged
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const authInfo = {
    createUserFunc,
    signInUserFunc,
    signInGooleUserFunc,
    fontgetPasswordUser,
    signOutUserFunc,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
