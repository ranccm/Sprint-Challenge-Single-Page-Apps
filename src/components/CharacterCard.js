import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  
  return(
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt="rick+morty character" />
      <p>{props.species}</p>
      <p>{props.locations}</p>
    </div>
  )
}
