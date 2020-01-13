import React from "react";

const Error404 = () => {
  const lennyStyle = {
    textAlign: "center",
    fontSize: "150px",
    margin: "15px"
  };

  const text = {
    textAlign: "center",
    fontSize: "50px",
    paddingRight: "10px",
    paddingLeft: "10px"
  };

  return (
    <div>
      <p style={text}>Go back, there's nothing to see</p>
      <p style={text}>---- Error 404 ----</p>
      <p style={lennyStyle}>ᕦ(☉⏠☉)ᕥ</p>
    </div>
  );
};

export default Error404;
