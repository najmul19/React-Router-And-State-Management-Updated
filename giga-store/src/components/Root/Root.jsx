import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Category from "../Category/Category";
import Hero from "../Hero/Hero";
import HeroSect from "../HeroSect/HeroSect";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <NavBar />
      <Hero></Hero>
     <HeroSect></HeroSect>

      <div className="flex flex-col lg:flex-row mt-[250px] ">
        <div className="w-full lg:w-1/6 sticky md:top-0 self-start z-10">
          <Category />
        </div>
        <div className="w-full lg:w-5/6">
          <Outlet />
        </div>
      </div>

      {/* <div className="relative">
        <Hero />
        <HeroSect />
      </div>

      
      <div className="flex flex-col lg:flex-row mt-[250px] gap-5">
        <div className="w-full lg:w-1/6 sticky top-5 self-start">
          <Category />
        </div>
        <div className="w-full lg:w-5/6">
          <Outlet />
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Root;
