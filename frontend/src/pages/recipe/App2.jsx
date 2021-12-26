import React, { useState, useEffect } from "react";
import PostService from "../../services/post-service";
import AuthService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
import useStyles from './styles.js';

const App2 = () => {
  const styles = useStyles();

  const [privatePosts, setPrivatePosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PostService.getAllPrivatePosts().then(
      (response) => {
        console.log(response)
        setPrivatePosts(response.data);
      },
      (error) => {
        console.log("Private page", error.response);
        // Invalid token
        if (error.response) {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);

  return (
    <div>  
      <h1 className={styles.h1}>
            Pedidos
        </h1>
        <h1>{privatePosts.map((post) => post.title )}</h1>
  </div>
  );
};

export default App2;
