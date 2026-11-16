"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";

import { rootReducer, store } from "./";
import { restoreFavorites, type PokemonsState } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

function isPokemonsState(value: unknown): value is PokemonsState {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  return Object.entries(value).every(([key, pokemon]) => {
    if (typeof pokemon !== "object" || pokemon === null) {
      return false;
    }

    const candidate = pokemon as Record<string, unknown>;
    return (
      typeof candidate.id === "string" &&
      candidate.id === key &&
      typeof candidate.name === "string"
    );
  });
}

const serverState = rootReducer(undefined, { type: "@@app/INIT" });

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      if (!savedFavorites) return;

      const parsed: unknown = JSON.parse(savedFavorites);

      if (isPokemonsState(parsed)) {
        store.dispatch(restoreFavorites(parsed));
      } else {
        console.error("El formato de los favoritos guardados no es válido.");
      }
    } catch (error) {
      console.error("No se pudieron cargar los favoritos guardados:", error);
    }
  }, []);

  return (
    <Provider store={store} serverState={serverState}>
      {children}
    </Provider>
  );
};
