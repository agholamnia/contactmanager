import React from "react";
const About = props => {
  return (
    <div>
      <h1 className="display-4">About Page {props.match.params.id}</h1>
      <p className="lead">This is about page</p>
    </div>
  );
};

export default About;
