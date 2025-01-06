import AboutUs from "./AboutUs";
import DataCollections from "./DataCollections";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import Membership from "./Membership";
import NavBar from "./NavBar";
import Partner from "./Partner";
import ScrollPage from "./ScrollPage";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroPage />
      <ScrollPage />
      <DataCollections />
      <Partner />
      <Membership />
      <AboutUs />
      <Footer />
    </>
  );
};

export default HomePage;
