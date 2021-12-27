import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/recipes";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = () => {
  console.log("Private")
  return axios.get(API_URL + "/private", { headers: authHeader() });
};

const getSpecificRecipe = (id) => {
  console.log("SpecificRecipe")
  console.log(id)
  const config = {
    headers: authHeader(),
    params: {
       id: id 
    },
  }
  return axios.get(API_URL + "/test", config);
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
  getSpecificRecipe,
};

export default postService;