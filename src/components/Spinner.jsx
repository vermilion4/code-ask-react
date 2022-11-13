import React from "react";
import { ThreeDots } from "react-loader-spinner";


function Spinner() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#002828"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center"
      }}
      wrapperClassName=""
      visible={true}
    />
  );
}

export default Spinner;
