import React from "react";

const MainSliderItem = ({
    imgSrc,
    children,
}: {
    imgSrc: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className="relative w-full h-[20rem] md:h-[40rem]  object-scale-down object-top overflow-hidden">
            <div className="absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"><button className="group" data-testid="carousel-right-control" type="button" aria-label="Next slide"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg></span></button></div>
            {/* <div className="absolute flex justify-center items-center right-0 w-[30%] absolute bottom-0 h-full">
                <img src={'hero/shape-4.png'} className="w-[1rem] md:w-[2rem] rotate-continuous mb-[13rem]" />
            </div> */}
            <img src={imgSrc} className=" h-full w-screen " />
            {/* <img src={'hero/shape-5.png'} className=" w-screen absolute bottom-0 h-[10rem]" /> */}
            {/* <div className="absolute flex justify-center items-center left-0 w-[30%] absolute bottom-0 h-full flex-row-reverse">
                <img src={'hero/shape-4.png'} className=" w-[1rem] md:w-[2rem] rotate-continuous mb-[13rem]" />
            </div> */}
            <div className="absolute w-full h-full top-0 left-0 bg-black z-10 text-xs flex justify-center items-center opacity-40"></div>
            {children}
        </div>
    );
};

export default MainSliderItem;
