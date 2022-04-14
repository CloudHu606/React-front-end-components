import './App.css';
import FlashCard from '../src/components/flashCard';
import cardsData from '../src/data/cards.json';

function App() {

  const data = cardsData;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cloud Play Ground</h1>

        <h2>components 1 - Flash Card</h2>
        <FlashCard data={data} />

      </header>
    </div>
  );
}

export default App;
