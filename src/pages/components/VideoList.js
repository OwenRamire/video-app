import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const showVideos = (videos) => {
    return videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}  
        />
      );
    });
  };

  return (
    <div className="ui relaxed divided list">
      {showVideos(videos)}
    </div>
  );
};

export default VideoList;
