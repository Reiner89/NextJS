import Image from "next/image";
import { Heart, Info, Sparkles } from "lucide-react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Link from "next/link";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden bg-slate-950 px-6 pb-7 pt-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_35%)]" />

        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/40 backdrop-blur-md">
          #{pokemon.id}
        </div>

        <div className="relative z-10 flex justify-center">
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={120}
              height={120}
              className="relative z-10 h-28 w-28 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.35)] transition-transform duration-500 group-hover:scale-110"
              priority={false}
            />
          </div>
        </div>

        <div className="relative z-10 mt-5 text-center">
          <h2 className="text-2xl font-black capitalize tracking-wide text-white">
            {pokemon.name}
          </h2>

          <p className="mt-1 text-sm text-slate-400">Future Pokédex</p>
        </div>

        <div className="relative z-10 mt-5 flex justify-center">
          <Link
            href={`/dashboard/pokemons/${pokemon.name}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-cyan-100"
          >
            <Info size={16} />
            Más información
          </Link>
        </div>
      </div>

      <div className="relative px-5 py-4">
        <Link href="/dashboard/main" className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-500 transition hover:bg-rose-100">
            <Heart size={18} />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-slate-900">No es favorito</p>
              <Sparkles size={14} className="text-cyan-500" />
            </div>

            <p className="text-sm text-slate-500">Ver tus campañas</p>
          </div>
        </Link>
      </div>
    </article>
  );
};
