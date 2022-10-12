import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../config/firebase-config';

const SignOut = ({ setIsUserAuthenticated }) => {
  const signOutHandler = async () => {
    signOut(auth)
      .then((res) => {
        setIsUserAuthenticated(false);
        window.localStorage.setItem('authorization', false);
        console.log('signOut successfully!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button onClick={signOutHandler}>logout</button>
    </div>
  );
};

export default SignOut;
