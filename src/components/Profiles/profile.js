import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteNeed, deleteWant } from "../../store/actions";

import Want from "../Wants/wants";
// import Need from "../Needs/needs";

const Profile = props => {
  const [remove, setRemove] = useState(true);

  useEffect(() => {
    console.log("remove: ", remove);
  }, [remove]);

  console.log("profile props: ", props);
  return (
    <div>
      <h3>{props.profile.name}</h3>
      <Link
        to={{
          pathname: "/add-need",
          needProps: { profile_id: props.profile.id }
        }}
      >
        Create New need
      </Link>
      <Link
        to={{
          pathname: "/add-want",
          wantProps: { profile_id: props.profile.id }
        }}
      >
        Create New want
      </Link>
      <div>
        <h4>Needs</h4>
        {props.profile.needs.map(need => {
          return (
            <div key={need.id}>
              <p>{need.name}</p>
              <button
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
      <div>
        <h4>Wants</h4>
        {props.profile.wants.map(want => {
          return (
            <div key={want.id}>
              <p>{want.name}</p>
              <button
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
