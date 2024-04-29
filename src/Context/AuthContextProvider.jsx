import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase";
import toast from "react-hot-toast";

// create a context
export const AuthContext = createContext(null);

// fireBase provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContextProvider = ({ children }) => {
  
  
  // userState
  const [user, setUser] = useState(null);







  



  // loadingState
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    }).then(() => {
      setUser({ ...user, displayName: name, photoURL: image });
    });
  };

  // loginUser
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GoogleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   github sign in
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logout Success");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
        toast.error("Logout failed");
      });
  };

  // observer
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     //  console.log('user spi is active', currentUser);
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => {
  //     return unSubscribe();
  //   };
  // }, []);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])





  // context data
  const authInfo = {
    createUser,
    googleLogin,
    githubSignIn,
    updateUserProfile,
    setLoading,
    loading,
    user,
    setUser,
    logout,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContextProvider;
