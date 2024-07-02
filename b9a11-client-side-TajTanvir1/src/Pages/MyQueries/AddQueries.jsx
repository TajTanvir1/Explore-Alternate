import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const AddQueries = () => {
  const { user } = useContext(AuthContext);

  const [currentDateTime, setCurrentDateTime] = useState(null);
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

  const handleAddQueries = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const productImage = form.get("productImage");
    const queryTitle = form.get("queryTitle");
    const productName = form.get("productName");
    const brandName = form.get("brandName");
    const alternationReason = form.get("alternationReason");
    const datePosted = currentDateTime;
    const boycottingReasonDetails = form.get("boycottingReasonDetails");
    const recommendationCount = 0;
    const queryUserName = user.displayName;
    const queryUserEmail = user.email;
    const queryUserImage = user.photoURL;

    const queryDetails = {
      productImage,
      queryTitle,
      productName,
      brandName,
      alternationReason,
      datePosted,
      boycottingReasonDetails,
      recommendationCount,
      queryUserName,
      queryUserEmail,
      queryUserImage,
    };
    console.log(queryDetails);

    toast("Query Added Successfully.");

    // Data Add to Server
    fetch(`${import.meta.env.VITE_API_URL}/queries`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(queryDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Explore Alternate | Add Queries</title>
      </Helmet>
      <div>
        <div className="mx-4">
          <div className="w-full  p-6 space-y-3 rounded-2xl dark:bg-cyan-50 dark:text-gray-800 border-2 shadow-xl lg:mr-10">
            <h1 className="text-3xl  font-bold text-center underline my-8 animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
              Add Queries
            </h1>
            <form onSubmit={handleAddQueries} className="space-y-2 my-4">
              {/* 1st Row */}
              <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8">
                {/* Query Title */}
                <div className="space-y-1">
                  <label className=" dark-text text-xl font-semibold  p-3">
                    Query Title
                  </label>
                  <input
                    type="text"
                    name="queryTitle"
                    placeholder="Query Title"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
                {/*  Product Name */}
                <div className="space-y-1">
                  <label className="dark-text text-xl font-semibold  p-3">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
              </div>
              {/* 2nd Row */}
              <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8">
                {/* Product Image */}
                <div className="space-y-1">
                  <label className=" dark-text text-xl font-semibold  p-3">
                    Product Image
                  </label>
                  <input
                    type="photo"
                    name="productImage"
                    placeholder="Product Image"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
                {/*  Brand Name */}
                <div className="space-y-1">
                  <label className="dark-text text-xl font-semibold  p-3">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Brand Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
              </div>
              {/* 3rd Row */}
              <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8">
                {/* Alternation Reason */}
                <div className="space-y-1">
                  <label className=" dark-text text-xl font-semibold  p-3">
                    Alternation Reason
                  </label>
                  <input
                    type="text"
                    name="alternationReason"
                    placeholder="Alternation Reason"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
                {/*  Boycotting Reason Details */}
                <div className="space-y-1">
                  <label className="dark-text text-xl font-semibold  p-3">
                    Boycotting Reason Details
                  </label>
                  <input
                    type="text"
                    name="boycottingReasonDetails"
                    placeholder="Boycotting Reason Details"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
              </div>

              <button
                to="/login"
                className="btn lg:btn-md w-full bg-[#d6ad39] text-white lg:mr-6 text-center"
              >
                Add Query
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddQueries;
