import React from 'react';
import ReactDOM from 'react-dom';

import SearchInput from './components/search-input';

const API_KEY = 'AIzaSyBCcRmuoJeaqSFzxoUujWMEv6V1Swp2qmU';

const App = () => {
  return (
    <div>
      <SearchInput />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
