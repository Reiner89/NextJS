import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SimpleWidget = ({
  title,
  subtitle,
  label,
  href,
  icon: Icon,
}: Props) => {
  return (
    <div className="group rounded-3xl border border-neutral-800 bg-neutral-950 p-6 shadow-sm transition-all hover:border-neutral-700 hover:bg-neutral-900">
      <div className="mb-6 flex items-center justify-between">
        {label && (
          <span className="text-sm font-medium text-neutral-400">{label}</span>
        )}

        <div className="rounded-2xl bg-neutral-900 p-3 text-neutral-300 transition-colors group-hover:bg-neutral-800 group-hover:text-white">
          <Icon size={24} />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
        )}
      </div>

      <div className="mt-8 border-t border-neutral-800 pt-4">
        <Link
          href={href}
          className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};
