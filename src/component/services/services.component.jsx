import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const Services = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const api_data = window.localStorage.getItem('api_data');
    if (api_data) {
      setPosts(JSON.parse(api_data));
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetch('http://localhost:8000/api/services/', {
        headers: { Authorization: 'Bearer ' + token },
      })
        .then((response) => response.json())
        .then((data) => {
          window.localStorage.setItem('api_data', JSON.stringify(data));
          setPosts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <div>
      <h1>Services</h1>
      {posts.map((service, index) => {
        var { id, title, description } = service;
        return (
          <div key={id}>
            <p>
              Title: {title} Description: {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
