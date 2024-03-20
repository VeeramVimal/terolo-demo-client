import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { validateEmail } from "../../utils/validationUtils";
import { STRINGS } from "../../constants/CommonString";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./loginAndRegister.action";
import Google from "../../assets/Images/google.png";
import terolo from "../../assets/Images/bm.png";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const stateValue = useSelector((state) => state.userRegisterData);
  // console.log("stateValue========", stateValue);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorStates, setErrorStates] = useState({
    isValidName: false,
    isValidEmail: false,
    isValidPassword: false,
    userExists: false,
  });
  const handleChange = (e) => {
    setSignupData((preProps) => ({
      ...preProps,
      [e.target.name]: e.target.value,
    }));
  };
  const onSignupPress = (e) => {
    e.preventDefault();
    setErrorStates({ ...errorStates, userExists: false });

    if (
      signupData.name === "" &&
      signupData.email === "" &&
      signupData.password === ""
    ) {
      setErrorStates({
        isValidName: true,
        isValidEmail: true,
        isValidPassword: true,
        userExists: false,
      });
    } else if (signupData.name === "") {
      setErrorStates({ ...errorStates, isValidName: true });
    } else if (signupData.email === "" || !validateEmail(signupData.email)) {
      setErrorStates({ ...errorStates, isValidEmail: true });
    } else if (signupData.password === "" || signupData.password.length < 8) {
      setErrorStates({ ...errorStates, isValidPassword: true });
    } else {
      setLoading(true);
      setTimeout(() => {
        const data = {
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
        };
        dispatch(registerUser(data, errorStates, setErrorStates, navigate));

        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div>
      <img
        className="md:absolute  lg:absolute xl:absolute lg:top-6 sm:top-6 top-2 lg:left-6 sm:left-6 left-2  lg:p-0 sm:p-0 p-2"
        src={terolo}
        alt="Terolo logo"
      />
      <div className="lg:absolute py-5 sm:absolute absolute inset-0 items-center justify-center flex flex-col">
        <div className="w-full  lg:w-96 sm:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
          <div className="w-full text-center md:text-center lg:text-center xl:text-left mb-5 mt-0 md:my-6 lg:my-6 xl:my-6">
            <text className="text-xl font-semibold text-center text-primary">
              {STRINGS.SIGN_UP}
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
                {STRINGS.SIGNUP_WITH_EMAIL}
              </span>
            </p>
          </div>

          <div className="w-full mt-32 md:mt-0 lg:mt-0 flex-grow">
            <form>
              <div className="relative lg:mb-10 sm:mb-10 mb-5">
                <input
                  className="h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  name="name"
                  type="name"
                  id="floating_outlined"
                  value={signupData.name}
                  placeholder=" "
                  onChange={handleChange}

                />
                <label
                  for="floating_outlined"
                  className="absolute text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Name
                </label>
              </div>

              <div className="relative lg:mb-10 sm:mb-10 mb-5">
                <input
                  className="h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  name="email"
                  type="email"
                  id="floating_outlined"
                  value={signupData.email}
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  for="floating_outlined"
                  className="absolute  text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>

              <div className="relative mb-6">
                <input
                  className="h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  name="password"
                  type="password"
                  id="floating_outlined"
                  value={signupData.password}
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  for="floating_outlined"
                  className="absolute  text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Password
                </label>
              </div>

              <div className="text-xs font-semibold tracking-wide my-4">
                <div className="pb-1">
                  By signing up, I accept the Terolo
                  <span className="text-primary ml-[2px]">
                    <a href="/" target="__blank">
                      Terms of Service <span className="text-black">and</span>
                    </a>
                  </span>{" "}
                </div>
                <span className="text-primary ml-[2px] py-5">
                  <a href="/" target="__blank">
                    <span className="text-black">Acknowldge the </span>Privacy
                    Policy.{" "}
                  </a>
                </span>
              </div>
              <Button
                loading={loading}
                buttonClass={"mx-0 mt-3 "}
                buttonStyle={
                  "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
                }
                buttonText={"Signup"}
                onClick={(e) => onSignupPress(e)}
              />
            </form>
            {errorStates.userExists && (
              <div className="items-center justify-center mb-2 flex z-10">
                <p className="text-red-500 font-semibold leading-normal">
                  User with this Email already exists
                </p>
              </div>
            )}
            <div className="items-center justify-center flex z-10">
              <text className="text-sm text-textcolor font-semibold leading-normal mt-6 mb-7">
                Already have an account?{" "}
                <button
                  className="cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  {"Sign in"}
                </button>
              </text>
            </div>
          </div>
        </div>
        <div className="text-xs mt-2 px-5">This site is protected by reCAPTCHA and the Google<span className="text-blue-500"> Privacy Policy</span> and <span className="text-blue-500">Terms of Service </span> apply.</div>

      </div>
    </div>
  );
};

export default Signup;
