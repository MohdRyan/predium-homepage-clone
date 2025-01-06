import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Membership = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-white h-auto w-full text-indigo-950 flex items-center justify-center flex-col  ">
        <div className="w-[90%] py-[5rem] flex items-center justify-center max-[1000px]:flex-col">
          <div className="w-[45%] max-[1000px]:w-[90%]  ">
            <div
              className="bg-blue-50 h-auto w-auto space-y-6 px-4 py-12 rounded-2xl"
              data-aos="fade-right"
            >
              <h1 className="text-4xl font-semibold max-[800px]:text-3xl ">
                Memberships & certifications
              </h1>
              <p className="text-lg max-[800px]:text-base">
                Global standards for sustainability reports ensure transparency
                and comparability. With Predium, you can use established
                reporting formats such as ECORE and GRESB.
              </p>
              <p className="text-lg max-[800px]:text-base">
                Data protection has top priority. Our platform is certified
                according to the international standard for information
                security.
              </p>
            </div>
          </div>
          <div className="w-[50%] flex flex-wrap items-center justify-center gap-5 max-[1000px]:w-[90%] max-[800px]:gap-3  ">
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf2a827f4331f8a145eecb_1-Logo%20ZIA%20(1).avif"
              alt=""
              className="w-[12rem] h-auto max-[800px]:w-[9rem] max-[500px]:w-[5rem] "
            />
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf2a509ffbb8529cf71281_2-Logo%20DENEFF%20(1).avif"
              alt=""
              className="w-[12rem] h-auto max-[800px]:w-[9rem] max-[500px]:w-[5rem]  "
            />
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf2a6c04de8a631e1af567_5-Logo%20ECORE%20(1)-p-500.avif"
              alt=""
              className="w-[12rem] h-auto max-[800px]:w-[9rem] max-[500px]:w-[5rem] "
            />
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf2a8f0becc012601b09f7_6-Logo%20GRESB%20(1)-p-500.png"
              alt=""
              className="w-[12rem] h-auto max-[800px]:w-[9rem] max-[500px]:w-[5rem] "
            />
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cf2a78da0e9b56b608c16f_3-Logo%20GPTI%20(1)-p-500.png"
              alt=""
              className="w-[12rem] h-auto max-[800px]:w-[9rem] max-[500px]:w-[5rem] "
            />
          </div>
        </div>
        <div className="w-full h-auto space-y-6 flex items-center justify-center flex-col py-20 px-6">
          {/* Heading Section */}
          <div
            className="space-y-6 w-full max-w-[1200px] flex flex-col"
            data-aos="fade-right"
          >
            <h1 className="text-4xl font-semibold">Our supporters</h1>
            <p className="text-xl w-2/3 max-w-[600px] max-[800px]:w-full">
              Leading experts in the fields of digitalization and sustainability
              support Predium.
            </p>
          </div>

          {/* Supporters Grid */}
          <div className="flex flex-wrap gap-10 justify-center max-w-[1300px]">
            {/* Supporter 1 */}
            <div className="flex flex-col  w-full max-w-[280px] space-y-4">
              <img
                src="https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/670eb5f18dfdfb5a6c497cca_Max-Viessmann.jpg"
                alt="Max Viessmann"
                className="rounded-2xl w-full h-auto"
              />
              <h2 className="text-2xl font-semibold">Max Viessmann</h2>
              <p className="">
                Max Viessmann is CEO of the Viessmann Group, a global provider
                of solutions for our climate. His corporate mission statement:
                We design living spaces for future generations.
              </p>
            </div>

            {/* Supporter 2 */}
            <div className="flex flex-col  w-full max-w-[280px] space-y-4">
              <img
                src="https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cc87617f3d7bde3c2d7afc_Joachim%20Drees-p-500.png"
                alt="Joachim Drees"
                className="rounded-2xl w-full h-auto"
              />
              <h2 className="text-2xl font-semibold">Joachim Drees</h2>
              <p className="">
                Joachim Drees is the former CEO of MAN and current CEO of
                Haniel. He contributes his experience as a manager and board
                member of Drees und Sommer.
              </p>
            </div>

            {/* Supporter 3 */}
            <div className="flex flex-col  w-full max-w-[280px] space-y-4">
              <img
                src="https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cc877d564a6620490fc7b0_Lisa%20Gradow-p-500.jpg"
                alt="Lisa Gradow"
                className="rounded-2xl w-full h-auto"
              />
              <h2 className="text-2xl font-semibold">Lisa Gradow</h2>
              <p className="">
                Lisa Gradow is CEO of the legal tech company Fides and founded
                Usercentrics. She is an expert in building B2B software
                companies and in data protection and digital compliance.
              </p>
            </div>

            {/* Supporter 4 */}
            <div className="flex flex-col  w-full max-w-[280px] space-y-4">
              <img
                src="https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cc8794ea899da6acf31f46_Michael%20Wax-p-500.jpg"
                alt="Michael Wax"
                className="rounded-2xl w-full h-auto"
              />
              <h2 className="text-2xl font-semibold">Michael Wax</h2>
              <p className="">
                Michael Wax is a serial entrepreneur with an impressive track
                record of building technology companies. He is CEO of Forto and
                founded the AI company KONUX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
