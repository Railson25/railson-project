import { useRoutes } from "react-router-dom";
import Menu from "@/layouts/SideMenu";
import HomePage from "@/camadas/home-page/page/home-page";
import EventScheduler from "@/camadas/event-scheduler/page/event-scheduler";
import Messages from "@/camadas/messages/page/messages";
import Emails from "@/camadas/emails/page/emails";
import EmailDetail from "@/camadas/emails/page/email-detail";
import EmailCompose from "@/camadas/emails/page/email-compose";
import Products from "@/camadas/products/page/products";
import ProductDetail from "@/camadas/product-detail/page/product-detail";
import Orders from "@/camadas/orders/page/orders";
import OrderDetail from "@/camadas/order-detail/page/order-detail";
import FileManager from "@/camadas/file-manager/page/file-manager";
import Profile from "@/camadas/profile/page/profile";
import Pricing from "@/camadas/pricing/page/pricing";
import Invoice from "@/camadas/invoice/page/invoice";
import Faq from "@/camadas/faq/page/faq";
import Timeline from "@/camadas/timeline/page/timeline";
import CrudDataList from "@/camadas/crud-data-list/page/crud-data-list";
import CrudForm from "@/camadas/crud-form/page/crud-form";
import WizardLayout1 from "@/camadas/wizard-layout-1/page/wizard-layout-1";
import WizardLayout2 from "@/camadas/wizard-layout-2/page/wizard-layout-2";
import WizardLayout3 from "@/camadas/wizard-layout-3/page/wizard-layout-3";
import Login from "@/camadas/login/page/login";
import Register from "@/camadas/register/page/register";
import ErrorPage from "@/camadas/error-page/page/error-page";
import RegularTable from "@/camadas/regular-table/page/regular-table";
import Tabulator from "@/camadas/tabulator/page/tabulator";
import Modal from "@/camadas/modal/page/modal";
import Slideover from "@/camadas/slideover/page/slideover";
import Notification from "@/camadas/notification/page/notification";
import Tab from "@/camadas/tab/page/tab";
import Accordion from "@/camadas/accordion/page/accordion";
import Button from "@/camadas/button/page/button";
import Alert from "@/camadas/alert/page/alert";
import ProgressBar from "@/camadas/progress-bar/page/progress-bar";
import Tooltip from "@/camadas/tooltip/page/tooltip";
import Dropdown from "@/camadas/dropdown/page/dropdown";
import Typography from "@/camadas/typography/page/typography";
import Icon from "@/camadas/icon/page/icon";
import LoadingIcon from "@/camadas/loading-icon/page/loading-icon";
import RegularForm from "@/camadas/regular-form/page/regular-form";
import Datepicker from "@/camadas/datepicker/page/datepicker";
import TomSelect from "@/camadas/tom-select/page/tom-select";
import FileUpload from "@/camadas/file-upload/page/file-upload";
import WysiwygEditor from "@/camadas/wysiwyg-editor/page/wysiwyg-editor";
import Validation from "@/camadas/validation/page/validation";
import Chart from "@/camadas/chart/page/chart";
import Slider from "@/camadas/slider/page/slider";
import ImageZoom from "@/camadas/image-zoom/page/image-zoom";
import { ProtectedRoutes } from "./protected-routes";
import { GuestRoute } from "./guest-routes";

function Router() {
  const routes = [
    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <Menu />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
              path: "/event-scheduler",
              element: <EventScheduler />,
            },
            {
              path: "/messages",
              element: <Messages />,
            },
            {
              path: "/emails",
              element: <Emails />,
            },
            {
              path: "/emails/detail",
              element: <EmailDetail />,
            },
            {
              path: "/emails/compose",
              element: <EmailCompose />,
            },
            {
              path: "/products",
              element: <Products />,
            },
            {
              path: "/product-detail",
              element: <ProductDetail />,
            },
            {
              path: "/orders",
              element: <Orders />,
            },
            {
              path: "/order-detail",
              element: <OrderDetail />,
            },
            {
              path: "/file-manager",
              element: <FileManager />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
            {
              path: "/pricing",
              element: <Pricing />,
            },
            {
              path: "/invoice",
              element: <Invoice />,
            },
            {
              path: "/faq",
              element: <Faq />,
            },
            {
              path: "/timeline",
              element: <Timeline />,
            },
            {
              path: "/crud-data-list",
              element: <CrudDataList />,
            },
            {
              path: "/crud-form",
              element: <CrudForm />,
            },
            {
              path: "/wizard-layout-1",
              element: <WizardLayout1 />,
            },
            {
              path: "/wizard-layout-2",
              element: <WizardLayout2 />,
            },
            {
              path: "/wizard-layout-3",
              element: <WizardLayout3 />,
            },
            {
              path: "regular-table",
              element: <RegularTable />,
            },
            {
              path: "tabulator",
              element: <Tabulator />,
            },
            {
              path: "modal",
              element: <Modal />,
            },
            {
              path: "slideover",
              element: <Slideover />,
            },
            {
              path: "notification",
              element: <Notification />,
            },
            {
              path: "tab",
              element: <Tab />,
            },
            {
              path: "accordion",
              element: <Accordion />,
            },
            {
              path: "button",
              element: <Button />,
            },
            {
              path: "alert",
              element: <Alert />,
            },
            {
              path: "progress-bar",
              element: <ProgressBar />,
            },
            {
              path: "tooltip",
              element: <Tooltip />,
            },
            {
              path: "dropdown",
              element: <Dropdown />,
            },
            {
              path: "typography",
              element: <Typography />,
            },
            {
              path: "icon",
              element: <Icon />,
            },
            {
              path: "loading-icon",
              element: <LoadingIcon />,
            },
            {
              path: "regular-form",
              element: <RegularForm />,
            },
            {
              path: "datepicker",
              element: <Datepicker />,
            },
            {
              path: "tom-select",
              element: <TomSelect />,
            },
            {
              path: "file-upload",
              element: <FileUpload />,
            },
            {
              path: "wysiwyg-editor",
              element: <WysiwygEditor />,
            },
            {
              path: "validation",
              element: <Validation />,
            },
            {
              path: "chart",
              element: <Chart />,
            },
            {
              path: "slider",
              element: <Slider />,
            },
            {
              path: "image-zoom",
              element: <ImageZoom />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: (
        <GuestRoute>
          <Login />
        </GuestRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <GuestRoute>
          <Register />
        </GuestRoute>
      ),
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
