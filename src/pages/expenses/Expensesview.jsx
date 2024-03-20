
import { Button } from 'antd';
import React, { useState } from 'react';
import SideDrawer from '../../components/drawer';
import image from '../../assets/Images/sample_logo.svg';

const Expensesview = () => {
//   const [open, setOpen] = useState(false);
   const [visible, setVisible] = useState(false);



 const onClose = () => {
    setVisible(false);
  };


const showDrawer = () => {
    setVisible(true);
  };

  return (
    <div className="site-drawer-render-in-current-wrapper">
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      
   
         
    </div>
    
  );
};

export default Expensesview;