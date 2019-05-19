import React, { Component } from "react";
import axios from "axios";
class Test extends Component {
  state = {
    id: "",
    name: "",
    email: ""
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users/1")
    //   .then(response => response.json())
    //   .then(res => this.setState({ name: res.name, email: res.email }));
    axios.get("https://jsonplaceholder.typicode.com/users/1").then(res =>
      this.setState({
        name: res.data.name
      })
    );
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    );
  }
}

export default Test;
