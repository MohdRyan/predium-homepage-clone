import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DataCollections = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <div className="bg-blue-50 w-full h-auto my-[3rem] text-indigo-950 flex justify-center items-center flex-col ">
        <div className="bg-white w-[90%] h-auto flex justify-around py-[3rem] sticky top-0 z-10 max-[1000px]:hidden ">
          <div className="flex justify-center items-center gap-x-4  ">
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/669e0d9ecae9ce53db155cbc_Document.svg"
              alt=""
              className="h-10 w-10"
            />
            <a
              href="#data-collection"
              className="text-2xl hover:text-indigo-600 "
            >
              Data Collection
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-4 ">
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66e16e546a0cea115f3ce696_Document.svg"
              alt=""
              className="h-10 w-10"
            />
            <a
              href="#data-analysis"
              className="text-2xl hover:text-indigo-600  "
            >
              Data Analysis
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-4 ">
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cc84a755131860ba6d8aec_icon.svg"
              alt=""
              className="h-10 w-10"
            />
            <a
              href="#action-planning"
              className="text-2xl hover:text-indigo-600  "
            >
              Action Planning
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-4 ">
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cc8516e3c75d4f78131ec0_icon-document.svg"
              alt=""
              className="h-10 w-10"
            />
            <a href="#reporting" className="text-2xl hover:text-indigo-600  ">
              Reporting
            </a>
          </div>
        </div>
        {/* DATA COLLECTION CONTAINER  */}
        <div
          id="data-collection"
          className="bg-white w-[90%] h-auto flex items-center justify-center pt-[8rem] max-[1000px]:pt-[2rem] "
        >
          <div className="w-full flex items-center justify-around  max-[1000px]:flex-col ">
            <div className="w-[50%] max-[1000px]:w-[80%]" data-aos="fade-right">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/670d3c0d5e9aab3193852524_Group%20176850%201.png"
                alt=""
              />
            </div>
            <div className="w-[40%] space-y-6 max-[1000px]:w-[90%] ">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/669e0d9ecae9ce53db155cbc_Document.svg"
                alt=""
              />
              <h1 className="text-4xl font-semibold w-[70%] max-[1000px]:w-full">
                Collect data quickly and enrich it
              </h1>
              <p className="text-xl" data-aos="fade-left">
                Create a precise digital twin of all buildings in no time at all
                even if data is missing. Predium enriches the existing database
                using AI and satellite images.
              </p>

              <div className="bg-blue-50 rounded-xl space-y-4 px-4 py-4 mr-4 max-[500px]:mr-0 max-[500px]:px-2">
                <p className="w-[85%] max-[500px]:w-full">
                  &#34;Our building data was incomplete. Predium AI has created
                  a reliable data basis based on limited inputs.&#34;
                </p>
                <div className="flex items-center gap-5 ">
                  <img
                    src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66fadaa135d07ed7024c0545_Andreas_m.avif"
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-xl">Andreas Majeri</h1>
                    <h1 className="text-sm">Energy Manager, Schiffszimmerer</h1>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href=""
                  className="text-xl hover:text-blue-600 font-semibold underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* DATA ANALYSIS CONTAINER  */}
        <div
          id="data-analysis"
          className="bg-white w-[90%] h-auto flex items-center justify-center pt-[8rem] max-[1000px]:pt-[2rem] "
        >
          <div className="w-full flex items-center justify-around  max-[1000px]:flex-col ">
            <div className="w-[50%] max-[1000px]:w-[90%]" data-aos="fade-right">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/670d3e602f5ca8683970066a_ESG%20Analyse%20DE.png"
                alt=""
              />
            </div>
            <div className="w-[40%] space-y-6 max-[1000px]:w-full">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66e16e546a0cea115f3ce696_Document.svg"
                alt=""
              />
              <h1 className="text-4xl font-semibold w-[70%] max-[1000px]:w-[90%]">
                Analyze data and identify risks
              </h1>
              <p className="text-xl" data-aos="fade-left">
                With Predium, risks of value loss of buildings become
                immediately visible. Perform a CRREM risk assessment and
                taxonomy compliance assessment within minutes.
              </p>

              <div className="bg-blue-50 rounded-xl space-y-4 px-4 py-4 mr-4 max-[500px]:mr-0 max-[500px]:px-2">
                <p className="w-[85%] max-[500px]:w-full">
                  &#34;We were able to see at a glance where there was a need
                  for action and where there were great economic opportunities
                  in our portfolio.&#34;
                </p>
                <div className="flex items-center gap-5 ">
                  <img
                    src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/671f8a37b4e395f6183772ed_image%20561.png"
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-xl">David Rieck</h1>
                    <h1 className="text-sm">
                      Managing Director, Wohnungsbaugesellschaft Köthen
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href=""
                  className="text-xl hover:text-blue-600 font-semibold underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ACTION PLANNING CONTAINER */}
        <div
          id="action-planning"
          className="bg-white w-[90%] h-auto flex items-center justify-center pt-[8rem]  max-[1000px]:pt-[2rem] "
        >
          <div className="w-full flex items-center justify-around max-[1000px]:flex-col   ">
            <div className="w-[50%] max-[1000px]:w-[90%]" data-aos="fade-right">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/670d3f26fe71cdbb7c30d327_Ma%C3%9Fnahmenplan%20DE.png"
                alt=""
              />
            </div>
            <div className="w-[40%] space-y-6 max-[1000px]:w-full">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cc84a755131860ba6d8aec_icon.svg"
                alt=""
              />
              <h1 className="text-4xl font-semibold w-[70%] max-[1000px]:w-[90%]">
                Plan and prioritize investments
              </h1>
              <p className="text-xl" data-aos="fade-left">
                Simulate different investment strategies for individual
                buildings and your overall portfolio. The cost-benefit
                comparison helps you to make the right decisions at the right
                time.
              </p>

              <div className="bg-blue-50 rounded-xl space-y-4 px-4 py-4 mr-4 max-[500px]:mr-0 max-[500px]:px-2">
                <p className="w-[85%] max-[500px]:w-full">
                  &#34;Predium provides us with an overview of costs, potential
                  savings and subsidies at the click of a button.&#34;
                </p>
                <div className="flex items-center gap-5 ">
                  <img
                    src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66fbad86bfa61e339639b107_Group%20176939.avif"
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-xl">Head of Department</h1>
                    <h1 className="text-sm">Housing Association</h1>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href=""
                  className="text-xl hover:text-blue-600 font-semibold underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* REPORTING CONTAINER */}
        <div
          id="reporting"
          className="bg-white w-[90%] h-auto flex items-center justify-center py-[8rem] max-[1000px]:py-[1rem]   "
        >
          <div className="w-full flex items-center  justify-around max-[1000px]:flex-col  ">
            <div className="w-[50%] max-[1000px]:w-[90%]" data-aos="fade-right">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/670d4027d83d34d3effdc8ea_Reporting%20DE.png"
                alt=""
              />
            </div>
            <div className="w-[40%] space-y-6   max-[1000px]:w-full">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66cc8516e3c75d4f78131ec0_icon-document.svg"
                alt=""
              />
              <h1 className="text-4xl font-semibold w-[70%] max-[1000px]:w-[90%]">
                Create meaningful ESG reports
              </h1>
              <p className="text-xl" data-aos="fade-left">
                Predium helps you achieve better ESG scores and communicate your
                strategy to banks and investors. Create ESG reports at the touch
                of a button and reduce manual work.
              </p>

              <div className="bg-blue-50 rounded-xl space-y-4 px-4 py-4 mr-4 max-[500px]:mr-0 max-[500px]:px-2">
                <p className="w-[85%] max-[500px]:w-full">
                  &#34;Now we can share up-to-date figures with our stakeholders
                  at any time, for example in the form of automatically
                  generated PDF files on ESG performance.&#34;
                </p>
                <div className="flex items-center gap-5 ">
                  <img
                    src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/66fbad86bfa61e339639b107_Group%20176939.avif"
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-xl">Portfolio Manager</h1>
                    <h1 className="text-sm">Multi Family Office</h1>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href=""
                  className="text-xl hover:text-blue-600 font-semibold underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCollections;
