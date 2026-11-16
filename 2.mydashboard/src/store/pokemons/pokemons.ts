import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SimplePokemon } from "@/pokemons";

export interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;

      if (state[pokemon.id]) {
        delete state[pokemon.id];
      } else {
        state[pokemon.id] = pokemon;
      }
    },

    restoreFavorites: (_state, action: PayloadAction<PokemonsState>) => {
      return action.payload;
    },
  },
});

export const { addPokemon, restoreFavorites } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
