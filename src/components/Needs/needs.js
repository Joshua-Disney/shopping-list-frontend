import React from "react";

const Need = props => {
  return (
    <div>
      <p>Need id: {props.need.id}</p>
      <p>{props.need.name}</p>
    </div>
  );
};

export default Need;
