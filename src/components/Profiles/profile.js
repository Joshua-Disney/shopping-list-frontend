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
                  // console.log("Need shouldn't exist: ", need);
                  props.deleteNeed(need.id);
                  setTimeout(() => {
                    setRemove(!remove);
                  }, 3000);
                  console.log("List of needs: ", props.profile.needs);
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
          return <Want key={want.id} want={want} />;
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = { deleteNeed, deleteWant };

export default connect(null, mapDispatchToProps)(Profile);
