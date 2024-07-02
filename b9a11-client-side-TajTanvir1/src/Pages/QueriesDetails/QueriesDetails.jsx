import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import "react-datepicker/dist/react-datepicker.css";
import Details from "./Details";
import Recommends from "./Recommends";
import { Helmet } from "react-helmet-async";

const QueriesDetails = () => {
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const query = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(query );
  //   console.log(user);

  useEffect(() => {
    const updateDateTime = () => {
      const currentTimeStamp = Date.now();
      const currentDate = new Date(currentTimeStamp);
      setCurrentDateTime(currentDate.toLocaleString());
    };
    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const {
    _id,
    productImage,
    queryTitle,
    productName,
    brandName,
    alternationReason,
    datePosted,
    boycottingReasonDetails,
    dateTime,
    recommendationCount,
    queryUserName,
    queryUserEmail,
    queryUserImage,
  } = query;

  const handleAddRecommend = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const recommendTitle = form.get("recommendTitle");
    const recommendProductName = form.get("recommendProductName");
    const recommendImage = form.get("recommendImage");
    const recommendReason = form.get("recommendReason");
    const recommendName = user.displayName;
    const recommenderImage = user?.photoURL;
    const recommendEmail = user.email;
    const recommendTime = currentDateTime;
    const queryId = _id;

    const recommendDetails = {
      queryId,
      queryTitle,
      productName,
      queryUserName,
      queryUserEmail,
      recommendTitle,
      recommendProductName,
      recommendImage,
      recommendReason,
      recommendName,
      recommendEmail,
      recommendTime,
      recommenderImage
    };
    console.log(recommendDetails);

    toast("Recommendation Added Successfully.");

    // Data Add to Server
    fetch(`${import.meta.env.VITE_API_URL}/recommend`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recommendDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Explore Alternate | Query Details</title>
      </Helmet>

      <h1 className="title-text pb-6 underline animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">Queries Details</h1>

      <Details></Details>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Recommendations */}
        <div className="mx-auto">
          <div className="md:ml-6 items-center bg-[#ffd7792c] w-[360px] md:w-[650px] p-2 md:p-4 border border-orange-200 rounded-md shadow-md my-4 md:my-10">
            <h1 className="text-xl my-2 font-semibold text-center underline">Recommendations for this Query</h1>
            {/* <Recommends queryId={_id}></Recommends> */}
            <Recommends queryId={_id}></Recommends>
          </div>
        </div>
        {/*Add Recommendation */}
        <div className="w-[350px] md:w-[450px] p-6 space-y-3 rounded-2xl dark:bg-cyan-50 dark:text-gray-800 border-2 shadow-xl lg:mx-10 md:mx-6 mx-auto  my-4 md:my-8 lg:my-10">
          <h1 className="text-3xl  font-bold text-center underline mb-6">
            Add Recommendation
          </h1>
          {/* Recommendation From */}
          <form onSubmit={handleAddRecommend} className="space-y-2">
            <div className="text-sm w-[300px] md:w-[400px] md:gap-4 lg:gap-8">
              {/* Recommend Title */}
              <div className="space-y-1 mt-2">
                <label className=" dark-text text-base mt-2 md:text-xl font-semibold  p-3">
                  Recommendation Title
                </label>
                <input
                  type="text"
                  name="recommendTitle"
                  placeholder="Recommendation Title"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                />
              </div>
              {/*  Name */}
              <div className="space-y-1 mt-2">
                <label className="dark-text text-base mt-2 md:text-xl font-semibold  p-3">
                  Recommendation Product Name
                </label>
                <input
                  type="text"
                  name="recommendProductName"
                  placeholder="Recommend Product Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                />
              </div>
            </div>
            {/* Image & Reason */}
            <div className="text-sm w-[300px] md:w-[400px] md:gap-4 lg:gap-8">
              {/* recommendImage */}
              <div className="space-y-1 mt-2">
                <label className=" dark-text text-base mt-2 md:text-xl font-semibold  p-3">
                  Recommendation Image
                </label>
                <input
                  type="photo"
                  name="recommendImage"
                  placeholder="Recommend Image URL"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                />
              </div>
              {/*  Name */}
              <div className="space-y-1 mt-2">
                <label className="dark-text text-base mt-2 md:text-xl font-semibold  p-3">
                  Recommendation Reason
                </label>
                <textarea
                  type="text"
                  name="recommendReason"
                  placeholder="Recommendation Reason"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                />
              </div>
            </div>

            <button
              to="/login"
              className="btn lg:btn-md w-full bg-[#477f3b] text-white lg:mr-6 text-center"
            >
              Add Recommendation
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default QueriesDetails;
