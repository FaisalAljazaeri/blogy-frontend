import React, { Component } from "react";

export default class ArticleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            author: "",
            published: true
        };
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        const { title, content, author, published } = this.state;

        const newArticle = {
            title,
            content,
            author,
            published: JSON.parse(published)
        };

        console.log(newArticle);
    };

    render() {
        return (
            <div onSubmit={this.submitHandler}>
                <form>
                    <div>
                        <label>Title</label>
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div>
                        <label>Content</label>
                        <textarea
                            name="content"
                            value={this.state.content}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Author</label>
                        <input
                            name="author"
                            value={this.state.author}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div>
                        <label>Is Published?</label>
                        <select
                            name="published"
                            value={this.state.published}
                            onChange={this.changeHandler}
                        >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
