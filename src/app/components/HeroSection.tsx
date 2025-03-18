import Image from "next/image";
import Avatar from '@/app/image/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function HeroSection() {
  return (
    <div id="hero-section" className="relative bg-[#131010] h-screen w-full grid grid-cols-8 grid-rows-3 gei bg-cover bg-center bg-[url('../app/image/picture4.png')]">
      <div className="border-red-50 h-full row-start-2 flex flex-col justify-center items-center col-span-1">
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="border-2 bg-[#D98324] border-[#D98324] rounded-full h-[100px] w-[3px] flex flex-col justify-between items-center">
            </div>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFF0DC] w-[40px]">
            <FontAwesomeIcon icon={faWhatsapp} className="" size="3x"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF0DC] w-[40px]">
            <FontAwesomeIcon icon={faLinkedin} className="" size="3x"/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF0DC] w-[40px]">
            <FontAwesomeIcon icon={faGithub} className="" size="3x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF0DC] w-[45px]">
            <FontAwesomeIcon icon={faTwitter} className="" size="3x" />
            </a>
        </div>
      </div>
      <div id="name" className="-mt-[14px] font-mono flex flex-col row-start-2 col-span-4 col-start-2 h-full font-extrabold text-[50px] items-center justify-center ">
        <div className="flex flex-col justify-center">
          <p className="text-[#FFF0DC]">
            Hi, I'm
          </p>
          <h1 className="text-[#D98324]">
            Irga Julian Diputra,
          </h1>
          <p className="text-[#FFF0DC]">
            a junior web developer
          </p>
          <p className="text-[12px] md:text-[14px]">
            Building scalable and high-performance web solutions for your business needs.
          </p>
        </div>
      </div>
      <div className="flex items-center h-full rounded-full row-start-2 col-span-2 ">
        <Image src={Avatar} alt="Logo" height={370} className="w-fit h-fit"/>
      </div>
      <div className="border-red-50 row-start-2 flex flex-col justify-center items-center">
        <div className="border-1 bg-[#D98324] border-[#D98324] rounded-full h-full w-[3px] flex flex-col justify-between items-center">
        </div>
      </div>
    </div>
  );
}