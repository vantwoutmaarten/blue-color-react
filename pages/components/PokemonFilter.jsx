import React, { useContext } from "react";
import styled from "@emotion/styled";

import styles from "../../styles/Home.module.css";

import { ACTION } from "..";

import store from "../store";

import { observer } from "mobx-react";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  return (
    <Input
      className={styles.search}
      value={store.filter}
      onChange={(event) => store.setFilter(event.target.value)}
    />
  );
};

export default observer(PokemonFilter);
