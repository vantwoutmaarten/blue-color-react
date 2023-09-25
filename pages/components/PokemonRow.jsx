import { Button } from "@mui/material";

import PropTypes from "prop-types";

import styled from "@emotion/styled";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon?.name?.english}</td>
    <td>{pokemon?.type.join(", ")}</td>
    <Button
      variant="contained"
      color="primary"
      onClick={() => onSelect(pokemon)}
    >
      More information!
    </Button>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func,
  }),
};

export default PokemonRow;
