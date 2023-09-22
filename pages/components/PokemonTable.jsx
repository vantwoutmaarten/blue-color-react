import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";

import styles from "../../styles/Home.module.css";

import { ACTION } from "..";
import { useSelector, useDispatch } from "react-redux";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filter = useSelector((state) => state.filter);

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
