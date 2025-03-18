"use client"
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { setProject } from "@/lib/redux/features/authSlice";
import Image from "next/image";
import XYZ from '@/app/image/xyz.jpg';

export default function PortofolioSection() {
    
    const dispatch = useAppDispatch();
    const resumeRef = useRef<HTMLDivElement>(null);
    const resume = useAppSelector((state) => state.auth.refs.resume);
    const hasMounted = useRef(false);

    const scrollToSection = () => {
        resumeRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
      useEffect(() => {
        if (hasMounted.current) {
          scrollToSection();
        } else {
          hasMounted.current = true;
        }
      }, [resume]);

  return (
    <div ref={resumeRef} id="portofolio-section" className="relative bg-[#D98324] h-screen w-full grid pt-5 grid-cols-8 grid-rows-9 gap-4 bg-cover bg-center bg-[url('../app/image/picture4.png')] text-[#FFF0DC]">
        <div className="flex flex-col items-center justify-end w-full col-span-8 text-[20px] -mb-6">
            - Project
        </div>
        <div className="w-full pl-4 pr-4 font-extrabold row-start-2 col-span-1 md:col-span-8 flex flex-col items-center justify-center text-[30px] md:text-[50px] text-[#131010]">
            My Latest Project
        </div>
        <div className="bg-[#131010] p-5 row-start-3 row-span-6 col-start-2 col-span-6 rounded-3xl flex flex-cols-2 gap-10 justify-center text-[14px]">
            <div className="h-full w-full flex flex-col justify-center items-center rounded-3xl">
                <div className="h-full w-2/3 flex justify-center items-center relative">
                    <Image src={XYZ} className="rounded-full p-5" alt="Logo"  layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-center gap-5">
                <div className="flex flex-wrap md:flex-cols-3 w-full gap-5">
                    <div className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit h-full">
                        App Design
                    </div>
                    <div className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit h-full">
                        React
                    </div>
                    <div className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit h-full">
                        MongoDB & AWS
                    </div>
                </div>
                <div className="text-[20px] md:text-[25px]">
                    XYZ Retail <br />
                    Mobile and Desktop app
                </div>
                <div className="text-sm md:text-base">
                    XYZ Retail, an established retail company, sought to expand into e-commerce to reach a wider audience and streamline its sales 
                    processes. They needed a scalable, user-friendly platform to support both desktop and mobile users with features like product 
                    browsing, user reviews, secure checkout, and real-time inventory updates.
                </div>
                <button className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit" onClick={() => dispatch(setProject())}>
                   -{">"} View Details
                </button>
            </div>
        </div>
    </div>
  );
}