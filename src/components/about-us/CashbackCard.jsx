import Container from "../../layout/Container";
import Handsimage from "../../../public/images/Hands.png";

export default function CashBackCard() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row w-full max-w-[1215px] min-h-[239px] text-[#ffffff] bg-[linear-gradient(90.35deg,_#901C27_61.84%,_rgba(229,23,43,0.5)_99.7%)] mx-auto overflow-hidden">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 space-y-3">
          <h2 className="text-sm md:text-[16px] font-semibold tracking-wide  opacity-90">
            Our Commitment
          </h2>
          <h1 className="text-3xl md:text-[48px] font-bold leading-tight">
            Pay. Earn. Cashback
          </h1>
          <p className="text-sm md:text-[16px] leading-relaxed opacity-90">
            At ViralPe, we are committed to building a platform that not only makes 
            payments easier but also spreads happiness by rewarding you and giving 
            back to the society.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 h-52 md:h-auto relative">
          <img 
            src={Handsimage} 
            alt="Hands stacked together" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </Container>
  );
}