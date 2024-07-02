import { FaRegClock } from "react-icons/fa";

const RecommendsCard = ({ recommend }) => {
   const { _id, queryId, productImage, queryTitle, productName, brandName, alternationReason, datePosted, boycottingReasonDetails, recommendTitle, recommendProductName, recommendImage, recommendReason, recommendName, recommenderImage, currentDateTime, recommendTime } = recommend;

   return (
      <div className="my-4 bg-[#fac44518] border border-orange-300 rounded-lg shadow-lg p-2 md:p-4 w-[350px] md:w-[600px] mx-auto">
         <div className="border-2 p-1 rounded-sm border-orange-100">
            <h1 className="font-bold my-2 underline ">Recommendation by</h1>
            <div className="flex gap-4 border-y-2 border-orange-100 p-1">
               <div>
                  <img src={recommenderImage} alt="" className="w-14 rounded-full border-2 border-orange-200" />
               </div>
               <div className="">
                  <h1 className="font-bold">{recommendName}</h1>
                  <h1 className="flex gap-2 items-center"> <FaRegClock /> {
                     currentDateTime ? currentDateTime : recommendTime
                  }</h1>
               </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
               <div>
                  <h1><span className="font-bold mt-2 lg:mt-4">Recommend Title: </span>{recommendTitle}</h1>
                  <h1><span className="font-bold mt-2 lg:mt-4">Product Name: </span>{recommendProductName}</h1>
                  <h1><span className="font-bold mt-2 lg:mt-4">Recommend Reason: </span>{recommendReason}</h1>
               </div>
               <div className="w-[90%] max-w-[300px] mx-auto my-2">
                  <img src={recommendImage} alt="" className="border-2 border-orange-200 shadow-lg rounded-xl" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default RecommendsCard;