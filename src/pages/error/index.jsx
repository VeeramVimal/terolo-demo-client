import React, { Component } from "react";
import errorImage from "../../assets/Images/500_error.jpg";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, "error");
    console.log(errorInfo, "errorInfo");
  }
  render() {
    // if (this.state.hasError) {
    return (
      <>
        <div className="grid grid-cols-3 gap-4  justify-center items-center pt-8">
          <div> </div>
          <div>
            <div className="font-semibold text-8xl pl-28 text-stone-400">
              500
            </div>
            <div className="font-semibold text-4xl pt-10 text-stone-400 ">
              Sorry, It's not you.It's us
            </div>
            <div className="font-light text-base pt-3 pl-10 text-neutral-500">
              We're experencing an internal server problem.
            </div>
            <div className="font-light text-base leading-5 pl-28 pt-0 text-neutral-500">
              Please try again later
            </div>
            <img
              src={errorImage}
              alt="errorImage"
              className="place-content-center  h-2/5 pr-4"
            />
          </div>
          <div></div>
        </div>
      </>
    );
    // }
    // return this.props.children;
  }
}
export default ErrorBoundary;
