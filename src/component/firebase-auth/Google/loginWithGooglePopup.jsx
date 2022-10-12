import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../config/firebase-config';
import Services from '../../services/services.component';
import SignOut from './sign-out';

const LoginWithGooglePopup = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    false || window.localStorage.getItem('authorization') === 'true'
  );
  const [token, setToken] = useState('');
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((userCredentials) => {
        if (userCredentials) {
          setIsUserAuthenticated(true);
          window.localStorage.setItem('authorization', true);
          userCredentials.user.getIdToken().then((token) => {
            setToken(token);
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="App">
      {isUserAuthenticated ? (
        <div>
          <Services token={token} />
          <SignOut setIsUserAuthenticated={setIsUserAuthenticated} />
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Google Login</button>
      )}
    </div>
  );
};

export default LoginWithGooglePopup;
