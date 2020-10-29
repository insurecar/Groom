import React, { Component } from "react";

class CreatetaskInput extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
  };

  render() {
    return (
      <div className="create-task">
        <input
          onChange={this.handleChange}
          className="create-task__input"
          type="text"
          value={this.state.value}
        />
        <button onClick={this.handleTaskCreate} className="btn create-task_btn">
          Create
        </button>
      </div>
    );
  }
}

export default CreatetaskInput;
