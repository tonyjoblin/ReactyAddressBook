import Container from 'react-bootstrap/Container';
import './App.css';
import AddressBook from './AddressBook/AddressBook';
import addresses from './data/MOCK_DATA.json';

function App() {
  return (
    <Container>
      <header className="App-header">
        <h1>header</h1>
      </header>
      <AddressBook data={addresses} />
    </Container>
  );
}

export default App;
