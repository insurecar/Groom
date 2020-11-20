import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;

    if (!title.trim()) {
      return null;
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);

    this.props.createPost(newPost);

    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Створити
        </button>
      </form>
    );
  }
}

const mapDispatch = {
  createPost,
};

export default connect(null, mapDispatch)(PostForm);
