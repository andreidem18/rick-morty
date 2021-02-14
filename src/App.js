import './App.css';
import SearchBox from "./components/Search/SearchBox.js";

document.body.style = "background: #272121";

function App() {
  return (
    <div className="container">
      <h1>Rick and Morty Wiki</h1>
      <SearchBox />
    </div>
  );
}

export default App;
