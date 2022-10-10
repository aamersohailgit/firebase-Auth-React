import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../config/firebase-config';
import SignOut from './sign-out';

const LoginWithGooglePopup = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    false || window.localStorage.getItem('authorization') === 'true'
  );
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((userCredentials) => {
        if (userCredentials) {
          setIsUserAuthenticated(true);
          window.localStorage.setItem('authorization', true);
        }
        console.log(userCredentials);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="App">
      {isUserAuthenticated ? (
        <div>
          <h1>HOME</h1>
          <SignOut setIsUserAuthenticated={setIsUserAuthenticated} />
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Google Login</button>
      )}
    </div>
  );
};

export default LoginWithGooglePopup;
