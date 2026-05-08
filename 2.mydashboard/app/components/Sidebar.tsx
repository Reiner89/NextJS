import { Calculator, LayoutDashboard } from "lucide-react";

import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <LayoutDashboard size={18} />,
    title: "Dashboard",
    subtitle: "VIsualization",
  },
  {
    path: "/dashboard/counter",
    icon: <Calculator size={18} />,
    title: "Counter",
    subtitle: "Counter CLient Side",
  },
];

export const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-neutral-800 bg-[#090909]">
      <div className="px-6 pt-8 pb-10">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Dash<span className="text-neutral-500">.</span>
        </h1>
      </div>

      <div className="px-4 mb-8">
        <div className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-neutral-900">
          <Image
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=120&q=80"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-100">
              Reiner Alayo
            </span>

            <span className="text-xs text-neutral-500">Software Engineer</span>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </nav>

      <div className="border-t border-neutral-800 p-4">
        <p className="text-xs text-neutral-500">Dash v1.0.0</p>
      </div>
    </aside>
  );
};
