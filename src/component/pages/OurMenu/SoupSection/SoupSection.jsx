import { TbSoup } from "react-icons/tb";
import { Link } from 'react-router-dom';
import soupSectionBg from '../../../../assets/others/soupSectionBg.jpg';
import CategoryIntro from '../../../common/CategoryIntro';
import MenuItem from '../../../common/MenuItem';
import useMenu from '../../../Hooks/useMenu';
import Loading from '../../../shared/Loading/Loading';
// Import your Loading component

const SoupSection = () => {
    const [data, isLoading] = useMenu('soup');
    const categoryIntroInfo = {
        backgroundColor:'bg-white',
        opacity:"opacity-70",
        heading:'Soup',
        description:"Immerse yourself in warmth with our soul-soothing soup collection. From hearty classics to exotic creations, each spoonful is a journey through rich flavors and comforting aromas. Discover a symphony of ingredients expertly crafted into delicious bowls, inviting you to savor every sip at CuisineCraft Hub",
        textColor:'bg-white',
        backgroundImg:soupSectionBg,
        icon:<TbSoup />
    }

    return (
      <div>
        <CategoryIntro categoryIntroInfo={categoryIntroInfo}></CategoryIntro>

        {/* Loading State */}
        {isLoading ? (
            <Loading />
        ) : (
            <div className='flex flex-col justify-center items-center'>
              <div>
                <h3 className="text-center font-bold mb-4">
                  Scroll to view full menu
                </h3>
              </div>
              <div className="grid grid-cols-1 py-5 md:py-10 md:grid-cols-2 justify-center items-center gap-10 max-w-7xl m-auto h-[300px] overflow-y-scroll pr-6">
                {Array.isArray(data)
                  ? data.map(item => (
                      <MenuItem key={item._id} itemsList={item}></MenuItem>
                    ))
                  : null}
              </div>
              <div className='mt-6 mb-12'>
                <button className="btn bg-[#CAF4FF] rounded-none text-black">
                  <Link to={`/ourShop/soup`}>See in shop</Link>
                </button>
              </div>
            </div>
        )}
      </div>
    );
};

export default SoupSection;
