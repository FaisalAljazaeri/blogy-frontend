import apiURL from "../apiConfig";
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get all articles
export const getAllArticles = () => {
    return axios.get(`${apiURL}/articles`);
};
