import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    classes_n: "form-control",
    classes_e: "form-control",
    classes_p: "form-control",
    message: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone
    });

    // const contact = res.data;
    // this.setState({
    //   name: contact.name,
    //   email: contact.email,
    //   phone: contact.phone
    // });
  }
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ classes_n: "form-control is-invalid" });
      return;
    } else if (name !== "") {
      this.setState({ classes_n: "form-control is-valid" });
    }
    if (email === "") {
      this.setState({ classes_e: "form-control is-invalid" });
      return;
    } else if (email !== "") {
      this.setState({ classes_e: `form-control is-valid` });
    }
    if (phone === "" || phone.length !== 11) {
      this.setState({
        classes_p: "form-control is-invalid",
        message: (
          <span className="invalid-feedback">phone must be 11 numbers</span>
        )
      });
      return;
    } else if (phone !== "" || phone.length === 11) {
      this.setState({
        classes_p: "form-control is-valid"
      });
    }

    const newContact = {
      // id: uuid(),
      name,
      email,
      phone
    };
    //////////////////////////////////////////////////////////////
    const { id } = this.props.match.params;
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact)
      .then(res => dispatch({ type: "UPDATE_CONTACT", payload: res.data }));

    // dispatch({ type: "ADD_CONTACT", payload: newContact });
    /////////////////////////////////////////////////////////////
    this.setState({
      name: "",
      email: "",
      phone: "",
      classes_n: "form-control",
      classes_e: "form-control",
      classes_p: "form-control",
      message: ""
    });
    this.props.history.push("/");
  };
  render() {
    const {
      name,
      email,
      phone,
      classes_n,
      classes_e,
      classes_p,
      message
    } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    classes={classes_n}
                    label="Name"
                    type="text"
                    placeholder="Name..."
                    name="name"
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    classes={classes_e}
                    label="Email"
                    type="text"
                    placeholder="Email..."
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    classes={classes_p}
                    label="Phone"
                    type="text"
                    placeholder="Phone..."
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    message={message}
                  />
                  <input
                    value="Update Contact"
                    type="submit"
                    className="btn btn-block btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
