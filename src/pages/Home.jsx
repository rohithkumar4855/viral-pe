import Heropage from "../components/home/Hero";
import GrowingTogether from "../components/home/Earningcard";
import PopularVouchers from "../components/home/Vouchers";
import Customersupport from "../components/home/Customersupport";
import PromotionalCards from "../components/home/Promotionalcards";
import WhyChooseViralPe from "../components/home/Whychoose";
import ReferAndEarn from "../components/home/ReferandEarn";
import SupportBanner from "../components/home/Supportbanner";
import FAQSection from "../components/home/Faqquestion";
import ContactUs from "../components/home/Contactus";

export default function Home() {
  return (
    <>
      <Heropage />
      <GrowingTogether />
      <PopularVouchers />
      <Customersupport />
      <PromotionalCards />
      <WhyChooseViralPe />
      <ReferAndEarn />
      <SupportBanner />
      <FAQSection />
      <ContactUs />
    </>
  );
}