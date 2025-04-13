import SectionIntro from "../../../common/SectionIntro";
import MenuItem from "../../../common/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import Loading from "../../../shared/Loading/Loading";

const PopularMenu = () => {
  const [data, isLoading] = useMenu("popular"); // Extract data and loading state from useMenu

  return (
    <div className="py-5 md:py-10 max-w-7xl m-auto">
      <SectionIntro
        heading={"Popular Items"}
        text={"FROM OUR MENU"}
      ></SectionIntro>

      {isLoading ? ( // Conditional rendering for loading state
        <div className="flex justify-center items-center py-10">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 py-5 md:py-10 md:grid-cols-2 justify-center items-center gap-10 ">
          {data?.map((item, index) => (
            <MenuItem key={index} itemsList={item}></MenuItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularMenu;
