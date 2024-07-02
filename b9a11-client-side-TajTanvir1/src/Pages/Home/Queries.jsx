import { useEffect, useState } from "react";
import QueriesCard from "./QueriesCard";
import { Link } from "react-router-dom";
import 'animate.css';

const Queries = () => {
  const [queries, setQueries] = useState([]);
//   console.log(queries);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/queries`)
      .then((res) => res.json())
      .then((data) => setQueries(data));
  }, []);

  return (
    <div>
      
      <h2 className="text-4xl font-bold text-center underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
        Queries
      </h2>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className="grid lg:grid-cols-3 md:grid-cols-2 justify-around">
        {queries.slice(0, 6).map((query) => (
          <QueriesCard key={queries._id} query={query}></QueriesCard>
        ))}
      </div>
      <Link to={`/allQueries`}>
        <button className="btn btn-sm btn-outline btn-error btn-wide mx-auto flex my-6">
          See All Queries
        </button>
      </Link>
    </div>
  );
};

export default Queries;
