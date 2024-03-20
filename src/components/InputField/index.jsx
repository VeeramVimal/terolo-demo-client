import React from "react";
import PropTypes from "prop-types";
import { validatePasswordStrength } from "../../utils/validationUtils"
import { useState } from "react";

const InputField = ({
  key,
  label,
  placeholder,
  value,
  onChange,
  type,
  padReqd,
  minLength,
  maxLength,
  LeftIcon,
  RightIcon,
  errorMessage,
  strengthReqd,
  inputStyle,
  labelStyle,
  leftIconStyle,
  rightIconStyle,
  inputBoxStyle,
  showPassIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div
      className={`relative flex-col flex mt-0 mr-0  ml-0 ${inputStyle}`}
      key={key}
    >
      {label && (
        <label
          className={`text-xs font-medium px-1 text-left pt-0 -mt-px ${strengthReqd?validatePasswordStrength(value).color:""} ${labelStyle}`}
        >
          {label}
        </label>
      )}
      <input
        type={type==="password"&&showPassword?"text":type}
        minLength={minLength}
        maxLength={maxLength}
        className={`border border-solid rounded focus:outline-none  pr-12 pb-0 pl-1 py-5 text-xs font-normal leading-none  ${inputBoxStyle} ${
          errorMessage ? "border-red-500" : "border-sub hover:border-subHover focus:border-textPrimary"
        } ${strengthReqd?validatePasswordStrength(value).border:""} ${padReqd?" pr-36 pr":""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        
      />
      {strengthReqd&&(
        <p className={`text-small pl-2 mt-1 ${validatePasswordStrength(value).color}`}>{validatePasswordStrength(value).status}</p>
      )

      }
      {LeftIcon && (
        <div className={`absolute top-9 left-3 ${leftIconStyle}`}>
          <LeftIcon />
        </div>
      )}
      {RightIcon && (
        <div className={`absolute ${showPassIcon?"top-2 right-5":"top-9 right-3"}  ${rightIconStyle}`}>
          {type==="password"&&showPassIcon?
          showPassword?
            <i className="ri-eye-fill cursor-pointer" onClick={() => {setShowPassword(false)}}></i>
            :
            <i className="ri-eye-off-fill cursor-pointer" onClick={() => {setShowPassword(true)}}></i>
        :
        
          <RightIcon />
        }
        </div>
      )}
      {errorMessage && (
        <div className="pl-1">
          <text className="text-xs text-red-400 font-medium">
            {errorMessage}
          </text>
        </div>
      )}
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  key: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  LeftIcon: PropTypes.element,
  RightIcon: PropTypes.element,
  errorMessage: PropTypes.any,
  inputStyle: PropTypes.any,
  leftIconStyle: PropTypes.any,
  rightIconStyle: PropTypes.any,
  inputBoxStyle: PropTypes.any,
  labelStyle: PropTypes.any,
};

InputField.defaultProps = {
  key: 1,
  label: null,
  placeholder: null,
  value: null,
  onChange: null,
  type: "text",
  minLength: 1,
  maxLength: 256,
  LeftIcon: null,
  RightIcon: null,
  errorMessage: null,
  inputStyle: "",
  labelStyle: "",
  leftIconStyle: "",
  rightIconStyle: "",
  inputBoxStyle: "",
};
