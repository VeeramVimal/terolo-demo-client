import React, { useState, useEffect } from "react";
import { BarChartData, data, options } from "./chartdata";
import Chart from "react-apexcharts";
import { userData, userColumns } from "../../mockData/Dashboard2";
import Tables from "../../components/table";
import images from "../../assets/Images/user.png";

import "./dashboard2.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const state = {
  series: [76],
  options: {
    chart: {
      height: 450,
      type: "radialBar",
    },

    series: [67],
    // colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#000",
            fontSize: "13px",
          },
          value: {
            color: "#000",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stroke: 10,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  },
};

const Company = [
  {
    id: 1,
    name: "Team Health Score",
    text: " keep your info updated to increase the number of interactions",
    view: "view count",
    count: "124",
    progress: " Percentage",
    percentage: "56%",
  },
];
const CompanyData = [
  {
    view: "Revenue",
    // count: "124",
    progress: " Expenses",
    // percentage: "56%",
  },
];
const datass = [
  {
    chart: (
      <Chart
        options={BarChartData.options}
        series={BarChartData.series}
        type="area"
        //  width={750}
        height={300}
      />
    ),
  },
];

export default function () {
  const [percentage, setPercentage] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 76) {
        setPercentage(percentage + 1);
      }
    }, 200);
  }, [percentage]);
  const show = () => {
    setVisible(true);
  };
  return (
    <div className="py-5">
      <div className="flex text-[18px] font-bold text-[#22314F] ">
        <h1 className="text-base font-bold text-[#22314F] flex items-center">
          Overall Finance
        </h1>

        {CompanyData.map((item) => {
          return (
            <div className=" md:flex  justify-center items-center">
              <div className="flex justify-around  py-5 md:py-0 text-[8px] md:text-[8px] lg:text-xs items-center">
                <div className="flex justify-center items-center ml-10">
                  <div className="w-2 h-2 rounded-full bg-primary mx-1 text-textcolor text-[8px] md:text-[8px] lg:text-xs"></div>
                  <span>{item.view}</span>{" "}
                  <span className="font-bold ml-1"> {item.count} </span>
                </div>
                <div className="flex justify-center items-center ml-10">
                  {" "}
                  <div className="w-2 h-2 rounded-full bg-green-500 mx-1 text-textcolor text-[8px] md:text-[8px] lg:text-xs"></div>
                  <span>{item.progress}</span>{" "}
                  <span className="font-bold ml-1">{item.percentage}</span>
                </div>
              </div>

              <div className="ml-4 ">
                <select
                  id="month"
                  className="border border-bordercolor text-textcolor text-sm rounded-lg focus:ring-primary focus:border-bordercolor block p-2 mx-2  dark:border-bordercolor dark:text-white dark:focus:ring-bordercolor dark:focus:border-bordercolor focus-visible:outline-bordercolor focus-visible:outline-0 w-40"
                >
                  <option selected>Monthly</option>
                  <option value="US">Yearly</option>
                  <option value="CA">Weekly</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:flex">
        {datass.map((item) => {
          console.log("item=======", item);
          return (
            <div className=" relative right-4 top-6 w-80 md:w-full fill-gray-300">
              {item.chart && item.chart}
            </div>
          );
        })}
        <div className=" py-5 lg:py-0 grid grid-flow-row auto-rows-max justify-center ">
          {Company.map((item) => {
            return (
              <div className=" border border-bordercolor border-solid md:w-60   rounded-lg">
                <div className="flex justify-between p-2.5 items-center">
                  <div className="text-sm font-bold">{item.name}</div>
                  <div className="group relative mt-1 pl-10">
                    <button className="text-black h-10 rounded">
                      <i class="ri-more-line text-lg"></i>
                    </button>
                    <nav
                      tabindex="0"
                      className="dropdown-bg W-52 border-solid border-2 invisible  absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
                    >
                      <ul className="py-1 PX-5">
                        <li>
                          <a href="#" className="block px-4 py-2 ">
                            View
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2">
                            Suspend
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2">
                            Remove
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="border-t border-b border-bordercolor flex flex-col justify-center items-center p-6">
                  <div className="color_styless">
                    {/* <Chart
                      options={state.options}
                      series={state.series}
                      type="radialBar"
                    /> */}
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  {/* </div> */}
                  <div className="text-center text-[8px] md:text-[8px] lg:text-xs text-textcolor mt-2">
                    {item.text}
                  </div>
                  <button className="w-24 h-8 font-medium text-xs rounded-md bg-primary text-white mt-5 pt-0 pb-0.5">
                    <b>Explore</b>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="  pt-5">
        <div className=" ">
          <h1 className="text-base font-bold text-[#22314F] py-5">
            Top customers
          </h1>
          <Tables
            show={show}
            columns={userColumns}
            data={userData}
            pagination={false}
            scroll={{
              x: 700,
            }}
          />
        </div>
        <div className="">
          <h1 className="pt-5 text-base font-bold text-[#22314F] py-5 ">
            Team Performance
          </h1>
          <div className="lg:flex justify-between">
            <div className="mt-5 flex border-2 rounded-lg border-gray-100 p-4">
              <img src={images} className="w-8 h-8 rounded-full" />
              <img src={images} className="w-8 h-8 rounded-full" />
              <img src={images} className="w-8 h-8 rounded-full " />
              <h1 className="pl-3 ml-8 border-l-2 border-green-200 text-[15px] font-bold text-[#4c5875]">
                {" "}
                User Guide Team
                <br />
                <span className="text-[15px] font-medium text-[#8f9ab5]">
                  52% .420 View
                </span>
              </h1>
            </div>
            <div className="mt-5 flex border-2 rounded-lg border-gray-100  p-4">
              <img src={images} className="w-8 h-8 rounded-full" />
              <img src={images} className="w-8 h-8 rounded-full" />
              <img src={images} className="w-8 h-8 rounded-full " />
              <h1 className="pl-3 ml-8 border-l-2 border-green-200 text-[15px] font-bold text-[#4c5875]">
                {" "}
                Rontas NT group
                <br />
                <span className="text-[15px] font-medium text-[#8f9ab5]">
                  46% .120 View
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
