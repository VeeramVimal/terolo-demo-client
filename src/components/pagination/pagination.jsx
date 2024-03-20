import { Pagination } from "antd";
import PropTypes from "prop-types";

export const PaginationComp = ({
    total,
    showTotal,
    defaultPageSize,
    defaultCurrent

}) => {
    return <Pagination
    style={{alignItems:"self-start"}}
    size="small"
    total={total}             
    showTotal={showTotal}
    
    defaultCurrent={defaultCurrent}
    defaultPageSize={defaultPageSize}
    hideOnSinglePage={ true}

    >
    </Pagination>

}


export default PaginationComp


Pagination.propTypes = {
    total: PropTypes.number,
    defaultCurrent:PropTypes.number,
    defaultPageSize:PropTypes.number,
    showTotal:PropTypes.func
  };
  
  Pagination.defaultProps = {
        total:10,
        defaultCurrent:10,
        defaultPageSize:10,
        showTotal:null
  };


