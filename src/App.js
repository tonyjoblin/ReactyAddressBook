import './App.css';
import AddressBook from './AddressBook/AddressBook';
import { addresses } from './data/addresses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>header</h1>
      </header>
      <AddressBook data={addresses} />
    </div>
  );
}

export default App;
