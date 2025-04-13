import { useEffect, useState } from "react";
import SectionIntro from "../../../common/SectionIntro";
import ReviewCard from "../../../common/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../shared/Loading/Loading";


const ReviewSection = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    axiosPublic
      .get("/review")
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
    <div className="max-w-7xl m-auto my-20">
      <SectionIntro
        heading={"What Our Client Say"}
        text={"TESTIMONIALS"}
      ></SectionIntro>

      {loading ? ( // Conditional rendering for loading state
        <Loading />
      ) : (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop="true">
          {data && data?.map(item => (
            <SwiperSlide key={item._id}>
              <ReviewCard item={item}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ReviewSection;
