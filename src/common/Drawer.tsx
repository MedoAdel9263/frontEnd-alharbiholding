

import { Avatar, Button, Datepicker, Drawer, Label, Textarea, TextInput, theme } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { HiCalendar, HiUserAdd } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export function DrawerComponent({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Function }) {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
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

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header className="flex items-center mb-8" title="" titleIcon={() => <img className="w-[13rem]" src="logo-light.png" alt="logo" />}> <img src="logo-light.png" alt="logo" /></Drawer.Header>
                <Drawer.Items>
                <nav className="flex flex-col space-y-4 pb-8 px-4">
                        <a href="#companies" className="text-gray-700 text-bold text-accent-900">Our Companies</a>
                        <a href="#partners" className="text-gray-700  bold text-accent-900">Our Partners</a>
                        <a href="#careers" className="text-gray-700  bold text-accent-900">Career Center</a>
                        <a href="#about" className="text-gray-700  bold text-accent-900">About Us</a>
                        <a href="#contact" className="text-gray-700  bold text-accent-900">Contact Us</a>
                    </nav>

                    <div><h3 className="relative mb-30px pb-[14px] font-secondary text-[1.25rem] font-bold uppercase dark:text-white text-accent-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[50px] after:bg-current mb-8">ABOUT US</h3><p className="text-accent-800 dark:text-white/70 mb-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></div>
                    <div><h3 className="relative mb-30px pb-[14px] font-secondary text-[1.25rem] font-bold uppercase dark:text-white text-accent-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[50px] after:bg-current">Contact US</h3></div>

                    <form onSubmit={sendEmail}>
                        <div className="mb-6 mt-3">

                            <input placeholder="Your name" type="text" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100 rounded-[5px] border-none" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-6 mt-3">

                            <input placeholder="Your Email" type="email" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100  rounded-[5px] border-none" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-6 mt-3">

                            <input placeholder="Subject" type="text" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100  rounded-[5px] border-none" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div className="mb-6 mt-3">

                        <input placeholder="Phone" type="tel" className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-100  rounded-[5px] border-none" name="phone" value={phone}  onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="mb-6">

                        <textarea placeholder="Message" name="message" className="flex items-center w-full rounded-[5px] px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 resize-none bg-accent-100 rounded-[5px] border-none min-h-[140px] pt-4 md:min-h-[200px]" value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <Button className="w-full bg-primary h-14 flex items-center">
                            Send Now
                        </Button>
                    </form>
                </Drawer.Items>
            </Drawer>
        </>
    );
}
