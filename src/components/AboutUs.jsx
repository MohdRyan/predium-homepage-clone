const AboutUs = () => {
  return (
    <>
      <div className="bg-indigo-950 h-auto w-full text-white flex flex-col items-center justify-center py-[6rem]">
        <div className="w-[40%] space-y-8 flex flex-col items-center justify-center max-[1100px]:w-[80%] max-[500px]:w-[90%] ">
          <h1 className="text-6xl font-semibold text-center max-[500px]:text-4xl ">
            Get to know us personally
          </h1>
          <p className="text-xl text-center">
            Achieve your ambitious goals with Predium - digital, smart and
            efficient. We look forward to hearing from you.
          </p>
          <button className="px-10 py-2 bg-blue-600 text-lg font-semibold rounded-3xl hover:text-blue-600 hover:bg-white">
            Book a demo &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
