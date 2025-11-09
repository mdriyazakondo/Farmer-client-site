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
  const [loading, setLoading] = useState(true);

  // create email and password
  const createUserFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in email password
  const signInUserFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in gooogle
  const signInGooleUserFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, gooogleProvider);
  };

  const fontgetPasswordUser = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // sign out user
  const signOutUserFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  //onAuthStateChanged
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
