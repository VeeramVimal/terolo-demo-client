import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import InputField from "../../components/InputField";
import { BUTTONS, STRINGS } from "../../constants/CommonString";
import Google from "../../assets/Images/google.png";
import terolo from "../../assets/Images/bm.png";
import axios from "axios";
import { useEffect } from "react";
import { validateEmail } from "../../utils/validationUtils";
import { useDispatch } from "react-redux";
import { loginUser } from "./loginAndRegister.action";
import { loginDataFields } from "./loginData";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStates, setErrorStates] = useState({
    isValidEmail: false,
    isValidPassword: false,
    incorrectCred: false,
  });
  const [showPassIcon, setShowPassIcon] = useState(false);

  const handleInputChange = (event, item) => {
    if (item.id === 1) {
      setLoginData({
        ...loginData,
        email: event.target.value,
      });
      setErrorStates({
        ...errorStates,
        isValidEmail:
          event.target.value !== "" ? false : errorStates.isValidEmail,
      });
    } else {
      setLoginData({
        ...loginData,
        password: event.target.value,
      });
      setErrorStates({
        ...errorStates,
        isValidPassword:
          event.target.value !== "" ? false : errorStates.isValidPassword,
      });
    }
  };
  const onLoginPress = (e) => {
    e.preventDefault();
    if (loginData.email === "" && loginData.password === "") {
      setErrorStates({ isValidEmail: true, isValidPassword: true });
      return;
    } else if (loginData.email === "" || !validateEmail(loginData.email)) {
      setErrorStates({ ...errorStates, isValidEmail: true });
      return;
    } else if (loginData.password === "" || loginData.password.length < 8) {
      setErrorStates({ ...errorStates, isValidPassword: true });
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        const data = { email: loginData.email, password: loginData.password };
        dispatch(loginUser(data, errorStates, setErrorStates, navigate));
        setLoading(false);
      }, 3000);
    }
  };
  const showErrorMessage = (item) => {
    if (item.id === 1 && errorStates.isValidEmail) {
      return item.errorMessage;
    } else if (item.id === 2 && errorStates.isValidPassword) {
      return item.errorMessage;
    }
  };
  return (
    <div className="">
      <img
        className="md:absolute lg:absolute xl:absolute lg:top-6 sm:top-6 top-2  lg:left-6 sm:left-6 left-2 p-2 lg:p-0 sm:p-0"
        src={terolo}
        alt="Terolo logo"
      />
      <div className="absolute md:absolute lg:absolute xl:absolute inset-0 items-center lg:flex lg:flex-col sm:flex sm:flex-col lg:mt-0 sm:mt-20 ">
        <div className="w-full mt-14 md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
          <div className="w-full md:text-start lg:text-center xl:text-left mb-5 mt-0 md:my-6 lg:my-6 xl:my-6">
            <text className="text-xl font-semibold text-center text-primary">
              {STRINGS.SIGN_IN}
            </text>
          </div>
          {/* google and linkedIn */}
          <div className="py-2 space-x-6 w-full pt-0">
            <div className="flex px-3 h-10 pr-6 justify-center space-x-3 items-center border transition-colors border-bordercolor rounded-md   cursor-pointer hover:text-primary hover:border-subHover">
              <img src={Google} alt="googleLogo" className="w-6 h-6" />
              <div className="font-semibold text-sm">Google</div>
            </div>
          </div>

          <div className="text-main w-full text-center my-5">
            <p className="w-full border-b-2 border-bordercolor text-sm text-center mt-2.5 mb-5 mx-0 leading-0">
              <span className="text-subHover text-primary font-semibold py-0 px-2.5  bg-white">
                {STRINGS.SIGNIN_WITH_EMAIL}
              </span>
            </p>
          </div>
          <div className="w-full flex-grow">
            <form>
              {loginDataFields.map((item) => {
                return (
                  <div className="relative lg:mt-1 sm:mt-1 lg:mb-9 sm:mb-9 mt-10">
                    <InputField
                      key={item.id}
                      type={item.type}
                      maxLength={item.maxLength}
                      padReqd={item.type === "password" ? true : false}
                      label={item.label}
                      showPassIcon={showPassIcon}
                      className="pl-1 "
                      inputStyle={
                        "block w-full  text-base font-semibold text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:font-semibold peer"
                      }
                      labelStyle={
                        "top-1 left-2 absolute text-base font-semibold duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] bg-white   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 "
                      }
                      placeholder={item.placeholder}
                      inputBoxStyle={""}
                      value={
                        item.id === 1 ? loginData.email : loginData.password
                      }
                      onChange={(event) => {
                        handleInputChange(event, item);
                        item.type === "password" &&
                          event.target.value.length > 0 &&
                          setShowPassIcon(true);
                        item.type === "password" &&
                          event.target.value.length === 0 &&
                          setShowPassIcon(false);
                      }}
                      errorMessage={showErrorMessage(item)}
                    />
                  </div>
                );
              })}

              <div class="flex justify-between my-6">
                <div class="form-check">
                  <input
                    class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat py-5 bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-sm text-textcolor pt-0.5 font-semibold"
                    for="flexCheckDefault"
                  >
                    {STRINGS.REMEMBER_ME}
                  </label>
                </div>

                <div className="forgot-txt pt-1.5 text-primary">
                  <p
                    className="cursor-pointer text-xs font-semibold"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </p>
                </div>
              </div>

              <Button
                loading={loading}
                buttonClass={"mx-0"}
                buttonStyle={
                  "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
                }
                buttonText={BUTTONS.SIGN_IN}
                onClick={(e) => onLoginPress(e)}
              />
            </form>
          </div>
          {errorStates.incorrectCred && (
            <div className="items-center -mt-3 justify-center flex z-10">
              <p className="text-red-500 font-semibold leading-normal">
                Invalid Email ID or Password
              </p>
            </div>
          )}
          <div className="items-center justify-center flex z-10">
            <text className="lg:text-sm sm:text-sm text-xs text-textcolor font-semibold leading-normal mt-6 mb-7">
              Don't have an account?{" "}
              <span
                className="cursor-pointer lg:text-sm sm:text-sm text-xs font-semibold text-primary transition-colors underline hover:text-primary"
                onClick={() => navigate("/sign-up")}
              >
                {"Signup for free"}
              </span>
            </text>
          </div>
        </div>
        <div className="text-xs b-0 mt-3 py-5 px-5">
          This site is protected by reCAPTCHA and the Google
          <span className="text-blue-500"> Privacy Policy</span> and{" "}
          <span className="text-blue-500">Terms of Service </span> apply.
        </div>
      </div>
    </div>
  );
};
export default Login;
