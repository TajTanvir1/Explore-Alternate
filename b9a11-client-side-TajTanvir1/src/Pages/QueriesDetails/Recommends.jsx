import { useEffect, useState } from 'react';
import RecommendsCard from './RecommendsCard';

const Recommends = ({queryId}) => {

   // console.log(queryId)
   const [recommends, setRecommends] = useState([]);

   useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/recommend/${queryId}`)
        .then((res) => res.json())
        .then((data) => setRecommends(data));
    }, [queryId]);
  
   //  console.log(recommends);
   return (
      <div>
         {/* <h1>Recommends</h1> */}
         {
               recommends.map(recommend => <RecommendsCard key={recommend._id} recommend={recommend}></RecommendsCard>)
            }
      </div>
   );
};

export default Recommends;