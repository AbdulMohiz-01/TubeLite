const RecommendVideo = () => {
  return (
    <div className="flex gap-3">
      <div className="w-2/3 h-28 bg-gray-1000 rounded-lg">
        {/* Recommended video thumbnail */}
        <img
          src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-lg h-28 w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-s font-semibold w-52 line-clamp-2">
          Recommended Video Title 1 Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci aspernatur enim nobis, necessitatibus amet
          quisquam, autem odio illo similique expedita, minima modi unde
          asperiores atque facilis fugit assumenda? Ipsam dolore architecto ab
          ducimus natus, repellat temporibus, autem fugiat exercitationem nemo
          iure cum voluptatem tempore incidunt eligendi sint veritatis commodi
          a.
        </h3>
        <span className="text-gray-400 text-xs">Channel Name</span>
        <span className="text-gray-400 text-xs">1.2M views</span>
      </div>
    </div>
  );
};

export default RecommendVideo;
