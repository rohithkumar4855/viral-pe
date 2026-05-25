import Heropage from '../src/components/home/Hero';
import GrowingTogether from '../src/components/home/earningcard';
import PopularVouchers from '../src/components/home/vouchers';
import Customersupport from '../src/components/home/customersupport';
import PromotionalCards from '../src/components/home/promotionalcards';
import WhyChooseViralPe from '../src/components/home/Whychoose';
import ReferAndEarn from '../src/components/home/referandearn';
import SupportBanner from '../src/components/home/supportbanner';
import FAQSection from '../src/components/home/Faqquestion';
import ContactUs from '../src/components/home/Contactus';

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