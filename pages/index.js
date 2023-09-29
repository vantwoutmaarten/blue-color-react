import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import PropTypes from "prop-types";

import styles from "../styles/Home.module.css";

import styled from "@emotion/styled";

import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";

import store from "../src/store";

import { observer } from "mobx-react";

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

function Home() {
  return (
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
  );
}

export default observer(Home);
