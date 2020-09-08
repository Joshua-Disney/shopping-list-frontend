// This fixes some semantic and control issues with buttons as links
import React from "react";
import LinkWrapper from "./LinkWrapper";
import clsx from "clsx";

const Button = React.forwardRef(
  ({ children, padding = true, ...props }, ref) => {
    return (
      <span
        className={clsx("inline-flex rounded-md shadow-sm", { "p-2": padding })}
      >
        <button
          ref={ref}
          {...props}
          type="button"
          className="inline-flex items-center px-3 py-2 border-2 border-blue-400 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
        >
          {children}
        </button>
      </span>
    );
  }
);

const ButtonLink = ({ children, ...props }) => {
  return (
    <LinkWrapper tag={Button} {...props}>
      {children}
    </LinkWrapper>
  );
};

export default ButtonLink;
