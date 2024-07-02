import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
   return (
      <div data-aos="fade-down" data-aos-duration="2000" className="flex flex-col lg:flex-row items-center h-svh justify-center align-middle mx-2 md:mx-8">
         <Helmet>
            <title>Explore Alternate | Error</title>
         </Helmet>
         <img src={'https://i.ibb.co/mDQd4ZL/Error-Page.png'} alt="" className="max-h-svh mx-2 md:mx-8" />
         <div className="mx-auto text-center">
            <h2 className="my-2 text-2xl md:text-4xl font-bold animate__animated animate__bounce">ERROR : Wrong Page</h2>
            <h2 className="my-2 text-2xl md:text-4xl font-bold">You are in a wrong page.</h2>
            <Link to="/"><button className="btn btn-outline btn-error text-xl font-semibold my-2"><span className="dark-color">Click here back to home</span></button></Link>
         </div>
      </div>
   );
};

export default Error;