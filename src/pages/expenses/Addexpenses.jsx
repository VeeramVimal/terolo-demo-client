
import { Button } from 'antd';
import React, { useState } from 'react';
import SideDrawer from '../../components/drawer';

const Addexpenses = () => {
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
       
       <SideDrawer
            placement="right"
            width={"100%"}
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
          ></SideDrawer>
          
            <div className="flex flex-row m-3 justify-between w-full h-[710px] ">
      <div className="w-3/12 p-4 border-2 ">
            <div className='mb-2'>
                <h3 className="text-lg font-semibold">Expense</h3>
                <div className="flex flex-row mt-3 "></div>
                <h3 className="text-lg font-semibold mt-3">Category</h3>
                <div class="relative z-0">
    <input type="text" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Product " />
</div>           
<div class="relative z-0">
    <input type="text" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Product or Service name " />
</div>           
    <div class="relative z-0">
    <input type="text" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Reason " />
</div>           
               <h3 className="text-lg font-semibold mt-4">Reques/paid</h3>             
<label for="underline_select" class="sr-only">Underline select</label>
<select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Select</option>
                                    </select>
<div className=' mt-6 '><h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Invoice(if already paid)</h4>
            <Button type="dashed text-blue-600">No file chosen
         <Button className="bg-blue-600 rounded  left-3 text-white">
              Browse Files
            </Button>
            </Button>
        </div>
           <h3 className="text-lg font-semibold mt-6">Purpose</h3> 
        <div class="relative z-0">
    <input type="text" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Summary " />
</div>     
 <h3 className="text-lg font-semibold mt-6">Information</h3> 
        <div class="relative z-0">
    <input type="text" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Summary (Optional)" />
</div>     
    </div>
   
          
                </div>
                <div className=" w-full px-7">
                   <h3 className="text-lg font-semibold mt-6">Invoice</h3> 
                   <div className='grid gap-10 grid-cols-2'></div>
                   <h3 className="text-lg font-semibold mt-6">Purchase visa</h3>
             
                              <div className="grid gap-10 grid-cols-2">
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Total Amount</label>
                                
                                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Retail</option>
                                    </select>
                                </div>
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Tax Credit</label>
                                
                                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Yes</option>
                                    </select>
                                </div>
                               
</div>
                        
  <h3 className="text-lg font-semibold mt-6">Payment method</h3>      
        <div className="grid gap-10 grid-cols-2">
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Company</label>
                                
                                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Cash</option>
                                    </select>
                                </div>
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Payable by Tenant</label>
                                
                                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Yes</option>
                                    </select>
                                </div>
                                
                                </div>
<h3 className="text-lg font-semibold mt-6">Amount</h3> 
{/* <h3 className="text-lg font-semibold mt-6"> Total Amount</h3> */}
<div className="grid gap-10 grid-cols-3">
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Total Amount</label>
                                    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="NR" />
                                </div>
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Amount(Excl.Tax)</label>
                                    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="NR" />
                                </div>
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">TAX(inpercentage)</label>
                                    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="25%" />
                                </div>
                            </div> 
            <h3 className="text-lg font-semibold mt-6">Address</h3>      
        <div className="grid gap-10 grid-cols-3">
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Company</label>
                                
                                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>ONEUX Creative Studio</option>
                                    </select>
                                </div>
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Country</label>
                                
                                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>India</option>
                                    </select>
                                </div>
                                <div class="relative z-0 mb-8">
                                    <label for="name" class="block mb-2 text-sm font-medium text-textcolor">State</label>
                                
                                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Karnataka</option>
                                    </select>
                                </div>
</div>
{/* <div className=" w-full px-7"></div> */}
 <h3 className="text-lg font-semibold mt-6">Branch</h3> 
    <div class="">
        <input type="text" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Branchname 1 " />
    </div>   
    <div className="add-more mb-8">
        <button type="button" class="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-textcolor focus:text-textcolor  rounded border-0 text-textcolor font-normal h-10 w-full"><span><i class="ri-add-line ri-lg align-sub"></i> Add new address</span></button>   
  <h3 className="text-lg font-semibold mt-6">Note(Optional)</h3> 
    <div class="">
        <input type="text" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Summary" />
    <div className=" flex justify-content-end"></div>
    <Button className="bg-gray-200 rounded border-0 text-gray-600 font-semibold mx-52">
              Cancel
            </Button>
            <Button className="bg-blue-600 rounded border-0 text-white mx-8">
              Save
            </Button>
    </div>   
    </div>
    </div>
    </div>
   </div>
    
  );
};

export default Addexpenses;