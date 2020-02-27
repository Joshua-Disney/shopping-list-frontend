import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteNeed, deleteWant } from "../../store/actions";
import "../../less/index.less";

const Profile = props => {
  const [remove, setRemove] = useState(true);

  useEffect(() => {
    console.log("remove: ", remove);
  }, [remove]);

  // Set new background color
  // Set a standard design for buttons
  // Make each profile colapsable
  // Lists as two columns or one?
  // Grid format?

  console.log("profile props: ", props);
  return (
    <div className="profile-container">
      <h3>{props.profile.name}</h3>
      <Link
        className="add-list-button"
        to={{
          pathname: "/add-need",
          needProps: { profile_id: props.profile.id }
        }}
      >
        Create New need
      </Link>
      <Link
        className="link"
        to={{
          pathname: "/add-want",
          wantProps: { profile_id: props.profile.id }
        }}
      >
        Create New want
      </Link>
      <hr />
      <div className="list-container">
        <h4 className="headers">Needs</h4>
        {props.profile.needs.map(need => {
          return (
            <div className="list-item" key={need.id}>
              <p className="list-item-text">{need.name}</p>
              <button
                className="list-item-button"
                onClick={event => {
                  event.preventDefault();
                  props.deleteNeed(need.id);
                }}
              >
                Delete Need
              </button>
            </div>
          );
        })}
      </div>
      <div className="list-container">
        <h4 className="headers">Wants</h4>
        {props.profile.wants.map(want => {
          return (
            <div className="list-item" key={want.id}>
              <p className="list-item-text">{want.name}</p>
              <button
                className="list-item-button"
                onClick={event => {
                  event.preventDefault();
                  props.deleteWant(want.id);
                }}
              >
                Delete Want
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// const mapStateToProps = ()

const mapDispatchToProps = { deleteNeed, deleteWant };

export default connect(null, mapDispatchToProps)(Profile);
