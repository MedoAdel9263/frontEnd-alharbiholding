import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useContactUsMutation } from '../../utils/services/ContactUs.service';

function ContactUsComponent({ items }: { items: any }) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [ContactUs, { data, isSuccess }] = useContactUsMutation();


    const sendEmail = async (e: any) => {

        e.preventDefault();
        try {
            // emailjs.sendForm(
            //     "service_66pmbwi", "template_n21utys", e.target, "0qeJ-5iblRusaAbPA");

            await ContactUs(
                {
                    Name: name,
                    Phone: phone,
                    Subject: subject,
                    Message: message,
                    Email: email,
                }
            )
            Swal.fire({
                icon: 'success',
                text: "Thank you for reaching out! We'll get back to you shortly.",
                showConfirmButton: true
            })
            setPhone("");
            setMessage("");
            setName("");
            setSubject("");
            setEmail("");
        }
        catch (error) {
            console.log(error)
        }

    };
    return (
        <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0'>
            <div className="mx-0 md:mx-10 lg:mx-14">
                <div className='flex flex-col gap-[50px] md:flex-row'>
                    <div className="">
                        <div className="mb-[3rem]">
                            <div className="text-left">
                                <h2 className="sub-title font-bold text-xl !text-[#a39161]">Contact Us</h2>
                                <h2 className="text-dynamic font-bold">Get in touch </h2>

                            </div>
                        </div>
                        <div className='flex flex-col gap-[50px] lg:flex-row bg-[#f4f7fc] p-[1.5rem] rounded-md'>
                            <div className='flex flex-col w-full lg:w-[55%]'>
                                <div className="mb-30px">
                                    <div className="text-left">
                                        <p className="my-5  text-[#848383] text-md">If you need more information about our services, please fill out the form below and provide as much detail as possible about your information needs and we will get back to you. </p>
                                    </div>
                                </div>
                                <form className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-30px " onSubmit={sendEmail}>
                                    <div>
                                        <div className="relative w-full">
                                            <input placeholder="Your name" type="text" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[10px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-white rounded-[10px] !border !border-blaCK" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative w-full">
                                            <input placeholder="Your Email" type="email" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[10px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-white  rounded-[10px] !border !border-blaCK" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative w-full">
                                            <input placeholder="Subject" type="text" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[10px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-white  rounded-[10px] !border !border-blaCK" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative w-full">
                                            <input placeholder="Phone" type="tel" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[10px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-white  rounded-[10px] !border !border-blaCK" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <div className="relative w-full">
                                            <textarea placeholder="Message" name="message" className="flex items-center min-h-[3.5rem] md:min-h-[10.75rem] w-full rounded-[10px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-white  rounded-[10px]" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className='lg:col-span-2'>
                                        <button className="relative z-[2] text-white text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-primary hover:bg-white !w-full !rounded-md !border !border-primary" type="submit">
                                            <span className="relative z-1">Send Message</span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className=" w-full lg:w-[45%] my-[1.5rem] lg:my-[3rem]">

                                <ul aria-label="addresses" className="grid lg:gap-[3rem] gap-[1rem]">
                                    <li className="flex gap-30px">
                                        <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                        </span>
                                        <div className='flex flex-col items-center px-[20px]'>
                                            <h4 className="text-xl font-bold leading-[1.5] mb-[.5rem] text-accent-900  w-full">Address</h4>
                                            <address className="not-italic text-[#848383]">
                                                {items[0].Address}</address>
                                        </div>
                                    </li>
                                    <li className="flex gap-30px items-center">
                                        <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                                        </span>
                                        <div className='flex flex-col items-center px-[20px]'>
                                            <h4 className="text-xl font-bold leading-[1.5] mb-[.5rem] text-accent-900 w-full">Email Address</h4>
                                            <a className='text-[#848383]' href={`mailto:${items[0].Email}`}>{items[0].Email}</a>
                                        </div>
                                    </li>
                                    <li className="flex gap-30px items-center">
                                        <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                                        </span>
                                        <div className='flex flex-col items-left px-[20px]'>
                                            <h4 className="text-xl font-bold leading-[1.5] mb-[.5rem] text-accent-900  w-full">Phone number</h4>
                                            <a className='text-[#848383]' href={`tel:${items[0].Phone}`}>{items[0].Phone}</a>
                                        </div>
                                    </li>
                                    <li>
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
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>


    )
}

export default ContactUsComponent