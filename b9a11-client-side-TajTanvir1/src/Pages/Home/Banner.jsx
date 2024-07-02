import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mx-auto py-6 flex flex-col justify-center items-center align-middle my-auto">
      <div className="relative lg:w-[70%] align-middle items-center">
        <img
          src={"https://i.ibb.co/68CqQT2/Tiny-Banner.png"}
          alt=""
          className="mx-auto lg:h-[200px]"
        />
        <div className="absolute top-0 ml-10 flex justify-between md:w-[700px]">
          <div className="mt-2 md:mt-10 mx-2 md:mx-10">
            <h1 className="text-white rounded-lg bg-black p-1 md:p-2 bg-opacity-30 font-bold"> Want to Explore Queries?</h1>
            <Link to='allQueries'>
            <button className="btn btn-sm md:btn-wide btn-accent mt-2">
              <span className="lg:text-xl">Click to See Queries</span>
            </button>
            </Link>
          </div>
          <div>
            <img src="https://i.ibb.co/3YMVXgd/Idea.jpg" alt="" className="max-h-[80px] md:max-h-[170px] lg:max-h-[180px] mt-1 lg:mt-2 h-full mx-4" />
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
