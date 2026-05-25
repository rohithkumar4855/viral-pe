import Container from "../../layout/Container";
import city from "../../../public/images/city.png";
import Arrow from "../../../public/images/Arrow.png";
import Hill from "../../../public/images/Hill.png";

const companyFeatures = [
  {
    id: 1,
    name: "Our Goal",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: Arrow,
  },
  {
    id: 2,
    name: "Our Vision", // Fixed typo "Vission"
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: Hill,
  },
];

export default function VisionMission() {
  return (
    <Container>
      <div className="max-w-[1216px] mx-auto">
        {/* Adjusted grid/flex layout for the cards parent */}
        <div className="flex flex-col md:flex-row gap-8">
          {companyFeatures.map((item) => {
            // Split the title into the first word and the remaining words
            const words = item.name.split(" ");
            const firstWord = words[0];
            const remainingWords = words.slice(1).join(" ");
            return (
            <div key={item.id} className="w-full md:w-1/2">
              
              {/* CARD CONTAINER: Added relative and overflow-hidden */}
              <div className="relative flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden min-h-[280px] p-6 md:p-8">

                {/* IMAGE: Positioned absolutely on desktop to sit underneath the text space */}
                <div className="w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:w-3/5 h-[200px] md:h-full order-1 md:order-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-2xl md:rounded-none"
                  />
                </div>

                {/* CONTENT: Made wider (w-2/3) and given relative z-10 to step over the image */}
                <div className="relative w-full md:w-2/3 z-10 order-2 md:order-1 mt-4 md:mt-0 md:pr-4">
                  <h2 className="text-[52px] font-semibold text-[#222222]">
                   {firstWord}{" "}
                      <span className="text-[#8B1E24]">{remainingWords}</span>
                  </h2>

                  <p className="mt-4 text-[24px] text-[#555555] leading-[35px]">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
            );
})}
        </div>
      </div>
    </Container>
  );
}