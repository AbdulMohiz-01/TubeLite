import Cards from "./Cards/Video"; // Import your Cards component
import { getVideos, getTrendingVideos } from "../Service/videosApi";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Content = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
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
        <div className=" h-[89.6vh] w-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="custom-scrollbar h-[89.6vh] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-3">
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
