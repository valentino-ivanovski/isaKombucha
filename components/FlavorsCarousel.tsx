import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/ui/carousel';
import Image from 'next/image';

const flavors = [
  {
    name: "RAZMATAZZ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, ginger, kombucha culture",
    image: "images/kombucha/1.webp",
  },
  {
    name: "LOV(E)ANDA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, lavender, lemon, kombucha culture",
    image: "images/kombucha/2.webp",
  },
  {
    name: "HOT GRANNY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, mixed berries, hibiscus, kombucha culture",
    image: "images/kombucha/3.webp",
  },
  {
    name: "PINAKO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, cucumber, mint, kombucha culture",
    image: "images/kombucha/4.webp",
  },
  {
    name: "BASIL BREEZE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, turmeric, black pepper, orange, kombucha culture",
    image: "images/kombucha/5.webp",
  },
];

const OPTIONS: EmblaOptionsType = {
  loop: true,
  containScroll: 'trimSnaps',
  align: 'center',
  slidesToScroll: 1, // Ensure one slide moves at a time
};

const EmblaCarousel: React.FC = () => {
  return (
    <div className="py-10">
      <Carousel 
        options={OPTIONS} 
        isAutoPlay={true} 
        className=" w-full xl:w-[1300px] mx-auto"
      >
        <SliderContainer className="gap-6 md:gap-8 lg:gap-10 px-4 md:px-6">
          {flavors.map((flavor, index) => (
            <Slider 
              key={index} 
              className="flex-[0_0_auto] w-[400px] flex justify-center"
            >
              <div className="max-w-[400px] scale-[85%] sm:scale-95 mx-auto">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full max-w-[400px]">
                  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                    <Image
                      src={`/${flavor.image}`}
                      alt={`${flavor.name} flavor image`}
                      fill
                      className="object-cover w-full h-full select-none pointer-events-none"
                      loading="eager"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900">
                        {flavor.name}
                      </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 opacity-75">
                      {flavor.description} <br />
                      <strong>Ingredients:</strong> {flavor.ingredients}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg block w-full bg-black text-white hover:bg-gray-800 focus:bg-gray-800"
                      type="button"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          ))}
        </SliderContainer>
        <div className="flex justify-center items-center pt-0 pb-0">
          <SliderDotButton />
        </div>
      </Carousel>
    </div>
  );
};

export default EmblaCarousel;