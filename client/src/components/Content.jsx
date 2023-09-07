import Cards from "./Cards/Video"; // Import your Cards component
import { getVideos, getTrendingVideos } from "../Service/videosApi";
import { useEffect, useState } from "react";
import Loading from "./Loading";

import { useSelector } from "react-redux";

const Content = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const type = useSelector((state) => state.sideBar.selected);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        var response = null;
        switch (type) {
          case "home":
            response = await getVideos();
            break;
          case "trending":
            response = await getTrendingVideos();
            break;
          default:
            response = await getVideos();
        }

        setVideos(response.data);
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <>
      {loading ? (
        <div className=" h-[89.6vh] w-full flex justify-center items-center mt-4 ml-[15rem]">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-3 mt-[4.15rem] ml-[15rem]">
          {videos.map((video, index) => (
            <div key={index}>
              <Cards video={video} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Content;
