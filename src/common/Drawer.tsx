

import {Drawer} from "flowbite-react";
import React from "react";
import { useNavigate } from 'react-router-dom';
export function DrawerComponent({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Function }) {

    
    const router = useNavigate();

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
