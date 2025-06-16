import React from "react";
import Link from "next/link";

interface AboutMeSectionProps {
  isMobile: boolean;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ isMobile }) => {
  return (
    <section className="bg-white">
      <div className="flex flex-col ring-1 ring-slate-200 h-full w-full items-center justify-center">
        <div className="flex flex-col w-full py-8 px-1 items-center justify-center">
          <div className="font-medium text-center flex flex-col items-center justify-center w-full gap-2">
            <p className="text-4xl"></p>
            <Link href="/mystory" className="text-richblack underline text-sm">
              {/* You can put text here if needed */}
            </Link>
          </div>
        </div>

        {/* Image Container */}
        <div
          className="w-full px-1 relative"
          style={{ aspectRatio: isMobile ? "3 / 2" : "25 / 9" }}
        >
          <img
            src="/images/aboutme.jpeg"
            alt="About Me"
            className="w-full h-full object-cover rounded-sm"
          />

          {/* Desktop button */}
          {!isMobile && (
            <div className="absolute bottom-4 left-3">
              <Link
                href="/mystory"
                className="bg-transparent backdrop-blur-sm border border-white text-white px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Read Full Story
              </Link>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full flex sm:flex-row pb-5 flex-col bg-white justify-center items-center">
          <div className="flex justify-center items-center sm:w-1/4 w-full sm:min-h-[200px] min-h-[150px] bg-white text-4xl sm:text-3xl md:text-4xl text-left sm:pl-8 pl-8 py-2 font-medium italic">
            "Rooted in goodness. Alive with purpose."
          </div>
          <div className="sm:w-1/4 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
            adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
            pellentesque sem placerat in id. Placerat in id cursus mi pretium
            tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
          </div>
          <div className="sm:w-1/4 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            ricies nec, pellentesque eu quis enim. Donec pede justo, fringilla
            vel, aliquet nec, vulputate
          </div>
          <div className="sm:w-1/4 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicaboricies nec, pellentesque eu quis enim. Donec
            pede justo.
          </div>
        </div>

        {/* Mobile button */}
        {isMobile && (
          <div className="w-full flex justify-center pb-10">
            <Link
              href="/mystory"
              className="bg-transparent backdrop-blur-sm border border-black text-black px-6 py-2 rounded-full hover:bg-black/10 transition-all"
            >
              Read Full Story
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMeSection;