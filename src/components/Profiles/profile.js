import React from "react";
import { connect } from "react-redux";

import ListEditor from "../listEditor";

import { deleteNeed, deleteWant } from "../../store/actions";
import ButtonLink from "../../ui/ButtonLink";
import Close from "../../ui/Close";
import { H3, H4 } from "../../ui/Titles";
import useWindowSize from "../Helpers/useWindowSize";

const Profile = (props) => {
  const windowSize = useWindowSize();
  const isScreenSmall = windowSize <= 640;
  // const [remove, setRemove] = useState(true);

  // useEffect(() => {
  // }, [remove]);

  // Set new background color
  // Set a standard design for buttons
  // Make each profile colapsable
  // Lists as two columns or one?
  // Grid format?

  const { needs, wants, name, id } = props.profile || {};
  //comment to push to Github.  It's ok.  You can do this.  Take a deep breath.  I believe in you.

  return (
    <section>
      <div className="border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
        <H3>{name}</H3>
        <ListEditor name={name} id={id} />
        <div className="flex justify-end">
          <ButtonLink
            to={{
              pathname: "/add-need",
              needProps: { profile_id: props.profile.id },
            }}
          >
            Create Need
          </ButtonLink>
          <ButtonLink
            to={{
              pathname: "/add-want",
              wantProps: { profile_id: props.profile.id },
            }}
          >
            Create Want
          </ButtonLink>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row pt-2 mb-5">
        <div className="sm:w-1/2">
          <H4>Needs</H4>
          {needs && needs.length
            ? needs.map((need) => {
                return (
                  <div
                    key={need.id}
                    className="pr-4 py-2 px-1 flex justify-between items-center"
                  >
                    <p>{need.name}</p>
                    <div
                      onClick={(event) => {
                        event.preventDefault();
                        props.deleteNeed(need.id);
                      }}
                      className={`cursor-pointer rounded-full ${
                        isScreenSmall ? "p-2" : "p-4"
                      } hover:bg-green-100 hover:text-red-500 transition duration-200`}
                    >
                      <Close className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div className="sm:w-1/2">
          <H4>Wants</H4>
          {wants && wants.length
            ? wants.map((want) => {
                return (
                  <div
                    key={want.id}
                    className="pr-4 py-2 px-1 flex justify-between items-center"
                  >
                    <p>{want.name}</p>
                    <div
                      onClick={(event) => {
                        event.preventDefault();
                        props.deleteWant(want.id);
                      }}
                      className={`cursor-pointer rounded-full ${
                        isScreenSmall ? "p-2" : "p-4"
                      } hover:bg-green-100 hover:text-red-500 transition duration-200`}
                    >
                      <Close className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
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
