import Image from "next/image";
import Codeppl from '@/app/Codeppl.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function SkillsSection() {
  return (
    <div id="skills-section" className="pb-10 gap-10 relative bg-[#131010] h-screen w-scareen justify-stretch grid grid-cols-8 bg-cover bg-center bg-[url('../app/image/picture4.png')] text-[20px] text-[#FFF0DC]">
      <div className="flex flex-col items-center justify-end w-full col-span-8 text-[20px] -mb-16">
        - Skills
      </div>
      <div className="col-span-8 flex flex-col justify-center items-center text-[#D98324] font-extrabold text-[50px]">
        My Skills
      </div>
      <div className="rounded-full bg-[#D98324] grid grid-rows-5 col-start-2 col-span-2 p-10 mb-10">
        <div className="h-full w-full row-span-2 flex justify-center items-center">
          <FontAwesomeIcon icon={faCss3Alt} className="w-[120px] h-[120px]"/>
        </div>
        <div className="h-full w-full row-span-3 flex items-center text-center justify-center">
          HTML, CSS, JavaScript, React, Angular, etc
        </div>
      </div>
      <div className="rounded-full bg-[#D98324] grid grid-rows-5 col-start-4 col-span-2 p-10 mb-10">
        <div className="h-full w-full row-span-2 flex justify-center items-center">
        <FontAwesomeIcon icon={faNodeJs} className="w-[120px] h-[120px]"/>
        </div>
        <div className="h-full w-full row-span-3 flex items-center text-center justify-center">
          Node.js, Express, Django, or Ruby on Rails.
        </div>
      </div>
      <div className="rounded-full bg-[#D98324] grid grid-rows-5 col-start-6 col-span-2 p-10 mb-10">
        <div className="h-full w-full row-span-2 flex justify-center items-center">
        <FontAwesomeIcon icon={faDocker} className="w-[120px] h-[120px]"/>
        </div>
        <div className="h-full w-full row-span-3 flex items-center text-center justify-center">
          Docker, Git, Jenkins, AWS, or CI/CD solutions.
        </div>
      </div>
    </div>
  );
}