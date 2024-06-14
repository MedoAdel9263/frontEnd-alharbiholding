

import { Avatar, Button, Datepicker, Drawer, Label, Textarea, TextInput, theme } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { HiCalendar, HiUserAdd } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
export function DrawerComponent({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Function }) {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const router = useNavigate();

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

                    <div className="grid w-full" data-orientation="vertical">
                    <a onClick={() => router('/')} className="min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0 px-5 text-left font-primary text-base text-accent-700 font-bold no-underline hover:no-underline border-t focus:text-primary active:text-primary cursor-pointer"> Home</a>
                        <a onClick={() => router('/history-category')} className="min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0 px-5 text-left font-primary text-base text-accent-700 font-bold no-underline hover:no-underline border-t focus:text-primary active:text-primary cursor-pointer"> History</a>
                        <a onClick={() => router('/company')} className="min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0 px-5 text-left font-primary text-base text-accent-700 font-bold no-underline hover:no-underline border-t focus:text-primary active:text-primary cursor-pointer"> Companies</a>
                        <a onClick={() => router('/partners')} className="min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0 px-5 text-left font-primary text-base text-accent-700 font-bold no-underline hover:no-underline border-t focus:text-primary active:text-primary cursor-pointer"> Partners</a>
                        <a onClick={() => router('/about-us')} className="min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0 px-5 text-left font-primary text-base text-accent-700 font-bold no-underline hover:no-underline border-t focus:text-primary active:text-primary cursor-pointer">About Us</a>
                        <a onClick={() => router('/contact-us')} className="min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0 px-5 text-left font-primary text-base text-accent-700 font-bold no-underline hover:no-underline border-t focus:text-primary active:text-primary cursor-pointer">Contact Us</a>
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    );
}
