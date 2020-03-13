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

// Create new Article
export const addArticle = article => {
    return axios.post(`${apiURL}/articles`, { article });
};

// Update existing Article
export const updateArticle = (article, id) => {
    return axios.patch(`${apiURL}/articles/${id}`, { article });
};
