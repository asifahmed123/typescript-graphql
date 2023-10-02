import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../graphql/queries";



const DisplayShips = () => {
     const { loading, error, data } = useQuery(GET_SHIPS)
     console.log(data)
     if (loading) return <p>Loading...</p>
     if (error) return <p>Error</p>
     return (
          <>
               <div className="grid grid-cols-3">
                    {
                         data?.ships?.map((ship) =>
                              <div className="border-8 p-8" key={ship?.id}>
                                   <h2>{ship?.name}</h2>
                                   <p>Type: {ship?.type}</p>
                                   <p>Year: {ship?.year_built}</p>
                              </div>)
                    }
               </div>
          </>
     );
};

export default DisplayShips;