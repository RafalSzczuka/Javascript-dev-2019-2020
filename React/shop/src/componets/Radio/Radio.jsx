import React from "react";

const Radio = props => {
  return (
    <div>
      <div>
        <input
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          defaultChecked={props.defaultChecked}
        />
        <label htmlFor={props.for}>{props.label}</label>
      </div>
    </div>
  );
};

export default Radio;
