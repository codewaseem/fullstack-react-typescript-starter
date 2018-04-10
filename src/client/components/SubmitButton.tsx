import * as React from "react";

const Button = ({ pristine, submitting, valid, text = "Submit" }) => {
  return (
    <button
      className={`p-2 text-white hover:shadow-white ${valid ? "bg-green " : "bg-grey cursor-not-allowed"}`}
      type="submit"
      disabled={pristine || submitting || !valid}
    >
      {text}
    </button>
  );
};

export default Button;