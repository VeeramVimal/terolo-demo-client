import { Menu, Dropdown} from "antd";
const menu = () => {
  return (
    <Menu
      items={[
        {
          label: (
            <div className="flex items-center pl-7">
              <div
                className="text-sm font-normal text-blue-400"
                type=""
              >
                view
              </div>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div
                className="text-sm font-normal text-blue-400"
              >
                edit
              </div>
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div
                className="text-sm font-normal text-blue-400"
              >
                delete
              </div>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );
};

export default menu;

export const orderData = [
  {
    key: 1,
    invoice: "INV-3068",
    date: "06 Sept 2022",
    company: "TCS",
    email: "David@gmail.com",
    customer: "david",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        paid
      </div>
    ),
    action: "",
  },
  {
    key: 2,
    invoice: "INV-3069",
    date: "16 Aug2 022",
    company: "Wipro",
    email: "John@gmail.com",
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
    company: "Infosys",
    email: "Ram@gmail.com",
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
    company: "IBM",
    email: "Harry@gmail.com",
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
    company: "TCS",
    email: "Sam@gmail.com",
    customer: "Sam",
    status: (
      <div className="bg-red-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 6,
    invoice: "INV-3072",
    date: "09 Oct 2022",
    company: "WellsFargo",
    email: "Vinod@gmail.com",
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
    company: "ThiDiff",
    email: "Jonny@gmail.com",
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
    company: "TheMath",
    email: "Robert@gmail.com",
    customer: "Robert",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 9,
    invoice: "INV-3074",
    date: "08 Dec 2022",
    company: "Accenture",
    email: "Rita@gmail.com",
    customer: "Rita",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 10,
    invoice: "INV-3075",
    date: "04 Oct 2022",
    company: "Congizent",
    email: "Rohan@gmail.com",
    customer: "Rohan",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 11,
    invoice: "INV-3077",
    date: "04 Oct 2022",
    company: "Google",
    email: "Virat@gmail.com",
    customer: "Virat",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
  {
    key: 12,
    invoice: "INV-3078",
    date: "11 Dec 2022",
    company: "Microsoft",
    email: "Iqra@gmail.com",
    customer: "Iqra",
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        Paid
      </div>
    ),
    action: "",
  },
];

export const orderColumns = [
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
    title: "DATE",
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
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email - b.email,
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
        edit<i class="ri-arrow-down-s-fill ri-lg text-black"></i>
        </div>
      </Dropdown>
    ),

    responsive: ["xs", "md"],
  },
];



