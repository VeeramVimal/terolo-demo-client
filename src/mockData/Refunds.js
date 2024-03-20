import { Menu, Dropdown } from "antd";
const menu = () => {
  return (
    <Menu
      items={[
        {
          label: (
            <div className="flex items-center pl-7">
              <div className="text-sm font-normal text-blue-400" type="">
                view
              </div>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div className="text-sm font-normal text-blue-400">edit</div>
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div className="text-sm font-normal text-blue-400">delete</div>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );
};

export default menu;

export const paymentData = [
  {
    key: 1,
    Refund:"RID-3068",
    Order: "#3068",
    date: "06 Sept 2022",
    amountPaid: "220000",
    Refunded: "5500",
    company: "Tcs",
    customer: "Aydan Fitzgerald",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 2,
    Refund:"RID-3067",
    Order: "#3067",
    date: "16 Aug2 022",
    amountPaid: "130000",
    Refunded: "5500",
    company: "Thinroot",
    customer: "Richard Flynn",
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        Cancelled
      </div>
    ),
    action: "",
  },
  {
    key: 3,
    Refund:"RID-3066",
    Order: "#3066",
    date: "09 Sept 2022",
    amountPaid: "180000",
    Refunded: "5500",
    company: "oneux",
    customer: "Mitchell Oconnor",
    status: (
      <div className="bg-[#F7F9FF] text-[#6E78AC] w-20 text-center rounded">
        Pending
      </div>
    ),
    action: "",
  },
  {
    key: 4,
    Refund:"RID-3065",
    Order: "#3065",
    date: "09 Oct 2022",
    amountPaid: "550000",
    Refunded: "5500",
    company: "Rippleforce",
    customer: "Yasmine Valdez",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 5,
    Refund:"RID-3064",
    Order: "#3064",
    date: "06 Sept 2022",
    amountPaid: "150000",
    Refunded: "5500",
    company: "Human",
    customer: "Kenneth Mcconnell",
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        Cancelled
      </div>
    ),
    action: "",
  },
  {
    key: 6,
    Refund:"RID-3063",
    Order: "#3063",
    date: "09 Oct 2022",
    amountPaid: "250000",
    Refunded: "5500",
    company: "Moviewood",
    customer: "Maxim Cummings",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 7,
    Refund:"RID-3062",
    Order: "#3062",
    date: "02 Nov 2022",
    amountPaid: "40000",
    Refunded: "5500",
    company: "Tcs",
    customer: "Maxim Cummings",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 8,
    Refund:"RID-3061",
    Order: "#3061",
    date: "08 Nov 2022",
    amountPaid: "100000",
    Refunded: "5500",
    company: "Tcs",
    customer: "Maxim Cummings",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
];

export const paymentColumns = [
  {
    title: "REFUND ID",
    dataIndex: "Refund",
    key: "Refund",
    sorter: (a, b) => a.Refund.length - b.Refund.length,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },

  {
    title: "ORDER ID",
    dataIndex: "Order",
    key: "Order",
    sorter: (a, b) => a.Order.length - b.Order.length,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },

  {
    title: "DATE PAID",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => a.date.length - b.date.length,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "COMPANY",
    dataIndex: "company",
    key: "company",
    sorter: (a, b) => a.company - b.company,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "CUSTOMER",
    dataIndex: "customer",
    key: "customer",
    sorter: (a, b) => a.customer - b.customer,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "AMOUNT PAID",
    dataIndex: "amountPaid",
    key: "amountPaid",
    sorter: (a, b) => a.amountPaid - b.amountPaid,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "REFUDED AMOUNT",
    dataIndex: "Refunded",
    key: "Refunded",
    sorter: (a, b) => a.Refunded - b.Refunded,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status - b.status,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
 
];
