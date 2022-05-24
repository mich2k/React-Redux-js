import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

/*

    Uno stato è un oggetto JS che contiene i dati rilevanti di un componente

    Questi vanno inizializzati quando creiamo un componente

    Lo stato va aggiornato con setState

*/

/*

	constructor:	facciamo inizializzazione e set-up onetime
	render:	tendenzialmente va solamente ritornato del JSX
	componentDidMount:	qui avviene il data loading
	componentDidUpdate:	caricare ulteriori dati, soprattutto utilizzando la funzione del cambiamento di stato/prop
	componentWillUnmount:	da utilizzare per della pulizia, sopratutto per componenti non legati a React

	ce ne sono altri molto meno frequenti: shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate

*/


class App extends React.Component {
  // questo è il primo metodo eseguito in assoluto, non è obbligatorio però
  constructor(props) {
    super(props);
    /*
			questo è richiesto perchè in questo modo stiamo facendo l override di 
			React.Component, in questo modo ci assicuriamo che venga eseguito come definito dal framework React.
			Se non chiamo super React throwa un errore che ci indica che non l abbiamo chiamata
		*/

    // unico caso legittimo di assegnamento diretto (l inizializzazione):
    this.state = { latitudine: null, longitudine: null, errMessage: "" }; // oggetto State che contiene dati, in questo caso mettiamo il valore default 'null', cioè non ne conosco il valore ancora

    window.navigator.geolocation.getCurrentPosition(
      // PARAMETRO position che ritorna il ritorno del console.log, successivamente deviato per aggiorare la variabile nello stato
      (position) => {
        this.setState({
          latitudine: position.coords.latitude,
          longitudine: position.coords.longitude,
        }); // siccome cambia lo stato verrà richiamato il metodo render
      },

      // NON FARE ASSIGNMENT DIRETTO: this.state.latitudine = position.coords.latitude;
      (err) => {
        // non è necessario cambiare le altre due proprietà siccome se viene triggerato err non ci interessano lat e long
        this.setState({
          errMessage: err.message,
        });
      }
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}

  // qui voglio l handle dei stati CARICAMENTO, RISULTATI PRONTI, ERRORE

  render() {
    // metodo richiesto per ogni componente creato che ritorna jsx, questo è richiesto da react obbligatoriamente
    // il metodo RENDER viene chiamato moltissime volte durante il lifecycle, meglio non metterci molto codice dentro..

    // invece di fare un if statement il loading lo lascio come default-case in fondo
    //
    // if (
    //   !this.state.errMessage &&
    //   !this.state.latitudine &&
    //   !this.state.longitudine
    // ) {
    //   return (
    //     <div>
    // 			LOADING...
    //     </div>
    //   );
    // }

    // WORKING
    if (
      !this.state.errMessage &&
      this.state.latitudine &&
      this.state.longitudine
    ) {
      return (
        <div>
          Latitudine: {this.state.latitudine}
          <br></br>
          Longitudine: {this.state.longitudine}
        </div>
      );
    }

    // ERROR
    if (
      this.state.errMessage &&
      (!this.state.latitudine || !this.state.longitudine)
    ) {
      return <div>Err: {this.state.errMessage}</div>;
    }

    // LOADING
    return <div>LOADING...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

/*

dalla doc officiale:

// Traditional Anonymous Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

*/
