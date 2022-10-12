import React, { useEffect } from 'react';
import axios from 'axios';
import LoginWithGooglePopup from '../firebase-auth/Google/loginWithGooglePopup';
const Home = () => {
  const getData = async () => {
    axios.get('http://localhost:8000/home/');
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <LoginWithGooglePopup />
    </div>
  );
};

export default Home;
