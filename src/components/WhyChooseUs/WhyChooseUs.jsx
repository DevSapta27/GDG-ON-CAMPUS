import React from "react";
import { FaCode } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaCodeFork } from "react-icons/fa6";
import { IoCodeDownload } from "react-icons/io5";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const WhyChooseData = [
  {
    id: 1,
    title: "Hands-On-Workshops",
    desc: "Experience Hands-On Workshops led by Industry Experts on Latest Technologies",
    icon: <FaCode />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Community Bonding",
    desc: "GDG On-Campus will give you give up the Oppurtunity for Community Bonding in the Tech Industry ",
    link: "/",
    icon: <IoIosPeople />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Collab in Projects ",
    desc: "Collabing in projects will help you to gain and improve your Tech Skills",
    link: "/",
    icon: <FaCodeFork/>,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Avail Resources  and Content",
    desc: " Download and avail all Tech Related Content in one place",
    link: "/",
    icon: <IoCodeDownload/>,
    bgColor: "#73bc00",
    delay: 0.9,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Join Us ?
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of Joining GDG On-Campus TMSL
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
