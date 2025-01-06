import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AutoScroll from "./AutoScroll";

const ScrollPage = () => {
  const buttonLabels = [
    "CSRD Reporting",
    "Data Collection",
    "Investment Planning",
    "ESG Report",
    "Due Diligence Check",
    "ESG Screening",
    "Portfolio Management",
    "EU Taxonomy Check",
    "Sustainable Lending",
    "Decarbonization Strategy",
    "ESG Score Optimization",
    "Predium AI",
    "Career Opportunities",
    "Partnerships",
    "Deeper Insights",
    "24/7 Help",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-blue-50 w-full h-auto py-[4rem]">
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-[50%] max-[1200px]:w-[80%] max-[600px]:w-full max-[600px]:px-4">
            <h1
              className="text-indigo-950 text-2xl font-semibold "
              data-aos="fade-up"
            >
              Customers from the real estate industry, housing industry and
              financial industries optimize their real estate portfolio with
              Predium
            </h1>
          </div>
        </div>
        <div className="pt-20">
          <AutoScroll />
        </div>
        <div className="w-full h-auto flex items-center justify-center pt-12 text-center">
          <div className="w-[60%] max-[1060px]:w-[80%] max-[600px]:w-full max-[600px]:px-6  ">
            <h1
              className="text-4xl text-indigo-950 font-semibold py-6 max-[700px]:text-3xl max-[500px]:text-2xl"
              data-aos="fade-left"
            >
              I would like to learn more about
            </h1>
            <div className="flex flex-wrap gap-6 items-center text-center">
              {buttonLabels.map((label, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-3xl text-indigo-950 text-lg font-semibold bg-white hover:text-white hover:bg-blue-700 max-[750px]:text-sm max-[500px]:text-xs"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-[5rem] flex justify-center items-center ">
          <div className="w-[90%] flex justify-evenly max-[1000px]:flex-col max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:gap-y-8  ">
            <h1
              className="text-5xl text-indigo-950 font-semibold w-[50%] max-[1000px]:w-full  max-[1000px]:text-center max-[700px]:text-4xl max-[500px]:text-3xl"
              data-aos="fade-right"
            >
              The smart platform for real estate management
            </h1>
            <h1 className="text-indigo-950 text-xl w-[50%]  max-[1000px]:w-[80%]  max-[1000px]:text-center max-[700px]:text-lg  ">
              Develop an ESG strategy that combines sustainability and long-term
              economic success.
            </h1>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center  ">
          <div className="w-[90%] flex justify-between  mt-[4rem] max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:gap-y-8 ">
            {/* CARD ONE */}
            <div className="bg-white w-[30%] rounded-3xl px-8 py-4 space-y-3 max-[1200px]:w-[90%] ">
              <div className="flex gap-8  ">
                <h1 className=" rounded-full h-[3rem] w-[3rem] bg-blue-600 text-white font-semibold flex items-center text-center justify-center">
                  95%
                </h1>
                <h1 className="text-3xl text-blue-600 font-semibold flex justify-center items-center max-[500px]:text-2xl max-[380px]:text-xl">
                  Data Accuracy
                </h1>
              </div>
              <div className="text-3xl text-indigo-950 max-[500px]:text-2xl max-[380px]:text-lg">
                <h1>Incomplete database?</h1>
                <h1>No Problem!</h1>
              </div>
              <div>
                <p className="text-indigo-950 max-[500px]:text-sm max-[380px]:text-xs ">
                  Predium enriches your building data using AI and 3D models -
                  for a fast and accurate ESG analysis in just a few minutes
                  without a property inspection.
                </p>
              </div>
            </div>
            {/* CARD TWO */}
            <div className="bg-white w-[30%] rounded-3xl px-8 py-4 space-y-3 max-[1200px]:w-[90%]">
              <div className="flex gap-8  ">
                <h1 className=" rounded-full h-[3rem] w-[3rem] bg-blue-600 text-white font-semibold flex items-center text-center justify-center">
                  31%
                </h1>
                <h1 className="text-3xl text-blue-600 font-semibold flex justify-center items-center max-[500px]:text-2xl max-[380px]:text-xl">
                  CapEx Reduction
                </h1>
              </div>
              <div className="text-3xl text-indigo-950 max-[500px]:text-2xl max-[380px]:text-lg">
                <h1>ESG as a profit center </h1>
                <h1>instead of cost driver</h1>
              </div>
              <div>
                <p className="text-indigo-950 max-[500px]:text-sm max-[380px]:text-xs ">
                  We support you in avoiding stranded assets, reducing CO2 taxes
                  and investing capital for maximum profit.
                </p>
              </div>
            </div>
            {/* CARD THREE */}
            <div className="bg-white w-[30%] rounded-3xl px-8 py-4 space-y-3 max-[1200px]:w-[90%]">
              <div className="flex gap-8  ">
                <h1 className=" rounded-full h-[3rem] w-[3rem] bg-blue-600 text-white font-semibold flex items-center text-center justify-center">
                  80%
                </h1>
                <h1 className="text-3xl text-blue-600 font-semibold flex justify-center items-center max-[500px]:text-2xl max-[380px]:text-xl">
                  Time Saving
                </h1>
              </div>
              <div className="text-3xl text-indigo-950 max-[500px]:text-2xl max-[380px]:text-lg">
                <h1>Convincing reports</h1>
                <h1>at the touch of a button</h1>
              </div>
              <div>
                <p className="text-indigo-950 max-[500px]:text-sm max-[380px]:text-xs ">
                  Automated reports in accordance with industry standards such
                  as ECORE and GRESB save you time and create transparency and
                  trust with stakeholders investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollPage;
