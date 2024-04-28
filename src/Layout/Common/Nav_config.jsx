import { Dashboard, Events, User } from "../../assets/IconSet";

const navConfig = ({ pathname }) => [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <Dashboard color={pathname === "/" ? "#00AE60" : "#918EAF"} />,
  },
  {
    id: 2,
    title: "User List",
    link: "/user_list",
    icon: <User color={pathname === "/user_list" ? "#00AE60" : "#918EAF"} />,
  },
  {
    id: 3,
    title: "Events",
    link: "/events",
    icon: <Events color={pathname === "/events" ? "#00AE60" : "#918EAF"} />,
  },
];

export { navConfig };
