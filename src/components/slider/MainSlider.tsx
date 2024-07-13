import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import MainSliderItem from "./MainSliderItem";
import React, { ReactNode } from "react";
import { Constants } from "../../Constants";
const MainSlider = ({ mainSlides }: { mainSlides: any[] }) => {
  const mainSliderTheme: CustomFlowbiteTheme["carousel"] = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  };

  const LeftToggle = () : ReactNode => {
    return (
      <div className="flex items-center justify-center w-[3rem] h-[3rem] rounded-[50%] bg-primary fill-white hover:fill-primary hover:bg-white">
<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
      </div>
    )
  }

  const RightToggle = () : ReactNode => {
    return (
      <div className="flex items-center justify-center w-[3rem] h-[3rem] rounded-[50%] bg-primary fill-white hover:fill-primary hover:bg-white rotate-180	">
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
      </div>
    )
  }

  return (
    <div className="relative h-[20rem] md:h-[40rem] ">
      <Carousel leftControl={RightToggle()} rightControl={LeftToggle()} theme={mainSliderTheme} indicators={false} >
        {mainSlides &&
          mainSlides.map((slide: any, index: number) => {
            return (
              <MainSliderItem imgSrc={Constants.ISPRODACTION ? Constants.HOSTURL + slide.Image.url : `${slide.Image}`  } key={index}>
                <div className="absolute  w-full h-full text-center justify-around bottom-[1rem] left-0 flex gap-4 justify-between items-center lg:p-10 md:p-5 p-[1rem] text-white z-20">
                  <div className="flex flex-col justify-center items-center">
                  <p data-aos='fade-up' className="2xl:text-[5.5rem] xl:text-[4.5rem] lg:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] xs:text-[2rem] font-semibold capitalize w-full mb-10">
                    {slide.Title}
                  </p>
                  <p data-aos='fade-up' className="text-lg text-white">
                    {slide.description}
                  </p>
                  </div>
                 
                </div>
              </MainSliderItem>
            );
          })}
      </Carousel>
    </div>
  );
};

export default MainSlider;
