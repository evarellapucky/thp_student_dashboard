import React from "react";

function DefaultButton({name, onClick = () => {}}) {
  return (
      <button className="btn btn-primary" onClick={onClick}>
        {name}
      </button>
  );
}

export default DefaultButton;