const AutoScroll = () => {
  const logos = [
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cd9f8ba91e97ff27ef6432_1-Logo%20Colliers%20(1).svg",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cda00c54b611c9be0c9c09_2-Logo%20aam2core%20HoldingAG-p-500.png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cd9fb7b88c92b867bb44f9_1-Logo%20Erste%20Group%20(1).svg",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cda074611d916913d2447c_2-Logo%20WBM-p-500.png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cda045ef0e5d0fd416b9b6_2-Logo%20ROS%20Designer%20Outlet-p-500.png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cda0646799b9c81adf6741_2-Logo%20Valon%20(1).png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cda01aee22a031b063e9b2_2-Logo%20Fortis-p-500.png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cda055c93a26c8e0e15473_2-Logo%20TREI%20(1).png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cda0863d6e484945f51cdb_2-Logo%20Wo%CC%88hr%20%2B%20Bauer-p-500.png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cd9fc6782e78476aafba69_1-Logo%20Pamera-p-500.png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cd9ff8c4856f16b9bf88c2_1-Logo%20Tattersall%20Lorenz%20(1).png",
    "https://cdn.prod.website-files.com/669f76be1bb81b23f7697729/66cd9f9cb42d5471428aad6b_1-Logo%20Deutsche%20Investment-p-500.png",

    // Add more images as needed
  ];

  return (
    <div className="overflow-hidden bg-blue-50 py-4">
      <div className="flex animate-scroll">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-12  mx-4"
          />
        ))}
        {/* Duplicate images for seamless scrolling */}
        {logos.map((logo, index) => (
          <img
            key={`copy-${index}`}
            src={logo}
            alt={`Logo Copy ${index + 1}`}
            className="h-12  mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScroll;
