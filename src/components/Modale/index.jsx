import React from "react";
import { Button, Modal } from 'antd';


const Modale = (props) => {
  const handleOk = () => {
    props.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
  };
    return (
        <>
          
          <Modal className="bottom-0 right-0" title="Basic Modal" visible={props.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {props.data}
          </Modal>
        </>
      );
}

export default Modale;