import React, { Component } from "react";
import PropTypes from "prop-types";
import PositionedTooltips from "../PositionedTooltips";

class Contact extends Component {
  state = {
    showList: true
  };
  handleShow = () => {
    this.setState({
      showList: !this.state.showList
    });
  };

  render() {
    const { id, name, email, phone } = this.props;
    const { showList } = this.state;
    let classes = "fa fa-caret-";
    return (
      <div className="card card-body mb-3">
        <h5 className="card-title d-inline-block">
          {name}{" "}
          <i
            onClick={this.handleShow}
            style={{ cursor: "pointer" }}
            className={
              showList ? (classes += "right") : (classes += "down text-primary")
            }
          />
          <div className="d-inline-block float-right">
            <PositionedTooltips id={id} />
          </div>
        </h5>

        {showList ? null : (
          <ul className="list-group">
            <li className="list-group-item">Email : {email}</li>
            <li className="list-group-item">Phone : {phone}</li>
          </ul>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;

{
  /* <i style={{ cursor: "pointer" }} className="fa fa-pencil mr-2  " />
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times text-danger  "
            /> */
}
