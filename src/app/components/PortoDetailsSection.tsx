"use client"
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import Image from "next/image";
import XYZ from '@/app/image/xyz.jpg';

export default function PortoDetailsSection() {
    
    const dispatch = useAppDispatch();
    const projectRef = useRef<HTMLDivElement>(null);
    const project = useAppSelector((state) => state.auth.refs.project);
    const hasMounted = useRef(false);

    const scrollToSection = () => {
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
      useEffect(() => {
        if (hasMounted.current) {
          scrollToSection();
        } else {
          hasMounted.current = true;
        }
      }, [project]);

  return (
    <div ref={projectRef} id="portofolio-section" className="relative bg-[#D98324] h-fit w-full grid pt-5 grid-cols-8 grid-rows-9 bg-cover bg-center bg-[url('../app/image/picture4.png')] text-[#FFF0DC]">
        
        <div className="w-full pl-4 pr-4 font-extrabold row-start-1 row-span-2 col-span-8 flex flex-col items-center justify-center text-[50px] text-[#131010] ">
            <div className="flex flex-col items-center row-start-1 w-full col-span-8 relative text-[20px] text-[#FFF0DC] ">
                - Project
            </div>
            Project Details
        </div>
        <div className="bg-[#131010] p-5 row-start-3 row-span-6 col-start-2 col-span-6 rounded-3xl grid grid-cols-2 grid-rows-2 gap-5 justify-start text-[14px]">
            <div className="h-full w-full flex flex-col justify-center gap-4">
                <div className="text-[25px] text-[#D98324] font-extrabold">
                    XYZ Retail <br />
                    Mobile and Desktop app
                </div>
                <div className="-mt-4">
                XYZ Retail, an established retail company, sought to expand into e-commerce to reach a wider audience and streamline its sales 
                processes. They needed a scalable, user-friendly platform to support both desktop and mobile users with features like product 
                browsing, user reviews, secure checkout, and real-time inventory updates.
                </div>
                <div className="text-[25px] text-[#D98324] font-extrabold">
                    The Challange
                </div>
                <div className="-mt-4">
                I was responsible for building the front-end and back-end components of the platform, ensuring seamless integration with the client’s
                 inventory and payment systems. The project goal was to create an efficient, high-performing application with a smooth user experience.
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center rounded-3xl">
                <div className="h-full w-2/3 flex justify-center items-center relative">
                    <Image src={XYZ} className="rounded-full p-5" alt="Logo"  layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="h-full w-full flex flex-col  gap-5 col-span-2">
            <div className="text-[25px] text-[#D98324] font-extrabold">
                    The Solution
                </div>
                <div className="-mt-4">
                Using React for the front-end, I designed a responsive, intuitive UI focused on user engagement and easy navigation. On the back end,
                 I developed RESTful APIs with Node.js and MongoDB for data management. Additionally, I integrated the platform with AWS to optimize 
                 loading times and set up a CI/CD pipeline for faster deployment and testing. I worked closely with designers and QA to address usability
                  and accessibility standards.
                </div>
                <div className="text-[25px] text-[#D98324] font-extrabold">
                    The Impact
                </div>
                <div className="-mt-4">
                The project was completed on time, leading to a 35% increase in online sales within the first three months. User feedback highlighted
                 the site's speed and ease of use, and the client reported a substantial reduction in manual inventory management tasks.
                </div>
            </div>
        </div>
    </div>
  );
}