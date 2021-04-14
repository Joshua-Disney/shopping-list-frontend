import React from "react";

const Modal = ({ handleClose, showModal, children }) => {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";
  if (!showModal) return null;

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
