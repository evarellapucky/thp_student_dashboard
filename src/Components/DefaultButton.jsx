import React from "react";

function DefaultButton({name}) {
  return (
      <button className="btn btn-primary">
        {name}
      </button>
  );
}

export default DefaultButton;