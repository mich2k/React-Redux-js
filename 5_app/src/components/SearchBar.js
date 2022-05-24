import React from "react";

// CONTROLLED COMPONENT
/*

  La differenza è che i dati non vengono immagazzinati dentro l HTML, stando su un 
  framework dinamico vogliamo che tutto si muova nell ecosistema React.
  In questo modo, operando con gli state, React CONOSCE il valore del text e non
  deve interrogare il DOM per recuperare lo stato dall HTML.


  Questa linea tendenzialmente va a fare un override in modo tale che 
    siamo sicuri che react si sta occupando di quel valore  
        value={this.state.term}

  Qui, ogni volta che viene rilevato l evento onChange, il valore dello stato viene settato all
    ultimo valore rilevato. In questo modo, muovendoci nel dinamico, se vogliamo, per esempio
    permettere un input solo upper case possiamo semplicemente aggiungere/scrivere:
            onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })}

            ciò è possibile perchè siamo nel framework dinamico

    
        onChange={(e) => this.setState({ term: e.target.value })}



*/
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {  // this means onFormSubmit : function(event), we use an arrow function then. 
    event.preventDefault(); // preventing automatic submit to "backend" and page refreshing
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form  onSubmit={this.onFormSubmit} className="form-group row"> {/* we can also put here the arrow function */}
          <div className="col-xs-2">
            <label htmlFor=""></label>

            <input
              type="text"
              className="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Inserirsci la query"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
            <small id="helpId" className="form-text text-muted"></small>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
