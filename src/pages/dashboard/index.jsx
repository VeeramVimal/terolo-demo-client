import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Chart from "react-apexcharts";
import "./dashboard.css";
import {
  BarChartData,
  chartdatas,
  datachart,
  data,
  options,
} from "./chartData";
import { useNavigate } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
const state = {
  series: [100],
  options: {
    chart: {
      height: 180,
      type: "radialBar",
    },

    series: [67],

    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },

        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "13px",
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },

    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  },
};
const datas = [
  {
    chart: (
      <Chart
        options={BarChartData.options}
        series={BarChartData.series}
        type="area"
      />
    ),
  },
];
const chardata = [
  {
    chart: (
      <Chart
        options={chartdatas.options}
        series={chartdatas.series}
        type="donut"
        width={300}
        height={180}
      />
    ),
  },
];
const bubblechart = [
  {
    chart: (
      <Chart
        options={datachart.options}
        series={datachart.series}
        type="scatter"
      />
    ),
  },
];
const progressdata = [
  {
    chart: (
      <Chart
        options={datachart.options}
        series={datachart.series}
        type="scatter"
        width={300}
        height={140}
      />
    ),
  },
];
const datass = [
  {
    id: 1,
    titel: "Session",
    amount: "1,127,450",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-1 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "Current vs previousmonth",
  },
  {
    id: 2,
    titel: "Page Views",
    amount: " 117,450",
    progress: (
      <div className="bg-red-200 text-red-500 rounded-full px-3.5 py-1 mx-1 flex text-xs">
        12 %
      </div>
    ),
    text: "Current vs previousmonth",
  },
  {
    id: 3,
    titel: "Users",
    amount: "4,117,450",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-1 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "Current vs previousmonth",
  },
  {
    id: 4,
    titel: "Total Businesses",
    amount: "39.21",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-1 rounded-full  flex text-xs">
        23%
      </div>
    ),
    text: "  Current vs previousmonth",
  },
];

export default function Home() {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (percentage < 76) {
        setPercentage(percentage + 1);
      }
    }, 200);
  }, [percentage]);

  return (
    <Layout>
      <div className="mx-10 mt-[7px] ">
        <div className=" py-5 md:py-5 grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-4 md:w-full justify-center">
          {datass.map((item) => {
            return (
              <div className="flex  shadow-lg shadow-gray-300/300">
                <div className=" flex  w-full flex-col py-5 pl-3">
                  <div className="text-sm my-1 font-semibold text-[#22314F] ">
                    {item.titel}
                  </div>
                  <div className="lg:text-[20px] md:text-[18px] text-xs font-bold py-2 flex items-center ">
                    {item.amount}
                    <span className=" ">{item.progress}</span>
                  </div>
                  <div className="text-xs text-[#6E78AC] mt-1">{item.text}</div>
                </div>
                <div className="">{item.chart && item.chart}</div>
              </div>
            );
          })}
        </div>
        <div className="   grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-2 ">
          <div className="shadow-lg shadow-gray-300/300 p-2">
            <div className="border-b border-solid border-bordercolor  z-[9999] flex justify-between group relative mt-1 ">
              <span className=" mt-2 font-bold">Total sales 123,112</span>
              <button className="text-black h-10 rounded">
                <i class="ri-more-2-line ri-lg"></i>
              </button>
              <nav
                tabindex="0"
                className="dropdown-bg z-9999 W-52 border-solid border-2 invisible  absolute right-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
              >
                <ul className="py-1 PX-5">
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      <i class="ri-eye-line ri-lg mr-1.5 align-sub"></i>
                      View
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-honor-of-kings-line ri-lg mr-1.5 align-sub"></i>
                      Suspend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-close-circle-line ri-lg mr-1.5 align-sub"></i>{" "}
                      Remove
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                      Delete
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {datas.map((item) => {
              console.log("item=======", item);
              return (
                <div className=" p-2 relative right-4 fill-gray-300">
                  {item.chart && item.chart}
                </div>
              );
            })}
          </div>
          <div className="shadow-lg shadow-gray-300/300 p-2">
            <div className="border-b border-solid border-bordercolor   flex justify-between group relative mt-1 ">
              <span className=" mt-2 font-bold">Visitors by Country</span>
              <button className="text-black h-10 rounded">
                <i class="ri-more-2-line ri-lg"></i>
              </button>
              <nav
                tabindex="0"
                className="dropdown-bg W-52 z-[9999] border-solid border-2 invisible  absolute right-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
              >
                <ul className="py-1 PX-5">
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      <i class="ri-eye-line ri-lg mr-1.5 align-sub"></i>
                      View
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-honor-of-kings-line ri-lg mr-1.5 align-sub"></i>
                      Suspend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-close-circle-line ri-lg mr-1.5 align-sub"></i>{" "}
                      Remove
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                      Delete
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ComposableMap
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [-10.0, -53.0, 0],
                scale: 1200,
              }}
            >
              <Graticule stroke="#EAEAEC" />
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#9998A3"
                      stroke="#EAEAEC"
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>

        <div className=" py-5 grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-4 md:w-full justify-center">
          <div className="shadow-lg shadow-gray-300/300 p-2">
            <div className="border-b border-solid border-bordercolor z-[9999]  flex justify-between group relative mt-1 ">
              <h1 className="mt-5 font-bold">Visitor traffic</h1>
              <button className="text-black mt-3 h-10 rounded">
                <i class="ri-more-2-line text-lg"></i>
              </button>
              <nav
                tabindex="0"
                className="dropdown-bg W-52 border-solid border-2 invisible  absolute right-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
              >
                <ul className="py-1 PX-5">
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      <i class="ri-eye-line ri-lg mr-1.5 align-sub"></i>
                      View
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-honor-of-kings-line ri-lg mr-1.5 align-sub"></i>
                      Suspend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-close-circle-line ri-lg mr-1.5 align-sub"></i>{" "}
                      Remove
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                      Delete
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="">
              {chardata.map((item) => {
                return (
                  <div className="border-b py-4 border-solid border-bordercolor">
                    {item.chart && item.chart}
                  </div>
                );
              })}
              <div className="flex gap-4 py-3">
                <h1 className="ml-2 font-semibold">
                  <span className="text-blue-500">75%</span> Referal
                </h1>
                <h1 className="font-semibold">
                  <span className="text-blue-500">11%</span> Email
                </h1>
                <h1 className="font-semibold">
                  <span className="text-blue-500">6%</span> Direct
                </h1>
                <h1 className="font-semibold">
                  <span className="text-blue-500">6%</span> Social
                </h1>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-gray-300/300 p-2">
            <div className="border-b border-solid border-bordercolor z-[9999] flex justify-between group relative mt-1 ">
              <h1 className="mt-5 font-bold">
                Avg Session Duration and bounce rate{" "}
              </h1>
              <button className="text-black mt-3 h-10 rounded">
                <i class="ri-more-2-line text-lg"></i>
              </button>
              <nav
                tabindex="0"
                className="dropdown-bg W-52 border-solid border-2 invisible  absolute right-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
              >
                <ul className="py-1 PX-5">
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      <i class="ri-eye-line ri-lg mr-1.5 align-sub"></i>
                      View
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-honor-of-kings-line ri-lg mr-1.5 align-sub"></i>
                      Suspend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-close-circle-line ri-lg mr-1.5 align-sub"></i>{" "}
                      Remove
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                      Delete
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="">
              {bubblechart.map((item) => {
                return <div className="">{item.chart && item.chart}</div>;
              })}
              <h1 className="text-center">Bounce Rate</h1>
            </div>
          </div>
          <div className=" shadow-lg shadow-gray-300/300 p-2">
            <div className="border-b border-solid border-bordercolor flex justify-between group relative mt-1 ">
              <h1 className="mt-5 font-bold">Product Usage by device type</h1>
              <button className="text-black mt-3 h-10 rounded">
                <i class="ri-more-2-line text-lg"></i>
              </button>
              <nav
                tabindex="0"
                className="dropdown-bg W-52 border-solid border-2 invisible  absolute right-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
              >
                <ul className="py-1 PX-5">
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      <i class="ri-eye-line ri-lg mr-1.5 align-sub"></i>
                      View
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-honor-of-kings-line ri-lg mr-1.5 align-sub"></i>
                      Suspend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-close-circle-line ri-lg mr-1.5 align-sub"></i>{" "}
                      Remove
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      <i class="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                      Delete
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="py-5">
              <h1 className="font-semibold">52,142</h1>
              <h2 className="font-semibold">Total Users</h2>
            </div>

            <div className=" py-5 flex w-full  rounded-full dark:bg-gray-700 ">
              <div className="bg-blue-600 py-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none  w-60">
                {" "}
                75%{" "}
              </div>
              <div className="bg-gray-600 py-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none  w-20">
                {" "}
                25%{" "}
              </div>
              <div className="bg-sky-300 py-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none  w-12">
                {" "}
              </div>
            </div>

            <div className=" flex gap-4   rounded-full mt-3 ">
              <div>
                <h1 className="font-semibold">Mobile</h1>
                <span className="text-[8px]">42.302</span>
                <div className="bg-blue-600  rounded-full py-1 text-xs font-medium text-blue-100 text-center p-0.5 leading-none  w-16 md:w-20">
                  {" "}
                </div>
              </div>
              <div>
                <h1 className="font-semibold">Desktop</h1>
                <span className="text-[8px]">42.302</span>

                <div className="bg-gray-600 py-1 rounded-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none  w-16 md:w-20">
                  {" "}
                </div>
              </div>
              <div>
                <h1 className="font-semibold">Tablet</h1>
                <span className="text-[8px]">42.302</span>

                <div className="bg-sky-300 py-1 rounded-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none  w-16 md:w-20">
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
