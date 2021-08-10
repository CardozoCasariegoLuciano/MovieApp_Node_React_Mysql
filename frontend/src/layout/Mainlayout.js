import React from "react";

const Mainlayout = ({children}) => {
  return (
    <div>
      <div>Hola header</div>
      {children}
      <div>Hola Footer</div>
    </div>
  );
};

export default Mainlayout;


