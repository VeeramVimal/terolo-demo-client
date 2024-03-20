import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import PDF from "../../../assets/Images/pdf.png";
import PHOTO from "../../../assets/Images/photo.png";
import { deleteTicket, getAllTickets } from "./tickets.action";
function ViewTickets({ setView, data, setEdit, edit, assignData }) {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    setView(false);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTicket(id));
        dispatch(getAllTickets);
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      }
    });
  };

  const desc = function decodeHTMLEntities(text) {
    let textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };
  return (
    <div className="add-business md:m-3 m-0">
      <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-[16px] items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
        <i
          onClick={() => {
            setView(false);
          }}
          className="ri-close-line ri-xl text-black"
        />
      </div>
      <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full ">
        <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen p-6">
          <h1 className="font-bold text-[16px]"> Ticket - {data?.ticketId}</h1>
          <div className="mt-4">
            <div className="text-[16px]  font-medium ">Issue</div>
            <div className="text-[14px] py-2 text-textcolor">
              {data?.issueTitle}
            </div>
          </div>
          <div className="mt-2">
            <div className="text-[16px]  font-medium ">Category</div>
            <div className="text-[14px] py-2 text-textcolor">
              {data?.ticketCategory}
            </div>
          </div>
          <div className="mt-2">
            <div className="text-[16px]  font-medium ">Prority</div>
            <div className="text-[14px] py-2 text-textcolor">
              {data?.ticketPriority}
            </div>
          </div>
          <div className="mt-2">
            <div className="text-[16px]  font-medium ">Company</div>
            <div className="text-[14px] py-2 text-textcolor">
              {data?.companyDetail}
            </div>
          </div>
        </div>
        <div className="ml-6 lg:w-2/3 sm:w-3/5  w-full ">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-[#22314F] text-lg font-bold ">
                Estore - Ecommerce App Development{" "}
              </div>
              <div className="flex md:my-0 xs:my-2 items-center">
                <div className="lg:my-0 md:my-2 sm:my-1 my-2 text-sm">
                  {" "}
                  California , USA
                </div>
              </div>
            </div>
            <div className="flex">
              <button
                type="button"
                className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
              >
                <span
                  onClick={onDelete.bind(this, data.id)}
                  className="text-[#AC0C02]"
                >
                  Delete
                </span>
              </button>
              <button
                onClick={() => {
                  if (data) {
                    setEdit(true);
                  }
                  if (edit) {
                    setView(false);
                  }
                }}
                type="submit"
                className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="pt-8 mb-4">
            <h1 className="text-[16px] text[#22314F] font-bold">Description</h1>
            <p className="text-[14px] py-2 text-textcolor">
              {desc(data?.ticketDescription)}
            </p>
          </div>
          <div className="pt-4">
            <h1 className="text-base  font-bold">Files</h1>
            <div className="flex justify-between">
              <div className="relative mb-8 w-[36%]">
                <label
                  for="invoice"
                  className="block mb-2 py-2
                            text-sm  font-bold text-textcolor"
                >
                  Issue(Image)
                </label>
                <div className="border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-[8px] px-[18px] text-blue-600">
                  <div className=" mr-2">
                    <a
                      href={`${data?.ticketIssueImage}`}
                      download={`${data?.ticketIssueImageName}`}
                    >
                      {data.ticketIssueImageName ? (
                        <img
                          src={
                            data.ticketIssueImageName.includes(".pdf")
                              ? `${PDF}`
                              : `${PHOTO}`
                          }
                          alt=""
                          className="w-[30px]"
                        />
                      ) : (
                        ""
                      )}
                    </a>
                  </div>
                  <div>
                    <label>
                      <div className="text-primary flex-nowrap text-base md:text-justify py-[2px] px-[2px] rounded-sm text-[12px]">
                        {data?.ticketIssueImageName}
                      </div>
                      <input
                        name="ticketIssueDoc"
                        type="file"
                        className="hidden"
                        onChange={""}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative mb-8 w-[36%]">
                <label
                  for="invoice"
                  className="block mb-2 py-2
                            text-sm  font-bold text-textcolor"
                >
                  Issue(Document)
                </label>
                <div className=" border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-[8px] px-[18px] text-blue-600">
                  <div className=" mr-2">
                    <a
                      href={`${data.ticketIssueDoc}`}
                      download={`${data.ticketIssueDocName}`}
                    >
                      {data.ticketIssueDocName ? (
                        <img
                          src={
                            data.ticketIssueDocName.includes("pdf")
                              ? `${PDF}`
                              : `${PHOTO}`
                          }
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </a>
                  </div>
                  <div>
                    <label>
                      <div className="text-primary flex-nowrap text-base md:text-justify py-[2px] px-[2px] rounded-sm text-[12px]">
                        {data.ticketIssueDocName}
                      </div>
                      <input
                        name="ticketIssueDoc"
                        type="file"
                        className="hidden"
                        onChange={""}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[16px] font-bold mt-3">Assigned to</div>
            {assignData.map((item, index) => {
              if (data.peopleId.includes(item.id) === true) {
                return (
                  <div key={index}>
                    <p className="text-[14px] py-2 text-textcolor">
                      {item.name} - {item.ed_currentDesignation}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTickets;
