import React from "react";

const Radio = props => {
  return (
    <div>
      <div>
        <input
          type="radio"
          name="manufacturere"
          id={props.id}
          value={props.value}
        />
        <label for={props.for}>{props.for}</label>
      </div>
    </div>
  );
};

export default Radio;
