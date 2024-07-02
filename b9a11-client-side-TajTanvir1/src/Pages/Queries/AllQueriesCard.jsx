import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import '../../styles.css'

const AllQueriesCard = ({ query }) => {
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
  // const queryUserName = queryUser.name;
  // const queryUserEmail = queryUser.email;
  // const queryUserImage = queryUser.image;

  return (
    <div className="gap-4 space-y-4 my-4 mx-auto">
      {/* <h1>Queries: {productName}</h1> */}

      <div className="w-[350px] min-h-[586px] border-2 border-orange-200 p-2 rounded-lg lit-bg">
        {/* Card Top */}
        <div className="">
          <div className="flex gap-2 align-middle items-center">
            <div className="text-2xl max-w-10 rounded-full">
              {
                queryUserImage ? <img src={queryUserImage} alt="" className="rounded-full" />
                  : <CgProfile />
              }
            </div>
            <div>
              <h1 className="text-lg font-semibold">{queryUserName}</h1>
              <p className="text-sm"> Posted on: {datePosted}</p>
            </div>
          </div>
          <h2 className="mx-2 border-y p-1 text-center my-1 font-semibold">{queryTitle}</h2>
        </div>
        <div className="mx-4">
          <img src={productImage} alt="" className="rounded-md mx-auto border border-orange-300" />
        </div>
        {/* After Image */}
        <div className="mx-2 my-1">
          <h1 className="font-semibold"><span className="font-semibold">Product Name:</span> {productName}</h1>
          <h3><span className="font-semibold">Brand:</span> {brandName}</h3>
          <p className="border-t py-1 my-1"><span className="font-semibold">Reason:</span> {alternationReason}</p>
          <Link to={`/queriesDetails/${_id}`}>
          <button className="btn btn-sm btn-outline btn-error btn-wide mx-auto flex">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllQueriesCard;
