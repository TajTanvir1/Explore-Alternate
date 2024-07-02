import { useEffect, useState } from "react";
import AllQueriesCard from "./AllQueriesCard";
import { BsSearch } from "react-icons/bs";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [search, setSearch] = useState("")
  // console.log(queries)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/query?&search=${search}`)
      .then((res) => res.json())
      .then((data) => setQueries(data));
  }, [search]);


  const handleSearch = e => {
   e.preventDefault()
   const text = e.target.search.value;
   setSearch(text)
}
// console.log(search);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-6 lg:mt-16 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2 underline">
        All Queries
      </h2>
      <div className="max-w-[355px] mx-auto">
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden rounded-lg border-2 border-orange-300">
            <input
              className="px-6 py-2 text-gray-700 bg-white outline-none"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Search Query Title"
            />
            <button className="btn btn-accent text-lg">
            <BsSearch/> Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-around">
        {queries.map((query) => (
          <AllQueriesCard key={queries._id} query={query}></AllQueriesCard>
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
