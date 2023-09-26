import PropTypes from "prop-types";

import store from "../src/store";

import { observer } from "mobx-react";

const PokemonInfo = () => {
  return store.selectedPokemon ? (
    <div>
      <h1>{store.selectedPokemon?.name.english}</h1>
      <table>
        {Object.keys(store.selectedPokemon?.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{store.selectedPokemon?.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

export default observer(PokemonInfo);
