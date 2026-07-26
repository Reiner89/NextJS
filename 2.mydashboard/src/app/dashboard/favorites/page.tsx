import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Tus Pokémon favoritos en un solo lugar.",
};

export default async function PokemonsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tight">Tus Favoritos</h1>

          <p className="mt-3 max-w-2xl text-zinc-400 text-lg">
            Una colección de los Pokémon que más te gustan, guardados para
            acceder rápidamente cuando quieras.
          </p>
        </div>

        <PokemonGrid pokemons={[]} />
      </section>
    </main>
  );
}
