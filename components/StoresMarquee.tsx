import Image from "next/image";
import Marquee from "react-fast-marquee";

interface StoresMarqueeProps {
  gradientWidth?: number;
}

const StoresMarquee: React.FC<StoresMarqueeProps> = ({ gradientWidth = 100 }) => {
  const storeImages = [
    "/stores/Mercator.webp",
    "/stores/Tus.webp",
    "/stores/Spar.webp",
    "/stores/DM.webp",
  ];

  return (
    <section className="bg-gray-50 py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <Marquee
          className="flex gap-4 p-0"
          pauseOnHover={false}
          speed={50}
          gradient={true}
          gradientColor="#F9FAFB"
          gradientWidth={gradientWidth}
          pauseOnClick={true}
          style={{ scale: 1 }}
        >
          {[0, 1, 2, 3].map((dupIdx) => (
            <div
              key={`store-set-${dupIdx}`}
              className="flex gap-12 sm:gap-32 items-center whitespace-nowrap"
            >
              {storeImages.map((src, idx) => (
                <div
                  key={`store-${dupIdx}-${idx}`}
                  className="flex justify-center flex-shrink-0"
                  style={{
                    margin:
                      idx === 0
                        ? "0 6px 0 80px"
                        : idx === 3
                        ? "0 12px 0 6px"
                        : "0 6px",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Store ${idx + 1}`}
                    width={
                      idx === 2
                        ? 180
                        : idx === 3
                        ? 150
                        : idx === 0
                        ? 130
                        : 100
                    }
                    height={idx === 2 || idx === 3 ? 50 : 130}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default StoresMarquee;