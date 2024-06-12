

import React, { useEffect, useState } from 'react';
import { DrawerComponent } from '../../common/Drawer';
import { useNavigate } from 'react-router-dom';

export default function Header({ items }: { items: any }) {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const router = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > window.innerHeight) {
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

      const scrollToContactUs = (id: string) => {
        router(`/home#${id}`);
        setTimeout(() => {
            const contactUsElement = document.getElementById(id);
      
            if (contactUsElement) {
              const elementPosition = contactUsElement.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - 100;
      
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
              });
            }
          }, 100);
    
      };

    return (
        <>
            <header className={`fixed-top border-b border-gray-300 transition-all duration-500 ${isFixed ? 'fixed top-0 left-0 w-full animate-fadeIn z-[100] bg-white' : 'relative'}`}>
                <div className="mx-auto flex flex-row justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img onClick={() => router('/')} alt=" brand logo" className="cursor-pointer grid flex-none place-items-center bg-white px-9 py-6 dark:bg-[#212124] hidden lg:block" style={{ "color": "transparent" }} sizes="100vw" src="logo-light.png" />
                        <img onClick={() => router('/')} alt=" brand logo" className="cursor-pointer logo-light dark:hidden block lg:hidden w-[10rem] p-4 !mx-0" style={{ "color": "transparent" }} src="logo-light.png" />
                    </div>
                    <div className='hidden lg:flex flex-col flex-1'>
                        <div className="hidden lg:flex space-x-8">
                            <a onClick={() => router('/media-center')} className="text-primary py-4 cursor-pointer">Media Center</a>
                            <a onClick={() => router('/company')} className="text-primary py-4 cursor-pointer">Our Companies</a>
                            <a onClick={() => router('/partners')} className="text-gray-700  py-4 cursor-pointer">Our Partners</a>
                            <a onClick={() => router('/career-center')} className="text-gray-700  py-4 cursor-pointer">Career Center</a>
                            <a onClick={() => scrollToContactUs("about-us")} className="text-gray-700  py-4 cursor-pointer">About Us</a>
                            <a onClick={() => scrollToContactUs("contact-us")} href="#contact" className="text-gray-700  py-4 cursor-pointer">Contact Us</a>
                        </div>
                        <div className="hidden lg:flex flex-1' py-2 border-t border-gray-300">
                            <div className="text-center">
                                <div className="text-gray-700 flex flex-row gap-5 justify-center items-center">
                                    <span className="text-base/[1] text-primary flex-none">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                                    </span>
                                    <a href="tel:+966(012)6991333">{items[0].Phone}</a>
                                    <span className="text-base/[1] text-primary flex-none">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                                    </span>
                                    <a href="mailto: info@alharbiholding.com.sa"> info@alharbiholding.com.sa</a>
                                    <span className="text-base/[1] text-primary flex-none">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
                                    </span>
                                    {items[0].Address}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button className="text-gray-500 focus:outline-none mr-4">
                        </button>
                        <button onClick={() => setIsOpenDrawer(true)} id="mobileMenuButton" className="md:hidden text-gray-500 focus:outline-none">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>

            </header>
            {
                isOpenDrawer && (
                    <DrawerComponent isOpen={isOpenDrawer} setIsOpen={() => setIsOpenDrawer(false)} />
                )

            }
           
        </>

    );
}
