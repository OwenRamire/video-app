import { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handletxtChange = this.handletxtChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handletxtChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    // TODO: Make sure we call
    // callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handletxtChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
