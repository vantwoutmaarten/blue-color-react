import {
  CssBaseline,
  TableCell,
  TableHead,
  Table,
  TableRow,
  TableBody,
} from "@mui/material";
import styled from "@emotion/styled";

import { withRouter } from "next/router";

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1rem;
`;
export async function getStaticPaths() {
  const allPokemon = require("../../src/pokemon.json");

  return {
    paths: allPokemon.map((pokemon) => ({
      params: { id: pokemon.id.toString() },
    })),
    fallback: false, // false or "blocking"
  };
}

export async function getStaticProps(context) {
  const allPokemon = require("../../src/pokemon.json");

  const pokemon = allPokemon.find(
    ({ id }) => id.toString() === context.params.id
  );

  return { props: { pokemon } };
}

const Id = ({ pokemon }) => {
  return (
    <Container>
      <CssBaseline />
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((key) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{pokemon.base[key]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default withRouter(Id);
