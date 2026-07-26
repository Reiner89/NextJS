"use client";

import { useAppSelector, useAppDispatch } from "@/store";
import {
  addOne,
  initCounterState,
  subtractOne,
} from "@/store/counter/counterSlice";
import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.count.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end gap-2">
        <span className="text-7xl font-semibold tracking-tight text-white">
          {count}
        </span>

        <span className="mb-3 text-sm text-neutral-500">items</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(subtractOne())}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-2xl border border-neutral-800
            bg-neutral-900 text-neutral-300
            transition-all duration-200
            hover:bg-neutral-800 hover:text-white
            active:scale-95 cursor-pointer
          "
        >
          <Minus size={18} />
        </button>

        <button
          onClick={() => dispatch(addOne())}
          className="
            flex h-12 flex-1 items-center justify-center gap-2
            rounded-2xl bg-white px-5
            font-medium text-black
            transition-all duration-200
            hover:opacity-90
            active:scale-[0.98] cursor-pointer
          "
        >
          <Plus size={18} />
          <span>Agregar</span>
        </button>
      </div>
    </div>
  );
};
