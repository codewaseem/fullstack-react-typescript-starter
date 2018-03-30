import * as React from "react";
import "./login-form.css";
import "whatwg-fetch";
export default class LoginPage extends React.Component {

  state = {
    username: "",
    password: ""
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then((data) => data.json())
      .then(console.log)
      .catch(console.log);
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState(() => {
      return {
        [name]: value
      };
    });
  }
  render() {
    return (
      <div className="main-container">
        <div className="form-container">
          <h3 className="form-title">Member Login</h3>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              name="username"
              className="email-input"
              type="email"
              placeholder="Email"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              name="password"
              className="password-input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input type="submit" className="login-button" onClick={this.handleSubmit} value="Login" />
          </form>
          <p className="form-footer-text">Became a member</p>
        </div>
      </div>
    );
  }
}