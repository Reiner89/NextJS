"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(path);

  return (
    <Link
      href={path}
      className={`relative px-4 py-2 text-sm rounded-xl transition-all duration-300 flex items-center ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}
    >
      {text}

      <span
        className={`
          absolute inset-0 -z-10 rounded-xl
          bg-white/10 backdrop-blur-md
          transition-all duration-300

          ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      />
    </Link>
  );
};
