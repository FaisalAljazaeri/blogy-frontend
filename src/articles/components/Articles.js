import React, { Component } from "react";
import Article from "./Article";
import { getAllArticles } from "../api";

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

    render() {
        let allArticles = <h4>No Articles!</h4>;

        if (this.props.articles.length > 0) {
            allArticles = this.props.articles.map(
                ({ title, author, content }, index) => {
                    return (
                        <Article
                            key={index}
                            title={title}
                            author={author}
                            content={content}
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
