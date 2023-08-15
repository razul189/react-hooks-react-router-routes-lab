import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,index)=> (
        <div key ={index}>
          <h2> Name: {actor.name} </h2>
          <p> Movies: </p>
          <ul>
            {actor.movies.map((title, index)=> (
              <li key = {index}> {title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Actors;
