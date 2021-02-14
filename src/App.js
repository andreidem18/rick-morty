import './App.css';
import SearchBox from "./Components/Search/SearchBox.js.js";

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
