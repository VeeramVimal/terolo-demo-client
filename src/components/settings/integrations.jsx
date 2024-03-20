import React from "react";
import { QUESTION_LOGO } from "../../assets/Images";
import { IconsList } from "../../config/iconList";
import SettingsLayout from "../layout/SettingsLayout";

const Integrations = () => {
  return (
    <SettingsLayout>
     <div className="overflow-hidden">
     <div className="w-full text-2xl font-bold mt-14 ml-12 tracking-wide">
        <h2>Integrations</h2>
      </div>
      <div className="ml-12 mb-8">
        <text className="flex text-sm text-gray-400 mt-6">
          <i className={`ri-${QUESTION_LOGO} ri-lg`}></i>
          <text>Missing something you need?</text>
          <text className="font-medium ml-2 underline cursor-pointer hover:no-underline">
            Request an integration
          </text>
        </text>
      </div>
      <div className="flex items-center justify-between flex-wrap  m-auto lg:w-11/12 xl:w-11/12">
        {IconsList.map((item,index) => {
          return (
            <div
              key={index}
              className="flex justify-center border border-blue-700 rounded-lg w-44 h-20 m-1 p-3 items-center bg-transparent opacity-50 hover:opacity-100"
            >
              <img src={item.image} alt={"item"} />
            </div>
          );
        })}
      </div>
     </div>
    </SettingsLayout>
  );
};

export default Integrations;
