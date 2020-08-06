import React, { Component } from "react";
import Task from "./Task";
import CreatetaskInput from "./CreatetaskInput";

const baseUrl = "https://5f298ef4a1b6bf0016ead84b.mockapi.io/tasks";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  handleTaskStatusChange = (id) => {
    const updateTask = this.state.tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    this.setState({
      tasks: updateTask,
    });
  };

  handleTaskDelete = (id) => {
    const updateTask = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updateTask,
    });
  };

  handleInput = (text) => {
    const newTask = {
      text: text,
      done: false,
    };

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;utc-8",
      },
      body: JSON.stringify(newTask),
    }).then((response) => {
      if (response.ok) {
        fetch(baseUrl)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((tasksList) => {
            this.setState({
              tasks: tasksList,
            });
          });
      } else {
        throw new Error("Faild to create task");
      }
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreatetaskInput onCreate={this.handleInput} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              {...task}
              key={task.id}
              onToggle={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
