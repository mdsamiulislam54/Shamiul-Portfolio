import React from "react";
import { Link } from "react-router";
const AboutUs = () => {
  return (
    <div className="lg:h-[70vh] lg:flex justify-center items-center">
      <div className="w-11/12 mx-auto">
        <div className="lg:flex justify-center items-center max-lg:text-center ">
          <div className="flex-1">
            <div></div>
          </div>
          <div className="flex-1">
            <h2 className="text-sm text-primary font-bold mb-4">About Us</h2>
            <div className="text-base text-gray-600 tracking-wide mb-8 space-y-4">
              <p>
                Hello! I’m Md. Samiul Islam, a passionate Full Stack Web
                Developer from the CSE department of Shariyatpur polytechnic
                Institute. My journey in programming started back in 2022 when
                one of my teachers introduced us to HTML and CSS. The first time
                I created a simple HTML file and saw it live in the browser —
                that moment sparked my love for web development.
              </p>
              <p>
                {" "}
                Since then, I started exploring web design tutorials on YouTube
                and Google. At one point, I was confused between web development
                and software development, but eventually, web development felt
                right for me. During my 4th semester of diploma, I seriously
                began my self-study journey from 2022 to 2024, though I
                struggled a bit to find a proper learning structure. In my 7th
                semester, I shifted to Dhaka and completed a 3-month React
                Developer training at Creative IT Institute.Meanwhile, in January 2025, I officially completed my
                Diploma in Computer Science.
              </p>
              <p>
                After that, I joined the Programming Hero Institute for a Web
                Development course in January 2025, which I’m currently
                pursuing.  One interesting fact — initially, I
                came into this field hoping to earn quickly. Even though it’s
                been three years without income, my mindset has changed. Now, I
                genuinely enjoy coding, learning new technologies, and staying
                updated. Apart from programming, I love playing cricket. I’m a
                bit shy and usually don't talk much without reason, but I’m
                always eager to learn and grow. At present, I work with both
                frontend and backend development and hold the status of a Junior
                Developer.
              </p>
            </div>
            <Link className="px-4 py-3 rounded-md bg-secondary text-white ">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
