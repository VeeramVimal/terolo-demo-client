import React from "react";
import "./style.css";

export function Loader() {
  return <div>loading....</div>;
}

export const BouncingDotsLoader = ({bgClass}) => {
  return (
    <div className={`flex justify-center bouncing-loader`}>
      <div className={`w-2.5 h-2.5 rounded-md my-0.5 mx-1.5 bg-white ${bgClass}`} />
      <div className={`w-2.5 h-2.5 rounded-md my-0.5 mx-1.5 bg-white ${bgClass}`} />
      <div className={`w-2.5 h-2.5 rounded-md my-0.5 mx-1.5 bg-white ${bgClass}`} />
    </div>
  );
};
