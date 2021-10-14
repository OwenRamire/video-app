import { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
    this.handleTermSubmit = this.handleTermSubmit.bind(this);
  }

  async handleTermSubmit(term) {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      }
    });
    this.setState({ videos: data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleFormSubmit={this.handleTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default Videos;
