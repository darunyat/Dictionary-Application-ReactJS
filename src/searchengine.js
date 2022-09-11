import React, { useState } from "react";
import "./searchengine.css";
import axios from "axios";

export default function SearchEngine() {
  let [value, setValue] = useState(``);

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateValue(value) {
    setValue(value.target.value);
  }
  return (
    <div className="row">
      <div className="col-md-3 center">
        <form onSubmit={search}>
          <div class="form-group">
            <input
              type="search"
              class="form-control"
              id="inputPassword2"
              placeholder="Password"
              autofocus={true}
              onChange={updateValue}
            />

            <button type="submit" class="btn btn-primary mb-2">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
