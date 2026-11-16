"use client";

import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";

export function FavoritesGrid() {
  const favorites = useAppSelector((state) => state.pokemons);
  const pokemonsFavorites = Object.values(favorites);

  return pokemonsFavorites.length === 0 ? (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">No tienes Pokémones favoritos</h2>
      <p className="text-gray-500">
        Agrega Pokémones a tu lista de favoritos para verlos aquí.
      </p>
    </div>
  ) : (
    <PokemonGrid pokemons={pokemonsFavorites} />
  );
}
