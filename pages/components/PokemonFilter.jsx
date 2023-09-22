import React, { useContext } from "react";
import styled from "@emotion/styled";

import styles from "../../styles/Home.module.css";

import { ACTION } from "..";

import { useSelector, useDispatch } from "react-redux";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
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
