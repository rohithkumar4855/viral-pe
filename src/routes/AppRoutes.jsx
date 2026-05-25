import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Management from "../pages/Management";
import Login from "../pages/Login";
import Vouchers from "../feature/Dashboard/Vouchers"
import VoucherDetails from "../feature/Dashboard/VoucherDetails"
import PaymentScreen from "../feature/Dashboard/Payments";
import LoginPage from "../feature/Dashboard/Userloginpage";
import PaymentSuccess from "../feature/Dashboard/PaymentSuccess";
import PrepaidRecharge from "../feature/Dashboard/PrepaidRecharge";
import Chooseaplan from "../feature/Dashboard/ChooseaPlan";
import FastagRecharge from "../feature/Dashboard/FastagRecharge"
import Dthrecharge from "../feature/Dashboard/Dthrecharge"
import ReferEarn from "../feature/Dashboard/Referearn";
import Transcations from "../feature/Dashboard/Transcations"
import Fastagdetails from "../feature/Dashboard/Fasttagdetails"
import UserVouchers from "../feature/Dashboard/UserVouchers"
import Vouchercode from "../feature/Dashboard/VoucherCode"
import Wallet from "../feature/Dashboard/Wallet"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/management" element={<Management />} />
      <Route path="/login-user" element={<LoginPage />} />
      <Route path="/dashboard" element={<Login />} />
      <Route path="/vouchers" element={<Vouchers />} />
      <Route path="/voucher-details" element={<VoucherDetails />} />
      <Route path="/payment-details" element={<PaymentScreen />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/prepaid" element={<PrepaidRecharge />} />
      <Route path="/prepaid-plans" element={<Chooseaplan />} />
      <Route path="/dth" element={< Dthrecharge />} />
      <Route path="/fastag" element={<FastagRecharge />} />
      <Route path="/refer-and-earn" element={< ReferEarn />} />
      <Route path="/transactions" element={< Transcations />} />
      <Route path="/fastag-details" element={< Fastagdetails />} />
      <Route path="/my-vouchers" element={< UserVouchers  />} />
       <Route path="/voucher-code" element={< Vouchercode  />} />
      <Route path="/wallet" element={< Wallet  />} />

       
    </Routes>
  );
}