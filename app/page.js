import Image from "next/image";
import Navbar from "../components/Navbar"; // from app/page.js

import Contact from "./Contact/page";
import Link from "next/link";
import Services from "./Services/page";
import Projects from "./Projects/page";
import Education from "./Education/page";

export default function Home() {
  return (
    <>
      <Navbar />
      

      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 bg-slate-950 text-white relative overflow-hidden">

        {/* Left Column - Text */}
        <div className="flex-1 text-left space-y-4 max-w-xl md:ml-20 opacity-0 animate-fadeInSlide translate-y-[-20px]">
          <h2 className="text-2xl font-light text-gray-300">Hello there👋</h2>

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purpleMain via-blueMain to-purpleLight bg-clip-text">
            I'm Ayaan Ahmed
          </h1>

          <h3 className="text-3xl font-semibold text-gray-300">A Full Stack Developer</h3>

          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            I'm a passionate developer and designer, crafting beautiful and functional web experiences.
            I specialize in creating dynamic and responsive websites using the latest technologies.
            Whether it's building a new feature or optimizing performance, I'm dedicated to delivering
            high-quality solutions that meet user needs.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 animate-fadeInSlide delay-300">
            <Link href="/Contact" className="px-6 py-3 font-medium rounded-lg border border-purpleMain text-purpleMain hover:text-white hover:bg-purpleMain transition-all duration-300">
              Hire Me
            </Link>

            


          </div>
        </div>


        <div className="flex-1 flex justify-center mt-10 md:mt-0 opacity-0 animate-fadeInSlide delay-700 translate-y-[-20px]">
          <Image
            src="/pic1.jpg"
            alt="Ayaan Ahmed"
            width={250}
            height={300}
            className="rounded-[50%] object-cover shadow-lg shadow-purpleMain/40"
            style={{ aspectRatio: '2.5 / 4', objectFit: 'cover' }}
          />
        </div>

      </div>
    </>
  );
}
