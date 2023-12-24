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
              href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQKPmY0A74bmFQAAAYya5asoHww5GvzvyfajuxJm40xNnzfi2OzM9QBml6auEN4hNSkCO5h2WgdJ0ESsv4GiMPfE54s0Dp2De-YfEXzNcgoI8-YmPH-N1Kzl8zmfY0yIUiuOJWr1SotzqltK30yI9y8uvNephwwYLWF25XgGd6tLCcOiw8o3KGX2uTpEEwvo0TuIsITerg222KfGVDLI1nL9OXkf21TUQDMXULnW8WE8dIDYNMkJrJCLDnyA8PvijNaqrk143qRPjnUgF9o4GPhKadbEnYo5gXzoLYK3TkMK7Tt-w73_85QPN7N2ABffD1HpFKKJOvqJMdh81pFxtMxdmh_sgQMZYFHdrNPNHsjZJLASIcCYPLSzcNcBj8BQ0KJxXKJDH6sDtQkxUZvKskVEjooXlxvF3ocY9LORpGJ5C7Rf9EcWkSVGMTCmWU-eEk_kXvMKajGJpYYEEBBWXY_C70b6hM79yybXOSfKdvjA5qu864Yp5OkUjNjzxB149Z2pwULOBYgHYIeJgBdB6EfrgbqIiZFB493uQNdpsHip954O_cyNO3EaL-ppn1nJzgsgCr8&x-ambry-um-filename=Profile.pdf"
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
