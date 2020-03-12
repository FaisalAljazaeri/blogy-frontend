import apiURL from "../apiConfig";
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get all articles
export const getAllArticles = () => {
    return axios.get(`${apiURL}/articles`);
};

// Delete article by id
export const deleteArticleById = id => {
    return axios.delete(`${apiURL}/articles/${id}`);
};
