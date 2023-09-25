import React, { useContext } from "react";
import styled from "@emotion/styled";

import styles from "../../styles/Home.module.css";

import { ACTION } from "..";

import useStore from "../store";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const setFilter = useStore((state) => state.setFilter);
  const filter = useStore((state) => state.filter);
  return (
    <Input
      className={styles.search}
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    />
  );
};

export default PokemonFilter;
