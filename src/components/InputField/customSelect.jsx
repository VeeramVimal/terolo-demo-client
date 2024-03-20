import React, { useState } from "react";
import Proptypes from "prop-types"
const CustomSelect = (props) => {
    const {
        placeholder = "Select...", data, value, setValue, isClearable = false, isMulti = false,
        autoFocus = false, required = false, inputType = 1, initialVal, setInitialVal, name, isLoading,
        initalStyle, label, isMandatory
    } = props;
    // console.log("select value==============", value);
    const [key, setKey] = useState(name);
    const SelectAll = data
    const handleChange = (Data, name) => {
        if (inputType === 1) {
            setValue(Data)
        } else if (inputType === 3) {
            setValue((preProps) => ({ ...preProps, [name]: [Data.target.value][0] }))
        } else if (inputType === 4) {

        }
        else {
            data.map((ele) => {
                if (ele.value == Data.target.value) {
                    setValue((prev) => ({ ...prev, [name]: { label: ele.label, value: ele.value } }))
                }
            })
        }
        setInitialVal((prev) => ({ ...prev, [name]: false}));
        if(data === []){
            setInitialVal((prev) => ({ ...prev, [name]: `${name} is required`}))
        }
        setKey(name)
    }
    return (
        <>
            <label for="hf-picker"
                className="block text-sm font-medium text-textcolor"
            > {label} {isMandatory ? <span className="text-red-500 font-medium text-sm">*</span> : null}
            </label>
            <select
                className={initalStyle}
                name={name}
                placeholder={placeholder}
                value={typeof value === 'object' ? value.value : value}
                onChange={(Data) => handleChange(Data, name)}
                options={data}
            >
                {data.map((ele, index) => {
                    return (
                        <>
                            <option value="" disabled selected hidden>Select option...</option>
                            <option value={ele.value} >
                                {ele.label}
                            </option>
                        </>
                    )
                })}
            </select>
            {!value && !value.value && initialVal[key] && (
                <div className="pl-1">
                    <text className="text-red-500 font-medium text-sm">{initialVal[key]}</text>
                </div>
            )}
        </>
    )
}

export default CustomSelect

CustomSelect.propTypes = {
    placeholder: Proptypes.string,
    data: Proptypes.array,
    value: Proptypes.object,
    setValue: Proptypes.func,
    isClearable: Proptypes.bool,
    isMulti: Proptypes.bool,
    autoFocus: Proptypes.bool,
    required: Proptypes.bool,
    inputType: Proptypes.number,
    initialVal: Proptypes.object,
    setInitialVal: Proptypes.func,
    name: Proptypes.string
}