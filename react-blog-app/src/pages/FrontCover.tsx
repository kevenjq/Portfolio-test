import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import KEVEN from "../assets/ME-NEW.png";
import CV from "../components/CV";
import CoverLetter from "../components/CoverLetter";
import DownloadIcon from "../components/DownloadIcon";

const FrontCover = () => {
  const navigate = useNavigate();

  const [isAtTop, setIsAtTop] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null); // RESEARCH THIS

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setIsAtTop(top <= 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen h-screen flex overflow-x-scroll snap-x snap-mandatory scroll-smooth">
      <section
        ref={sectionRef}
        id="FrontOne"
        className={`flex-shrink-0 w-screen snap-center relative flex items-center justify-center h-screen text-gray-900 outline-1 outline-black transition-colors duration-700 ${
          isAtTop ? "bg-gray-100" : "bg-[#343333]"
        }`}
      >
        <div className="flex flex-row justify-center gap-10 w-3/4 -mt-60">
          <div className="rounded-3xl w-[70%] px-5 pt-5 shadow-lg bg-gray-200">
            <h1 className="h1-all text-left ">
              Hola,
              <br />I am Keven!
            </h1>
            <p className="normal-all text-left text-2xl my-5">
              Get to know me and my work through my online portfolio
              <br />
              Don't forget to check out my <b>Blog!</b>
            </p>
          </div>
          <div
            className="relative rounded-3xl group cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <div className="absolute h-[100%] w-[100%] top-0 left-0 rounded-3xl shadow-lg flex items-center justify-center duration-100 ease-in-out group-hover:bg-gray-200 ">
              <h3 className="h1-all w-full text-center text-black rounded-lg opacity-0.5 duration-500 ease-in-out translate-y-32 group-hover:opacity-100 group-hover:-translate-y-2">
                About Me
              </h3>
            </div>
            <img src={KEVEN} className="h-[400px] rounded-3xl" />
          </div>
        </div>
        <div className="absolute rounded-3xl text-left normal-all px-5 py-3 w-3/4 mt-90 shadow-2xl bg-gray-200">
          <h3>
            I aspire to become a true Coder (Software Engineer), all types of
            programs.
            <br />
            To start I will learn Frontend Development - A Online Portfolio to
            showcase all my work!
          </h3>
        </div>
      </section>

      <section
        className={`flex-shrink-0 w-screen snap-center relative flex flex-col items-center justify-center h-screen text-gray-900 transition-colors duration-700 ${
          isAtTop ? "bg-gray-100" : "bg-[#343333]"
        } ${isAtTop ? "text-[#343333]" : "text-white"}`}
      >
        <h1 className="h3-all relative px-2 py-3 mx-10 top-48 flex justify-center text-center">
          <span className="font-bold">
            Important
            <br />
            Documents
          </span>
        </h1>
        <div className="flex flex-row gap-40 w-[90%] h-4/5 items-center justify-between -mt-30">
          <div className="w-[440px]">
            <CV />
          </div>
          <div className="flex justify-center">
            <DownloadIcon />
          </div>

          <div className="w-[440px]">
            <CoverLetter />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontCover;
