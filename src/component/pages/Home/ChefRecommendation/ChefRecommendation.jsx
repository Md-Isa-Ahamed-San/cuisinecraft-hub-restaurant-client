import { useEffect, useState } from "react";
import ItemCard from "../../../common/ItemCard";
import SectionIntro from "../../../common/SectionIntro";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../shared/Loading/Loading";



const ChefRecommendation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/chef_recommendation")
      .then(res => {
        setData(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.log(error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [axiosPublic]);

  return (
    <div className="my-20">
      <SectionIntro
        heading={"Should Try"}
        text={"CHEF RECOMMENDS"}
      ></SectionIntro>

      {loading ? ( // Conditional rendering for loading state
        <Loading />
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-6 my-5 md:py-10">
          {data && data?.map(item => (
            <ItemCard key={item._id} item={item}></ItemCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChefRecommendation;
