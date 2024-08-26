import React from "react";

function DefaultButton({children, name, color = "btn-primary", ...props}) {
  return (
      <button className={`btn ${color} ml-2 md:ml-3`} {...props}>
        {children}
        {name}
      </button>
  );
}

export default DefaultButton;