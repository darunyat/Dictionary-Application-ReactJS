import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./searchengine";
import "bootstrap/dist/css/bootstrap.min.css";
import "./worddefinition.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <SearchEngine />
      </div>
    </div>
  );
}

export default App;
