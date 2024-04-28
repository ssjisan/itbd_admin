import { Route, Routes } from "react-router-dom";
import Dashboard from "../Page/Dashboard";
import Users from "../Page/Users";
import Events from "../Page/Events";
export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="user_list" element={<Users />} />
      <Route path="events" element={<Events />} />
    </Routes>
  );
}
