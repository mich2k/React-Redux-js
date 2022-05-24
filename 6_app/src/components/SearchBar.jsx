import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

onChangeCallback = (e) =>{
    this.setState({term: e.target.value});

};

onFormSubmit = e =>{
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
};

  render() {
    return (
      <div className="search-bar ui segment">
        <form  onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor=""> Inserisci la query: </label>
            <input
              type="text"
              name=""
              placeholder="Digit"
              id=""
              value={this.state.term}
              onChange={this.onChangeCallback}
            />
          </div>
        </form>
      </div>
    );
  };
}

export default SearchBar;
