import React, { useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Image from 'next/image'

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
]

const options: EmblaOptionsType = {
  loop: true,
  containScroll: 'trimSnaps'
}

const EmblaCarousel: React.FC = () => {
  const progressNode = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode as React.RefObject<HTMLElement>)

  return (

    <div className="embla py-10 bg-white relative">
      <div
        className="embla__viewport"
        ref={emblaRef}
        style={{ overflow: 'visible' }}
      >
        <div className="embla__container flex gap-6 px-6">
          {flavors.map((flavor, index) => (
            <div
              className="embla__slide flex-[0_0_80%] flex justify-center"
              key={index}
            >
              <div className="max-w-[720px] mx-auto">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                    <Image
                      src={`/${flavor.image}`}
                      alt={`${flavor.name} flavor image`}
                      fill
                      className="object-cover w-full h-full"
                      loading="eager"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900">
                        {flavor.name}
                      </p>
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900">
                        2.50€
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
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 md:flex hidden flex justify-between items-center px-20 pointer-events-none">
        <PrevButton
          className="pointer-events-auto w-10 p-3 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-200"
          onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className="pointer-events-auto w-10 p-3 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-200"
          onClick={() => onAutoplayButtonClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
      </div>

      <div
        className={`embla__progress mt-4 flex justify-center`.concat(
          showAutoplayProgress ? '' : ' embla__progress--hidden'
        )}
      >
        <div className="embla__progress__bar h-[1px] w-1/2 h-1 bg-gray-300 rounded-full" ref={progressNode} />
      </div>

      <div className="mt-4 text-center">
        <button className="embla__play px-5 py-2 font-medium rounded-full bg-black text-white text-xs font-bold uppercase hover:bg-gray-800" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel
