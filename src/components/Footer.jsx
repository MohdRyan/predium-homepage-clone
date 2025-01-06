const Footer = () => {
  return (
    <>
      <div className="bg-blue-800  text-white h-auto w-full flex flex-col  items-center justify-center ">
        <div className="w-[90% ] h-auto flex py-[3rem] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:text-center max-[1000px]:w-full max-[1000px]:gap-y-4 ">
          <div className="w-[40%] h-auto pt-4 max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:flex max-[1000px]:justify-center">
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/663dca30f9eccec87e01ab31_Logo%20Predium%5Bwhite%5D.svg"
              alt=""
              className="w-[10rem] h-auto"
            />
          </div>
          <div className="w-[60%] h-auto ml-10 space-y-5 max-[1000px]:w-[90%] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:flex-col max-[500px]:w-[90%] max-[1000px]:mx-4">
            <h1 className="text-lg w-[80%] max-[700px]:w-full">
              On the way to Net-Zero: Predium supports real estate companies in
              uniting ESG actions with economic goals.
            </h1>
            <div className="flex gap-20 items-center">
              <button className="text-indigo-950 px-8 py-2 text-lg font-semibold rounded-3xl bg-white hover:text-white hover:bg-blue-400 max-[1000px]:px-3 max-[1000px]:text-base max-[700px]:text-sm max-[500px]:text-sm max-[500px]:px-1">
                Schedule a meeting
              </button>
              <p className="text-sm max-[500px]:hidden">
                Visit at us linkedin-logo
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-auto py-[3rem]   max-[600px]:text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full h-auto">
            <a href="" className="text-md font-semibold hover:underline">
              Software
            </a>
            <a href="" className="text-md font-semibold hover:underline">
              Predium AI
            </a>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-md font-semibold">Solutions</h1>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Purchase analysis
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Asset & Portfolio Management
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Decarbonization Strategy
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Reporting
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Lending
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-md font-semibold">Company</h1>
              <a href="" className="text-slate-300 hover:underline text-sm">
                About Us
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Careers
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Contact Us
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-md font-semibold">Resources</h1>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Blog
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Events
              </a>
              <a href="" className="text-slate-300 hover:underline text-sm">
                Newsroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
