import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import TypeSpecimenOutlinedIcon from "@mui/icons-material/TypeSpecimenOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

//shortcut
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

//notifications
import women1 from "../asset/female1.png";
import man2 from "../asset/man2.png";
import man3 from "../asset/man3.png";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

//dropdown buttons
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

// sidebar app buttons
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

// user interface
import TitleIcon from "@mui/icons-material/Title";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddCardIcon from "@mui/icons-material/AddCard";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import HdrWeakOutlinedIcon from "@mui/icons-material/HdrWeakOutlined";

export const popup_searchButtons = {
  popularSearches: [
    {
      btnName: "Analytics",
      icon: <BarChartOutlinedIcon></BarChartOutlinedIcon>,
    },
    { btnName: "CRM", icon: <TrackChangesOutlinedIcon /> },
    { btnName: "eCommerce", icon: <ShoppingCartOutlinedIcon /> },
    { btnName: "User List", icon: <PeopleOutlineIcon /> },
  ],
  appPages: [
    { btnName: "Calendar", icon: <CalendarTodayIcon /> },
    { btnName: "Invoice List", icon: <FormatListBulletedIcon /> },
    { btnName: "Pricing", icon: <AttachMoneyIcon /> },
    { btnName: "Account Settings", icon: <SettingsOutlinedIcon /> },
  ],
  userInterface: [
    { btnName: "Typography", icon: <TypeSpecimenOutlinedIcon /> },
    { btnName: "Tabs", icon: <BackupTableOutlinedIcon /> },
    { btnName: "Buttons", icon: <DataSaverOnIcon /> },
    { btnName: "Advanced Cards", icon: <CreditCardIcon /> },
  ],
  formstables: [
    { btnName: "Select", icon: <FormatListBulletedOutlinedIcon /> },
    { btnName: "Autocomplete", icon: <CropSquareOutlinedIcon /> },
    { btnName: "Table", icon: <TableViewOutlinedIcon /> },
    { btnName: "Date Pickers", icon: <CalendarMonthOutlinedIcon /> },
  ],
};

export const languages = [
  {
    lan: "English",
  },
  { lan: "Chinese" },
  { lan: "French" },
];

export const iconshortcuts = [
  {
    icon: <CalendarMonthIcon />,
    shortcutTitle: "Calendar",
    shortcutSubtitle: "Appointments",
  },
  {
    icon: <MenuBookIcon />,
    shortcutTitle: "Invoice App",
    shortcutSubtitle: "Manage Accounts",
  },
  {
    icon: <PermIdentityIcon />,
    shortcutTitle: "Users",
    shortcutSubtitle: "Manage Users",
  },
  {
    icon: <TaskAltIcon />,
    shortcutTitle: "Role Management",
    shortcutSubtitle: "Permissions",
  },
  {
    icon: <PieChartOutlineIcon />,
    shortcutTitle: "Dashboard",
    shortcutSubtitle: "User Dashboard",
  },
  {
    icon: <SettingsIcon />,
    shortcutTitle: "Settings",
    shortcutSubtitle: "Account Settings",
  },
  {
    icon: <HelpOutlineIcon />,
    shortcutTitle: "Help Center",
    shortcutSubtitle: "FAQs & Articles",
  },
  {
    icon: <DriveFolderUploadIcon />,
    shortcutTitle: "Dialogs",
    shortcutSubtitle: "Useful Dialogs",
  },
];

export const messageExamples = [
  {
    primary: "Congratulation Flora!",
    secondary: "Won the monthly best seller badge",
    date: "Today",
    person: <Avatar alt="Profile Picture" src={women1} />,
  },
  {
    primary: "New User Registered.",
    secondary: `5 hours ago`,
    person: <Avatar sx={{ bgcolor: deepPurple[500] }}>RA</Avatar>,
    date: "Yesterday",
  },
  {
    primary: "New message received",
    secondary: "You have 10 unread messages",
    person: <Avatar alt="Profile Picture" src={man2} />,
    date: "11 Aug",
  },
  {
    primary: "Paypal",
    secondary: "Received Payment",
    person: <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>,
    date: "25 May",
  },
  {
    primary: "Received Order",
    secondary: "New order received from John.",
    person: <Avatar alt="Profile Picture" src={man3} />,
    date: "19 Mar",
  },
  {
    primary: "Finance report has been generated ",
    secondary: "25 hrs ago",
    person: <Avatar sx={{ bgcolor: deepOrange[500] }}>C</Avatar>,
    date: "27 Dec",
  },
];

//sidebar button

export const SIDEBAR_BUTTON_LIST_APP = [
  {
    buttName: "Email",
    icon: <MailOutlineOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
  {
    buttName: "Chat",
    icon: (
      <ChatBubbleOutlineOutlinedIcon sx={{ height: "25px", width: "25px" }} />
    ),
    children: null,
  },
  {
    buttName: "Calendar",
    icon: <DescriptionOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
  {
    buttName: "Invoice",
    icon: <ReceiptIcon />,
    children: [
      {
        buttName: "List",
        children: null,
      },
      {
        buttName: "Preview",
        children: null,
      },
      {
        buttName: "Edit",
        children: null,
      },
      {
        buttName: "Add",
        children: null,
      },
    ],
  },
  {
    buttName: "User",
    icon: <PersonOutlineOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: [
      {
        buttName: "List",
        children: null,
      },
      {
        buttName: "View",
        children: [
          {
            buttName: "Account",
            children: null,
          },
          {
            buttName: "Security",
            children: null,
          },
          {
            buttName: "Billing & Plans",
            children: null,
          },
          {
            buttName: "Notifications",
            children: null,
          },
          {
            buttName: "Connection",
            children: null,
          },
        ],
      },
    ],
  },
  {
    buttName: "Roles & Permission",
    icon: <VerifiedUserOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: [
      {
        buttName: "Roles",
        children: null,
      },
      {
        buttName: "Permissions",
        children: null,
      },
    ],
  },
  {
    buttName: "Pages",
    icon: <CreditCardOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: [
      {
        buttName: "User Profile",
        children: [
          {
            buttName: "Profile",
            children: null,
          },
          {
            buttName: "Teams",
            children: null,
          },
          {
            buttName: "Projects",
            children: null,
          },
          {
            buttName: "Connections",
            children: null,
          },
        ],
      },
      {
        buttName: "Account Settings",
        children: [
          {
            buttName: "Account",
            children: null,
          },
          {
            buttName: "Security",
            children: null,
          },
          {
            buttName: "Billing & Plans",
            children: null,
          },
          {
            buttName: "Notifications",
            children: null,
          },
          {
            buttName: "Connection",
            children: null,
          },
        ],
      },
      {
        buttName: "FAQ",
        children: null,
      },
      {
        buttName: "Help Center",
        children: null,
      },
      {
        buttName: "Pricing",
        children: null,
      },
      {
        buttName: "Miscellaneous",
        children: [
          {
            buttName: "Coming Soon",
            children: null,
          },
          {
            buttName: "Under Maintenance",
            children: null,
          },
          {
            buttName: "Page Not Found - 404",
            children: null,
          },
          {
            buttName: "Not Authorized - 401",
            children: null,
          },
          {
            buttName: "Server Error - 500",
            children: null,
          },
        ],
      },
    ],
  },
];

export const SIDEBAR_BUTTON_LIST_USER = [
  {
    buttName: "Typography",
    icon: <TitleIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
  {
    buttName: "Icons",
    icon: <InsertEmoticonIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
  {
    buttName: "Icons Test",
    icon: <InsertEmoticonIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
  {
    buttName: "Cards",
    icon: <AddCardIcon sx={{ height: "25px", width: "25px" }} />,
    children: [
      {
        buttName: "Basic",
        children: null,
      },
      {
        buttName: "Advanced",
        children: null,
      },
      {
        buttName: "Statistics",
        children: null,
      },
      {
        buttName: "Widgets",
        children: null,
      },
      {
        buttName: "Gamification",
        children: null,
      },
      {
        buttName: "Actions",
        children: null,
      },
    ],
  },
];

export const SIDEBAR_BUTTON_LIST_FORMS = [
  {
    buttName: "Forms Elements",
    icon: <FeedOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: [
      {
        buttName: "Text Field",
        children: null,
      },
      {
        buttName: "Select",
        children: null,
      },
      {
        buttName: "Checkbox",
        children: null,
      },
      {
        buttName: "Radio",
        children: null,
      },
      {
        buttName: "Custom Inputs",
        children: null,
      },
      {
        buttName: "Textarea",
        children: null,
      },
    ],
  },
  {
    buttName: "Form Layouts",
    icon: <FeedOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
  {
    buttName: "Form Validation",
    icon: <ChecklistRtlOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
];
export const SIDEBAR_BUTTON_LIST_CHARTS = [
  {
    buttName: "Charts",
    icon: <InsertChartOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: [
      {
        buttName: "Apex",
        children: null,
      },
      {
        buttName: "Recharts",
        children: null,
      },
      {
        buttName: "ChartJS",
        children: null,
      },
    ],
  },
  {
    buttName: "Access Control",
    icon: <TuneOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
  {
    buttName: "Others",
    icon: <HdrWeakOutlinedIcon sx={{ height: "25px", width: "25px" }} />,
    children: null,
  },
];

//bar chart

export const totalRevenueBarData = [
  {
    id: 1,
    year: 2022,
    gain: 18,
  },
];
