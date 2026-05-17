"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(path);

  return (
    <Link
      href={path}
      className={`
        relative flex items-center gap-3 rounded-xl px-3 py-3
        transition-all duration-200
        ${
          isActive
            ? "bg-white text-black"
            : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
        }
      `}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 h-8 w-0.75 -translate-y-1/2 rounded-r-full bg-black" />
      )}

      <div
        className={`
          flex items-center justify-center
          ${isActive ? "text-black" : "text-neutral-500"}
        `}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-medium">{title}</span>

        <span
          className={`
            text-xs
            ${isActive ? "text-neutral-700" : "text-neutral-500"}
          `}
        >
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
