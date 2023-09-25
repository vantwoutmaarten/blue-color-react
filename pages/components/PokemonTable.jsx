import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";

import styles from "../../styles/Home.module.css";

import useStore from "../store";

import { ACTION } from "..";

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th className={styles.propertyName}>Name</th>
          <th className={styles.propertyName}>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          ?.filter((pokemon) =>
            pokemon?.name.english.toLowerCase().includes(filter?.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon?.id}
              onSelect={(pokemon) => setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
