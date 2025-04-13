import CategoryIntro from "../../../common/CategoryIntro";
import dessertsSectionBg from "../../../../assets/others/desertsSectionBg.jpg";
import { LuDessert } from "react-icons/lu";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../../common/MenuItem";
import { Link } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";


const DessertsSection = () => {
  const [data, isLoading] = useMenu("dessert");
  const categoryIntroInfo = {
    backgroundColor: "bg-white",
    opacity: "opacity-70",
    heading: "Desserts",
    description:
      "Dive into a world of sweetness with our divine dessert selection. Indulge in artisanal treats that redefine decadence, elevating every moment of indulgence",
    textColor: "bg-white",
    backgroundImg: dessertsSectionBg,
    icon: <LuDessert />,
  };

  return (
    <div className="">
      <CategoryIntro categoryIntroInfo={categoryIntroInfo}></CategoryIntro>
      <div className="flex justify-center items-center">
        {isLoading ? <Loading /> : null} {/* Use your Loading component here */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h3 className="text-center font-bold mb-4">Scroll to view full menu</h3>
        </div>
        <div className="grid grid-cols-1 py-5 md:py-10 md:grid-cols-2 justify-center items-center gap-10 max-w-7xl m-auto h-[300px] overflow-y-scroll pr-6">
          {Array.isArray(data) && !isLoading
            ? data.map(item => (
                <MenuItem key={item._id} itemsList={item}></MenuItem>
              ))
            : null}
        </div>
        <div className="mt-6">
          <button className="btn bg-[#CAF4FF] rounded-none  text-black">
            <Link to={`/ourShop/dessert`}>See in shop</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DessertsSection;
