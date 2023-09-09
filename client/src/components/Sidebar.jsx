import {
  Home,
  TrendingUp,
  Heart,
  Settings,
  Tv2,
  MonitorPlay,
} from "lucide-react";
import { useState } from "react";
import SideItem from "./sideItem";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { findBatchUsers } from "../Service/usersApi";
import PropTypes from "prop-types";

const Sidebar = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="custom-scrollbar bg-background h-[89.6vh] overflow-y-scroll min-w-min flex flex-col bg-dark p-3 fixed left-1 mt-20 -pr-3">
      {/* Explore Section */}
      <section className="flex flex-col gap-2">
        <h4 className="sidebar-section-title">Explore</h4>
        <div className="sidebar-section-items-wrapper">
          <SideItem Icon={Home} text="Home" />
          <SideItem Icon={TrendingUp} text="Trending" />
          <SideItem Icon={MonitorPlay} text="Subscribed" />
        </div>
        <hr className="sidebar-seperator" />
      </section>
      {/* Subscriber's Section */}
      <section className="sidebar-wrapper">
        {/* <h4 className="sidebar-section-title">Explore</h4> */}
        <div className="sidebar-section-items-wrapper">
          <SideItem Icon={Tv2} text="Watch Later" />
          <SideItem Icon={Heart} text="Liked" />
        </div>
        <hr className="sidebar-seperator" />
      </section>

      {/* Subscribers */}
      <section className="sidebar-wrapper">
        <h4 className="sidebar-section-title">Subscriptions</h4>
        <div className="sidebar-section-items-wrapper">
          {user ? (
            <Subscriptions user={user} />
          ) : (
            <p className="text-gray-600 w-40">
              Sign in to see your subscriptions
            </p>
          )}
        </div>
        <hr className="sidebar-seperator" />
      </section>

      {/* Settings Section */}
      <section className="sidebar-wrapper">
        <h4 className="sidebar-section-title">Settings</h4>
        <div className="sidebar-section-items-wrapper">
          <SideItem Icon={Settings} color="white" text="Settings" />
        </div>
      </section>
    </div>
  );
};

const Subscriptions = ({ user }) => {
  const [showAll, setShowAll] = useState(false);
  const results = useQuery(
    ["videos", user._id, user.subscribedUsers],
    findBatchUsers,
  );

  // Sample data for list items
  const items = results.data ?? [];

  if (items.length === 0)
    return <p className="text-gray-600 w-40">No Subscriptions</p>;

  // Determine the number of items to display based on showAll state
  const displayItemCount = showAll ? items.length : 4;

  // Calculate the height of the section dynamically
  const sectionHeight = showAll ? "auto" : `${displayItemCount * 25}px`;

  return (
    <>
      <section
        className="fancy-scroll flex items-center gap-3 p-4 border border-gray-1000 bg-gray-1000 rounded-lg"
        style={{ height: sectionHeight }}
      >
        <ul className="flex flex-col gap-3 w-full">
          {items.slice(0, displayItemCount).map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <img
                src={item.img}
                alt="profile"
                className="rounded-full w-8 h-8"
              />
              <p className="text-white line-clamp-1">{item.name}</p>
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

// add prop types
Sidebar.propTypes = {
  img: PropTypes.string,
};

Subscriptions.propTypes = {
  user: PropTypes.object,
};

export { Sidebar };
