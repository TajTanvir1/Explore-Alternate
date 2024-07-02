import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="md:w-[80%] flex flex-col mx-auto items-center my-4 border border-orange-300 p-4 rounded-xl bg-[#f7d48f26]">
      <h1 className="text-2xl font-bold md:text-4xl">About Us</h1>
      <p className="text-lg text-gray-400 my-4 border-b-2 pb-2 text-center">
        Here is some details about us. Hope you like our website and its helpful
        for you.
      </p>
      <div className="flex flex-col md:flex-row justify-around ml-4">
        <div className="md:w-[50%]">
          <h1 className="text-lg text-gray-500 mt-4">
            Welcome to Explore Alternate, where curiosity meets answers. We're
            your go-to source for exploring intriguing questions and finding
            insightful solutions. Discover diverse perspectives, unlock hidden
            truths, and satisfy your quest for knowledge. Join us in unraveling
            the mysteries of the world around us.
          </h1>
          <h1 className="text-gray-500 mt-4 font-semibold">
            You Can add your queries by Login in our website.
          </h1>
          <Link
            to="/login"
            className="btn btn-outline lg:btn-outline btn-error lg:btn-error my-4 lg:text-xl mr-2"
          >
            Login for more
          </Link>
        </div>
        <div className="w-[300px] mx-auto">
          <img
            src="https://i.ibb.co/16PsBPM/Queries-to-Get-Animated.gif"
            alt=""
            className="h-[300px] w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
