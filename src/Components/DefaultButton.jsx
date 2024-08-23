import React from "react";

function DefaultButton({children, ...props}) {
  return (
      <button className="btn btn-primary ml-2 md:ml-4" {...props}>
        {children}
      </button>
  );
}

export default DefaultButton;