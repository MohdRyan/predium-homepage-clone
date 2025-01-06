const HeroPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-100  to-white h-auto py-10 ">
        <div className="text-slate-900 w-full h-auto flex">
          <div className="w-[50%] flex items-center justify-center max-[1000px]:w-full ">
            <div className="w-[80%] flex flex-col gap-8 max-[1000px]:gap-16 max-[1000px]:mt-8">
              <h1 className="text-6xl font-semibold font-sans max-[1000px]:text-5xl  ">
                Increase the value of your buildings sustainability
              </h1>
              <p className="text-xl ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur quos molestiae eligendi ex enim voluptate sapiente
                doloremque inventore libero dolorum, tempora debitis rem
                quisquam eos similique earum sit dicta, sequi temporibus quod!
              </p>
              <div>
                <button className="text-lg px-6 py-2 rounded-3xl bg-blue-600 text-white font-semibold hover:bg-white hover:text-blue-600  ">
                  Contact Us &#8594;
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col items-center justify-center gap-8 mt-[5rem] max-[1015px]:hidden ">
            <div className="flex justify-end ml-20">
              <img
                src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/6745d30771c962987a58379b_Frame%20316125303.png"
                alt=""
              />
            </div>

            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/671f83597b6f12f0028a3dc1_Group%20176782%20(3).png"
              alt=""
              className="w-[30rem] h-auto"
            />
            <img
              src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/6745d3e06776485bf1aedf0f_Frame%20427320194-p-500.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
