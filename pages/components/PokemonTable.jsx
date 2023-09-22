import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";

import styles from "../../styles/Home.module.css";
import PokemonContext from "../../contexts/PokemonContext";

import { ACTION } from "..";

const PokemonTable = () => {
  const { state: { pokemon = {}, filter = "" } = {}, dispatch } =
    useContext(PokemonContext);
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
              onSelect={(pokemon) =>
                dispatch({
                  type: ACTION.set_selected_pokemon,
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
