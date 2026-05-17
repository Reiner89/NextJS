"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_35%)]" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <section className=" relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

        <div className="relative z-10 flex justify-center">
          <div className=" flex h-24 w-24 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.25)]">
            <AlertTriangle size={42} className="text-red-400" />
          </div>
        </div>

        <div className="relative z-10 mt-8 text-center">
          <h1 className="text-4xl font-black tracking-tight text-white">
            Ocurrió un error
          </h1>

          <p className="mt-3 text-slate-400">
            Algo salió mal mientras cargábamos la información.
          </p>

          <div className=" mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-left">
            <p className="mb-2 text-xs uppercase tracking-widest text-cyan-400">
              Error
            </p>

            <pre className="overflow-auto text-sm text-red-300">
              {error.message}
            </pre>
          </div>

          <button
            onClick={() => unstable_retry()}
            className=" mt-8 inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] active:scale-95"
          >
            <RefreshCcw size={18} />
            Intentar nuevamente
          </button>
        </div>
      </section>
    </main>
  );
}
