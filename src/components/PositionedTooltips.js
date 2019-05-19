import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

const styles = {
  root: {
    width: 50
  }
};

class PositionedTooltips extends Component {
  handleDel = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    // dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { classes, id } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className={classes.root}>
              <Tooltip title="EDIT" placement="top">
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fa fa-pencil text-muted "
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </Tooltip>
              <Tooltip title="DELETE" placement="top">
                <i
                  onClick={() => this.handleDel(id, dispatch)}
                  className="fa fa-times mx-2 text-danger"
                  style={{ cursor: "pointer" }}
                />
              </Tooltip>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

PositionedTooltips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PositionedTooltips);
