import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Interactive shopping cart counter",
};

export default function CounterPage() {
  return (
    <section className="flex h-full w-full items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-neutral-800 bg-[#0F0F0F] p-8 shadow-2xl shadow-black/20">
        <div className="mb-8">
          <p className="text-sm text-neutral-500">Carrito de Compras</p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Productos en el carrito
          </h1>
        </div>

        <CartCounter value={20} />
      </div>
    </section>
  );
}
