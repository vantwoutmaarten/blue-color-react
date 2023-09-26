import PokemonRow from "./PokemonRow";

import styles from "../styles/Home.module.css";

import store from "../src/store";

import { observer } from "mobx-react";

const PokemonTable = () => {
  return (
    <table width="100%">
      <tbody>
        {store.filteredPokemon?.slice(0, 20).map((pokemon) => (
          <PokemonRow
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
