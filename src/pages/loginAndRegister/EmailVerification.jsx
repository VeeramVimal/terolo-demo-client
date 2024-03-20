import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BUTTONS, STRINGS } from "../../constants/CommonString";
import verify_Email from "../../assets/Images/verify-email.png";
import terolo from "../../assets/Images/bm.png";

const EmailVerification = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("vishwa@gmail.com");

  return (
    <div className="!font-Jakarta">
      <img className="md:absolute lg:absolute xl:absolute top-6 left-6 p-6 md:p-0 lg:p-0 xl:p-0" src={terolo} alt="Terolo logo" />
      <div className="md:absolute lg:absolute xl:absolute inset-0 items-center justify-center flex flex-col">
        <div className="w-full md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
          <div className="w-full text-center md:text-center lg:text-center xl:text-left mb-1 mt-0 md:mt-6 md:mb-1 lg:mt-6 lg:mb-1 xl:mt-6 xl:mb-1">
            <text className="text-xl font-semibold text-center text-primary">
              {STRINGS.RECOVERY_LINK_SENT}
            </text>
          </div>
          <div className=" text-textcolor font-semibold text-normal w-full text-center md:text-center lg:text-center xl:text-left">
            {STRINGS.CHECK_EMAIL}
          </div>
          <div className="mt-8 mb-0 justify-center items-center">
            <img src={verify_Email} alt="verifyemail-image" className="" />
          </div>

          <div className="items-center justify-center flex z-10">
            <text className="text-sm text-textcolor font-semibold leading-normal mt-6 mb-7">
              Remember password?{" "}
              <span
                className="cursor-pointer text-sm font-semibold text-primary transition-colors underline hover:text-primary"
                onClick={() => navigate("/")}
              >
                {"Sign in"}
              </span>
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
