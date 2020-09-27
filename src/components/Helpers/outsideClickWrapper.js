import React, { useEffect, useRef } from "react";

const useHandleOutsideClick = (ref, cb) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const outsideClickDiv = ref.current;
      if (outsideClickDiv && !outsideClickDiv.contains(event.target)) {
        cb();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      // this return gets called on componentWillUnmount
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
};

const OutsideClick = (props) => {
  const wrapperRef = useRef(null);
  useHandleOutsideClick(wrapperRef, props.onOutsideClick);
  return <div ref={wrapperRef}>{props.children}</div>;
};

export default OutsideClick;
