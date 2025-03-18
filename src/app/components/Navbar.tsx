"use client"

import { useAppDispatch } from "@/lib/redux/hooks";
import { setAbout, setResume, setContact } from "@/lib/redux/features/authSlice";

export default function Navbar() {
    const dispatch = useAppDispatch();

    return (
        <div className="flex gap-10 col-span-8 justify-center items-center text-[15px] h-fit p-5 text-[#FFF0DC] bg-transparent w-full fixed top-0 z-50">
            <button className="col-start-3 border-4 border-[#FFF0DC] bg-[#D98324] rounded-full w-fit pl-4 pr-4 p-2" aria-label="About me" onClick={() => dispatch(setAbout())}>
                About me
            </button>
            <button className="border-4 border-[#FFF0DC] bg-[#D98324] rounded-full w-fit pl-4 pr-4 p-2" aria-label="Resume" onClick={() => dispatch(setResume())}>
                Resume
            </button>
            <button className="border-4 border-[#FFF0DC] bg-[#D98324] rounded-full w-fit pl-4 pr-4 p-2" aria-label="Contact" onClick={() => dispatch(setContact())}>
                Contact
            </button>
        </div>
    );
}