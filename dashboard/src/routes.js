import Dashboard from "./views/Dashboard.jsx";
import Notifications from "./views/Notifications.jsx";
import UserPage from "./views/User.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-th-large",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fa fa-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "fa fa-user-md",
    component: UserPage,
    layout: "/admin"
  }
];

export default routes;
