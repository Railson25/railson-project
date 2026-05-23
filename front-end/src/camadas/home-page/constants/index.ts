import brazilUrl from "@/assets/images/countries/brazil.svg";
import franceUrl from "@/assets/images/countries/france.svg";
import indiaUrl from "@/assets/images/countries/india.svg";
import spainUrl from "@/assets/images/countries/spain.svg";
import switzerlandUrl from "@/assets/images/countries/switzerland.svg";
import unitedKingdomUrl from "@/assets/images/countries/united-kingdom.svg";
import unitedStatesUrl from "@/assets/images/countries/united-states.svg";
import chromeUrl from "@/assets/images/browsers/chrome.png";
import edgeUrl from "@/assets/images/browsers/edge.png";
import firefoxUrl from "@/assets/images/browsers/firefox.png";
import operaUrl from "@/assets/images/browsers/opera.png";
import safariUrl from "@/assets/images/browsers/safari.png";
import type {
  BrowserVisitor,
  CountryStat,
  DashboardAction,
  GeneralReportMetric,
  ImportantNote,
  SalesPerformanceLegendItem,
  SelectOption,
  SellerAudienceItem,
  SellerReportRow,
  SharedFile,
} from "../types";

export const DATE_RANGE_PICKER_OPTIONS = {
  autoApply: false,
  singleMode: false,
  numberOfColumns: 2,
  numberOfMonths: 2,
  showWeekNumbers: true,
  dropdowns: {
    minYear: 1990,
    maxYear: null,
    months: true,
    years: true,
  },
};

export const YEAR_OPTIONS: SelectOption[] = [
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
];

export const SALES_REPORT_FILTER_OPTIONS = [
  "All Transactions",
  "Cash In",
  "Cash Out",
];

export const GENERAL_REPORT_METRICS: GeneralReportMetric[] = [
  {
    label: "Total Assets",
    value: "$149,300",
    icon: "PieChart",
    tone: "primary",
    trend: {
      label: "+5.2%",
      tooltip: "5.2% Higher than last month",
      direction: "up",
      tone: "success",
    },
  },
  {
    label: "New Transactions",
    value: "5.241",
    icon: "CreditCard",
    tone: "pending",
    trend: {
      label: "-2%",
      tooltip: "2% Lower than last month",
      direction: "down",
      tone: "danger",
    },
  },
  {
    label: "New Products",
    value: "1.405",
    icon: "ShoppingBag",
    tone: "warning",
    trend: {
      label: "+4.1%",
      tooltip: "4.1% Higher than last month",
      direction: "down",
      tone: "success",
    },
  },
  {
    label: "New Stores",
    value: "2.034",
    icon: "HardDrive",
    tone: "success",
    trend: {
      label: "-1%",
      tooltip: "1% Lower than last month",
      direction: "down",
      tone: "danger",
    },
  },
];

export const TOP_COUNTRIES: CountryStat[] = [
  { name: "United States", value: "$147.88", flagUrl: unitedStatesUrl },
  { name: "France", value: "$96.68", flagUrl: franceUrl },
  { name: "Spain", value: "$68.24", flagUrl: spainUrl },
  { name: "United Kingdom", value: "$62.56", flagUrl: unitedKingdomUrl },
  { name: "India", value: "$62.56", flagUrl: indiaUrl },
  { name: "Brazil", value: "$51.18", flagUrl: brazilUrl },
  { name: "Switzerland", value: "$34.12", flagUrl: switzerlandUrl },
  { name: "France", value: "$96.68", flagUrl: franceUrl },
  { name: "United Kingdom", value: "$62.56", flagUrl: unitedKingdomUrl },
];

export const PRODUCT_REPORT_TABS = ["Active", "Inactive"];

export const SELLER_REPORT_TABS = ["Daily", "Weekly", "Monthly"];

export const SELLER_REPORT_ROWS: SellerReportRow[] = [
  {
    label: "TOTAL ORDERS",
    today: "231.152",
    yesterday: "131.152",
    change: "+41.%",
    trend: "up",
    tone: "success",
    chartIndex: 0,
  },
  {
    label: "TOTAL SALES",
    today: "$612",
    yesterday: "$413",
    change: "-2%",
    trend: "down",
    tone: "danger",
    chartIndex: 1,
  },
  {
    label: "AVG. PER CUSTOMER",
    today: "$22.5",
    yesterday: "$18.5",
    change: "+51%",
    trend: "up",
    tone: "success",
    chartIndex: 2,
  },
  {
    label: "AVG. PER SELLER",
    today: "$22.5",
    yesterday: "$10.5",
    change: "+21%",
    trend: "down",
    tone: "danger",
    chartIndex: 3,
  },
];

export const SELLER_AUDIENCE: SellerAudienceItem[] = [
  {
    label: "17 - 30 Years old",
    value: "50%",
    dotClassName: "bg-primary/50 border-primary/50",
  },
  {
    label: "31 - 50 Years old",
    value: "30%",
    dotClassName: "bg-pending/50 border-pending/50",
  },
  {
    label: ">= 50 Years old",
    value: "20%",
    dotClassName: "bg-warning/50 border-warning/60",
  },
];

export const SALES_PERFORMANCE_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const SALES_PERFORMANCE_DAYS = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export const SALES_PERFORMANCE_WEEKS = [1, 2, 3, 4];

export const SALES_PERFORMANCE_INTENSITY_CLASSES = [
  "bg-opacity-60",
  "bg-opacity-40",
  "bg-opacity-30",
  "bg-opacity-20",
  "bg-opacity-10",
];

export const SALES_PERFORMANCE_LEGEND: SalesPerformanceLegendItem[] = [
  { content: "1 - 5 sales", className: "bg-primary/10" },
  { content: "5 - 15 sales", className: "bg-primary/20" },
  { content: "15 - 35 sales", className: "bg-primary/30" },
  { content: "35 - 65 sales", className: "bg-primary/40" },
  { content: "65+ sales", className: "bg-primary/60" },
];

export const SHARED_FILE_ACTIONS: DashboardAction[] = [
  { label: "Copy Link", icon: "Copy" },
  { label: "Delete", icon: "Trash" },
];

export const NOTE_ACTIONS: DashboardAction[] = [
  { label: "Edit", icon: "Edit2" },
  { label: "Delete", icon: "Trash" },
];

export const SHARED_FILES: SharedFile[] = [
  {
    name: "Documentation.pdf",
    description: "1 KB Document File",
    variant: "directory",
  },
  {
    name: "Rocketman.xd",
    description: "20 MB Audio File",
    variant: "file",
  },
  {
    name: "Latest Report.xls",
    description: "20 KB Zipped File",
    variant: "empty-directory",
  },
];

export const IMPORTANT_NOTES: ImportantNote[] = [
  {
    title: "Why do we use it?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Where can I get some?",
    description:
      "There are many variations of passages of Lorem Ipsum available but the.",
  },
];

export const BROWSER_VISITORS: BrowserVisitor[] = [
  { name: "Chrome", percentage: "25%", imageUrl: chromeUrl },
  { name: "Microsoft Edge", percentage: "5%", imageUrl: edgeUrl },
  { name: "Firefox", percentage: "45%", imageUrl: firefoxUrl },
  { name: "Opera", percentage: "2%", imageUrl: operaUrl },
  { name: "Safari", percentage: "20%", imageUrl: safariUrl },
];
