import { PaginationComp } from "../../components/pagination/pagination";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE,  CHECK_FILL, CLOSE_LOGO } from "../../assets/Images";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Tables from "../../components/table";
import SideDrawer from "../../components/drawer";
import { userData, userColumns } from "../../mockData/Expenses";
import Addexpenses from "./Addexpenses";
import Expensesedit  from "./Expensesedit";
import Expensesview from "./Expensesview";
import Expensespaidview from "./Expensespaidview";
import Expensespaidedit from "./Expensespaidedit";
// import SideDrawer from '../../components/drawer';
import image from '../../assets/Images/sample_logo.svg';
import { Button } from 'antd';



function Expenses(props) {
   const [Query, setQuery] = useState("");
   
  const [searchFilter, setSearchFilter] = useState(userData);
  const [visible,setVisible] = useState(false)
   const [open, setOpen] = useState(false);


   useEffect(() => {
    if (Query) {
     const SearchData = userData?.filter(
        (item) =>
      
          item.invoice.toLowerCase().includes(Query.toLowerCase()) ||
          item.price.toLowerCase().includes(Query.toLowerCase()) ||
          item.company.toLowerCase().includes(Query.toLowerCase()),
         
      );
      
      setSearchFilter(SearchData);
    }
    if (Query === "") {
      setSearchFilter(userData);
    }
  }, [Query]);
    console.log(searchFilter, "search filter");
   const handleSearchValue = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterValue = (e) => {};
   const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };  

const show = ()=>{
  setVisible(true)
}

  return (   
    <Layout>
       {open && (
        <SideDrawer
          placement="right"
          width={"70%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <i
              class="ri-close-line ri-1x absolute z-40 left-3 top-3 "
              onClick={onClose}
            />
          }
          closable={true}
          visible={open}
          bodyStyle={{ backgroundColor: "white" }}
        >
          {" "}
          <Addexpenses onClose={onClose} />{" "}
        </SideDrawer>
      )}
 
      <div className="flex flex-col pr-8 ml-10">
        
          <div className="py-4  border-y border-solid border-[#F0F3F7] w-full ">
           
            <h1 class="text-xl font-semibold mb-1.5">Expenses</h1>
             <div className="flex justify-between items-center">
            <div>
                <p class="text-base text-[#6E78AC]">Manage the expences of your all companies in one place</p>
            </div>
             
            
            <div className="bg-blue-500 w-10 h-10 px-4 flex  items-center justify-center text-white rounded "
                        onClick={showDrawer}

            >
            <i class="ri-add-line ri-2x"></i>
            
          </div>
            </div>
           
         </div>
      
        <div className="flex flex-row justify-between my-4">
          <div className="flex relative items-center ">
            <input
              className="h-10 border border-solid rounded pr-8 pl-10 outline-none w-full"
              onChange={(event) => handleSearchValue(event)}
              placeholder="search"
              />
              {Query && (
              <div
                className="pt-1 absolute right-1 cursor-pointer"
                onClick={() => setQuery(false)}
              >
                {/* <i class={`ri-${CLOSE_FILL} ri-lg`}></i> */}
              </div>
            )}
            
            <div className="left-[10px] absolute  w-3 h-3">
              <i class={`ri-${SEARCH_LINE} ri-lg`}></i>
              
            </div>
          </div>
          <div className="flex relative items-center justify-between ">
            <Button  className="bg-gray-200 rounded border-0 text-gray-600 font-semibold mx-3">
              Reject 
            </Button>
            <Button className="bg-blue-600 rounded border-0 text-white">
              Approve
            </Button>
            <div className="bg-gray-200 p-2 h-10 rounded mx-2 flex justify-center  items-center text-gray-400">
           
              <i class="ri-list-unordered ri-lg mx-2 bg-white p-1"></i>
              
              </div>
            <div className="flex justify-center items-center">
              <input
                className="h-10 border border-solid rounded pl-4 outline-none "
                onClick={(event) => {
                  handleFilterValue(event);
                }}
                placeholder="Filter"
              />
              <div className="right-[20px] absolute  w-2 h-3">
                <i class="ri-arrow-down-s-fill ri-lg"></i>
              </div>
            </div>
          </div>
        </div>

       
          <Tables  show={show}  columns={userColumns} data={searchFilter} pagination={false} />
       
        <div className="flex justify-center mt-5">
          <PaginationComp
            total={256}
            showTotal={showTotal}
            defaultCurrent={10}
            defaultPageSize={5}
          />
        </div>
      </div>
{/* <Expensesedit/>
<Expensesview/>
<Expensespaidview/>
<Expensespaidedit/> */}
{visible &&  <div className="absolute top-0 right-0"
            placement="right"
            width={"60%"}
            headerStyle={{ padding: "0px" }}
            closeIcon={
              <i
                class="ri-close-line ri-2x absolute z-40 right-6 "
                // onClick={onClose}
              />
            }
            closable={true}
            // visible={visible}
            bodyStyle={{ backgroundColor: "rgb(white)" }}
          >
            {/* <div className='flex w-full'>
        <div className="rounded border-solid border flex flex-col m-8 p-10 leftContainer "> */}
        <div className="flex flex-row m-3 justify-between w-full h-[710px] overflow-hidden">
      <div className="w-3/12 p-4 border-2 ">
            <div className='mb-2'>
                <h4 className='flex items-center font-bold text-lg m-0 not-italic'>Expence(Request)</h4>
                <span className="font-normal not-italic">Invoice ID:INV2493</span>
            </div>
            <div className='mb-2'>
            <h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Laptop</h4>
                <span className="font-normal not-italic">For Employee</span>
            </div>
            <div className='mb-2'><h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Quantity</h4>
                <span className="font-normal not-italic">10</span></div>
            <div className='mb-2'><h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Purpose</h4>
                <span className="font-normal not-italic">UI/UX Design & Graphic Design</span></div>
            <div className='mb-2'><h4 className='flex items-center font-semibold text-lg m-0 not-italic'>Information</h4>
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
                 <Button className="bg-gray-200 rounded border-0 text-red-600 font-semibold mx-3">
              Delete
            </Button>
            <Button className="bg-gray-200 rounded border-0 text-gray-600 font-semibold mx-3">
              Edit
            </Button>
            
            <Button className="bg-blue-600 rounded border-0 text-white">
              Share
            </Button>
                </div>
            </div>
            <div className='flex flex-wrap justify-between bodyContainer'>
                <div className="mt-5"> 
                 <div className="mb-5 invContainer">
                    <h3 className='font-bold text-base not-italic flex'>Invoice</h3>
                    <p id='CardP'><span className="font-normal not-italic">Date:</span> 15:30,08 Sep 2022</p>
                    <p id='CardP'><span className="font-normal not-italic">Purchase via:</span> Amazon Business Online</p>
                    <p id='CardP'><span className="font-normal not-italic">Date: </span>Yes</p>
                    
                </div>
                
                   <div className=""> <h3 className='font-bold text-base not-italic flex'>Payment method </h3>
                    <p id='CardP'>Bajaj Finanace</p>
                    <p id='CardP'>1234 456 4567 -credit</p>
                    <p id='CardP'>Mode of payment-Card</p>
                    </div>
                </div>
              
               <div className="mt-5">
               <div className="mb-5 adresContainer"> 
                <h3 className=' font-bold text-base not-italic flex'>Address</h3>
                    <p className='font-normal text-xs m-0'>ONEUX Creative Studio</p>
                    <p id='CardP'>No 1, 1st Avenue,HSR Layout,<br/> Bangalore - 500032,karnatak-inida</p>
                   </div>
                <div className="amntContainer"> <h3 className=' font-bold text-base not-italic flex'>Amount</h3>
               
                    <p id='CardP'><span className="font-normal not-italic  text-xs">Date:</span> 15:30,08 Sep 2022</p>
                    <p id='CardP'><span className="font-normal not-italic text-xs">Purchase via:</span> Amazon Business Online</p>
                    <p id='CardP'><span className="font-normal not-italic text-xs">Date:</span>Yes</p>
                    </div>
               </div>
            </div>
            </div>
          
        </div>
       
    </div>
    <div className='flex justify-between items-center'>

     <h3 className='flex items-center font-bold text-2xl not-italic'>$ 599999.00</h3>
                    <div className="flex items-center">
                        <img src={image} alt="sample image" height="20px" width="30px" />
                        <p className="font-normal text-xs not-italic">At ONEUX Creative Studio</p>
   <Button className="bg-gray-200 rounded border-0 text-red-600 font-semibold mx-3">
          Reject
            </Button>
             <Button className="bg-blue-600 rounded border-0 text-white">
              Approve
            </Button>
            </div>
            </div>
            
          </div>}
    </Layout>
  
  );
}
export default Expenses;
