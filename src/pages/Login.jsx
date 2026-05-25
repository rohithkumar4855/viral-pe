import { useNavigate } from "react-router-dom";
import Home from "../feature/Dashboard/Home";
import Revenue from "../feature/Dashboard/Revenue";
import Heropage from "../components/home/Hero";
import PopularVouchers from "../components/home/Vouchers";
import RecentTranscationcard from "../feature/Dashboard/RecentTranscation";
import FeatureBanner from "../feature/Dashboard/FeatureBanner";
import Vouchers from "../feature/Dashboard/Vouchers"
export default function loginpage() {
   const navigate = useNavigate();
   
   const handleLogin = () => {
    // Store login state
    localStorage.setItem("isLoggedIn", "true");

    // Dispatch event to tell Navbar to switch to UserNavbar
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  return (
    <div className="pt-20  min-h-screen">
      <Home />
      <Revenue />
      <Heropage />
      <PopularVouchers />
      <RecentTranscationcard/>
      <FeatureBanner/>
    </div>
  );
}