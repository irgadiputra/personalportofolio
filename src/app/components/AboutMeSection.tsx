"use client"
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import Image from "next/image";
import Codeppl from '@/app/image/Codeppl.png';

export default function AboutMeSection() {
  const dispatch = useAppDispatch();
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutme = useAppSelector((state) => state.auth.refs.about);
  const hasMounted = useRef(false);

  const scrollToSection = () => {
    console.log(aboutme);
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (hasMounted.current) {
      scrollToSection();
    } else {
      hasMounted.current = true;
    }
  }, [aboutme]);

  return (
    <div ref={aboutRef} id="aboutme-section" className="relative bg-[#D98324] h-screen w-full grid grid-cols-8 grid-rows-9 gap-4 pt-5 bg-cover bg-center bg-[url('../app/image/picture4.png')] text-[#FFF0DC]">
      <div className="flex flex-col items-center justify-end w-full col-span-8 text-[20px] -mb-6">
        - About me
      </div>
      <div className="w-full pl-4 pr-4 font-extrabold row-start-2 col-span-1 md:col-span-8 rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center text-[30px] md:text-[50px] text-[#131010] ">
        Introduction
      </div>
      <p className="border-4 bg-[#D98324] border-[#131010] w-fit pl-4 pr-4 font-extrabold row-start-4 col-start-1 md:col-start-2 col-span-1 md:col-span-2 rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center text-[25px] md:text-[35px] text-[#131010] ">
        About Me
      </p>
      <div className="bg-[#131010] p-5 row-start-5 row-span-3 col-start-1 md:col-start-2 rounded-3xl col-span-1 md:col-span-3 flex flex-col justify-center text-[14px]">
        <h1 className="text-[20px] md:text-[24px] text-[#D98324]">
          Hello!,
        </h1>
        <h1>
          Completed my Bachelor of Applied Science of Mechatronic Engineering from Batam State Polytechnic in 2022. Almost 3 years of experience as a Software Engineer. I am interested in programming, especially Desktop applications and Automations. I really like to try new things and challenge myself to keep growing.
        </h1>
      </div>
      <div className="row-start-3 -ml-[40px] col-start-1 md:col-start-6 row-span-5 col-span-1 md:col-span-2 ">
        <Image src={Codeppl} alt="Logo" height={420} className="w-fit h-fit"/>
        <a href="https://storyset.com/technology"></a>
      </div>
    </div>
  );
}