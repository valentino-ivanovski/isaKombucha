"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function VisualHighlight() {
  const sectionRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [screenSize, setScreenSize] = useState(""); // Default to empty string
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const totalFrames = 70;

  // Ensure screenSize is only set on the client
  useEffect(() => {
    setIsClient(true); // Mark that we're on the client
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("sm");
      } else if (width < 768) {
        setScreenSize("md");
      } else if (width < 1024) {
        setScreenSize("lg");
      } else if (width < 1280) {
        setScreenSize("xl");
      } else if (width < 1536) {
        setScreenSize("2xl");
      } else {
        setScreenSize("3xl");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Set up scroll animation for decorative icons
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Decorative icons without rotation
  const decorativeIcons = [
    {
      size: 120,
      desktop: { top: "10%", left: "35%" },
      mobile: { top: "10%", left: "5%" },
      opacity: 0.15,
      src: "/icons/SVG/minimalistic icons14.svg",
    },
    {
      size: 150,
      desktop: { top: "5%", right: "15%" },
      mobile: { top: "5%", right: "5%" },
      opacity: 0.1,
      src: "/icons/SVG/minimalistic icons14.svg",
    },
    {
      size: 180,
      desktop: { bottom: "10%", left: "30%" },
      mobile: { bottom: "10%", left: "10%" },
      opacity: 0.12,
      src: "/icons/SVG/minimalistic icons14.svg",
    },
    {
      size: 130,
      desktop: { bottom: "5%", right: "20%" },
      mobile: { bottom: "5%", right: "10%" },
      opacity: 0.15,
      src: "/icons/SVG/minimalistic icons14.svg",
    },
    {
      size: 100,
      desktop: { top: "40%", left: "2%" },
      opacity: 0.08,
      src: "/icons/SVG/minimalistic icons14.svg",
    },
    {
      size: 110,
      desktop: { top: "35%", right: "3%" },
      opacity: 0.09,
      src: "/icons/SVG/minimalistic icons14.svg",
    },
  ];

  // Helper function to parse percentage string to number
  const parsePercentage = (value) => {
    if (!value) return 50;
    return parseFloat(value.replace("%", ""));
  };

  // Helper function to get rotation angle for icon to face center (50%, 50%)
  const getRotationAngle = (icon) => {
    const desktopPos = icon.desktop || {};
    let leftPercent = 50;
    if ("left" in desktopPos) {
      leftPercent = parsePercentage(desktopPos.left);
    } else if ("right" in desktopPos) {
      leftPercent = 100 - parsePercentage(desktopPos.right);
    }

    let topPercent = 50;
    if ("top" in desktopPos) {
      topPercent = parsePercentage(desktopPos.top);
    } else if ("bottom" in desktopPos) {
      topPercent = 100 - parsePercentage(desktopPos.bottom);
    }

    const dx = 50 - leftPercent;
    const dy = 50 - topPercent;
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);
    return angleDeg + 90;
  };

  // Scroll-driven animation frame update
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionBottom = sectionRef.current?.offsetHeight ?? 0;
      if (scrollTop > sectionBottom) return;

      const scrollFraction = Math.max(0, Math.min(1, scrollTop / sectionBottom));
      const newFrame = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames));
      setCurrentFrame(newFrame);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload images
  useEffect(() => {
    let isCancelled = false;

    const preloadImages = async () => {
      const promises = [];
      for (let i = 0; i < totalFrames; i++) {
        const src = getImagePath(i);
        const img = new window.Image();
        img.src = src;
        promises.push(
          new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          })
        );
      }

      await Promise.all(promises);
      if (!isCancelled) setImagesLoaded(true);
    };

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Generate image path for current frame
  const getImagePath = (frame) => {
    return `/images/bottleBasilBreeze/${frame.toString().padStart(4, "0")}.webp`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#FEFAF1] pb-24 pt-44 text-softwhite"
    >
      {/* Decorative icons without rotation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {decorativeIcons.map((icon, index) => (
          <motion.div
            key={index}
            style={{
              width: icon.size,
              height: icon.size,
              position: "absolute",
              opacity: icon.opacity,
              ...(screenSize === "sm" && icon.mobile ? icon.mobile : icon.desktop),
              rotate: getRotationAngle(icon),
            }}
            className={index >= 4 ? "hidden md:block" : "block"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: icon.opacity, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <img src={icon.src} alt="" className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container flex justify-center mx-auto px-4 relative z-10">
        <div className="relative w-[95%] sm:w-[90%] md:mt-0 mt-8 lg:w-[100%] max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl h-[700px]">
          {/* Animated Bottle Image */}
          <div
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10 ${
              screenSize === "sm"
              ? "left-[50%] top-[64%]"
              : screenSize === "md"
              ? "left-[50%] top-[56.5%]"
              : screenSize === "lg"
              ? "left-[51%] top-[63%]"
              : screenSize === "xl"
              ? "left-[54%] top-[54.5%]"
              : screenSize === "2xl"
              ? "left-[51%] top-[55%]"
              : "left-[51%] top-[56%]"
            }`}
          >
            <img
              src={getImagePath(currentFrame)}
              alt="Isa's Kombucha Bottle"
              className="h-auto min-w-[300px] w-[300px] sm:w-[300px] md:w-[300px] lg:w-[370px]"
            />
          </div>

          {/* Title - What is Kombucha? */}
          <div className="absolute left-0 right-0 z-0 transform -translate-y-10 sm:-translate-y-0">
            <h1
              className={`text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-[#241f20] text-center max-w-full`}
            >
              What is Kombucha?
            </h1>
          </div>
          {/* Text Container */}
          <div className="absolute inset-0 flex flex-col items-center transform translate-y-5 sm:-translate-y-0 justify-center z-0">
            {/* Original 11 paragraphs hidden except in lg, xl, 2xl, 3xl views */}
            <div
              className={`hidden md:hidden lg:block xl:block 2xl:block 3xl:block`}
            >
              {/* Text Div 1 */}
              <div
                className={`absolute top-[10%] sm:top-[11%] md:top-[12%] lg:top-[12%] xl:top-[12%] 2xl:top-[12%] left-0 right-0`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] text-center max-w-full`}
                >
                  Kombucha is an ancient fermented tea.
                </p>
              </div>

              {/* Text Div 2 */}
              <div
                className={`absolute top-[18%] sm:top-[19%] md:top-[20%] lg:top-[21%] xl:top-[21%] 2xl:top-[21%] left-0 right-0`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] text-center max-w-full`}
                >
                  Kombucha fermentation begins
                </p>
              </div>

              {/* Text Div 3 */}
              <div
                className={`absolute bottom-[62%] sm:bottom-[63%] md:bottom-[64%] lg:bottom-[64%] xl:bottom-[64%] 2xl:bottom-[64%] left-[20%] sm:left-[22%] md:left-[24%] lg:left-[24%] xl:left-[26%] 2xl:left-[26%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  with tea,
                </p>
              </div>

              {/* Text Div 4 */}
              <div
                className={`absolute bottom-[62%] sm:bottom-[63%] md:bottom-[64%] lg:bottom-[64%] xl:bottom-[64%] 2xl:bottom-[64%] right-[27%] sm:right-[29%] md:right-[30%] lg:right-[28%] xl:right-[32%] 2xl:right-[32%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  sugar,
                </p>
              </div>

              {/* Text Div 5 */}
              <div
                className={`absolute bottom-[54%] sm:bottom-[55%] md:bottom-[56%] lg:bottom-[56%] xl:bottom-[56%] 2xl:bottom-[56%] left-[27%] sm:left-[29%] md:left-[30%] lg:left-[32.5%] xl:left-[32%] 2xl:left-[32%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  and
                </p>
              </div>

              {/* Text Div 6 */}
              <div
                className={`absolute bottom-[54%] sm:bottom-[55%] md:bottom-[56%] lg:bottom-[56%] xl:bottom-[56%] 2xl:bottom-[56%] right-[22%] sm:right-[23%] md:right-[24%] lg:right-[18.5%] xl:right-[26%] 2xl:right-[26%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  a scoby.
                </p>
              </div>

              {/* Text Div 7 */}
              <div
                className={`absolute bottom-[46%] sm:bottom-[47%] md:bottom-[48%] lg:bottom-[48%] xl:bottom-[48%] 2xl:bottom-[48%] left-[7%] sm:left-[8%] md:left-[9%] lg:left-[4%] xl:left-[10%] 2xl:left-[10%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  In the process it
                </p>
              </div>

              {/* Text Div 8 */}
              <div
                className={`absolute bottom-[46%] sm:bottom-[47%] md:bottom-[48%] lg:bottom-[48%] xl:bottom-[48%] 2xl:bottom-[48%] right-[20%] sm:right-[21%] md:right-[22%] lg:right-[15%] xl:right-[23%] 2xl:right-[23%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  changes,
                </p>
              </div>

              {/* Text Div 9 */}
              <div
                className={`absolute bottom-[38%] sm:bottom-[39%] md:bottom-[40%] lg:bottom-[40%] xl:bottom-[40%] 2xl:bottom-[40%] left-[7%] sm:left-[8%] md:left-[9%] lg:left-[3%] xl:left-[10%] 2xl:left-[10%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  from a normal tea
                </p>
              </div>

              {/* Text Div 10 */}
              <div
                className={`absolute bottom-[38%] sm:bottom-[39%] md:bottom-[40%] lg:bottom-[40%] xl:bottom-[40%] 2xl:bottom-[40%] right-[15%] sm:right-[16%] md:right-[17%] lg:right-[8%] xl:right-[18%] 2xl:right-[18%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-[#241f20] max-w-full`}
                >
                  to a tea that
                </p>
              </div>

              {/* Text Div 11 */}
              <div
                className={`absolute bottom-[28%] sm:bottom-[29%] md:bottom-[30%] lg:bottom-[30%] xl:bottom-[30%] 2xl:bottom-[30%] left-[18%] sm:left-[20%] md:left-[21%] lg:left-[18%] xl:left-[22%] 2xl:left-[22%]`}
              >
                <p
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl underline underline-offset-[6px] font-bold text-[#241f20] text-center max-w-full`}
                >
                  is full of life.
                </p>
              </div>
            </div>

            {/* New 8 paragraphs visible only in md and sm views */}
            <div
              className={`block sm:block md:block lg:hidden xl:hidden 2xl:hidden 3xl:hidden`}
            >
              {/* Text Div 1 (above bottle) */}
              <div
                className={`absolute top-[10%] sm:top-[11%] md:top-[12%] left-0 right-0`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] text-center max-w-full`}
                >
                  Kombucha is a living fermented tea.
                </p>
              </div>

              {/* Text Div 2 (above bottle) */}
              <div
                className={`absolute top-[20%] sm:top-[16%] md:top-[18%] left-0 right-0`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] text-center max-w-full`}
                >
                  Kombucha fermentation
                </p>
              </div>

              {/* Text Div 4 (above bottle) */}
              <div
                className={`absolute top-[25%] sm:top-[21%] md:top-[24%] left-0 right-0`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] text-center max-w-full`}
                >
                   begins with tea, sugar, 
                </p>
              </div>

              {/* Text Div 5 (above bottle) */}
              <div
                className={`absolute top-[30%] sm:top-[26%] md:top-[30%] left-0 right-0`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] text-center max-w-full`}
                >
                  and a scoby.
                </p>
              </div>


              {/* Text Div 6 (above bottle) */}
              <div
                className={`absolute top-[35%] sm:top-[31%] md:top-[35.5%] left-0 right-0`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] text-center max-w-full`}
                >
                  In the process it
                </p>
              </div>

              {/* Text Div 7 (left side) */}
              <div
                className={`absolute top-[39.9%] sm:top-[36.5%] md:top-[41%] -left-[2%] sm:left-[14%] md:left-[16%]`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] max-w-full`}
                >
                  changes,
                </p>
              </div>

              {/* Text Div 8 (left side) */}
              <div
                className={`absolute bottom-[50%] sm:bottom-[53.3%] md:bottom-[47.5%] left-[1%] sm:left-[18%] md:left-[18%]`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] max-w-full`}
                >
                  normal
                </p>
              </div>

              {/* Text Div 9 (left side) */}
              <div
                className={`absolute bottom-[45.5%] sm:bottom-[48.5%] md:bottom-[41.6%] left-[0%] sm:left-[15%] md:left-[19%]`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] max-w-full`}
                >
                  to a tea
                </p>
              </div>

              {/* Text Div 10 (right side) */}
              <div
                className={`absolute bottom-[40.5%] sm:bottom-[43.5%] md:bottom-[35%] -right-[5%] sm:right-[8%] md:right-[11%]`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold underline underline-offset-[5px] text-[#241f20] max-w-full`}
                >
                  full of life.
                </p>
              </div>


              {/* Text Div 8 (right side) */}
              <div
                className={`absolute top-[40%] sm:top-[36.5%] md:top-[41.4%] right-[20%] sm:right-[29%] md:right-[28%]`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] max-w-full`}
                >
                  from a
                </p>
              </div>


              {/* Text Div 11 (right side) */}
              <div
                className={`absolute top-[44.5%] sm:top-[41.5%] md:top-[46.8%] right-[20%] sm:right-[29.5%] md:right-[28%]`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] max-w-full`}
                >
                  a tea
                </p>
              </div>


              {/* Text Div 12 (right side) */}
              <div
                className={`absolute bottom-[45.5%] sm:bottom-[48.5%] md:bottom-[41.5%] right-[11%] sm:right-[22%] md:right-[23%]`}
              >
                <p
                  className={`text-3xl sm:text-3xl md:text-4xl font-bold text-[#241f20] max-w-full`}
                >
                  that is
                </p>
              </div>
<div className="absolute top-[70%] w-full right-0 left-0 mx-auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}