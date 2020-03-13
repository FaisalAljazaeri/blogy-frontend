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

    // Handle change for all form inputs and set the state.
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // Make new object for newArticle with the submitted form data.
    submitHandler = e => {
        // Prevent page from reloading on form submission
        e.preventDefault();
        const { title, content, author, published } = this.state;

        // Create new article with the data from user input.
        const newArticle = {
            title,
            content,
            author,
            published: JSON.parse(published)
        };

        // Check if updating an existing article by id or create new article
        // and call the required method.
        if (this.props.id) {
            // Pass updated article data to parent so it can be updated
            this.props.updateArticle(newArticle, this.props.id);
        } else {
            // Pass new article data to parent so it can be added
            this.props.addArticle(newArticle);
        }
    };

    // If the form is updating existing article it will recive its data
    // and should initlaize the state of the form with it
    initializeFormData = () => {
        const { title, content, author, published } = this.props;

        this.setState({
            title,
            content,
            author,
            published
        });
    };

    componentDidMount() {
        // If an id is passed it means the form is updating an existing
        // article and should initlaize its data.
        if (this.props.id) {
            this.initializeFormData();
        }
    }

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
