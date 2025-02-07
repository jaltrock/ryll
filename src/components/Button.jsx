import React from "react";

export const Button = (props) => {
  return (
    <button type="submit" className="search-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};
