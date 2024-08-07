import React, { useEffect, useState } from 'react'

function ScrollTop() {

    const [isFixed, setIsFixed] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > window.innerHeight - 150) {
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
    <button onClick={() => handleScrollToTop()} aria-label="Scroll to top" className={`group fixed bottom-[-10%] right-[50px] z-444 grid h-[50px] w-[50px] place-items-center rounded-[50%] bg-primary text-[18px] text-white [transition:1s_ease] hover:bg-primary-light focus-visible:outline-0 !bottom-30px opacity-100 z-[1000] ${isFixed ? 'fixed bottom-[2rem]':''}`}><svg stroke="currentColor" fill="currentColor"strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z"></path></svg></button>
  )
}

export default ScrollTop