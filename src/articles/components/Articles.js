import React, { Component } from "react";
import Article from "./Article";

export default class Articles extends Component {
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
