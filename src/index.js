import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchInput from './components/search-input';
const API_KEY = 'AIzaSyBCcRmuoJeaqSFzxoUujWMEv6V1Swp2qmU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key:API_KEY, term: 'biking'}, (videos) => {
      this.setState({ videos });
    });
  }

  render () {
    return (
      <div>
        <SearchInput />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
