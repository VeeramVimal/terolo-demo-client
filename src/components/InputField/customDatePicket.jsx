import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { } = DatePicker
const CustomDatePicker = (props) => {
    const { bordered, label, value, setValue, initialVal, format, placement,
        setInitialVal, isMandatory, name, max, openCalendar, defaultValue,
        minD, minTar, disabled, dateType, className } = props
    console.log("value=====", value)
    const [keyName, setKeyName] = useState(name);

    const handleDateChange = (date) => {
        console.log("handleDateChange==============", date.toString());
        setValue((preProps) => ({ ...preProps, [name]: date.toString() }));
        setInitialVal((prev) => ({ ...prev, [name]: false }));
        if (date === []) {
            setInitialVal((prev) => ({ ...prev, [name]: `${name} is required` }));
        }
        setKeyName(name)
    }
    return (
        <>
            <label for="hf-picker"
                className="block text-sm font-medium text-textcolor"
            > {label}
                {isMandatory ? <span className="text-red-500 font-medium text-sm">*</span> : null}
            </label>
            <DatePicker
                bordered={bordered}
                className={className}
                format={format}
                // style={disabled ? { backgroundColor: '#D7DED9' } : null}
                disabled={disabled}
                placement={placement}
                name={name}
                value={ value !== "" ? moment(value) : ""}
                // defaultValue={new Date(value)}
                onChange={(date) => handleDateChange(date)}
                onFocus={openCalendar}
                // mode={}
                locale={
                    dateType
                }
            // max={max}
            // minD={minD}
            />
            {
                !value && !value.value && initialVal[keyName] && (
                    <div className="pl-1">
                        <text className="text-red-500 font-medium text-sm">{initialVal[keyName]}</text>
                    </div>
                )
            }
        </>
    )
}

export default CustomDatePicker;