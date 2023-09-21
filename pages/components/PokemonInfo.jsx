import PropTypes from "prop-types";
import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext";

const PokemonInfo = () => {
  const {
    state: { selectedPokemon },
  } = useContext(PokemonContext);
  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon.name.english}</h1>
      <table>
        {Object.keys(selectedPokemon.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedPokemon.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

// PokemonInfo.propTypes = {
//   name: PropTypes.shape({
//     english: PropTypes.string,
//   }),
//   base: PropTypes.shape({
//     HP: PropTypes.number.isRequired,
//     Attack: PropTypes.number.isRequired,
//     Defense: PropTypes.number.isRequired,
//     "Sp. Attack": PropTypes.number.isRequired,
//     "Sp. Defense": PropTypes.number.isRequired,
//     Speed: PropTypes.number.isRequired,
//   }),
// };

export default PokemonInfo;
