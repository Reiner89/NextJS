"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counterProduct, setCounterProduct] = useState(value);

  const increment = () => {
    setCounterProduct((prev) => prev + 1);
  };

  const decrement = () => {
    if (counterProduct === 0) return;

    setCounterProduct((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end gap-2">
        <span className="text-7xl font-semibold tracking-tight text-white">
          {counterProduct}
        </span>

        <span className="mb-3 text-sm text-neutral-500">items</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={decrement}
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
          onClick={increment}
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
