import {
  Home,
  TrendingUp,
  Heart,
  Settings,
  Tv2,
  MonitorPlay,
  LogIn,
} from "lucide-react";
import { useState } from "react";
import SideItem from "./sideItem";

const Sidebar = ({ disguisedFunc }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="custom-scrollbar bg-background h-[89.6vh] overflow-y-scroll min-w-min flex flex-col bg-dark p-3">
      {/* Explore Section */}
      <section className="flex flex-col gap-2">
        <h4 className="text-white text-xl font-bold">Explore</h4>
        <div className="flex flex-col gap-1">
          <SideItem
            Icon={Home}
            funcReleasedOnClick={disguisedFunc}
            text="Home"
          />
          <SideItem
            Icon={TrendingUp}
            funcReleasedOnClick={disguisedFunc}
            text="Trending"
          />
          <SideItem
            Icon={MonitorPlay}
            funcReleasedOnClick={disguisedFunc}
            text="Subscribed"
          />
        </div>
        <hr className="border-gray-1000 border rounded-xl opacity-90" />
      </section>
      {/* Subscriber's Section */}
      <section className="flex flex-col gap-6 mt-4">
        {/* <h4 className="text-white text-xl font-bold">Explore</h4> */}
        <div className="flex flex-col gap-1">
          <SideItem Icon={Tv2} text="Watch Later" />
          <SideItem Icon={Heart} text="Liked" />
        </div>
        <hr className="border-gray-1000 border rounded-xl opacity-90" />
      </section>

      {/* Subscribers */}
      <section className="flex flex-col gap-6 mt-4">
        <h4 className="text-white text-xl font-bold">Subscriptions</h4>
        <div className="flex flex-col gap-1">
          {isLogin ? <Subscriptions /> : <SideItem Icon={LogIn} text="Login" />}
        </div>
        <hr className="border-gray-1000 border rounded-xl opacity-90" />
      </section>

      {/* Settings Section */}
      <section className="flex flex-col gap-6 mt-4">
        <h4 className="text-white text-xl font-bold">Settings</h4>
        <div className="flex flex-col gap-1">
          <SideItem Icon={Settings} color="white" text="Settings" />
        </div>
      </section>
    </div>
  );
};

const Subscriptions = () => {
  const [showAll, setShowAll] = useState(false);

  // Sample data for list items
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];

  // Determine the number of items to display based on showAll state
  const displayItemCount = showAll ? items.length : 4;

  // Calculate the height of the section dynamically
  const sectionHeight = showAll ? "auto" : `${60 + displayItemCount * 40}px`;

  return (
    <>
      <section
        className="fancy-scroll flex items-center gap-3 p-4 border border-gray-1000 bg-gray-1000 rounded-lg"
        style={{ height: sectionHeight }}
      >
        <ul className="flex flex-col gap-3 items-center justify-center w-full">
          {items.slice(0, displayItemCount).map((item, index) => (
            <li key={index} className="flex items-center gap-10">
              <img
                src="https://picsum.photos/200"
                alt="profile"
                className="rounded-full w-8 h-8"
              />
              <p className="text-white">{item}</p>
            </li>
          ))}
          {items.length > 4 && (
            <hr className="border-b border-gray-500 rounded-xl opacity-90 w-full" />
          )}
          {items.length > 4 && (
            <li
              className="flex items-center gap-10 cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              <p className="text-white">
                {showAll ? "Show Less" : "Show More"}
              </p>
            </li>
          )}
        </ul>
      </section>
    </>
  );
};

export { Sidebar };
