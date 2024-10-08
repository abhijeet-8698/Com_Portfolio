import React from 'react';

const Subscribe = () => {
    
  return (
    <section className="relative z-10 bg-gray-800 py-8 lg:py-16 dark:bg-dark mb-4 mt-4">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-xl bg-[#F0F4FF] dark:bg-dark-2">
          <div className="-mx-4 flex flex-wrap">
            {/* Left Side */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative z-10 px-6 py-8 sm:p-10 lg:pb-16">
                <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
                  Start Building <br />
                  for Free
                </h2>
                <p className="max-w-[250px] text-base text-white">
                  And because your company is unique, you will need an
                  extensible identity solution.
                </p>
                <div>
                  <span className="absolute bottom-0 left-0 z-[-1]">
                    <svg
                      width="485"
                      height="300"
                      viewBox="0 0 485 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M485 -6H0V300C168.393 300 570.581 210.231 485 -6Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 z-[-2]">
                    <svg
                      width="292"
                      height="139"
                      viewBox="0 0 292 139"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M291.516 139H0V18C201.088 -64.8 286.464 56.6667 291.516 139Z"
                        fill="#13C296"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full self-center px-4 lg:w-1/2">
              <div className="relative z-10 px-6 py-8 sm:p-10">
                <h2 className="mb-4 text-2xl font-semibold text-dark sm:text-3xl dark:text-black">
                  Subscribe Now
                </h2>
                <form className="flex flex-wrap pb-1">
                  <input
                    type="email"
                    className="mb-3 mr-3 h-[40px] w-full max-w-[200px] rounded-md border border-stroke bg-white px-4 text-sm text-body-color outline-none focus:border-primary md:max-w-[280px] lg:max-w-[220px] xl:max-w-[280px] dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    placeholder="Your work mail"
                  />
                  <button
                    className="mb-3 h-[40px] rounded-md border border-transparent bg-blue-700 px-6 text-base font-medium text-white transition hover:bg-opacity-90"
                  >
                    Submit
                  </button>
                </form>
                <p className="text-sm text-body-color dark:text-dark-6">
                  You will receive every news and pro tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
