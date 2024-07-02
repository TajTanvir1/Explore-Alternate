import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyRecommend = () => {
  const { user } = useContext(AuthContext);
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/recommends/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRecommends(data));
  }, [user]);

  const handleDelete = id => {
   console.log(id);
   Swal.fire({
      title: "Are you really want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
   }).then((result) => {
      if (result.isConfirmed) {


         fetch(`${import.meta.env.VITE_API_URL}/recommend/${id}`, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
               if (data.deletedCount > 0) {
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your Recommendation has been deleted.",
                     icon: "success"
                  });
                  const recommendRemains = recommends.filter(spot => spot._id !== id);
                  setRecommends(recommendRemains);
               }
            })
      }
   });
}

  return (
    <div className="my-8">
      <Helmet>
        <title>Explore Alternate | My Recommendations</title>
      </Helmet>
      <h1 className="title-text pb-6 underline animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">My Recommendations</h1>
      <div className=" flex justify-center text-center mx-auto ">
        <div className="w-[95%] lg::w-[90%] text-center align-middle items-center overflow-x-auto">
          <table className="table table-zebra text-center border-2 border-orange-400 rounded-xl">
            {/* head */}
            <thead className="border">
              <tr className="text-lg font-bold  text-orange-800 bg-cyan-50">
                <th className="border-y-2 border border-orange-300">Sl No</th>
                <th className="border-y-2 border border-orange-300">Query Title</th>
                <th className="border-y-2 border border-orange-300">Recommendation Title</th>
                <th className="border-y-2 border border-orange-300">Recommendation Product Name</th>
                <th className="border-y-2 border border-orange-300">Recommend Image</th>
                <th className="border-y-2 border border-orange-300">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {recommends?.map((recommend, i) => (
                <tr key={i}>
                  <th className="border border-orange-200">{i + 1}</th>
                  <td className="border border-orange-200">{recommend.queryTitle}</td>
                  <td className="border border-orange-200">{recommend.recommendTitle}</td>
                  <td className="border border-orange-200">{recommend.recommendProductName}</td>
                  <td className="border border-orange-200"><img src={recommend.recommendImage} alt="" className="max-w-[100px] mx-auto rounded-md" /></td>
                  <td className="border border-orange-200">
                    <button
                      onClick={() => handleDelete(recommend._id)}
                      className="btn btn-sm btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyRecommend;
