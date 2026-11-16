import { isAction, type Middleware } from "@reduxjs/toolkit";
import type { RootState } from "..";

// This middleware does not extend dispatch.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    if (
      isAction(action) &&
      action.type.startsWith("pokemons/") &&
      typeof window !== "undefined"
    ) {
      const { pokemons } = store.getState();
      localStorage.setItem("favorites", JSON.stringify(pokemons));
    }

    return result;
  };
