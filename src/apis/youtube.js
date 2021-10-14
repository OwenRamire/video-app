import axios from 'axios';

const KEY = 'AIzaSyDfiGfnT6O_6EFnZh0WXTmfFuufodcM31A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
