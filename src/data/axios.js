import axios from "axios";

// Base url to make requests to the Food db;
const instance = axios.create({
  baseURL: "https://playground.devskills.co/api/rest/meal-roulette-app",
});

export default instance;
