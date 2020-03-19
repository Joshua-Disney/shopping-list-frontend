import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteNeed } from "../../store/actions";

const Need = props => {
  const [state, setState] = useState({
    message: null
  });

  useEffect(() => {}, [state.message]);
  return (
    <div>
      <p>Need id: {props.need.id}</p>
      <p>{props.need.name}</p>
      <button
        onClick={event => {
          event.preventDefault();
          props.deleteNeed(props.need.id);
          setState({ ...state, message: props.message });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

const mapStateToProps = ({ listReducer }) => {
  return {
    message: listReducer.message
  };
};

const mapDispatchToProps = { deleteNeed };

export default connect(mapStateToProps, mapDispatchToProps)(Need);
