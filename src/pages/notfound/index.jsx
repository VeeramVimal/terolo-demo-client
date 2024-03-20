import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  // const homeRoute = [{ id: 1, name: "Go Back Home", path: "" }];
  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.clear();
    navigate('/sign-in')
  };
  return (
    <>
      <div className="bg-stone-300 h-screen flex justify-center pt-5 ">
        <div class="w-2/6  rounded-lg  shadow-lg bg-white text-center pt-8 lg:h-96 md:h-full  ">
          <div class="px-8 py-8 items-center ">
            <div className="lg:text-3xl items-center md:text-lg xs:text-sm">
              Whoops!
            </div>
            <div className="lg:text-3xl md:text-sm xs:text-sm">
              This page is Unavailable.
            </div>
            <div className="lg:text-sm text-gray-900 pt-8 md:text-xs xs:text-sm">
              you dont have access to this Workspace or it doesn't exist
              anymore.
            </div>
            <div className="lg:pt-12 md:pt-6">
              <Link to={"/"}>
                <button class="bg-cyan-500  text-white lg:text-xl font-normal lg:px-4 lg:py-2 md:px-4 md:py-2 rounded xs:text-xs ">
                  Go Back Home
                </button>
              </Link>
            </div>

            <div className="py-6 text-cyan-500 underline decoration-cyan-400 cursor-pointer" onClick={logout}>
              or log out
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
