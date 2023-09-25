import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";

import styles from "../../styles/Home.module.css";

import store from "../store";

import { observer } from "mobx-react";

import { ACTION } from "..";

const PokemonTable = () => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th className={styles.propertyName}>Name</th>
          <th className={styles.propertyName}>Type</th>
        </tr>
      </thead>
      <tbody>
        {store.filteredPokemon.slice(0, 20).map((pokemon) => (
          <PokemonRow
            key={store.pokemon.id}
            pokemon={store.pokemon}
            onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
