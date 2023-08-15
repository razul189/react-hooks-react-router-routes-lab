import React from "react";
import { NavLink } from "react-router-dom";

// function NavBar() {
//   return (
//     <div>
//       <NavLink to = "/"
//       exact 
//       >
//         Home
//       </NavLink>
//       <NavLink to = "/movies"
//       exact 
//       >
//         Movies
//       </NavLink>
//       <NavLink to = "/directors"
//       exact 
//       >
//         Directors
//       </NavLink>
//       <NavLink to = "/actors"
//       exact 
//       >
//         Actors
//       </NavLink>
//     </div>
//   )
// }

function NavBar () {
  return (
    <div className = "navbar">
      <NavLink to = "/"> Home </NavLink>
      <NavLink to = "/movies"> Movies </NavLink>
      <NavLink to = "/directors"> Directors </NavLink>
      <NavLink to = "/actors"> Actors </NavLink>
    </div>
  )
}


export default NavBar;
