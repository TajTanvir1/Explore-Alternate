import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Details = () => {
   const query = useLoaderData();
   const { user } = useContext(AuthContext);
   //   console.log(query );
   //   console.log(user);

   const { _id, productImage, queryTitle, productName, brandName, alternationReason, datePosted, boycottingReasonDetails,  recommendationCount,
    queryUserName, queryUserImage } = query;
  return (
    <div>
      {/* Query Details */}
      <div className="flex flex-col md:flex-row justify-around m-2 lg:m-8 rounded-lg border-2 border-orange-50 p-2 md:p-6 items-center bg-[#ffe6a327]">
        <div>
          <h3 className="my-4 border-t border-orange-100 text-2xl"><span className="font-semibold">Query:</span> {queryTitle}</h3>
          <h3 className="my-2 border-t border-orange-100"><span className="font-semibold">Product Name:</span> {productName}</h3>
          <h3 className="my-2 border-t border-orange-100"><span className="font-semibold">Brand Name:</span> {brandName}</h3>
          <h3 className="my-2 border-t border-orange-100"><span className="font-semibold">Boycotting Reason:</span>{boycottingReasonDetails === "" ? " N/A" : boycottingReasonDetails}</h3>
          <h3 className="my-2 border-t border-orange-100"><span className="font-semibold">Alternation Reason:</span> {alternationReason}</h3>
          <h3 className="my-2 border-t border-orange-100"><span className="font-semibold">Posted Date:</span> {datePosted}</h3>
          <h3 className="my-2 border-y border-orange-100"><span className="font-semibold">Recommendations: </span> {recommendationCount}</h3>
          <div className="flex my-4 gap-4 border-y border-orange-100 p-2">
            <h1>
              <img src={queryUserImage} alt="" className="w-20 rounded-md" />
            </h1>
            <div className="items-center my-auto">
              <h3 className="text-xl">
               <span className="font-semibold"> Query by:</span>{" "}
                <span className="font-semibold">{queryUserName}</span>
              </h3>
              <h3 className=""><span className="font-semibold">Posted Date:</span> {datePosted}</h3>
            </div>
          </div>
        </div>
        <div className="border-2 border-orange-200 rounded-md shadow-lg shadow-orange-100">
          <div className="md:w-[400] ">
            <img
              src={productImage}
              alt="Image of Product"
              className="rounded-t-md mx-auto max-w-[400px]md:w-[400]"
            />
          </div>
          <h1 className="bg-orange-100 rounded-b-lg text-center p-1 md:p-2 font-semibold">
            {productName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
