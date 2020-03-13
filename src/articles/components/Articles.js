import React, { Component } from "react";
import Article from "./Article";
import ArticleForm from "./ArticleForm";
import {
    getAllArticles,
    deleteArticleById,
    addArticle,
    updateArticle
} from "../api";

export default class Articles extends Component {
    componentDidMount() {
        getAllArticles()
            .then(res => {
                this.props.setArticles(res.data.articles);
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteArticle = id => {
        deleteArticleById(id)
            .then(res => {
                const newArticlesList = this.props.articles.filter(
                    article => article._id !== id
                );
                this.props.setArticles(newArticlesList);
            })
            .catch(err => console.log(err));
    };

    addArticle = article => {
        addArticle(article)
            .then(res => {
                const newArticles = [...this.props.articles, res.data.article];

                this.props.setArticles(newArticles);
            })
            .catch(err => console.log(err));
    };

    // Update article by ID
    updateArticle = (article, id) => {
        updateArticle(article, id)
            .then(res => {
                // Copy the articles array from props
                const newArticles = [...this.props.articles];

                // Extract index of the article that should update
                const indexOfArticleToUpdate = this.props.articles.findIndex(
                    article => article._id === id
                );

                // Extract the article that should update
                const articleToUpdate = newArticles[indexOfArticleToUpdate];

                // Change required data of the old article
                const updatedArticle = {
                    ...articleToUpdate,
                    title: article.title,
                    content: article.content,
                    author: article.author,
                    published: article.published
                };

                // Replace the old article with the updated article in the array
                newArticles.splice(indexOfArticleToUpdate, 1, updatedArticle);

                // Set the state of the articles in APP component
                this.props.setArticles(newArticles);
            })
            .catch(err => console.log(err));
    };

    render() {
        let allArticles = <h4>No Articles!</h4>;

        if (this.props.articles.length > 0) {
            allArticles = this.props.articles.map(
                ({ title, author, content, published, _id }, index) => {
                    return (
                        <Article
                            key={index}
                            title={title}
                            author={author}
                            published={published}
                            id={_id}
                            content={content}
                            deleteArticle={this.deleteArticle}
                            updateArticle={this.updateArticle}
                        />
                    );
                }
            );
        }

        return (
            <>
                <h1>Add New Article</h1>
                <ArticleForm addArticle={this.addArticle} />
                <hr />
                <h1>Articles List</h1>
                {allArticles}
            </>
        );
    }
}
