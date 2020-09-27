import React, { useState } from "react";
import { connect } from "react-redux";

import { createProfile } from "../../store/actions";
import ButtonLink from "../../ui/ButtonLink";

const ProfileForm = (props) => {
  const [state, setState] = useState({
    name: "",
    account_id: props.account_id,
  });

  return (
    <div className="pt-10">
      <div className="bg-white shadow sm:rounded-lg w-full">
        <form
          className="px-4 py-5 sm:p-6"
          onSubmit={(event) => {
            event.preventDefault();
            props.createProfile(state);
            props.history.push("/");
          }}
        >
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Create Profile
          </h3>
          <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
            <p>Enter new profile name.</p>
          </div>
          <div className="mt-5 sm:flex sm:items-center">
            <div className="max-w-xs w-full">
              <label for="email" className="sr-only">
                Profile Name
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  value={state.name}
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  placeholder="John Doe's List"
                  onChange={(event) =>
                    setState({ ...state, name: event.target.value })
                  }
                />
              </div>
            </div>
            <span className="mx-3 inline-flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto flex">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150 sm:w-auto sm:text-sm sm:leading-5"
              >
                Save
              </button>
            </span>
            <ButtonLink padding={false} to="/">
              Cancel
            </ButtonLink>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    account_id: loginReducer.account_id,
  };
};

const mapDispatchToProps = { createProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
