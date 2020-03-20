import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteNeed, deleteWant } from "../../store/actions";
import "../../less/index.less";

const Profile = props => {
  // const [remove, setRemove] = useState(true);

  // useEffect(() => {
  // }, [remove]);

  // Set new background color
  // Set a standard design for buttons
  // Make each profile colapsable
  // Lists as two columns or one?
  // Grid format?

  return (
    <section className="profile-container">
      <div className="profile-div">
        <h3 className="profile-name">{props.profile.name}</h3>
      </div>
      <div className="add-buttons">
        <Link
          className="add-list-button"
          to={{
            pathname: "/add-need",
            needProps: { profile_id: props.profile.id }
          }}
        >
          Create Need
        </Link>
        <Link
          className="add-list-button"
          to={{
            pathname: "/add-want",
            wantProps: { profile_id: props.profile.id }
          }}
        >
          Create Want
        </Link>
      </div>
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
                X
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
                X
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// const mapStateToProps = ()

const mapDispatchToProps = { deleteNeed, deleteWant };

export default connect(null, mapDispatchToProps)(Profile);

// Make this entire page reactive
// Build a hanburger dropdown nav bar that contains add profile and logout
// Style all add forms
// Make sure add form styling is responsive
// Tweek colors.
