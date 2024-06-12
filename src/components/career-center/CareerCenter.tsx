import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function CareerCenterComponent({items}:{items:any}) {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('Career Center');
    const [cv, setCV] = useState<any>(null);
    const sendEmail = (e: any) => {

        e.preventDefault();
        try {
            emailjs.sendForm(
                "service_66pmbwi", "template_n21utys", e.target, "0qeJ-5iblRusaAbPA");
            Swal.fire({
                icon: 'success',
                text: "Thank you for reaching out! We'll get back to you shortly.",
                showConfirmButton: true
            })
            setFirstName("");
            setLastName("");
            setSubject("");
            setEmail("");
            setCV(null);

        }
        catch (error) {
            console.log(error)
        }

    };

  return (
   <div>
     <section id='contact-us' className=" overflow-hidden">
            <div className="my-24 px-[16px] mx-0 md:mx-10 lg:mx-14">
                <div className='flex flex-col gap-[50px] md:flex-row'>
                    <div className="md:w-1/2 lg:w-2/3">
                        <div className="mb-30px">
                            <div className="text-left">
                                <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 md:text-2xl mb-[2rem]">Career Center</h2>
                                <p className='mt-4 mb-10'> Would you like to join ALHarbi Holding and become one of our teams? Submit your Resume and we will process your request according to the available vacancies.</p>
                            </div>
                        </div>
                        <form className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-30px" onSubmit={sendEmail}>
                            <div>
                                <div className="relative w-full">
                                    <input placeholder="Your First Name" type="text" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100 rounded-[5px] border-none" name="firstName" value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full">
                                    <input placeholder="Your Last Name" type="text" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100 rounded-[5px] border-none" name="lastName" value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full">
                                    <input placeholder="Your Email" type="email" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100  rounded-[5px] border-none" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                           
                            <div>
                                <div className="relative w-full">
                                    <input placeholder="cv" type="file" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100  rounded-[5px] border-none" name="cv" value={cv}  onChange={(e) => setCV(e.target.value)} />
                                </div>
                            </div>
                           
                            <div>
                                <button className="cursor-pointer relative z-[2] text-white text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-white hover:text-white hover:after:w-full hover:after:left-0 rounded-[5px]" type="submit">
                                    <span className="relative z-1">SEND A MESSAGE</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-1/2 lg:w-2/6">
                        <div className="mb-30px">
                            <div className="text-left">
                                <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 md:text-2xl">Get in touch </h2>
                                <p className="my-5 whitespace-pre-line leading-8">If you need more information about our services, please fill out the form below and provide as much detail as possible about your information needs and we will get back to you. </p>
                            </div>
                        </div>
                        <ul aria-label="addresses" className="grid gap-5">
                            <li className="flex gap-30px">
                                <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                </span>
                                <div className='flex flex-col items-center px-[20px]'>
                                    <h3 className="text-md font-bold leading-[1.5] mb-1.5 text-accent-900  w-full">Address</h3>
                                    <address className="not-italic">
                                    {items[0].Address}</address>
                                </div>
                            </li>
                            <li className="flex gap-30px items-center">
                                <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                                </span>
                                <div className='flex flex-col items-center px-[20px]'>
                                    <h3 className="text-md font-bold leading-[1.5] mb-1.5 text-accent-900 w-full">Email Address</h3>
                                    <a href="mailto:info@alharbiholding.com.sa">info@alharbiholding.com.sa</a>
                                </div>
                            </li>
                            <li className="flex gap-30px items-center">
                                <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                                </span>
                                <div className='flex flex-col items-center px-[20px]'>
                                    <h3 className="text-md font-bold leading-[1.5] mb-1.5 text-accent-900  w-full">Phone number</h3>
                                    <a href={`tel:${items[0]?.Phone!}`}>{items[0]?.Phone!}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
   </div>
  )
}

export default CareerCenterComponent