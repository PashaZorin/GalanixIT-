import React from "react";
const Popup = ({ popup, onClick }) => {
  return (
    <div
      className={popup.active ? "popup" : null}
      onClick={(e) =>
        e.target.className !== "popup__content-img" ? onClick() : null
      }
    >
      <div className="popup__content">
        <img className="popup__content-img" src={popup.img} alt={popup.img} />
        {popup.active && <span>X</span>}
      </div>
    </div>
  );
};

export default Popup;
