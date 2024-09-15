import React from "react";

function Services(props) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="rounded-md shadow-md p-4 bg-blue-100 hover:bg-blue-200">
          <div className="flex justify-center mb-4">
            <img
              src="./Web_Design.svg"
              alt="Web Design"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">UI/UX Design</h2>
          <p className="text-gray-600">
            We create beautiful and functional websites that meet your business
            needs.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-green-100 hover:bg-green-200">
          <div className="flex justify-center mb-4">
            <img
              src="/App_Dev.svg"
              alt="App Development"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">App Development</h2>
          <p className="text-gray-600">
            We build custom applications to meet your business needs.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-red-100 hover:bg-red-200">
          <div className="flex justify-center mb-4">
            <img
              src="/Web_Dev.svg"
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
              src="/Custom.svg"
              alt="CRM Softwares"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Custom Software Solutions</h2>
          <p className="text-gray-600">
            We develop tailor-made software to meet your specific business needs, from concept to deployment.</p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-green-100 hover:bg-green-200">
          <div className="flex justify-center mb-4">
            <img
              src="/Responsive.svg"
              alt="Responsive Websites"
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
              src="/SEO.svg"
              alt="SEO"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">SEO</h2>
          <p className="text-gray-600">
            We optimize your site to improve visibility and reach your target audience.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-pink-100 hover:bg-pink-200">
          <div className="flex justify-center mb-4">
            <img
              src="/Digi_Mark.svg"
              alt="Digital Marketing"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Digital Marketing</h2>
          <p className="text-gray-600">
            We create marketing strategies to enhance your online presence.
          </p>
        </div>
        <div className="rounded-md shadow-md p-4 bg-yellow-100 hover:bg-yellow-200">
          <div className="flex justify-center mb-4">
            <img
              src="/Gra_Design.svg"
              alt="Graphics Design"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Graphics Design</h2>
          <p className="text-gray-600">
            We design visually appealing graphics for your brand.
          </p>
        </div>

        <div className="rounded-md shadow-md p-4 bg-blue-100 hover:bg-blue-200">
          <div className="flex justify-center mb-4">
            <img
              src="/Cloud.svg"
              alt="CRM Softwares"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">Cloud Services</h2>
          <p className="text-gray-600">
            We design visually appealing graphics for your brand.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;
