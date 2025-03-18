"use client"
import { useEffect, useRef } from "react";
import { useAppSelector} from "@/lib/redux/hooks";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function ContactSection () {
     
    const contactRef = useRef<HTMLDivElement>(null);
    const contact = useAppSelector((state) => state.auth.refs.contact);
    const hasMounted = useRef(false);

    const scrollToSection = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
      useEffect(() => {
        if (hasMounted.current) {
          scrollToSection();
        } else {
          hasMounted.current = true;
        }
      }, [contact]);

    return (
        <div ref={contactRef} id="experince-section" className="relative bg-[#131010] h-screen w-full grid grid-cols-1 md:grid-cols-8 pt-5 grid-rows-9 gap-4 bg-cover bg-center bg-[url('../app/image/picture4.png')]">
            <div className="flex flex-col items-center justify-end w-full col-span-1 md:col-span-8 text-[20px] -mb-6">
                - Contacts
            </div>
            <div className="w-full pl-4 pr-4 font-extrabold row-start-2 col-span-1 md:col-span-8 flex flex-col items-center justify-center text-[30px] md:text-[50px] text-[#D98324] ">
                My Contacts
            </div>
            <div className="row-start-3 row-span-6 col-start-1 md:col-start-2 col-span-1 md:col-span-6 bg-[#FFF0DC] p-6 rounded-lg shadow-lg text-[#131010]">
                <form className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 rounded border border-gray-300"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 rounded border border-gray-300"
                />
                <textarea
                    placeholder="Your Message"
                    className="p-2 rounded border border-gray-300 h-32"
                ></textarea>
                <button
                    type="submit"
                    className="bg-[#D98324] text-[#FFF0DC] p-2 rounded font-bold hover:bg-[#b56d1e]"
                >
                    Send Message
                </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-[#131010]">Email: example@example.com</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#D98324] hover:underline w-[60px] h-[60px]">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="3x"/>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#D98324] hover:underline w-[60px]">
                        <FontAwesomeIcon icon={faGithub} className="mr-2" size="3x" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#D98324] hover:underline w-[65px]">
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" size="3x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}