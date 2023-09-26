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

import store from "../../src/store";

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1rem;
`;

const Id = ({ router }) => {
  const pokemon = store.pokemon.find(
    ({ id }) => id.toString() === router.query.id
  );

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
