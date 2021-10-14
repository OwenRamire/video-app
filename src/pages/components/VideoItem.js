import './styles/videoItem.css';

const VideoItem = ({ video }) => {
  const {
    snippet: { title, channelTitle, publishTime, thumbnails } 
  } = video;

  const formatVideoPublishedDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const videoPublished = publishTime.slice(0, 9).split('-');
    const formatedDate = new Date(videoPublished.join('/'));
    return `Published on ${months[formatedDate.getMonth()] + ' ' + formatedDate.getFullYear()}`;
  }


  return (
    <div className="video-item item">
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <h4 className="video-title header">{title}</h4>
        <div className="description">
          <h5 className="text-description">{channelTitle}</h5>
          <h5 className="text-description">{formatVideoPublishedDate()}</h5>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
