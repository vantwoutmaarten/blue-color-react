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

export async function getServerSideProps(context) {
  const res = await fetch(
    "http://localhost:3000/blue-color-react/pokemon.json"
  );
  const allPokemon = await res.json();

  const pokemon = allPokemon.find(
    ({ id }) => id.toString() === context.query.id
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
