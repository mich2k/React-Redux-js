import React from "react";
import ReactDOM from "react-dom";
import LoadingSpinner from "./LoadingSpinner";

import SeasonDisplay from "./SeasonDisplay";

// IN QUESTO MAIN JSX INDEX UTILIZZO I LIFECYCLE METHODS INVECE DEGLI IF

// UN COMPONENTE HA BISOGNO DEGLI STATI!
class App extends React.Component {
  // NON NECESSARIO siccome se ne occupa BABEL
  /*
  	constructor(props) {
  	  super(props);

			// con questo formalismo ho solamente l inizializzazione nel costruttore

  	  this.state = { latitudine: null, longitudine: null, errMessage: "" };
  }
	*/

  // tuttavia in React possiamo CONDENSARE tutto ciò in solo la riga di inizializzazione, rimuovendo 'this'
  state = { latitudine: null, longitudine: null, errMessage: "" };

  componentDidMount() {
    // qui metto il data-loading
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitudine: position.coords.latitude,
          longitudine: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({
          errMessage: err.message,
        });
      }
    );
  }

  componentDidUpdate() {}

  // qui voglio l handle dei stati CARICAMENTO, RISULTATI PRONTI, ERRORE
  renderContent() {
    // FUNZIONE RENDER HELPER, così evito degli if logici nel render
    // WORKING
    if (
      !this.state.errMessage &&
      this.state.latitudine &&
      this.state.longitudine
    ) {
      return (
        // prendo uno state da un componente e lo passo come prop (proprietà)
        <SeasonDisplay
          lat_prop={this.state.latitudine}
          long_prop={this.state.longitudine}
        />
      );
    }

    // LOADING
    return <LoadingSpinner message="Pending Geo Allowance.."></LoadingSpinner>;

    // ERROR
    if (
      this.state.errMessage &&
      (!this.state.latitudine || !this.state.longitudine)
    ) {
      return <div>Err: {this.state.errMessage}</div>;
    }
  }

  render() {  // in questo modo posso avere anche un common styling indipendentemente dalla condizione logica
    return <div className="commonStyling">{this.renderContent()};</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
