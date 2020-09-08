import React, { useState } from "react";
import { connect } from "react-redux";

import { addWant } from "../../store/actions";
import ButtonLink from "../../ui/ButtonLink";

const WantForm = (props) => {
  const [state, setState] = useState({
    name: "",
    profile_id: props.location.wantProps.profile_id,
    is_added: false,
  });

  return (
    <div className="pt-10">
    <div className="bg-white shadow sm:rounded-lg w-full">
      <form
        className="px-4 py-5 sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          props.addWant(state);
          props.history.push("/");
        }}
      >
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Add Want
        </h3>
        <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>Enter a new want.</p>
        </div>
        <div className="mt-5 sm:flex sm:items-center">
          <div className="max-w-xs w-full">
            <label for="email" className="sr-only">
              Want
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                value={state.name}
                className="form-input block w-full sm:text-sm sm:leading-5"
                placeholder="Want ice cream"
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

const mapDispatchToProps = { addWant };

export default connect(null, mapDispatchToProps)(WantForm);
