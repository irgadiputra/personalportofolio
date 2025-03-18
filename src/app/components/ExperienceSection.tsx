
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function ExperienceSection () {
    return (
        <div id="experince-section" className="relative bg-[#131010] h-screen w-full grid grid-cols-8 grid-rows-9 gap-4 bg-cover bg-center bg-[url('../app/image/picture4.png')]">
            <div className="flex flex-col items-center justify-end w-full col-span-8 text-[20px] -mb-6">
                - Experience
            </div>
            <div className="w-full pl-4 pr-4 font-extrabold row-start-2 col-span-1 md:col-span-8 flex flex-col items-center justify-center text-[30px] md:text-[50px] text-[#D98324] ">
                My education & Work Experience
            </div>
            <div className="row-start-4 row-span-5 col-start-2 col-span-6 gap-5 flex flex-row-2 w-full">
                <div className="bg-[#D98324] p-5 row-span-3 col-start-2 col-span-6 rounded-3xl justify-center text-[14px] h-fit w-full flex flex-col gap-5">
                    <div className="flex flex-row gap-5 font-extrabold text-[#FFF0DC] text-[35px]">
                       <FontAwesomeIcon icon={faGoogleScholar} className="w-[35px]" size="lg"/> Education
                    </div>
                    <hr className="border-t-2 border-[#131010] -mt-3"/>
                    <div className="flex flex-col md:flex-row w-full text-[20px] md:text-[25px] justify-between text-[#131010] font-extrabold">
                        <div className="w-fit h-full">
                            Harmony Institute
                            <br/>
                            <p className="text-[16px] md:text-[20px] text-[#FFF0DC]">
                            Master in visual art 
                            </p>
                        </div>
                        <div className="w-fit h-full flex justify-end">
                            2016 - 2018
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full text-[20px] md:text-[25px] justify-between text-[#131010] font-extrabold">
                        <div className="w-fit h-full">
                            Aurora Academy
                            <br/>
                            <p className="text-[16px] md:text-[20px] text-[#FFF0DC]">
                            Bachelor in Visual Art  
                            </p>
                        </div>
                        <div className="w-fit h-full flex justify-end">
                            2012 - 2016
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full text-[20px] md:text-[25px] justify-between text-[#131010] font-extrabold">
                        <div className="w-fit h-full">
                            Crystalbrook
                            <br/>
                            <p className="text-[16px] md:text-[20px] text-[#FFF0DC]">
                            High School 
                            </p>
                        </div>
                        <div className="w-fit h-full flex justify-end">
                            2009 - 2012
                        </div>
                    </div>
                </div>
                <div className="bg-[#D98324] p-5 row-span-3 col-start-2 col-span-6 rounded-3xl justify-center text-[14px] h-fit w-full flex flex-col gap-5">
                    <div className="font-extrabold flex flex-row gap-5 text-[#FFF0DC] text-[35px]">
                    <FontAwesomeIcon icon={faBriefcase} className="w-[35px]" size="lg"/>Work Experience
                    </div>
                    <hr className="border-t-2 border-[#131010] -mt-3"/>
                    <div className="flex flex-col md:flex-row w-full text-[20px] md:text-[25px] justify-between text-[#131010] font-extrabold">
                        <div className="w-fit h-full">
                            Insigthlancer
                            <br/>
                            <p className="text-[16px] md:text-[20px] text-[#FFF0DC]">
                            Senior product design  
                            </p>
                        </div>
                        <div className="w-fit h-full flex justify-end">
                            2023 - Now
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full text-[20px] md:text-[25px] justify-between text-[#131010] font-extrabold">
                        <div className="w-fit h-full">
                            Self-Employed
                            <br/>
                            <p className="text-[16px] md:text-[20px] text-[#FFF0DC]">
                            Visual Artist  
                            </p>
                        </div>
                        <div className="w-fit h-full flex justify-end">
                            2022 - 2023
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full text-[20px] md:text-[25px] justify-between text-[#131010] font-extrabold">
                        <div className="w-fit h-full">
                            KG Graph Studio
                            <br/>
                            <p className="text-[16px] md:text-[20px] text-[#FFF0DC]">
                            Web Designer  
                            </p>
                        </div>
                        <div className="w-fit h-full flex justify-end">
                            2018 - 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}