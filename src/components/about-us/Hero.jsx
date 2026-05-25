import Container from "../../layout/Container";
import thunder from "../../../public/images/Thunder.png";
import Lock from "../../../public/images/lock.png";
import Gift from "../../../public/images/gift.png";
import city from "../../../public/images/city.png";

const features = [
  {
    id: 1,
    title: "100% Secure",
    icon: Lock,
  },
  {
    id: 2,
    title: "Rewards for you",
    icon: Gift,
  },
  {
    id: 3,
    title: "Instant Cashback",
    icon: thunder,
  },
];

export default function Hero() {
  return (
    <Container>
      <div className="max-w-fit md:max-w-[1216px] bg-(--white) pt-[32px] px-2 py-2 rounded-[20px] mx-auto">

        <div>
          <div className="max-w-[649px] p-9.5 pr-0 pb-[25px]">
            <h1 className="text-3xl md:text-[52px] font-semibold">
              India’s Trusted Digital Payments & Rewards Platform
            </h1>

            <p className="py-10.75 text-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#F6F1F1]"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6 object-contain"
                  />

                  <span className="text-[#901C27] text-[14px] font-semibold">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <img
            src={city}
            alt="City"
            className="w-full h-[190px] object-cover rounded-[20px]"
          />
        </div>

      </div>
    </Container>
  );
}