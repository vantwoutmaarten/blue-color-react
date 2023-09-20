import React, { useContext } from "react";
import styled from "@emotion/styled";

import styles from "../../styles/Home.module.css";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const { filter, filterSet } = useContext(PokemonContext);
  return (
    <Input
      className={styles.search}
      value={filter}
      onChange={(event) => filterSet(event.target.value)}
    />
  );
};

export default PokemonFilter;
