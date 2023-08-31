import PropTypes from "prop-types";

const Cards = ({
  thumbnailUrl,
  duration,
  title,
  channel,
  views,
  uploadDate,
}) => {
  return (
    <div className="bg-gray-1000 rounded-lg shadow-md overflow-hidden hover:shadow-lg">
      {/* Video Thumbnail */}
      <div className="relative">
        <img src={thumbnailUrl} alt="Video Thumbnail" className="w-full" />
        <span className="absolute top-2 right-2 px-2 py-1 bg-black text-white text-sm rounded">
          {duration}
        </span>
      </div>

      {/* Video Information */}
      <div className="p-4">
        <h3 className="text-white text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          {channel} • {views} views • {uploadDate}
        </p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  uploadDate: PropTypes.string.isRequired,
};

export default Cards;
