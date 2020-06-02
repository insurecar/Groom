import React from "react";

class TasksList extends React.Component {
  state = {
    inputValue: "",
  };

  onHandleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  createTask = (event) => {
    this.props.onCreate(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <main className="todo-list">
        <div className="create-task">
          <input
            className="create-task__input"
            type="text"
            onChange={this.onHandleChange}
          />
          <button
            className="btn create-task__btn"
            type="button"
            onClick={this.createTask}
          >
            Create
          </button>
          {/* <ul>{this.state.taskList[0]}</ul> */}
        </div>
      </main>
    );
  }
}

export default TasksList;
