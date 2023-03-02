import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Overview from "../pages/Overview";
import Tickets from "../pages/Tickets";
import Ideas from "../pages/Ideas";
import Contacts from "../pages/Contacts";
import Agents from "../pages/Agents";
import Articles from "../pages/Articles";
import Settings from "../pages/Settings";
import Subscription from "../pages/Subscription";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="overview" />} />
      {/* <Route path="/maindashboard" element={<Dashboard />} /> */}
      <Route path="/overview" element={<Overview />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/ideas" element={<Ideas />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
};

export default Routers;
