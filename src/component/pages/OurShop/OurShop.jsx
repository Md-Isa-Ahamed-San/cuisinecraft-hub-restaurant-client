import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import banner2 from "../../../assets/shop/banner2.jpg";
import useMenu from "../../Hooks/useMenu";
import Cover from "../../common/Cover";
import ItemCard from "../../common/ItemCard";
import "./OurShop.css";
import Loading from "../../shared/Loading/Loading";

const OurShop = () => {
  const arr = ["salad", "pizza", "soup", "dessert"];
  const { categoryName } = useParams();
  console.log("category name: " + categoryName);
  const [tabIndex, setTabIndex] = useState(arr.indexOf(categoryName));
  const [data, isLoading] = useMenu(""); // Extract loading state from useMenu
  const dessert = data && data.filter((item) => item.category === "dessert");
  const salad = data && data.filter((item) => item.category === "salad");
  const pizza = data && data.filter((item) => item.category === "pizza");
  const soup = data && data.filter((item) => item.category === "soup");
  const coverDetails = {
    image: banner2,
    heading: "SHOP",
    text: "WOULD YOU LIKE TO TRY A DISH?",
  };

  return (
    <div>
      <Helmet>
        <title>CuisineCraft-Hub | Shop</title>
      </Helmet>
      <Cover coverDetails={coverDetails}></Cover>

      {isLoading ? ( // Conditional rendering for the loading state
        <div className="flex justify-center items-center py-20">
          <Loading />
        </div>
      ) : (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            className={`flex justify-center gap-6 border-b-orange-300 border-2 my-8 border-t-0 px-2`}
          >
            <Tab
              className={`w-36 py-2 text-xl lg:text-2xl font-raleway border-orange-300 border-2 border-b-0 hover:cursor-pointer ${
                tabIndex === 0 ? "active-tab" : ""
              }`}
            >
              <p className="text-center">SALAD</p>
            </Tab>
            <Tab
              className={`w-36 py-2 text-xl lg:text-2xl font-raleway border-orange-300 border-2 border-b-0 text-center hover:cursor-pointer ${
                tabIndex === 1 ? "active-tab" : ""
              }`}
            >
              <p>PIZZA</p>
            </Tab>
            <Tab
              className={`w-36 py-2 text-xl lg:text-2xl font-raleway border-orange-300 border-2 border-b-0 text-center hover:cursor-pointer ${
                tabIndex === 2 ? "active-tab" : ""
              }`}
            >
              <p>SOUP</p>
            </Tab>
            <Tab
              className={`w-36 py-2 text-xl lg:text-2xl font-raleway border-orange-300 border-2 border-b-0 text-center hover:cursor-pointer ${
                tabIndex === 3 ? "active-tab" : ""
              }`}
            >
              <p>DESSERTS</p>
            </Tab>
          </TabList>

          <TabPanel className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center items-center py-20">
              {Array.isArray(data)
                ? salad.map((item) => (
                    <ItemCard key={item._id} item={item}></ItemCard>
                  ))
                : null}
            </div>
          </TabPanel>
          <TabPanel className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center items-center py-20">
              {Array.isArray(data)
                ? pizza.map((item) => (
                    <ItemCard key={item._id} item={item}></ItemCard>
                  ))
                : null}
            </div>
          </TabPanel>
          <TabPanel className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center items-center py-20">
              {Array.isArray(data)
                ? soup.map((item) => (
                    <ItemCard key={item._id} item={item}></ItemCard>
                  ))
                : null}
            </div>
          </TabPanel>
          <TabPanel className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center items-center py-20">
              {Array.isArray(data)
                ? dessert.map((item) => (
                    <ItemCard key={item._id} item={item}></ItemCard>
                  ))
                : null}
            </div>
          </TabPanel>
        </Tabs>
      )}
    </div>
  );
};

export default OurShop;
