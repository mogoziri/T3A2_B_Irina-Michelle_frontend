import React from "react";
import ListMyCarForm from "../components/UI/ListMyCarForm";

//Page where a user can add their car and have it listed on the website
const ListMyCar = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListMyCarForm />
    </div>
  );
};

export default ListMyCar;
