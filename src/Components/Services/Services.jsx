import React from "react";

function Services() {
  return (
    <div className="container mx-auto p-4 border-2">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="rounded-md shadow-md p-4 bg-blue-100 hover:bg-blue-200">
          <div className="flex justify-center mb-4">
            <img
              src="./WEB2.png"
              alt="Web Design"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Web Design</h2>
          <p className="text-gray-600">
            We create beautiful and functional websites that meet your business
            needs.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-green-100 hover:bg-green-200">
          <div className="flex justify-center mb-4">
            <img
              src="/support.png"
              alt="24/7 Free Support"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">24/7 Free Support</h2>
          <p className="text-gray-600">
            We are available 24/7 to answer your questions and provide support.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-red-100 hover:bg-red-200">
          <div className="flex justify-center mb-4">
            <img
              src="/Web_Dev.png"
              alt="Web Development"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Web Development</h2>
          <p className="text-gray-600">
            We build custom web applications and software that meet your unique
            requirements.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-yellow-100 hover:bg-yellow-200">
          <div className="flex justify-center mb-4">
            <img
              src="/respo.png"
              alt="100% Responsive Websites"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">100% Responsive Websites</h2>
          <p className="text-gray-600">
            Our websites are designed to look great on all devices, from
            desktops to smartphones.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-purple-100 hover:bg-purple-200">
          <div className="flex justify-center mb-4">
            <img
              src="/content.png"
              alt="Content Writing"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Content Writing</h2>
          <p className="text-gray-600">
            We create engaging and informative content that will help you reach
            your target audience.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-pink-100 hover:bg-pink-200">
          <div className="flex justify-center mb-4">
            <img
              src="/logo-design.svg"
              alt="Logo Designs"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Logo Designs</h2>
          <p className="text-gray-600">
            We create unique and memorable logos that will help your brand stand
            out.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;