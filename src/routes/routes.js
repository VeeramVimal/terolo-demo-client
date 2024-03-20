import Home from '../pages/home';
import User from '../pages/users';
import CommingSoon from '../pages/commingSoon';
import ErrorBoundary from '../pages/error';
import Login from '../pages/loginAndRegister/Login';
import ForgotPassword from '../pages/loginAndRegister/ForgotPassword';
import Signup from '../pages/loginAndRegister/Signup';
import EmailVerification from '../pages/loginAndRegister/EmailVerification';
import  Expenses from '../pages/Expenses';

const protectedRoutes = [
  {
    path: '/',
    component: <Home />,
    exact: true
  },
  {
    path: '/performance',
    component: <Dashboard2 />,
    exact: true
  },
  {
    path: '/customer',
    component: <Customer />,
    exact: true
  },
  {
    path: "/business",
    component: <Business />,
    exact: true,
  },
  {
    path: "/subscription",
    component: <Subscriptions />,
    exact: true,
  },
  {
    path: "/orders",
    component: <Orders />,
    exact: true,
  },
  {
    path: "/payment",
    component: <Payment />,
    exact: true,
  },
  {
    path: "/refund",
    component: <Refunds />,
    exact: true,
  },
  {
    path: "/refund/:id",
    component: <Refunds />,
    exact: true,
  },
  {
    path: "/payment-grievances",
    component: <PaymentGrievances />,
    exact: true,
  },
  {
    path: "/report",
    component: <Report />,
    exact: true,
  },
  {
    path: "/ticket",
    component: <Ticket />,
    exact: true,
  },
  {
    path: "/complaints",
    component: <Complaint />,
    exact: true,
  },
  {
    path: "/Web-notification",
    component: <WebNotification />,
    exact: true,
  },
  {
    path: "/mobile-motifications",
    component: <MobileNotification />,
    exact: true,
  },
  {
    path: '/users',
    component: <User />,
    exact: true
  },
  {
    path: "/error",
    component: <ErrorBoundary />,
    exact: true,
  },
  {
    path: "/comming-soon",
    component: <CommingSoon/>,
    exact: true,
  },
  
];


const publicRoutes = [
  {
    path: "sign-in",
    component: <Login />,
    exact: true,
  },
  {
    path: "forgot-password",
    component: <ForgotPassword />,
    exact: true,
  },
  {
    path: "sign-up",
    component: <Signup />,
    exact: true,
  },
  {
    path: "signup/validate-email",
    component: <EmailVerification />,
    exact: true,
  },
  {
    path:"Expenses",
    component:<Expenses/>,
    exact:true,
  },
  ];

export {
    protectedRoutes,
    publicRoutes
};