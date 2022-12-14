import React, { useState } from "react";
import "./searchengine.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Images from "./images";
import "./App.css";
import WordDefinition from "./worddefinition";
export default function SearchEngine() {
  let [value, setValue] = useState(``);
  let [searchedWord, setSearchedWord] = useState(``);
  let [images, setImages] = useState(``);

  function handleResponse(response) {
    setSearchedWord(response.data[0]);
  }
  function handlePexelsResponses(response) {
    setImages(response.data.photos);
  }
  function search(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsAPIKey = `563492ad6f91700001000001a292fde0eca34991abda79a0eb486d98`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${value}&per_page=12`;
    axios
      .get(pexelsApiUrl, { headers: { Authorization: `${pexelsAPIKey}` } })
      .then(handlePexelsResponses);
  }
  function updateValue(value) {
    setValue(value.target.value);
  }
  return (
    <div className="row">
      <form onSubmit={search}>
        <div className="row">
          <div className="col">
            <input
              align="center"
              type="search"
              className="form-control"
              placeholder="Type in a word..."
              autoFocus={true}
              onChange={updateValue}
            />
          </div>
        </div>
      </form>
      <WordDefinition data={searchedWord} />
      <Images images={images} />
      <div className="github text-center">
        This code is
        <a
          href="https://github.com/darunyat/react-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          opensourced{" "}
        </a>
        🐈
      </div>
    </div>
  );
}
