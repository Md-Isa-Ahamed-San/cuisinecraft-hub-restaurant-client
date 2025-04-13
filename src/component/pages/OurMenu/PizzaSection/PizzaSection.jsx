import pizzaSectionBg from "../../../../assets/others/pizzaSectionBg.jpeg";
import CategoryIntro from "../../../common/CategoryIntro";
import { CiPizza } from "react-icons/ci";
import MenuItem from "../../../common/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";
// Import your Loading component

const PizzaSection = () => {
  const [data, isLoading] = useMenu("pizza");
  const categoryIntroInfo = {
    backgroundColor: "bg-white",
    opacity: "opacity-70",
    heading: "Pizza",
    description:
      "Savor a symphony of flavors with our artisanal pizzas, crafted with premium ingredients and baked to perfection. From classic Margherita to bold specialty creations, each slice is a culinary masterpiece, promising a delightful journey in every bite. Experience pizza perfection at CuisineCraft Hub",
    textColor: "bg-white",
    backgroundImg: pizzaSectionBg,
    icon: <CiPizza />,
  };

  return (
    <div>
      <CategoryIntro categoryIntroInfo={categoryIntroInfo}></CategoryIntro>
      <div className="flex justify-center items-center">
        {isLoading ? <Loading /> : null} {/* Use your Loading component here */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h3 className="text-center font-bold mb-4">
            Scroll to view full menu
          </h3>
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
            <Link to={`/ourShop/pizza`}>See in shop</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaSection;
