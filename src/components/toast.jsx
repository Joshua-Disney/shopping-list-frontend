import React from "react";

const Toast = ({ children, isToastTime }) => {
    return isToastTime ?
        <div style={{ position: "absolute", top: 20, right: 20, background: "white", padding: 10}}>{children}</div>
    : null
}

export default Toast