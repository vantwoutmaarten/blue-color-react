import PropTypes from "prop-types";
import { useContext } from "react";

import useStore from "../store";

const PokemonInfo = () => {
  const selectedPokemon = useStore((state) => state.selectedPokemon);

  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon?.name.english}</h1>
      <table>
        {Object.keys(selectedPokemon?.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedPokemon?.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
