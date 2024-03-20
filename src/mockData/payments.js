import { Menu, Dropdown } from "antd";
const menu = () => {
  return (
    <Menu
      items={[
        {
          label: (
            <div className="flex items-center pl-7">
              <div className="text-sm font-normal text-blue-400" type="">
                View
              </div>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div className="text-sm font-normal text-blue-400">Edit</div>
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div className="text-sm font-normal text-blue-400">Delete</div>
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
    invoice: "INV-3068",
    date: "06 Sept 2022",
    amountPaid: "2200",
    customer: "david",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 2,
    invoice: "INV-3069",
    date: "16 Aug2 022",
    amountPaid: "1300",
    customer: "John",
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        Cancelled
      </div>
    ),
    action: "",
  },
  {
    key: 3,
    invoice: "INV-3070",
    date: "09 Sept 2022",
    amountPaid: "1800",
    customer: "Ram",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Pending
      </div>
    ),
    action: "",
  },
  {
    key: 4,
    invoice: "INV-3071",
    date: "09 Oct 2022",
    amountPaid: "5500",
    customer: "Harry",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 5,
    invoice: "INV-3068",
    date: "06 Sept 2022",
    amountPaid: "1500",
    customer: "Sam",
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        Cancelled
      </div>
    ),
    action: "",
  },
  {
    key: 6,
    invoice: "INV-3072",
    date: "09 Oct 2022",
    amountPaid: "2500",
    customer: "Vinod",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 7,
    invoice: "INV-3073",
    date: "02 Nov 2022",
    amountPaid: "4000",
    customer: "Jonny",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 8,
    invoice: "INV-3074",
    date: "08 Nov 2022",
    amountPaid: "TheMath",
    customer: "Robert",
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
    title: "INVOICE",
    dataIndex: "invoice",
    key: "invoice",
    sorter: (a, b) => a.invoice.length - b.invoice.length,
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
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status - b.status,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "ACTION",
    dataIndex: "action",
    key: "action",
    sorter: (a, b) => a.action - b.action,
    ellipsis: {
      showTitle: false,
    },
    render: (_, record) => (
      <Dropdown overlay={menu} trigger={"click"} placement={"bottomRight"}>
        <div className="w-32 flex justify-center items-center text-blue-300">
          Edit<i class="ri-arrow-down-s-fill ri-lg text-black"></i>
        </div>
      </Dropdown>
    ),

    responsive: ["xs", "md"],
  },
];
