import { Tooltip } from 'antd';
import PropTypes from "prop-types";
export const ToolTip = ({ title, placement, children,className,overlayClassName }) => {
    return (
        <Tooltip 
        title={title} 
        placement={placement} 
        className={className}
        overlayClassName={overlayClassName}
        >{children}</Tooltip>
    )
}

ToolTip.propTypes = {
    title: PropTypes.string,
    placement: PropTypes.string,
    children: PropTypes.any
}

ToolTip.defaultProps = {
    title: '',
    placement: "top",
    children: null
}