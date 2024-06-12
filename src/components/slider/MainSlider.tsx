import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import MainSliderItem from "./MainSliderItem";
import React from "react";
const MainSlider = ({ mainSlides }: { mainSlides: any[] }) => {
  const mainSliderTheme: CustomFlowbiteTheme["carousel"] = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  };
  return (
    <div className="relative h-[20rem] md:h-[40rem] ">
      <Carousel leftControl={''} rightControl={''} theme={mainSliderTheme} indicators={false} >
        {mainSlides &&
          mainSlides.map((slide: any, index: number) => {
            return (
              <MainSliderItem imgSrc={'http://localhost:1337' + slide.Image.url } key={index}>
                <div className="absolute w-full h-full text-center justify-around bottom-[1rem] left-0 flex gap-4 justify-between items-center lg:p-10 md:p-5 p-[1rem] text-white z-20">
                  <p className="2xl:text-[5.5rem] xl:text-[4.5rem] lg:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] xs:text-[2rem] font-semibold capitalize w-2/3">
                    {slide.Title}
                  </p>
                </div>
              </MainSliderItem>
            );
          })}
      </Carousel>
    </div>
  );
};

export default MainSlider;
