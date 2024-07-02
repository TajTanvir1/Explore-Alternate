import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext, useEffect, useState } from "react";
import QueriesCard from "../Home/QueriesCard";
import MyQueriesCard from "./MyQueriesCard";
import MyQueriesBanner from "./MyQueriesBanner";
import { Helmet } from "react-helmet-async";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myQueries/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setQueries(data));
  }, [user]);

  //  console.log(queries.length);

  return (
    <div>
      <Helmet>
            <title>Explore Alternate | My Queries</title>
         </Helmet>
      <div  data-aos="zoom-in-up" data-aos-duration="2000"className="">
        <MyQueriesBanner></MyQueriesBanner>
      </div>
      {queries?.length === 0 ? (
        <div className="my-6">
          <h1 className="text-xl font-semibold text-center my-2 animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
            You do not have any Queries yet.
          </h1>
          <h1 className="text-xl font-semibold text-center">
            Please Add Queries first.
          </h1>
          <Link to="/addQueries" className="mx-auto flex justify-center">
            <button className="btn btn-outline btn-warning mt-4">Add Queries</button>
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-around">
          {queries.map((query) => (
            <MyQueriesCard
              key={queries._id}
              queries={queries}
              setQueries={setQueries}
              query={query}
            ></MyQueriesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueries;
