import React, { useContext } from "react";
import styled from "@emotion/styled";

import styles from "../../styles/Home.module.css";
import PokemonContext from "../../contexts/PokemonContext";

import { ACTION } from "..";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const { state: { filter = "" } = {}, dispatch } = useContext(PokemonContext);
  return (
    <Input
      className={styles.search}
      value={filter}
      onChange={(event) =>
        dispatch({
          type: ACTION.set_filter,
          payload: event.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
