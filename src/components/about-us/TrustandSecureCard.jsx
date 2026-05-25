import Container from "../../layout/Container";
import verified from "../../../public/images/verified1.png"
import people from "../../../public/images/people.png"
import Gift from "../../../public/images/Gift1.png"
import Bulb from  "../../../public/images/Bulb.png"
import shakehands from "../../../public/images/Shakehands.png"
import Threepeople from "../../../public/images/threepeople.png"


const cardsData = [
  {
    id: 1,
    image: verified,
    title: "SSL Secured",
    description: "We Prioritize the trust of our users and ensure highest standards of security in everything we do."
    },
  {
    id: 2,
    image: people,
    title: "Bank Level Security",
    description: "We Prioritize the trust of our users and ensure highest standards of security in everything we do."
  },
  {
  id: 3,
    image: Gift,
    title: "Fraud Protection",
    description: "We believe in celebrating every transaction by offering rewards and giving back to society."
  },
  {
    id: 4,
    image: Bulb,
    title: "KYC verified",
    description: "We constantly innovate to create simple, smart and impactful solutions for a better digital tomorrow.",
  },
  {
    id: 5,
    image: shakehands,
    title: "Privacy First",
    description: "We operate with transparency, honesty and fairness in all our interactions."
  },
  {
    id: 6,
    image:Threepeople,
    title: "ISO Certified",
    description: "We empower Individuals, businesses and communities to grow, earn and create a better future together",
  },
];

export default function Ourvalues(){
    return(
      <Container>
       <div className="md:max-w-303.75 max-h-96.75 w-full bg-(--white) rounded-[20px] mx-auto ">
        <div className="text-center ">
            <h1 className="text-[52px] font-semibold">Trust & Secure</h1>
            <p className="text-[20px] text-[#222222CC]">The Principles That Define Us</p>
        </div>
<div className="flex flex-wrap gap-5  justify-center pb-4 pt-5.5">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-[179px]  bg-white rounded-[20px] flex flex-col items-start p-2  rounded-[20px] border-1 border-solid border-[#0000001A]"
        >
          {/* IMAGE */}
          <img
            src={card.image}
            alt={card.title}
            className="w-[40px] h-[40px] object-contain"
          />

          {/* HEADING */}
          <h3 className="mt-3 text-[16px] font-semibold text-[#222222]">
            {card.title}
          </h3>

          {/* PARAGRAPH */}
          <p className="mt-2 text-[13px] leading-[20px] text-[#666666]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
       </div>
      </Container>
    );

}

