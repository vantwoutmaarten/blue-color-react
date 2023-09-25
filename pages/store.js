import { create } from "zustand";

const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({ ...state, selectedPokemon })),
}));

const url =
  process.env.NEXT_PUBLIC_URL_POKEMON ||
  "http://localhost:3000/blue-color-react/pokemon.json";

fetch(url)
  .then((resp) => resp.json())
  .then((pokemon) => useStore.setState((state) => ({ ...state, pokemon })));

export default useStore;
