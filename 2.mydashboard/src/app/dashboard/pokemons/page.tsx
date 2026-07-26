import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { cacheLife, cacheTag } from "next/cache";

export const metadata = {
  title: "151 Pokemons",
  description: "151 Pokemons",
};

const getPokemons = async (
  limit = 10,
  offset = 0,
): Promise<SimplePokemon[]> => {
  "use cache";

  cacheTag("pokemons");

  cacheLife({
    stale: 30,
    revalidate: 10,
    expire: 60,
  });

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!response.ok) {
    throw new Error(`Error al obtener los Pokémon: ${response.status}`);
  }

  const data: PokemonsResponse = await response.json();

  return data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tight">Pokédex</h1>

          <p className="mt-3 text-zinc-400">Explora pokémons.</p>
        </div>

        <PokemonGrid pokemons={pokemons} />
      </section>
    </main>
  );
}
