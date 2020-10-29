import React from "react";

class UserForm extends React.Component {
  state = {
    name: "",
    student: "",
    occupation: "",
    about: "",
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const val = type === "checkbox" ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={this.handleChange}
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            onChange={this.handleChange}
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={this.state.student}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            onChange={this.handleChange}
            name="occupation"
            value={this.state.occupation}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            onChange={this.handleChange}
            name="about"
            className="form-input"
            value={this.state.about}
          />
        </div>
        <button
          className="submit-button"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
