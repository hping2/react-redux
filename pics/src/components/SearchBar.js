import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onFormSubmit = (event) => {
    // prevent default behavior, e.g, if the user click `enter`, the whole page now will NOT be refreshed.
    event.preventDefault();    

    // props is used to pass data from parent to child component
    this.props.onSubmit(this.state.term);
  }

  // name convention: onObjectAction
  onInputChange = (event) => {
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>

            {/* pass callback function, not function result, thus NOT using () 
            <input type="text" onChange={this.onInputChange} /> */}

            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
