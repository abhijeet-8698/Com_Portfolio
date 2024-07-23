import React from "react";
import TypeWriter from "./TypeWriter";
import Lottie from "react-lottie";
import animationData from "../Common/Animation.json";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import WEAREGOOD from "../WE_ARE_GOOD/WEAREGOOD";

function Dashboard({ statecompany }) {

    return (
        <>
            <Header />
            <div className="container mx-auto h-auto md:h-[60vh]">
                <div className="bg-white h-full p-4 md:p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:ml-3 p-6">
                            <h2 className="text-center text-4xl mb-3 font-bold text-blue-800 drop-shadow-md underline decoration-pink-500">
                                <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                                    SpyTech Cognitive Solutions
                                </span>
                            </h2>
                            <div className="font-mono flex items-start justify-start mt-8 text-xl">
                                We are &nbsp;
                                <span style={{ color: 'blue', fontWeight: 'bold' }}>
                                    <TypeWriter />
                                </span>
                                <br />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mt-2 font-hr gothic">
                                            <ol>
                                                <li className="p-2"><strong>Web Development:</strong> SpyTech's expansion into web development brings their technical prowess to the digital forefront. They specialize in creating dynamic and user-friendly websites, ranging from simple informational sites to complex e-commerce platforms. Their websites are designed to engage visitors and achieve the specific objectives of their clients.</li>
                                                <li className="p-2"><strong>Software Development:</strong> Leveraging their expertise in technology, SpyTech develops custom software solutions tailored to the unique requirements of each client. Whether it's desktop applications, mobile apps, or specialized software for specific industries, SpyTech delivers robust and scalable solutions to optimize business processes and enhance efficiency.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[22rem] w-full mt-[8vh]">
                            <Lottie options={{ animationData }} />
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center ">-------------------------------------</p>
         <div className="mt-3 p-2"><WEAREGOOD/></div>
            <Footer />
        </>
    )
}

export default Dashboard;