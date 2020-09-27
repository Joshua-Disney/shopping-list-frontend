import React from "react";
import { withRouter } from "react-router";

// I hate this implementation, but it's a fine abstaction for the moment.

const CustomLink = ({
  history,
  to,
  onClick,
  tag: Tag,
  location,
  match,
  ...props
}) => (
  <Tag
    {...props}
    onClick={(event) => {
      onClick(event);
      history.push(to);
    }}
  />
);

CustomLink.defaultProps = {
  onClick: () => {},
};

export default withRouter(CustomLink);
