import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  `

const [characters, setCharacters] = useState([])



 // TODO: Add API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log("res", response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('ughhhhhhh, go fix it', error);
      })
  }, []);

  const handleSearch = arr => {
    setCharacters(arr)
  }

  return (
    <section className="character-list">
      <SearchForm handleSearch={handleSearch} characters={characters} />
      <Container>
      {characters.map(character => (
        <CharacterCard
        key={character.id}
        name={character.name}
        species={character.species}
        image={character.image}
        />
      ))}
      </Container>
    </section>
  );
}
