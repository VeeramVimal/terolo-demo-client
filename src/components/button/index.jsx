import React from "react";
import PropTypes from "prop-types";
import { BouncingDotsLoader } from "../loader";

const Button = ({
  loading,
  type,
  disabled,
  buttonText,
  onClick,
  buttonClass,
  buttonStyle,
  IconComponent,
  iconStyle,
}) => {
  return (
    <div className={`w-full rounded-md ${buttonClass}`}>
      <button
        disabled={disabled}
        className={`${buttonStyle}`}
        onClick={onClick}
        type={type}
      >
        {loading ? (
          <BouncingDotsLoader />
        ) : (
          <div className={`${iconStyle}`}>
            {IconComponent && <IconComponent />}
            {buttonText && buttonText}
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  buttonClass: PropTypes.string,
  buttonStyle: PropTypes.string,
  iconStyle: PropTypes.string,
  IconComponent: PropTypes.element,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  buttonText: "",
  onClick: null,
  buttonClass: "",
  buttonStyle: "",
  iconStyle: "",
  IconComponent: "",
};
