import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const RecommendMe = () => {

   const { user } = useContext(AuthContext);
   const [recommends, setRecommends] = useState([]);
 
   useEffect(() => {
     fetch(`${import.meta.env.VITE_API_URL}/recommendations/${user?.email}`)
       .then((res) => res.json())
       .then((data) => setRecommends(data));
   }, [user]);

   return (
      <div className="my-8">
         <Helmet>
        <title>Explore Alternate | Recommendations For Me</title>
      </Helmet>
         <h1 className="title-text pb-6 underline animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">Recommendations For Me</h1>
         <div className=" flex justify-center text-center mx-auto ">
        <div className="w-[95%] lg::w-[90%] text-center align-middle items-center overflow-x-auto">
          <table className="table table-zebra text-center border-2 border-orange-400 rounded-lg">
            {/* head */}
            <thead className="border">
              <tr className="text-lg font-bold  text-orange-800 bg-cyan-50">
                <th className="border-y-2 border border-orange-300">Sl No</th>
                <th className="border-y-2 border border-orange-300">Query Title</th>
                <th className="border-y-2 border border-orange-300">Query Product Name</th>
                <th className="border-y-2 border border-orange-300">Recommendation Title</th>
                <th className="border-y-2 border border-orange-300">Recommendation Product Name</th>
                <th className="border-y-2 border border-orange-300">Recommend Image</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {recommends?.map((recommend, i) => (
                <tr key={i}>
                  <th className="border border-orange-200">{i + 1}</th>
                  <td className="border border-orange-200">{recommend.queryTitle}</td>
                  <td className="border border-orange-200">{recommend.productName}</td>
                  <td className="border border-orange-200">{recommend.recommendTitle}</td>
                  <td className="border border-orange-200">{recommend.recommendProductName}</td>
                  <td className="border border-orange-200"><img src={recommend.recommendImage} alt="" className="max-w-[100px] mx-auto rounded-md" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
   );
};

export default RecommendMe;