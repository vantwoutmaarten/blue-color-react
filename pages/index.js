import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import pokemon from "./pokemon.json";

export default function Home() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className={styles.title}>Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th className={styles.propertyName}>Name</th>
            <th className={styles.propertyName}>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 20).map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(", ")}</td>
            </tr>
          ))}
          <tr>
            <td>Bulbasaur</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
