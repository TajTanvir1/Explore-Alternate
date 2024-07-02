import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateQueries = () => {
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const { user } = useContext(AuthContext);
  const query = useLoaderData();

  const {
    _id,
    productImage,
    queryTitle,
    productName,
    brandName,
    alternationReason,
    datePosted,
    boycottingReasonDetails,
    queryUserName,
    queryUserEmail,
    queryUserImage,
    dateTime,
    recommendationCount,
  } = query;
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

  const handleUpdateQueries = (e) => {
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

    // Data Add to Server
    fetch(`${import.meta.env.VITE_API_URL}/queries/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(queryDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your Query has been Updated.",
            icon: "success",
            confirmButtonText: "Great",
          });
        }
      });
  };
  return (
    <div className="my-10">
      <Helmet>
        <title>Explore Alternate | Update Queries</title>
      </Helmet>
      <div>
        <div className="mx-4">
          <div className="w-full  p-6 space-y-3 rounded-2xl dark:bg-cyan-50 dark:text-gray-800 border-2 shadow-xl border-orange-300 lg:mr-10">
            <h1 className="text-3xl  font-bold text-center underline my-8 animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
              Update Queries
            </h1>
            <form onSubmit={handleUpdateQueries} className="space-y-2">
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
                    defaultValue={queryTitle}
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
                    defaultValue={productName}
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
                    defaultValue={productImage}
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
                    defaultValue={brandName}
                    placeholder="Brand Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
              </div>
              {/* 3rd Row */}
              <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8 pb-4">
                {/* Alternation Reason */}
                <div className="space-y-1">
                  <label className=" dark-text text-xl font-semibold  p-3">
                    Alternation Reason
                  </label>
                  <input
                    type="text"
                    name="alternationReason"
                    defaultValue={alternationReason}
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
                    defaultValue={boycottingReasonDetails}
                    placeholder="Boycotting Reason Details"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-accent"
                  />
                </div>
              </div>

              <button className="btn lg:btn-md w-full bg-[#ebcd7a] text-black font-bold lg:mr-6 text-center">
                  Update Query
              
                </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateQueries;
