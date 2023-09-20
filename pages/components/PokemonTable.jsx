import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";

import styles from "../../styles/Home.module.css";
import PokemonContext from "../../contexts/PokemonContext";

const PokemonTable = () => {
  const { pokemon, filter, selectedPokemonSet } = useContext(PokemonContext);
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
            pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={(pokemon) => selectedPokemonSet(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
