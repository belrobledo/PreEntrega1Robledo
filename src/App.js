import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer>Bienvenidos a Catfecito Shop!</ItemListContainer>
    </div>
  );
}

export default App;
