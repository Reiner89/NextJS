import Link from "next/link";
import { Home, SearchX, ArrowLeft } from "lucide-react";
import { Sidebar } from "@/app/components";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0a0a0a] text-white antialiased selection:bg-sky-500 selection:text-white">
      <div className="flex h-full">
        <Sidebar />

        <main className="relative flex h-screen flex-1 items-center justify-center overflow-y-auto px-6 py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_35%)]" />

          <section className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/80 shadow-xl">
              <SearchX size={38} className="text-sky-300" />
            </div>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
              Error 404
            </p>

            <h1 className="mb-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Página no encontrada
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-sm leading-6 text-neutral-400 md:text-base">
              La ruta que intentas visitar no existe, fue movida o ya no está
              disponible dentro del dashboard.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard/main"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                <Home size={17} />
                Ir al Dashboard
              </Link>

              <Link
                href="/dashboard/pokemons"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
              >
                <ArrowLeft size={17} />
                Ver Pokémons
              </Link>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
          </section>
        </main>
      </div>
    </div>
  );
}
