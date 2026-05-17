import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";

export const metadata = {
  title: "151 Pokemons",
  description: "151 Pokemons",
};

const getPokemons = async (
  limit = 10,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  // throw new Error("Error");

  return data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
};

export default async function PokemonsPage() {
  "use cache";

  // flag que marca la petición como cacheable
  cacheTag("pokemons");

  // indica que el contenido de esta ruta se actualizara cada 10 segundos
  // cacheLife({
  //   stale: 10,
  //   revalidate: 60,
  // });

  // esto tendria que ir en una funcion para indicar que el contenido se actualizara
  revalidateTag("pokemons", "max");

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
