

import React, { useEffect, useState } from 'react';
import { DrawerComponent } from '../../common/Drawer';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const router = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`fixed-top bg-white border-b border-gray-300 transition-all duration-500 ${isFixed ? 'fixed top-0 left-0 w-full animate-fadeIn z-[100] px-[1rem] py-[.5rem] !bg-[#f4f7fc]' : 'relative px-[1rem] lg:px-[3rem] py-[0rem] lg:py-4'}`}>
                <div className="mx-auto flex flex-row justify-between items-center ">
                    <div className="flex items-center space-x-4">
                        <img onClick={() => router('/')} alt=" brand logo" className="cursor-pointer grid flex-none place-items-center  max-h-[50px] hidden lg:block" style={{ "color": "transparent" }} sizes="100vw" src={`/logo-light.png`} />
                        <img onClick={() => router('/')} alt=" brand logo" className="cursor-pointer logo-light dark:hidden block lg:hidden w-[10rem] !mx-0" style={{ "color": "transparent" }} src={`/logo-light.png`} />
                    </div>
                    <div className='hidden lg:flex flex-col flex-1'>
                        <div className="hidden lg:flex space-x-8 justify-end">
                            <a onClick={() => router('/')} className={`${isFixed ? 'text-primary font-md py-[10px] cursor-pointer hover:text-primary  text-[18px]' : 'text-primary font-md py-[20px] cursor-pointer hover:text-primary hover:font-bold  text-[18px]'}`}>Home</a>

                            <a onClick={() => router('/history-category')} className={`${isFixed ? 'text-[#222222] font-md py-[10px] cursor-pointer hover:text-primary font-[400] text-[18px]' : 'text-[#222222] font-md py-[20px] cursor-pointer hover:text-primary font-[400]  text-[18px]'}`}>History</a>
                            <a onClick={() => router('/company')} className={`${isFixed ? 'text-[#222222] font-md py-[10px] cursor-pointer hover:text-primary font-[400]  text-[18px]' : 'text-[#222222] font-md py-[20px] cursor-pointer hover:text-primary  font-[400]  text-[18px]'}`}>Companies</a>
                            <a onClick={() => router('/about-us')} className={`${isFixed ? 'text-[#222222] font-md py-[10px] cursor-pointer hover:text-primary font-[400]  text-[18px]' : 'text-[#222222] font-md py-[20px] cursor-pointer hover:text-primary  font-[400]  text-[18px]'}`}>About Us</a>
                            <a onClick={() => router("/contact-us")} href="#contact" className={`${isFixed ? 'text-[#222222] font-md py-[10px] cursor-pointer hover:text-primary font-[400]  text-[18px]' : 'text-[#222222] font-md py-[20px] cursor-pointer hover:text-primary font-[400]  text-[18px]'}`}>Contact Us</a>
                        </div>

                    </div>
                    <div className="lg:hidden flex items-center">

                        <button onClick={() => setIsOpenDrawer(!isOpenDrawer)} id="mobileMenuButton" className="lg:hidden text-gray-500 focus:outline-none">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>

            </header>
            {
                isOpenDrawer && (
                    <div data-aos="zoom-in">
                        <DrawerComponent isOpen={isOpenDrawer} />
                    </div>

                )

            }



        </>

    );
}
