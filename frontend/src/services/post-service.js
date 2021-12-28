import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/recipe";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/all", { headers: authHeader() });
};

const getSpecificRecipe = (id) => {
  const config = {
    headers: authHeader(),
    params: {
      recipe_id: id 
    },
  }
  return axios.get(API_URL+"/id", config);
};

const getRecipeId = (recipe_name) => {
  const config = {
    headers: authHeader(),
    params: {
      recipe_name: recipe_name 
    },
  }
  return axios.get(API_URL+"/name", config);
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
  getSpecificRecipe,
  getRecipeId,
};

export default postService;