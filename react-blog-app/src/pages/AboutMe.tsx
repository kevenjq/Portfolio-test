import * as React from "react";

import MeOne from "../assets/Me_profile_pic.jpg";
import MeTwo from "../assets/IMG_3539.jpeg";
import MeThree from "../assets/ME-NEW.png";
import MeFour from "../assets/IMG_3537.jpeg";

const AboutMe: React.FC = () => {
  return (
    <>
      <section className="flex flex-row items-start justify-between bg-gradient-to-r from-orange-400 to-purple-700 from-40% max-w-max max-h-full">
        <div
          id="left"
          className="max-w-130 max-h-196 flex flex-row rounded-3xl overflow-hidden mx-3 my-3"
        >
          <div className="flex flex-col max-w-290 max-h-196">
            <img src={MeOne} className="h-[50%] " />
            <img src={MeTwo} className="h-[50%] " />
          </div>
          <div className="flex flex-col max-w-290 max-h-196">
            <img src={MeFour} className="h-[50%]" />
            <img src={MeThree} className="h-[50%]" />
          </div>
        </div>
        <div
          id="right"
          className="flex flex-col items-center justify-center gap-4 backdrop-blur-2xl w-[58%] h-3/4 mx-3 my-3 rounded-xl bg-white/40 shadow-2xl ring-1 ring-black/5 "
        >
          <div className="text-left  w-[80%] mt-10">
            <h3 className="about-me-h1 ">Who Am I?</h3>
            <p className="about-me-normal">
              Currently I am a full time student studying so that I can become a
              software engineer. I am 20 years old, I moved to Berlin as I
              believe there are lots of opportunities for work in Software
              Field. I can say I have been interested in the creation of things
              from a very young age, creating Lego robots and playing with
              random small motors. Now, the creation of digital things,
              websites, application, and more.
            </p>
          </div>
          <div className="text-left  w-[80%]">
            <h3 className="about-me-h1">Why I Chose Software Engineering</h3>
            <p className="about-me-normal">
              The people that don't choose Software Engineering just don't
              understand the fun that it can be to be stressed out when you code
              doesn't functional correctly with no errors. Honestly the
              satisfaction a be able to fix a problem like that after a sleep or
              the whole night is amazing. But on a serious note, it goes back to
              the idea of creating with code.
            </p>
          </div>
          <div className="text-left  w-[80%]">
            <h3 className="about-me-h1">What I Know so Far</h3>
            <div className="flex flex-row justify-between gap-10 text-left ">
              <ul className="about-me-normal text-left  w-1/2 ">
                <li>Python</li>
                <li>C#</li>
                <li>Java</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
              </ul>
              <p className="about-me-normal">
                Currently I have a vast knowledge on many programming language.
                My first programming language was Python, I dedicated lots of
                time to learn it in depth, learning libraries such as KivyMD and
                more. I still have lots to learn in order to become a full-stack
                engineer,
              </p>
            </div>
          </div>
          <div className="text-left  w-[80%]">
            <h3 className="about-me-h1">My Future Goals</h3>
            <p className="about-me-normal">TEXT</p>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-start justify-between bg-white border-4 max-w-full max-h-full">
        <div className="">
          <h3>Education Time Line</h3>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
