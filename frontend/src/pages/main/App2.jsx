import React, { useState, useEffect } from "react";
import PostService from "../../services/post-service";
import AuthService from "../../services/auth-service";
import Button from '@mui/material/Button';
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
        if (error.response.status === 403) {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);

  const handleClick = async (event) => {
    PostService.getRecipeId(event.target.textContent).then(
      (response) => {
        console.log(response.data)
        navigate("/recipe/"+response.data);
        window.location.reload();
      },
      (error) => {
        console.log("Private page", error.response);
        // Invalid token
        if (error.response.status === 403) {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
            Pedidos
        </h1>
        <h1 className={styles.h1} onClick={handleClick}> {privatePosts.map((post) => <Button className={styles.button} key={post.title}> {post.title} </Button> )} </h1>
        
  </div>
  );
};

export default App2;
