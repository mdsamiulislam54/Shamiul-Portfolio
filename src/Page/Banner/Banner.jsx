import React, { useEffect, useRef } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const profile = useRef();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: profile.current,
          start: "top 0%",
          end: "bottom 25%",
          scrub: 1,
        },
      });

      tl.to(profile.current, {
        y: 650,
        x: -850,
        duration: 0.4,
        ease: "power1.inOut",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="w-11/12 mx-auto">
        <div className="lg:flex justify-center items-center text-center lg:text-start">
          <div className="flex-1 my-4">
            <h1 className="text-5xl font-bold tracking-wide mb-4 text-primary">
              Md Shamiul Islam
            </h1>
            <h2 className="mb-4 text-3xl font-bold text-secondary">
               Junior Full Stack Developer
            </h2>
            <p className="lg:w-8/12 text-base text-gray-600 mb-4">
             I’m a Full Stack Developer, experienced in React, Node.js, Express.js, MongoDB, and Tailwind CSS. I love creating fast, modern, and responsive websites with dynamic features and clean UI/UX.
            </p>
            <div className="flex gap-2 mb-4 items-center text-2xl *:hover:text-secondary *:transition-all *:duration-300 max-lg:justify-center">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaGithub />
              </Link>
            </div>
            <div className="flex-1 ">
              <a
                href="#"
                className="btn border-none shadow-none bg-secondary text-white"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div>
            <img
              ref={profile}
              src="https://i.postimg.cc/Z5WZ3m5d/photo-2025-06-28-12-32-12-removebg-preview.png"
              alt=""
              className="bg-primary rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
