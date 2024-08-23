import React from "react";

function DefaultButton({children, name, color = "primary", ...props}) {
  return (
      <button className={`btn btn-${color} ml-2 md:ml-3`} {...props}>
        {children}
        {name}
      </button>
  );
}

export default DefaultButton;