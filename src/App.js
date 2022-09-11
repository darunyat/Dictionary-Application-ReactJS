import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./searchengine";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row">
          <div className="col-9">
            <SearchEngine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
