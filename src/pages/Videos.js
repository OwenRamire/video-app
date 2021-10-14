import { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.handleTermSubmit = this.handleTermSubmit.bind(this);
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  async handleTermSubmit(term) {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      }
    });
    this.setState({ videos: data.items, selectedVideo: null });
  }

  handleVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleFormSubmit={this.handleTermSubmit} />
        <div className="ui grid">
          <div className={`${this.state.selectedVideo ? 'ui row' : ''}`}>
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                handleVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
