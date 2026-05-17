import Image from "next/image";
import { Metadata } from "next";
import {
  Activity,
  Dumbbell,
  Flame,
  Ruler,
  Sparkles,
  Weight,
} from "lucide-react";
import { Pokemon, PokemonsResponse } from "@/pokemons";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    name: string;
  }>;
}

// Cargar pokémon
const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      // cache: "force-cache",
      next: { revalidate: 60 * 60 * 30 * 6 },
    }).then((res) => res.json());

    return pokemon;
  } catch (error) {
    notFound();
  }
};

export async function generateStaticParams() {
  const data: PokemonsResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151",
  ).then((res) => res.json());

  return data.results.map((pokemon) => ({ name: pokemon.name }));
}

// Cargar metadatos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { name } = await params;
    const pokemon = await getPokemon(name);

    return {
      title: `#${pokemon.id} - ${pokemon.name}`,
      description: `Página del pokémon ${pokemon.name}`,
    };
  } catch (error) {
    return {
      title: "Error 404",
      description: "Página no encontrada",
    };
  }
}

// Pokedex
export default async function PokemonPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  const image =
    pokemon.sprites.other?.dream_world?.front_default ??
    pokemon.sprites.front_default;

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
        <div className="relative overflow-hidden bg-slate-950 px-8 py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.25),transparent_35%)]" />

          <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-bold text-cyan-300">
                #{pokemon.id}
              </span>

              <h1 className="mt-5 text-5xl font-black capitalize tracking-tight">
                {pokemon.name}
              </h1>

              <p className="mt-4 max-w-md text-slate-400">
                Información detallada, movimientos, estadísticas y sprites del
                pokémon.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold capitalize text-white backdrop-blur-md"
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

                {image && (
                  <Image
                    src={image}
                    alt={pokemon.name}
                    width={260}
                    height={260}
                    priority
                    className="relative z-10 h-60 w-60 object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={<Flame size={20} />}
            label="Tipos"
            value={pokemon.types.map(({ type }) => type.name).join(", ")}
          />
          <InfoCard
            icon={<Weight size={20} />}
            label="Peso"
            value={`${pokemon.weight}`}
          />
          <InfoCard
            icon={<Ruler size={20} />}
            label="Altura"
            value={`${pokemon.height}`}
          />
          <InfoCard
            icon={<Activity size={20} />}
            label="Experiencia"
            value={`${pokemon.base_experience}`}
          />
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-xl">
            <div className="mb-5 flex items-center gap-2">
              <Dumbbell size={20} />
              <h2 className="text-xl font-black">Movimientos</h2>
            </div>

            <div className="flex max-h-72 flex-wrap gap-2 overflow-auto pr-2">
              {pokemon.moves.slice(0, 80).map(({ move }) => (
                <span
                  key={move.name}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium capitalize text-slate-700"
                >
                  {move.name.replaceAll("-", " ")}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-xl">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles size={20} />
              <h2 className="text-xl font-black">Sprites</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SpriteCard title="Normal" src={pokemon.sprites.front_default} />
              <SpriteCard title="Shiny" src={pokemon.sprites.front_shiny} />
              <SpriteCard title="Back" src={pokemon.sprites.back_default} />
              <SpriteCard title="Back Shiny" src={pokemon.sprites.back_shiny} />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white p-5 text-slate-900 shadow-xl">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
        {icon}
      </div>

      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-black capitalize">{value}</p>
    </div>
  );
}

function SpriteCard({ title, src }: { title: string; src: string | null }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-500">{title}</p>

      <div className="mt-3 flex h-24 items-center justify-center">
        {src && (
          <Image
            src={src}
            alt={title}
            width={80}
            height={80}
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}
