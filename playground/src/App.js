import './App.css';
import FlashCard from '../src/components/flashCard';
import cardsData from '../src/data/cards.json';

function App() {

  const data = cardsData;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cloud Play Ground</h1>
      </header>
      <div className="container">
        <h2>components 1 - Flash Card</h2>
        <FlashCard cards={data} />

        <h2>components 2 - TBD</h2>
      </div>
    </div>
  );
}

export default App;
