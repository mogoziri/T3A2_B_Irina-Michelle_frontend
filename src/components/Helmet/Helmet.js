import React from "react";

//to help modify titles on each page
const Helmet = (props) => {
  document.title = "Search for Cars -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
