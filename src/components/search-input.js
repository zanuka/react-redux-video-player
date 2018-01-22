import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'search...' };
  }

  render() {
    return (
    <div>
      <input 
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
    </div>
    );
  }
}

export default SearchInput;
