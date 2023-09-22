import React, { useReducer } from "react";
import Head from "next/head";
import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import PropTypes from "prop-types";

import styles from "../styles/Home.module.css";

import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import PokemonContext from "../contexts/PokemonContext";

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

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.set_filter:
      return {
        ...state,
        filter: action.payload,
      };
    case ACTION.set_pokemon:
      return {
        ...state,
        pokemon: action.payload,
      };
    case ACTION.set_selected_pokemon:
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

export const ACTION = {
  set_filter: "SET_FILTER",
  set_pokemon: "SET_POKEMON",
  set_selected_pokemon: "SET_SELECTED_POKEMON",
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
  });

  const url =
    process.env.NEXT_PUBLIC_URL_POKEMON ||
    "http://localhost:3000/blue-color-react/pokemon.json";

  React.useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        });
      });
  }, [url]);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          {<PokemonInfo />}
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}
