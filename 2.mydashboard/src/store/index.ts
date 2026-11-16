import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemons/pokemons";
import { localStorageMiddleware } from "./middlewares/localStorage.middeware";

export const rootReducer = combineReducers({
  count: counterReducer,
  pokemons: pokemonsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
