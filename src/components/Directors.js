import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key = {index}>
          <h2>Name: {director.name}</h2>
          <p> Movies: </p>
          <ul> 
            {director.movies.map((movie, index)=> (
              <li key = {index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors;
