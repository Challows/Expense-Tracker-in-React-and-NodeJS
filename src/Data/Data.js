// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilChart,
    UilTransaction,
    UilUserCircle,
    UilSetting,
    UilTrashAlt,
    UilServerConnection
  } from "@iconscout/react-unicons";

  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  export const DeleteIcon = UilTrashAlt;
  export const NetworkIcon = UilServerConnection;
  // Sidebar Data
  export const MenuData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilUserCircle,
      heading: "Profile",
    },
    {
      icon: UilTransaction,
      heading: "Transact",
    },
    {
      icon: UilChart,
      heading: "Analytics",
    },
    {
      icon: UilSetting,
      heading: 'Settings'
    },
  ];

  // Personal data
  export const personalData = {
    name: 'Charles Duya',
    age: 43,
    Target: {
      savings: 5000,
      income: 25000,
      expenses: 10000
    },
    bio: "If you are not willing to do the things other people don\'t want to do, you wont have the things other peoples don\'t",
    img: '#'
  }

  // Financial data

  export const financialData = {
    balance: 0,
    lastMonth: {
      income: 0,
      expenses: 0,
      savings: 0,
    },
    thisMonth: {
      income: 0,
      expenses: 0,
      savings: 0,
      incomeTarget: 100000
    }
    
  }
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Income",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: (financialData.thisMonth.income/financialData.thisMonth.incomeTarget*100),
      value: financialData.thisMonth.income.toLocaleString(),
      png: UilUsdSquare,
      series: [
        {
          name: "Income",
          data: [31, 40, 128, 571, 102, 69, 10],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: (financialData.thisMonth.expenses/(financialData.thisMonth.incomeTarget*0.5))*100,
      value: financialData.thisMonth.expenses.toLocaleString(),
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Expenses",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Savings",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 0,
      value: financialData.thisMonth.savings.toLocaleString(),
      png: UilClipboardAlt,
      series: [
        {
          name: "Savings",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];

  export const dummyData = {

    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-01-01T00:00:00.000Z",
          "2023-02-01T01:30:00.000Z",
          "2023-03-01T02:30:00.000Z",
          "2023-04-01T03:30:00.000Z",
          "2023-05-01T04:30:00.000Z",
          "2023-06-01T05:30:00.000Z",
          "2023-07-01T06:30:00.000Z",
        ],
      },
    },
  };

  export const rows = [
    {description: 'Samaki ya Lilian', transactionId: 18908424, date: '16 January 2023', amount: 200, type: 'debit'}
  ]

  export const reviewData = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-01-01T00:00:00.000Z",
          "2023-02-01T01:30:00.000Z",
          "2023-03-01T02:30:00.000Z",
          "2023-04-01T03:30:00.000Z",
          "2023-05-01T04:30:00.000Z",
          "2023-06-01T05:30:00.000Z",
          "2023-07-01T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };

  