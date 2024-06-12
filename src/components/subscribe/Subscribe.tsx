import React from 'react'

function Subscribe() {
    return (
        <div className="mt-4 px-[16px] mx-0 md:mx-6 lg:mx-10  rounded-md">
            <div className="relative overflow-hidden rounded-md bg-primary px-6 py-14">
                <div className="relative z-10 mx-auto max-w-[630px] rounded-5  text-center">
                    <h2 className="mx-auto max-w-[490px] font-secondary text-xl font-bold capitalize leading-[1.25] text-white md:text-2xl">Have question? Feel Free To Ask</h2>
                    <form className="mt-6 flex flex-col items-center justify-center gap-[.625rem] md:mt-[1.875rem] md:flex-row">
                        <div className="relative w-full">
                            <input placeholder="Enter Email" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-5 px-4 md:px-5 py-2 bg-transparent border border-solid focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 border-white border-opacity-60 text-white placeholder:text-white focus:border-white border-white border-opacity-60 text-white placeholder:text-white" />
                        </div>
                        <button className="subscribe relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 rounded-5 min-w-[190px] flex-none text-white max-md:w-full bg-primary-light after:bg-white hover:text-black" type="submit">
                            <span className='z-[1]'>SUSCRIBE</span>
                        </button>
                    </form>
                </div>
                <img alt="cta section bg pattern" loading="lazy" width="520" height="316" decoding="async" data-nimg="1" className="moving-div right-0 pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60" style={{ "color": "transparent" }} sizes="100vw" src="cta/pattern-1.png" />
            </div>
        </div>
    )
}

export default Subscribe