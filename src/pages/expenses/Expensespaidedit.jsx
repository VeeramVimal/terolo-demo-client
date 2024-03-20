
import { Button } from 'antd';
import React, { useState } from 'react';
import SideDrawer from '../../components/drawer';
import {EditOutlined} from '@ant-design/icons';
import image from '../../assets/Images/sample_logo.svg';


const Expensespaidedit = () => {
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
      
    <SideDrawer
            placement="right"
            width={"60%"}
            headerStyle={{ padding: "0px" }}
            closeIcon={
              <i
                class="ri-close-line ri-2x absolute z-40 right-6 "
                onClick={onClose}
              />
            }
            closable={true}
            visible={visible}
            bodyStyle={{ backgroundColor: "rgb(white)" }}
          >
            {/* <div className='flex w-full'>
        <div className="rounded border-solid border flex flex-col m-8 p-10 leftContainer "> */}
        <div className="flex flex-row m-3 justify-between w-full h-[710px] overflow-hidden">
      <div className="w-3/12 p-4 border-2 ">
            <div className='mb-2'>
                <h4 className='flex items-center font-bold text-lg m-0 not-italic'>Expence(Paid)</h4>
                <span className="font-normal not-italic">Invoice ID:INV2493</span>
            </div>
            <div className='mb-2'>
            <h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Laptop <div className="flex items-center ml-2"><EditOutlined style={{"color":'#0000FF'}}/></div></h4>
                <span className="font-normal not-italic">For Employee</span>
            </div>
            <div className='mb-2'><h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Quantity  <div className="flex items-center ml-2"><EditOutlined style={{"color":'#0000FF'}}/></div></h4>
                <span className="font-normal not-italic">10</span></div>
            <div className='mb-2'><h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Purpose  <div className="flex items-center ml-2"><EditOutlined style={{"color":'#0000FF'}}/></div></h4>
                <span className="font-normal not-italic">UI/UX Design & Graphic Design</span></div>
            <div className='mb-2'><h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Information  <div className="flex items-center ml-2"><EditOutlined style={{"color":'#0000FF'}}/></div></h4>
                <span className="font-normal not-italic">ACER ASPIRE 5-A515-57G<br/>Intel Core I5-12th Gen<br/> Nvidia-RTX 2050 4GB<br/>RAMDDR4-16GB</span></div>
         
        </div>
        <div className="mt-8 rightContainer">
        <div>  <div className="flex flex-wrap justify-between  headerContainer">
                <div className="pricingContainer">
                    <h3 className='flex items-center font-bold text-2xl not-italic'>$ 599999.00</h3>
                    <div className="flex items-center">
                       <img src={image} alt="sample image" height="20px" width="30px" />
                       <p className="font-normal text-xs not-italic">At ONEUX Creative Studio</p>
                    </div>
                </div>
                <div className="buttonContainer">
                    {/* <button className='p-1'>Cancel</button>
                    <button  className='bluBtn rounded border-solid border flex items-center font-semibold h-8 text-sm leading-4 text-white not-italic w-12' >Save</button> */}
                 <Button className="bg-gray-200 rounded border-0 text-gray-600 font-semibold mx-3" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-blue-600 rounded border-0 text-white">
              Save
            </Button>
                </div>
            </div>
            <div className='flex flex-wrap justify-between bodyContainer'>
                <div className="mt-5"> 
                 <div className="mb-5 invContainer">
                    <h3 className='font-bold text-base not-italic flex'>Invoice<div className="flex items-center ml-4"><EditOutlined style={{"color":'#0000FF',"font-size":"1.0rem"}}/></div></h3>
                    <p id='CardP'><span className="font-normal not-italic">Date:</span> 15:30,08 Sep 2022</p>
                    <p id='CardP'><span className="font-normal not-italic">Purchase via:</span> Amazon Business Online</p>
                    <p id='CardP'><span className="font-normal not-italic">Date: </span>Yes</p>
                    
                </div>
                
                   <div className=""> <h3 className='font-bold text-base not-italic flex'>Payment method <div className="flex items-center ml-4 "><EditOutlined style={{"color":'#0000FF',"font-size":"1.0rem"}}/></div></h3>
                    <p id='CardP'>Bajaj Finanace</p>
                    <p id='CardP'>1234 456 4567 -credit</p>
                    <p id='CardP'>Mode of payment-Card</p>
                    </div>
                </div>
              
               <div className="mt-5">
               <div className="mb-5 adresContainer"> 
                <h3 className=' font-bold text-base not-italic flex'>Address <div className="flex items-center ml-4"><EditOutlined style={{"color":'#0000FF',"font-size":"1.0rem"}}/></div></h3>
                    <p className='font-normal text-xs m-0'>ONEUX Creative Studio</p>
                    <p id='CardP'>No 1, 1st Avenue,HSR Layout,<br/> Bangalore - 500032,karnatak-inida</p>
                   </div>
                <div className="amntContainer"> <h3 className=' font-bold text-base not-italic flex'>Amount<div className="flex items-center ml-4"><EditOutlined style={{"color":'#0000FF',"font-size":"1.0rem"}}/></div></h3>
               
                    <p id='CardP'><span className="font-normal not-italic  text-xs">Date:</span> 15:30,08 Sep 2022</p>
                    <p id='CardP'><span className="font-normal not-italic text-xs">Purchase via:</span> Amazon Business Online</p>
                    <p id='CardP'><span className="font-normal not-italic text-xs">Date:</span>Yes</p>
                    </div>
               </div>
            </div></div>
          
        </div>
       
    </div>
          </SideDrawer>
          
    </div>
  );
};

export default Expensespaidedit;