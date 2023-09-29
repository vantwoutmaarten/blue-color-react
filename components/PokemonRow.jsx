import Link from "next/link";
import { Button } from "@mui/material";

import PropTypes from "prop-types";

import styled from "@emotion/styled";

const PokemonRow = ({ pokemon, onSelect }) => (
  <>
    <tr>
      <td>
        <Link href={`pokemon/${pokemon.id}`}>{pokemon?.name?.english}</Link>
      </td>
      <td>{pokemon?.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSelect(pokemon)}
        >
          More information!
        </Button>
      </td>
    </tr>
  </>
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
