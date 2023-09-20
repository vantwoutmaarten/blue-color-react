import React from "react";
import Head from "next/head";
import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import PropTypes from "prop-types";

import styles from "../styles/Home.module.css";

import styled from "@emotion/styled";

import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1rem;
`;

export default function Home() {
  const [filter, filterSet] = React.useState("");
  const [selectedPokemon, selectedPokemonSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);

  const url =
    process.env.NEXT_PUBLIC_URL_POKEMON ||
    "http://localhost:3000/blue-color-react/pokemon.json";

  React.useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        pokemonSet(data);
      });
  }, [url]);

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter filter={filter} filterSet={filterSet} />
          <PokemonTable
            filter={filter}
            pokemon={pokemon}
            selectedPokemonSet={selectedPokemonSet}
          />
        </div>
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </TwoColumnLayout>
    </Container>
  );
}
