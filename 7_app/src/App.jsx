
import Accordion from './components/Accordion'
import Search from './components/Search';


const arr = [
  {
    titolo: 'Cos è React?',
    contenuto: 'E io che ne so'
  }, 
  {
    titolo: 'Perchè usarlo?',
    contenuto: 'La gente vuole soldi'
  },
  {
    titolo: 'Come lo usi?',
    contenuto: 'E che ne so io'
  }
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>
      <div className="App-body">
        {/*          <Accordion arr={arr}></Accordion>  */}
        <Search></Search>
      </div>
    </div>
  );
}

export default App;
