import React, { Component } from "react";

export default class Article extends Component {
    render() {
        const { title, author, content } = this.props;

        return (
            <div>
                {/* Title & Content & Author */}
                <h2>{title}</h2>
                <sub>{author}</sub>
                <p>{content}</p>
            </div>
        );
    }
}
