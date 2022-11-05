import React from "react";
import loading from "../Assets/loading.gif";

const Loading = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default Loading;
