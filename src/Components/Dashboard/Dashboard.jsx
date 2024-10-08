import React from "react";
import TypeWriter from "./TypeWriter";
import Lottie from "react-lottie";
import animationData from "../Common/Animation.json";
import WEAREGOOD from "../WE_ARE_GOOD/WEAREGOOD";
import '../Dashboard/Dashboard.css';

function Dashboard(props) {
  return (
    <>
      {/* Dashboard Section */}
      <div className="container mx-auto h-auto md:h-[65vh] bg-gradient-to-r">
        <div className="h-full p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Text Content */}
            <div className="md:ml-3 p-4 md:p-6">
              <h2 className="text-center text-2xl md:text-4xl mb-4 font-bold text-blue-800 underline decoration-pink-500">
                <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  {props.com}
                </span>
              </h2>
              <div className="font-mono flex flex-col md:flex-row items-start justify-start mt-4 md:mt-6 text-lg md:text-xl">
                We are&nbsp;
                <span className="font-bold text-blue-500">
                  <TypeWriter />
                </span>
              </div>
              <div className="mt-6 md:mt-8 space-y-4 text-sm md:text-base leading-relaxed">
                <div>
                  <strong className="font-bold">Web Development:</strong> SpyTech's expansion into web development brings their technical prowess to the digital forefront. They specialize in creating dynamic and user-friendly websites, ranging from simple informational sites to complex e-commerce platforms. Their websites are designed to engage visitors and achieve the specific objectives of their clients.
                </div>
                <div>
                  <strong className="font-bold">Software Development:</strong> Leveraging their expertise in technology, SpyTech develops custom software solutions tailored to the unique requirements of each client. Whether it's desktop applications, mobile apps, or specialized software for specific industries, SpyTech delivers robust and scalable solutions to optimize business processes and enhance efficiency.
                </div>
              </div>
            </div>

            {/* Animation */}
            <div className="flex justify-center md:justify-end items-center mt-18 md:mt-0">
              <div className="h-56 w-full md:h-96">
                <Lottie options={{ animationData }} />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Separator */}
      <p className="mt-14 text-center">----------------------------------------------------</p>
      {/* WEAREGOOD Component */}
      <div className="mt-8">
        <WEAREGOOD />
      </div>
    </>
  );
}

export default Dashboard;
