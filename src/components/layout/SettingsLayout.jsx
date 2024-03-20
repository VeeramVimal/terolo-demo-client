import React from "react";
import Settings from "../settings";

export default function SettingsLayout(props) {
  return (
    <div className="w-full flex bg-white fixed">
      <div className="w-1/5">
        <Settings />
      </div>
      <div className="w-4/5">{props.children}</div>
    </div>
  );
}
