import React, { Component } from "react";

export default class Article extends Component {
    render() {
        return (
            <div>
                {/* Title & Content & Author */}
                <h2>Title</h2>
                <sub>Author</sub>
                <p>Content</p>
            </div>
        );
    }
}
