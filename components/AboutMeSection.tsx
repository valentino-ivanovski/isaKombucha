import React from "react";
import Link from "next/link";

interface AboutMeSectionProps {
  isMobile: boolean;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ isMobile }) => {
  return (
    <section className="bg-white">
      <div className="flex flex-col h-full w-full items-center justify-center">
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
                href="/my-story"
                className="bg-transparent backdrop-blur-sm border border-white text-white px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Read Full Story
              </Link>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full flex sm:flex-row pb-3 flex-col bg-white justify-center items-center">
          <div className="flex justify-center items-center sm:w-1/4 w-full sm:min-h-[200px] min-h-[150px] bg-white text-4xl sm:text-3xl md:text-4xl text-center sm:text-left sm:pl-8 pl-8 py-2 font-medium italic">
            Trust your gut. <br/> That’s where this started.
          </div>
          <div className="sm:w-1/4 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm">
            I’m Isa. I’m 22. I was raised between Colorado, India, and Slovenia - unschooled, hands-on, constantly creating. At eight, I was running lemonade stands. At fifteen, I was blowing up kombucha bottles in my dad’s office. I didn’t grow up playing by the rules - I grew up following my gut.
          </div>
          <div className="sm:w-1/4 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm">
            Slovenia shook my rhythm - suddenly I was in a school I didn’t understand, in a language I didn’t speak. So I made something that spoke for me: kombucha. It was wild, alive, and full of magic. Fermentation taught me patience, intuition, and how to build something real from the inside out.
          </div>
          <div className="sm:w-1/4 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm">
            I started Isa Kombucha at 17 - not because it was trendy, but because it felt necessary. Today we’re still brewing small-batch in Ljubljana, with raw juice, no fake fizz, and zero bs*. Every bottle is made with culture, energy, and spirit - just like the people it’s meant for.
          </div>
        </div>

        {/* Mobile button */}
        {isMobile && (
          <div className="w-full flex justify-center pb-10">
            <Link
              href="/my-story"
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