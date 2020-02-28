import React from "react";
import { Route, NavLink } from "react-router-dom";

import WelcomePage from "./components/WelcomePage"
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characterlist">Characters</NavLink>


      <Route exact path ="/">
        <WelcomePage />
      </Route>

      <Route path="/characterlist">
        <CharacterList />
      </Route>
    </main>
  );
}
