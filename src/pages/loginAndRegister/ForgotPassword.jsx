import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { forgotPassworFields } from "./loginData";
import { BUTTONS, STRINGS } from "../../constants/CommonString";
import forgot_password from "../../assets/Images/forgot.png";
import terolo from "../../assets/Images/bm.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [errorStates, setErrorStates] = useState({
  //   inValidEmail: false,
  //   incorrectCred: false,
  // });
  // const [loading] = useState(false);



  return (
    <div className="!font-Jakarta">
      <img className="md:absolute lg:absolute xl:absolute top-6 left-6 p-6 md:p-0 lg:p-0 xl:p-0" src={terolo} alt="Terolo logo" />
      <div className="md:absolute lg:absolute xl:absolute inset-0 items-center justify-center flex flex-col">
        <div className="w-full md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
          <div className="w-full text-center md:text-center lg:text-center xl:text-left mb-1 mt-0 md:mt-6 md:mb-1 lg:mt-6 lg:mb-1 xl:mt-6 xl:mb-1">
            <text className="text-xl font-semibold text-primary">
              {STRINGS.FORGOT_YOUR_PASSWORD}
            </text>
          </div>
          <div className="text-center md:text-center lg:text-center xl:text-left text-textcolor font-semibold text-normal w-full ">
            {STRINGS.ENTER_REGISTERED_EMAIL}
          </div>
          <div className="my-8 justify-center items-center">
            <img src={forgot_password} alt="forgot password" className="" />
          </div>
          <div className="w-full mt-2 flex-grow">
            <form>
              {forgotPassworFields.map((item) => {
                return (
                  <div className="relative">
                    <input type="email" id="floating_outlined" class="h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                    <label for="floating_outlined" class="absolute text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                  </div>

                );
              })}
              <Button
                buttonClass={"mx-0 mt-10"}
                // loading={loading}
                buttonStyle={
                  "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
                }
                buttonText={BUTTONS.RESET_PASSWORD}
              />
              {/* {errorStates.incorrectCred && (
                <div className="items-center mb-3 justify-center flex z-10">
                  <p className="text-red-500 font-semibold leading-normal">
                    User with this Email ID does not exist
                  </p>
                </div>
              )} */}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
