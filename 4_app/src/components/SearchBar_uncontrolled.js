import React from "react";

class SearchBar extends React.Component {
  onInputChange(e) {    // often shortened like exception - e in java; here is event - e
    console.log(e.target.value)
    console.log(e.type)
    }
    
    // onInputClick(){      HAS BEEN CONDENSED IN THE () => FORMAT
    //     console.log("User clicked!");
    // }


  render() {
    return (
      <div>
        <div className="form-group row">
          <div className="col-xs-2">    
            {/* col. sizing */}
            <label htmlFor=""></label>  
                        {/* we must not add curvy brackets {} or this method will be called everytime the jsx is rendered,*/}
                        {/*in this way the function can just be called at some point in time, since this is an event handler. */}
                        {/* onChange: user changes input, onClick: user clicks, onSubmit: user submits a form */}
                        {/* these events dont apply on EVERY html element, for instance the onChange or onSubmit cant apply on a div element */}
                        {/* (parameter) => code */}
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Inserirsci la query"

              onChange={this.onInputChange} 
              onClick={() => console.log("User clllicked!")}
            />          
            <small id="helpId" className="form-text text-muted"></small>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
