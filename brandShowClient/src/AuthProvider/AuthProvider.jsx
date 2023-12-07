import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import { auth } from "../firebase.config/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
function AuthProver({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const [duser, setDuser] = useState(null);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (cuser) => {
      setUser(cuser);
      setLoading(false);
      fetch(`https://brand-show-server.vercel.app/user/${cuser.email}`)
        .then((e) => e.json())
        .then((e) => {
          setDuser(e);
        })
        .catch((e) => console.log(e));
    });
    return () => {
      unSub();
    };
  }, []);

  const datas = {
    user,
    duser,
    loading,
    createUserWithEmail,
    signInWithPass,
    signInWithGoogle,
    logOut,
  };
  return <AuthContext.Provider value={datas}>{children}</AuthContext.Provider>;
}

AuthProver.propTypes = {
  children: PropTypes.node,
};
export default AuthProver;
