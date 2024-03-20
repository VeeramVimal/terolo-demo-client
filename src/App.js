import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { setToken, isUserLoggedIn } from "./utils/helper";
import NotFound from "./pages/notfound";
import Login from "./pages/loginAndRegister/Login";
import ForgetPassword from "./pages/loginAndRegister/ForgotPassword";
import Goals from "./pages/Goals";
import Signup from "./pages/loginAndRegister/Signup";
import ResetPassword from "./pages/loginAndRegister/ResetPassword";
import People from "./pages/people";
import Dashboard from "./pages/dashboard";
import Expenses from "./pages/expenses/Expenses";
import EmailVerification from "./pages/loginAndRegister/EmailVerification";
import Dashboard2 from "./pages/dashboard 2";
import Business from "./pages/Business";
import Orders from "./pages/Sales/orders";
import Payment from "./pages/Finance/payments";
import Tickets from "./pages/Help disk/tickets";
import Refunds from "./pages/Finance/refunds";
import Customers from "./pages/Sales/Customers";
import Complaints from "./pages/Help disk/complaints";
import Reports from "./pages/Finance/Reports";
import Gevences from "./pages/Finance/Payment Grivences";
import Subscriptions from "./pages/Sales/Subscriptions";
import WebNotifications from './pages/Settings/webnotifications';
import MobileNotifications from './pages/Settings/Mobilenotifications';
import Webapp from './pages/notifications/webapp/Settings'
import Mobileapp from "./pages/notifications/mobileapp";
const App = () => {
  useEffect(() => {
    console.log(isUserLoggedIn(), "isUserLoggedIn");
    if (isUserLoggedIn()) {
      setToken();
    }
  }, []);
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Performance" element={<Dashboard2 />} />
      <Route path="/Business" element={<Business />} />
      <Route path="/Subscriptions" element={<Subscriptions />} />
      <Route path="/People" element={<People />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/users" element={<Goals />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/ForgotPassword" element={<ForgetPassword />} />
      <Route path="/Expenses" element={<Expenses />} />
      <Route path="/EmailVerification" element={<EmailVerification />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/refunds" element={<Refunds />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/payment grievances" element={<Gevences />} />
      <Route path="/Settings" element={<Webapp />} />
      <Route path="/Mobileapp" element={<Mobileapp />} />
      <Route path="/web-notifications" element={<WebNotifications />} />
      <Route path="/mobile-notifications" element={<MobileNotifications />} />
    </Routes>
  );
};

export default App;
