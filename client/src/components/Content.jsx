import React from "react";
import Cards from "./Cards"; // Import your Cards component

const cardData = [
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "05:12",
    title: "Title 1",
    channel: "Channel Name 1",
    views: "1.2M",
    uploadDate: "3 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "03:45",
    title: "Title 2",
    channel: "Channel Name 2",
    views: "800K",
    uploadDate: "1 week ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "08:22",
    title: "Title 3",
    channel: "Channel Name 3",
    views: "2.5M",
    uploadDate: "2 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "06:05",
    title: "Title 4",
    channel: "Channel Name 4",
    views: "500K",
    uploadDate: "2 weeks ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "10:30",
    title: "Title 5",
    channel: "Channel Name 5",
    views: "3.8M",
    uploadDate: "1 day ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "04:58",
    title: "Title 6",
    channel: "Channel Name 6",
    views: "1M",
    uploadDate: "5 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "09:15",
    title: "Title 7",
    channel: "Channel Name 7",
    views: "1.7M",
    uploadDate: "4 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "07:20",
    title: "Title 8",
    channel: "Channel Name 8",
    views: "2.3M",
    uploadDate: "6 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "03:58",
    title: "Title 9",
    channel: "Channel Name 9",
    views: "900K",
    uploadDate: "2 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/360x200",
    duration: "12:05",
    title: "Title 10",
    channel: "Channel Name 10",
    views: "4.6M",
    uploadDate: "1 day ago",
  },
];

const Content = () => {
  return (
    <div className="custom-scrollbar h-[89.6vh] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-3">
      {/* Render each card */}
      {cardData.map((card, index) => (
        <div key={index}>
          <Cards
            thumbnailUrl={card.thumbnailUrl}
            duration={card.duration}
            title={card.title}
            channel={card.channel}
            views={card.views}
            uploadDate={card.uploadDate}
          />
        </div>
      ))}
    </div>
  );
};
export default Content;
