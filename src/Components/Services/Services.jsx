import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Ensure your Modal component is properly defined
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../Common/Loader";

function Services(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false); // Data fetching complete
      }, 2000); // 2-second delay
    };

    fetchData();
  }, []);

  
  const services = [
    {
      title: "UI/UX Design",
      description: "We create beautiful and functional websites that meet your business needs.",
      image: "./Web_Design.svg",
    },
    {
      title: "App Development",
      description: "We build custom applications to meet your business needs.",
      image: "./App_Dev.svg",
    },
    {
      title: "Web Development",
      description: "We build custom web applications and software that meet your unique requirements.",
      image: "./Web_Dev.svg",
    },
    {
      title: "Custom Software Solutions",
      description: "We develop tailor-made software to meet your specific business needs.",
      image: "./Custom.svg",
    },
    {
      title: "100% Responsive Websites",
      description: "Our websites are designed to look great on all devices, from desktops to smartphones.",
      image: "./Responsive.svg",
    },
    {
      title: "SEO",
      description: "We optimize your site to improve visibility and reach your target audience.",
      image: "./SEO.svg",
    },
    {
      title: "Graphics Design",
      description: "Graphic design services create visual content to communicate messages effectively.",
      image: "./Gra_design.svg",
    },
    {
      title: "Cloud Services",
      description: "Our cloud services provide data storage, hosting, or cloud computing resources.",
      image: "./Cloud.svg",
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you.",
      image: "./support.svg",
    }
  ];


  return (
    <div className="container mx-auto p-6 md:p-10">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="h-27 bg-transparent bg-opacity-50 mb-4 rounded-xl flex flex-col items-center justify-center p-4">
            <h3 className="text-xl md:text-2xl font-bold text-blue-700">What We Offer</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-black">Our Services</h1>
            <p className="text-base md:text-lg text-black mt-2 text-center">
              Our experienced and dedicated staff provide these services with a smile.
            </p>
          </div>

          <ToastContainer />
          <div className="-mx-4 flex flex-wrap">
            {services.map((service, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-9 rounded-[20px] bg-gray-800 p-5 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                  <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-500 p-3">
                    <img src={service.image} alt={service.title} className="w-full h-auto max-w-[70px]" />
                  </div>
                  <h4 className="mb-[14px] text-2xl font-semibold text-white">
                    {service.title}
                  </h4>
                  <p className="text-white">
                    {service.description}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <button
                      className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-500 transition-all"
                      type="button"
                      onClick={openModal}
                    >
                      Enquiry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </>
      )}
    </div>
  );
}

export default Services;
