import React from "react";
import ListMyCarForm from "../components/UI/ListMyCarForm";

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