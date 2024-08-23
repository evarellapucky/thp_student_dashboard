import React from "react";

function DefaultButton({children, name, ...props}) {
  return (
      <button className="btn btn-primary ml-2 md:ml-4" {...props}>
        {children}
        {name}
      </button>
  );
}

export default DefaultButton;