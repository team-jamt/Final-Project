import React from "react";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SubmitBtn(props) {
  return (
    <span className="submit-btn" {...props} role="button" tabIndex="0">
      Submit
    </span>
  );
}

export default SubmitBtn;
