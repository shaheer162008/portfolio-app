"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                " Shaheer Yousuf",
                1000,
                "Web Developer",
                1000,
                "Mobile First Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Certified AI, Metaverse, and Web 3.0 Developer
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block  bg-[#808080] hover:bg-slate-800 rounded-full px-5 py-2">
                Hire me
              </span>
              </Link>
            <Link
              href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQJAmTg_SwOp9QAAAYybST2bPbgEkA5YC_jmgmqycaN2yHEz8TjJEZTB-8DpgmTBdVh0eIjA-bgu6EOS4d42_TufwIEWQpnyIfSEbzP0WQk6LDtkDCqOihIT5_oOFY51DcbtBl9cM56d5JLIiUEl6SQ4awOLLdqnC_Ojy7wHYVQIPty5lkkFZkgH7kFI0Z2bjj-OtpEqYzM6jHH3e_aPKQbL4mKwowHpH3c814eMB27ojr1lfC7zGAUZIgJiiU69loWgJ9fxsm-QmniIP3yu5JlxzSj5QomG09qtvOtRpn9C9Fx1r8LT0hvOnOTO_IqcIhtPzj4JZhAKlgfGox6JnB6dVxNt8ab2RC6cAW5YeX09fMtPghlkStF02gsuaAG39MJYtoHF_QsRqZSl5eFDYhBDROq4r4MfXhQum_nIOdHFWWN7M9mHf8Qybwx8r8AIMgTPLmHfUGPLyx4AV2nNLTJrsrCbjjF1Pum3FUClJ45_AGLrMWP5USfh4e2leJ_qSPrC6_iNZUwAIcxaY4W5B14yVItY9dymITOkEJM4laK8Snm8MllVP205U9ie_1s4oavb8CE&x-ambry-um-filename=Profile.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#808080] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="hero-image.png"
              alt="hero image"
              className="absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={280}
              height={280}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
