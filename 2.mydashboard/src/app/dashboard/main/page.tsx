import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Dashboard",
  description: "Información general del dashboard.",
};

export default function MainPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tight">Dashboard</h1>

          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Información general de tus acciones, actividades y accesos rápidos.
          </p>
        </div>

        <WidgetsGrid />
      </section>
    </main>
  );
}
