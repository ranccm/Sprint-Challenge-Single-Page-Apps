import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  
  const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 10%;
  background: slate;
  box-shadow: 0 0 40px;`;


  return(
    <Card>
      <h2>{props.name}</h2>
      <img src={props.image} alt="rick+morty character" />
      <p>{props.species}</p>
      <p>{props.locations}</p>
    </Card>
  )
}
