import React, { Component } from "react";
import ArticleForm from "./ArticleForm";

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updateFormOpen: false
        };
    }

    deleteArticle = e => {
        e.preventDefault();
        this.props.deleteArticle(this.props.id);
    };

    // Toggle update article form open
    toggleUpdateForm = e => {
        this.setState({
            updateFormOpen: !this.state.updateFormOpen
        });
    };

    // call update article on Articles component
    updateArticle = (article, id) => {
        this.props.updateArticle(article, id);
        // Hide the update form after it's submitted
        this.toggleUpdateForm();
    };

    render() {
        const { title, author, content, published, id } = this.props;

        const updateForm = this.state.updateFormOpen ? (
            <ArticleForm
                title={title}
                author={author}
                content={content}
                published={published}
                id={id}
                updateArticle={this.updateArticle}
            />
        ) : (
            ""
        );

        return (
            <div>
                {/* Title & Content & Author */}
                <h2>{title}</h2>
                <sub>{author}</sub>
                <p>{content}</p>

                {updateForm}

                <button onClick={this.toggleUpdateForm}>Edit</button>
                <br />
                <a href="#" onClick={this.deleteArticle}>
                    Delete
                </a>
            </div>
        );
    }
}
