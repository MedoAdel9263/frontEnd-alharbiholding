import React from 'react'
import { useNavigate } from 'react-router-dom';


function Footer({ items }: { items: any }) {

    const router = useNavigate();

    return (
        <>
            <footer className=' overflow-hidden bg-[#222222] text-accent-800 dark:text-body dark:bg-accent-900 relative bottom-[-25px] w-full'>
                <div className="pt-[2rem] px-[16px] mx-0 md:mx-10 lg:mx-14 ">
                    {/* <div className="flex items-center justify-between gap-x-20 gap-y-4 pb-5 pt-[60px] lg:pt-20 !pt-0">
                        <a target="_self" href="/">
                            <img alt="undefined brand logo" className="logo-light" style={{ "color": "transparent" }} sizes="100vw" src={`/logo-light.png`} />
                        </a>
                        <nav aria-label="social links">
                            <ul className="footer inline-flex items-center gap-2.5">
                                
                                {
                                    items[0].Facebook && (
                                        <li>
                                        <a target="_blank" aria-label="https://www.facebook.com/" className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-30px h-30px rounded-[5px] p-2 grid place-items-center bg-accent-200 hover:bg-primary  hover- hover: text-primary bg-primary/10 hover:bg-primary" href={`${items[0].Facebook}`}>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                            </span>
                                        </a>
                                    </li>
                                    )
                                }
                                
                                {
                                    items[0].LinkedIn && (
                                        <li>
                                        <a target="_blank" aria-label="https://www.linkedin.com/" className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-30px h-30px rounded-[5px] p-2 grid place-items-center bg-accent-200 hover:bg-primary  hover- hover: text-primary bg-primary/10 hover:bg-primary" href={`${items[0].LinkedIn}`}>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                            </span>
                                        </a>
                                    </li>
                                    )
                                }
                                {
                                    items[0].Twitter && (
                                        <li>
                                        <a target="_blank" aria-label="https://twitter.com/" className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-30px h-30px rounded-[5px] p-2 grid place-items-center bg-accent-200 hover:bg-primary  hover- hover: text-primary bg-primary/10 hover:bg-primary" href={`${items[0].Twitter}`}>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                            </span>
                                        </a>
                                    </li>
                                    )
                                }
                                {
                                    items[0].Instagram && (
                                        <li>
                                            <a target="_blank" aria-label="https://www.instagram.com/" className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-30px h-30px rounded-[5px] p-2 grid place-items-center bg-accent-200 hover:bg-primary  hover- hover: text-primary bg-primary/10 hover:bg-primary" href={`${items[0].Instagram}`}>
                                                <span>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                                </span>
                                            </a>
                                        </li>
                                    )
                                }

                            </ul>
                        </nav>
                    </div> */}
                    <div className="border-b border-accent-800 border-opacity-30 py-[60px] border-accent-100 border-opacity-30">
                        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <div data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate col-span-2">
                                <h3 className="text-gray-900  text-lg font-bold leading-[1.25] md:text-xl mb-5 md:mb-[1.875rem] text-white">Al Harbi Holding</h3>
                                <p className='mb-[2rem]'>
                                Al Harbi Family started their business in only one company (Al Harbi Trading and Contracting Co. Ltd.) mastering the field of contracting. It was established in 1965 with a unique vision of its own "Being the market leader in its field".persisting on that vision and building up on the company's brandequity, AL Harbi Trading and Contracting became one of the major companies under the umbrella af Al Harbi Holding.
                                </p>
                                <div className="flex items-center">
                                            <div className="mr-4">
                                                <i className="fas fa-share-alt fa-2x text-primary"></i>
                                            </div>
                                            <div className="flex">
                                                <a className="bg-primary text-white rounded-full w-[60px] h-[60px] flex items-center justify-center mr-2 hover:bg-white hover:fill-primary border border-primary" href="http://www.facebook.com">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>

                                                </a>
                                                <a className="bg-primary text-white rounded-full w-[60px] h-[60px] flex items-center justify-center mx-2 hover:bg-white hover:fill-primary border border-primary" href="http://www.twitter.com">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>

                                                </a>
                                                <a className="bg-primary text-white rounded-full w-[60px] h-[60px] flex items-center justify-center mx-2 hover:bg-white hover:fill-primary border border-primary" href="http://www.instagram.com">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>

                                                </a>
                                                <a className="bg-primary text-white rounded-full w-[60px] h-[60px] flex items-center justify-center mx-2 hover:bg-white hover:fill-primary border border-primary" href="http://www.linkedin.com">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>

                                                </a>
                                            </div>
                                        </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="800" className="aos-init aos-animate">
                                <h3 className="text-gray-900  text-md font-bold leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem] text-white !text-lg">Contact Us</h3>
                                <ul aria-label="addresses" className="grid gap-5">
                                    <li className="flex gap-5 items-center">
                                        <span className="text-primary flex-none leading-none self-start relative top-2">
                                            <div className='bg-primary rounded-[50%] w-[50px] h-[50px] flex items-center justify-center hover:bg-white !cursor-pointer'>

                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill='white' d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                                            </div>
                                        </span>
                                        <a href={`tel:${items[0].Phone}`} className="transition-colors duration-300  text-white">{items[0].Phone}</a>
                                    </li>
                                    <li className="flex gap-5 items-center"><span className="text-white flex-none leading-none self-start relative top-2 ">
                                        <div className='bg-primary rounded-[50%] w-[50px] h-[50px] flex items-center justify-center hover:bg-white !cursor-pointer'>
                                            <svg strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill='white' d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>

                                        </div>
                                    </span>
                                        <a href={`mailto:${items[0].Email}`} className="transition-colors duration-300  text-white">{items[0].Email} </a>
                                    </li>
                                    <li className="flex gap-5 items-center">
                                        <span className="text-primary flex-none leading-none self-start relative top-2">
                                            <div className='bg-primary rounded-[50%] w-[50px] h-[50px] flex items-center justify-center hover:bg-white !cursor-pointer'>
                                                <svg strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill='white' d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                            </div>

                                        </span>
                                        <address className="not-italic text-white">{items[0].Address}</address>
                                    </li>
                                </ul>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
                                <h3 className="text-gray-900  text-md font-bold leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem] text-white">Quick Links</h3>
                                <nav aria-label="footer links navigation">
                                    <ul className="grid gap-2">
                                        <li className="flex items-center gap-2.5">
                                            <a target="_self" className="transition-colors duration-300 text-white hover:text-primary hover:" onClick={() => router('/')}>Home</a>
                                        </li>

                                        <li className="flex items-center gap-2.5">
                                            <a target="_self" className="transition-colors duration-300 text-white hover:text-primary hover:" onClick={() => router('/company')}>Companies</a>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <a target="_self" className="transition-colors duration-300 text-white hover:text-primary hover:" onClick={() => router('/partners')}>Our Partners</a>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <a target="_self" className="transition-colors duration-300 text-white hover:text-primary hover:" onClick={() => router('/about-us')}>About us</a>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <a target="_self" className="transition-colors duration-300 text-white hover:text-primary hover:" onClick={() => router('/contact-us')}>Contact us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="flex min-h-[90px] items-center py-5">
                        <div className="w-full">
                            <div className="flex flex-wrap items-center justify-left gap-x-8 gap-y-4 md:gap-x-10 w-full text-white">
                                <p>© alharbiholding | All Rights Reserved</p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer