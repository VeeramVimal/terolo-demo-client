import React from "react";
import PropTypes from "prop-types";
import { validatePasswordStrength } from "../../utils/validationUtils";
import { useState } from "react";
import { InputFieldValidate } from "../errorValidation";

const CustomInput = (props) => {
    const {
        className, label, placeholder, inputType = 1, name, value, setValue, initialVal, setInitialVal, onChange, type, disabled,
        isInputStringOnly = false, isAlphanumeric = false, isEmail, isInputAll = false, isInputNumberOnly = false, isMandatory = false,
        isURL, isGSTN, isPAN, isTIN, isAddress, minLength, maxLength, eftIcon, RightIcon, LeftIcon, strengthReqd, inputStyle,
        labelStyle, leftIconStyle, rightIconStyle, inputBoxStyle, showPassIcon, ...rest
    } = props;
    /**
     * @description state defined 
     */
    const [keyName, setKeyName] = useState(name)
    const [errorMessage, setErrorMessage] = useState({ isValid: true, message: "" });

    /**
     * @description if enter the value to set the state using rest operator declare in this functions
     */
    const handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        const fieldData = InputFieldValidate(name, value, isMandatory);
        setErrorMessage({ isValid: fieldData.isValid, message: fieldData.message });

        if (isInputStringOnly) {
            value = value.replace(/[^A-Za-z ]/gi, "")
        }
        if (isAlphanumeric) {
            value = value.replace(/[^a-zA-Z0-9 ]*/gi, "")
        }
        if (isInputNumberOnly) {
            value = value.replace(/[^0-9]{0,10}/gi, "")
        }
        if (isAddress) {
            value = value.replace(/[^a-zA-Z0-9 /-:]/gi, "")
        }
        if (isInputAll) {
            value = value.replace(/[^ A-Za-z0-9_@./#&+-?%*;:()"'!$^~`\|]*$/gi, "")
        }

        if (inputType === 1) {
            setValue(value)
        } else {
            // if (!maxLength) {
            setValue((prevProps) => ({ ...prevProps, [name]: value }));
            // }
        }
        setInitialVal((prev) => ({ ...prev, [name]: false }));

        setKeyName(name);
    }
    return (
        <div
            className={`relative flex-col flex mt-0 mr-0  ml-0 ${inputStyle}`}
        >
            {label && (
                <label for={label} className="block text-sm font-medium text-textcolor">
                    {label} {isMandatory === true ? <span className="text-red-500 font-medium text-sm">*</span> : null}
                </label>
            )}
            {
                    <input
                        type={type || "text"}
                        id={name}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        disabled={disabled === undefined ? '' : disabled}
                        onChange={(e) => handleChange(e)}
                        className={`${className}`}
                        // className={`${className} ${errorMessage.isValid || initialVal[keyName] ? "border-b-danger" : "border-b-secondary"}`}
                        {...rest}
                    />
            }
            {(!errorMessage.isValid || initialVal[keyName]) && (
                <div className="pl-1">
                    <text className="text-red-500 font-medium text-sm">
                        {!errorMessage.isValid ? errorMessage.message : initialVal[keyName]}
                    </text>
                </div>
            )}
        </div>
    );
};

export default CustomInput;

CustomInput.propTypes = {
    //   key: PropTypes.number,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    initialVal: PropTypes.object,
    setInitialVal: PropTypes.func,
    isInputStringOnly: PropTypes.bool,
    isInputNumberOnly: PropTypes.bool,
    isEmail: PropTypes.bool,
    isInputAll: PropTypes.bool,
    isURL: PropTypes.bool,
    isGSTN: PropTypes.bool,
    isPAN: PropTypes.bool,
    isTIN: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    //   LeftIcon: PropTypes.element,
    //   RightIcon: PropTypes.element,
    //   errorMessage: PropTypes.any,
    inputStyle: PropTypes.any,
    //   leftIconStyle: PropTypes.any,
    //   rightIconStyle: PropTypes.any,
    inputBoxStyle: PropTypes.any,
    labelStyle: PropTypes.any,
};

CustomInput.defaultProps = {
    //   key: 1,
    label: null,
    placeholder: null,
    id: null,
    name: null,
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
    //   leftIconStyle: "",
    //   rightIconStyle: "",
    //   inputBoxStyle: "",
};
