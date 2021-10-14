import { Component } from 'react';
import SearchBar from './components/SearchBar';

class Videos extends Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default Videos;
