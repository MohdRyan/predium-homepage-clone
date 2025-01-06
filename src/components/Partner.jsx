import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Partner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-blue-50 h-auto w-full text-indigo-950 py-[5rem] flex items-center justify-center ">
        <div className="w-[95%] flex max-[1200px]:flex-col max-[1200px]:items-center  max-[1200px]:gap-y-6 gap-4 ">
          <div className="w-[50%] max-[1200px]:w-[90%] ">
            <div className="space-y-6 flex flex-col justify-center items-center ">
              <h1
                className="text-6xl font-semibold w-[80%] max-[900px]:w-[95%] max-[700px]:text-5xl max-[500px]:text-4xl"
                data-aos="fade-up"
              >
                We accompany you as a partner
              </h1>
              <p
                className="text-xl w-[80%] max-[900px]:w-[95%] max-[700px]:text-lg max-[500px]:text-md"
                data-aos="fade-right"
              >
                Managing real estate sustainably and profitably can be an
                overwhelming challenge. But it doesn't have to be. We are at
                your side as experts - with intuitive software and first-class
                customer support.
              </p>
              <h1 className="text-2xl">
                Discover all the success stories of our customers.
              </h1>
              <div className="flex flex-wrap space-x-8 space-y-5 items-center justify-center text-center max-[700px]:space-x-3 ">
                <img
                  src="https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cd9fb7b88c92b867bb44f9_1-Logo%20Erste%20Group%20(1).svg"
                  alt=""
                  className="w-[10rem] max-[1200px]:w-[8rem] max-[700px]:w-[6rem] "
                />
                <img
                  src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf1fcf99749ca66720c4ab_1-Logo%20Pamera.avif"
                  alt=""
                  className="w-[10rem] max-[1200px]:w-[8rem] max-[700px]:w-[6rem] "
                />
                <img
                  src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf1fa8adbd77229592489c_1-Logo%20Tattersall%20Lorenz%20(1)-p-500.png"
                  alt=""
                  className="w-[10rem] h-auto max-[1200px]:w-[8rem] max-[700px]:w-[6rem] "
                />
                <img
                  src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf1fb5978b0bb9942858d3_1-Logo%20Bayerische%20Hausbau.avif"
                  alt=""
                  className="w-[10rem] h-auto max-[1200px]:w-[8rem] max-[700px]:w-[6rem] "
                />
                <img
                  src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf1fc2578437b0900d4370_1-Logo%20Baloise%20(1).avif"
                  alt=""
                  className="w-[10rem] h-auto max-[1200px]:w-[8rem] max-[700px]:w-[6rem] "
                />
                <img
                  src="https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cd9f8ba91e97ff27ef6432_1-Logo%20Colliers%20(1).svg"
                  alt=""
                  className="w-[10rem] h-auto max-[1200px]:w-[8rem] max-[700px]:w-[6rem] "
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] bg-blue-600 flex flex-col space-y-10  rounded-tl-3xl rounded-br-3xl max-[1200px]:w-[90%]  max-[1200px]:py-12 ">
            <h1 className="text-9xl text-white pl-6 max-[850px]:text-7xl max-[500px]:text-5xl max-[500px]:font-extrabold">
              &#915;
            </h1>
            <h1
              className="text-white text-3xl  font-semibold w-[90%] mx-8 max-[850px]:text-2xl max-[500px]:text-xl px-2"
              data-aos="fade-left"
            >
              Predium has accelerated the ESG analysis process for us
              enormously. Within minutes, we are familiar with various action
              plans and can derive the right investment decisions from them.
            </h1>
            <div className="flex gap-x-4 mx-6 ">
              <div>
                <img
                  src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66f9a2d020d4e0b7cf1e7de6_aam2core%20Worschech%20rund.avif"
                  alt=""
                  className="h-12 w-12 rounded-full "
                />
              </div>

              <div className="text-white space-y-2 ">
                <h1 className="text-2xl font-semibold">Dr. Thomas Worschech</h1>
                <h1 className="text-sm ">Head of ESG / Sustainability</h1>
                <img
                  src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf1fc2578437b0900d4370_1-Logo%20Baloise%20(1).avif"
                  alt=""
                  className="h-auto w-[10rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
