import React from "react";
import { withRouter, useParams, Link } from "react-router-dom";

const Student = ({ location, history, match, company }) => {
  console.log(location, history);

  //const { company } = useParams();

  return (
    <>
      <div>I am student {company}</div>
      <Link to="/">HOME</Link>
    </>
  );
};

export default withRouter(Student);
