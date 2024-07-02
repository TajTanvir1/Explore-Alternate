import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import Banner from "./Banner";
import Queries from "./Queries";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import AskBanner from "./AskBanner";

const Home = () => {
   return (
      <div className="mx-1">
         <Helmet>
            <title>Explore Alternate | Home</title>
         </Helmet>
         <Slider></Slider>
         <Banner></Banner>
         <Queries></Queries>
         
         <AboutUs></AboutUs>
         <FAQ></FAQ>
         <AskBanner></AskBanner>
      </div>
   );
};

export default Home;