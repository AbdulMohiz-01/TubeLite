import Cards from "./Cards"; // Import your Cards component
import { getVideos } from "../Service/videosApi";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Content = () => {
  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getVideos();
        setVideos(response.data);
        console.log(response.data);
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchVideos();
  }, []);

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
