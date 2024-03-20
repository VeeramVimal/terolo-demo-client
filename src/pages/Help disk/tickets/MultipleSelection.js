import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
function MultipleSelection({
  title,
  showModal,
  setShowModal,
  list,
  setList,
  remove,
  setQuery,
  show,
  setShow,
  data,
  setFieldValue,
  errors,
  touched,
}) {
  const handleMultiSelectClick = (item) => {
    setFieldValue("peopleId", item.id);
    setList([...list, item]);
  };

  return (
    <div className="text-textcolor font-[600] text-[16px] mb-6 ">
      {title}
      <input
        type="text"
        maxLength={0}
        className="block py-2.5 px-0 w-full text-xs sm:text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder="Select from People"
        onFocus={() => {
          setShowModal(true);
        }}
      />
      {showModal && (
        <OutsideClickHandler onOutsideClick={() => setShowModal(false)}>
          <div className="relative">
            <div className="shadow-md w-[100%] p-4">
              {list && (
                <div className="flex flex-wrap">
                  {list?.map((data, index) => {
                    return (
                      <div
                        className="flex items-center justify-between text-[8px] sm:w-[48%] xs:w-[100%] bg-gray-200 rounded-sm px-1 mb-2 mr-1"
                        key={index}
                      >
                        <div className=" text-[8px] sm:text-[11px]">
                          {data.name} - {data.ed_currentDesignation}{" "}
                        </div>
                        <i
                          className="ri-close-line ml-[2px] text-[16px] font-light"
                          onClick={() => remove(index)}
                        ></i>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex align-baseline mt-8 text-xs">
                <input
                  name="peopleId"
                  type={"text"}
                  className="w-[100%] outline-none md:text-sm border xs:text-[10px] border-[#6E78AC] rounded-sm sm:px-2 px-[2px] py-1"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  onFocus={() => {
                    setShow(true);
                  }}
                />
              </div>
              {show && (
                <div className=" w-[100%] px-2 mt-3 sm:text-[12px] text-[10px] font-medium">
                  {data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleMultiSelectClick(item)}
                      >
                        {item.name} - {item.ed_currentDesignation}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </OutsideClickHandler>
      )}
      {errors.peopleId && touched.peopleId && (
        <span className="text-red-500 font-medium text-sm">
          {errors.peopleId}
        </span>
      )}
    </div>
  );
}

export default MultipleSelection;
