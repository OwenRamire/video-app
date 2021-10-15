import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {
  const showVideos = (videos) => {
    return videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={handleVideoSelect}
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
