import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "717429bf3edd783b872cc7284cf1da0f",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
