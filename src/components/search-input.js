import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchInput;
