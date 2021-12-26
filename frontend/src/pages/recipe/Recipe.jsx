import React, { useState, useEffect } from "react";
import PostService from "../../services/post-service";
import AuthService from "../../services/auth-service";
import { useNavigate, useParams } from "react-router-dom";
import useStyles from './styles.js';

const Recipe = () => {
  const styles = useStyles();
  const { id } = useParams();

  const [privatePosts, setPrivatePosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PostService.getSpecificRecipe(id).then(
      (response) => {
        console.log(response)
        setPrivatePosts(response.data);
      },
      (error) => {
        console.log("Private page", error.response);
        // Invalid token
        if (error.response) {
          //AuthService.logout();
          //navigate("/login");
          //window.location.reload();
        }
      }
    );
  }, []);

      return (
        <div>  
        <h1 className={styles.h1}>Receitas </h1>
          <h1>{privatePosts.map((post) => post.title )}</h1>
          <h2>{privatePosts.map((post) => post.summary )}</h2>
          <h1 className={styles.h1}>Ingredientes </h1>
          <h2>{privatePosts.map((post) => post.ingredient )}</h2>
          <h1 className={styles.h1}>Modos de Preparo </h1>
          <h2>{privatePosts.map((post) => post.directions )}</h2>

          <h1 className={styles.h1}>Titulo </h1>
          <h2 className={styles.h1}>Ingredientes de {id} </h2>
        </div>
      );
};

export default Recipe;
