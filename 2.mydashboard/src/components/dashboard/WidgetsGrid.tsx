"use client";

import { Calculator } from "lucide-react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.count.count);

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {/* <SimpleWidget
            label="Vista general"
            title="Dashboard"
            subtitle="Resumen principal"
            href="/dashboard/main"
            icon={LayoutDashboard}
          />
          */}

      <SimpleWidget
        label="Contador"
        title={`${count}`}
        subtitle="Productos agregados"
        href="/dashboard/counter"
        icon={Calculator}
      />

      {/* <SimpleWidget
            label="Pokémon"
            title="Pokemons"
            subtitle="Explora la pokedex"
            href="/dashboard/pokemons"
            icon={Sparkles}
          />

          <SimpleWidget
            label="Favoritos"
            title="Favoritos"
            subtitle="Tus Pokémon guardados"
            href="/dashboard/favorites"
            icon={Heart}
          /> */}
    </div>
  );
};
