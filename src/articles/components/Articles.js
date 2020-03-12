import React, { Component } from "react";
import Article from "./Article";
import { getAllArticles, deleteArticleById } from "../api";

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

    render() {
        let allArticles = <h4>No Articles!</h4>;

        if (this.props.articles.length > 0) {
            allArticles = this.props.articles.map(
                ({ title, author, content, _id }, index) => {
                    return (
                        <Article
                            key={index}
                            title={title}
                            author={author}
                            id={_id}
                            content={content}
                            deleteArticle={this.deleteArticle}
                        />
                    );
                }
            );
        }

        return (
            <>
                <h1>Articles List</h1>
                {allArticles}
            </>
        );
    }
}
