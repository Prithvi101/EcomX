import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#ff"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
};

export default Loading;
