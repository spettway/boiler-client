import axios from "axios";

const API = axios.create({
  baseURL: "https://memories-project-sims.herokuapp.com",
});

//const url = "https://memories-project-sims.herokuapp.com/posts";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch("/posts/" + id + "/likePost");
export const updatePost = (id, updatedPostData) =>
  API.patch("/posts/" + id, updatedPostData);
export const deletePost = (id) => API.delete("/posts/" + id);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
