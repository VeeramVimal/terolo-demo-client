import React from "react";

function CompanyDetails() {
  var ordersData = JSON.parse(localStorage.getItem("orderData"));
  return (
    <div>
      <div className="text-[16px] text-[#22314F] font-bold mb-[6px] ">
        {" "}
        About{" "}
      </div>
      <div className="">
        {" "}
        Estore is a new ecommerce platform to support milleons of store to
        deliver on demand
      </div>
      <div className="text-[16px] text-[#22314F] font-bold mt-6 mb-[6px]">
        Clients{" "}
      </div>
      <div className=""> {ordersData.customer} </div>
      <div className="text-[16px] text-[#22314F] font-bold mt-6 mb-[6px]">
        Prious Projects{" "}
      </div>
      <div> {ordersData.company} -Official website redesign</div>
      <div> {ordersData.company} -Big data visualization </div>

      <div className="text-[16px] text-[#22314F] font-bold mt-6 mb-[6px]">
        {" "}
        Headoffice{" "}
      </div>
      <div> ONEUX Creative Studio</div>
      <div> NO 1 , 1st Avenue HSR Layout, </div>
      <div> Bangalore - 500032 ,Karnataka - India</div>

      <div className="text-[16px] text-[#22314F] font-bold mt-6 mb-[6px]">
        {" "}
        Communication{" "}
      </div>
      <div> Mobile Number : 1234567890</div>
      <div> Email ID : {ordersData.email}</div>
      <div> Email ID : {ordersData.company}.com</div>
    </div>
  );
}

export default CompanyDetails;
