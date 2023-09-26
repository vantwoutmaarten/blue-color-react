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
    return this.pokemon?.filter((pokemon) =>
      pokemon?.name?.english.toLowerCase().includes(this.filter?.toLowerCase())
    );
  }
}

const store = new Store();

// if (typeof window !== "undefined") {
//   fetch("/blue-color-react/pokemon.json")
//     .then((resp) => resp.json())
//     .then((pokemon) => store.setPokemon(pokemon));
// }

export default store;
