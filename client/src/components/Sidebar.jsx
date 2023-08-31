import { Home, TrendingUp, Heart, Settings } from "lucide-react";
import SideItem from "./sideItem";

const Sidebar = () => {
  return (
    <div className="bg-background min-h-min min-w-min flex flex-col bg-dark p-3 rounded-xl border">
      <section className="flex flex-col gap-6">
        <h4 className="text-white text-xl font-bold">Explore</h4>
        <div className="flex flex-col gap-1">
          <SideItem Icon={Home} text="Home" />
          <SideItem Icon={TrendingUp} text="Trending" />
          <SideItem Icon={Heart} text="Liked" />
        </div>
      </section>
      <div className="mb-8">
        <Settings className="text-white my-4 cursor-pointer" />
      </div>
    </div>
  );
};

export { Sidebar };
