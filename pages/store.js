import { makeObservable, observable, computed } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedPokemon: observable,
      filteredPokemon: computed,
    });
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }

  get filteredPokemon() {
    this.pokemon?.filter((pokemon) =>
      this.pokemon?.name?.english
        .toLowerCase()
        .includes(this.filter?.toLowerCase())
    );
  }
}

const store = new Store();

const url =
  process.env.NEXT_PUBLIC_URL_POKEMON ||
  "http://localhost:3000/blue-color-react/pokemon.json";

fetch(url)
  .then((resp) => resp.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
