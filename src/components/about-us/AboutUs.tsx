import React from 'react'

function AboutUs({aboutUs}:{aboutUs:any}) {
    return (
        <section id='about-us' className=" overflow-hidden">
            <div className="mt-24 px-[16px] mx-0 md:mx-10 lg:mx-14">
                <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1fr] 2xl:gap-20">
                    <div className="lg:order-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
                        <div className="text-left">
                            <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900  md:text-2xl">About Us</h2>
                            <p className="mt-5 whitespace-pre-line">
                              {aboutUs[0].attributes.Description}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto text-center">
                        <div className="relative mx-auto grid max-w-[580px] grid-cols-2 gap-2.5 overflow-hidden">
                            <div className="relative flex justify-end overflow-hidden">
                                <div className="relative z-[2] mt-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <span className="absolute -left-2.5 -top-2.5 -z-1 h-full w-full rounded-tl-[60px] bg-primary-light">
                                    </span>
                                    <div className="relative z-[4] overflow-hidden">
                                        <img alt="about one" loading="lazy" width="195" height="132" decoding="async" data-nimg="1" className="rounded-tl-[60px] object-cover object-top" style={{"color": "transparent"}} src="about/aboutus-1.jpg"/>
                                    </div>
                                </div>
                                <img alt="pattern-1" data-aos="zoom-in" data-aos-delay="250" loading="lazy" width="383" height="246" decoding="async" data-nimg="1" className="absolute bottom-[-55%] left-[42px] z-1 block object-cover aos-init aos-animate" style={{"color": "transparent"}} src="about/pattern-1.png"/>
                            </div>
                            <div className="flex overflow-hidden">
                                <img alt="about two" data-aos="fade-right" data-aos-delay="300" loading="lazy" width="312" height="304" decoding="async" data-nimg="1" className="rounded-[80px_10px] object-cover aos-init aos-animate" style={{"color": "transparent"}} src="about/aboutus-2.png"/>
                            </div>
                            <div className="ml-auto flex max-w-[250px] justify-end overflow-hidden">
                                <img alt="about four" data-aos="fade-left" data-aos-delay="350" loading="lazy" width="250" height="265" decoding="async" data-nimg="1" className="rounded-[50px_10px] object-cover aos-init aos-animate" style={{"color": "transparent"}} src="about/aboutus-3.png"/>
                            </div><div className="overflow-hidden">
                                <img alt="about four" data-aos="fade-right" data-aos-delay="400" loading="lazy" width="250" height="265" decoding="async" data-nimg="1" className="rounded-10 rounded-br-[80px] object-cover aos-init aos-animate" style={{"color": "transparent"}} src="about/aboutus-4.jpg"/>
                            </div>
                            <div className="absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                                <div data-aos="zoom-in" data-aos-delay="450" className="aos-init aos-animate">
                                    <span className="grid h-[100px] w-[100px]  place-items-center rounded-full border-[12px] border-white bg-primary text-[30px] ">
                                        <svg width="1em" height="1em" viewBox="0 0 27 27" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M26.8125 13.8672C26.8125 14.9922 25.875 15.9297 24.8125 15.9297H15.8125V24.9297C15.8125 25.9922 14.875 26.8672 13.8125 26.8672C12.6875 26.8672 11.8125 25.9922 11.8125 24.9297V15.9297H2.8125C1.6875 15.9297 0.8125 14.9922 0.8125 13.8672C0.8125 12.8047 1.6875 11.9297 2.8125 11.9297H11.8125V2.92969C11.8125 1.80469 12.6875 0.867188 13.8125 0.867188C14.875 0.867188 15.8125 1.80469 15.8125 2.92969V11.9297H24.8125C25.875 11.8672 26.8125 12.8047 26.8125 13.8672Z"></path></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs