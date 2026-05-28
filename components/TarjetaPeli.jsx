"use client";
import Image from "next/image";
import Link from "next/link";
import BotonFav from "@/components/BotonFav";

export default function TarjetaPeli({ titulo, descripcion, fecha, imagen, id }) {
  const peli = { id, titulo, descripcion, fecha, imagen };
  return (
    <Link href={`/pelicula/${id}`} className="block h-full">
      <div className="group h-full bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-red-600/10 hover:-translate-y-1">
        {/* Imagen */}
        <div className="relative w-full aspect-[2/3] bg-zinc-800">
          <BotonFav peli={peli} />
          <Image
            src={`https://image.tmdb.org/t/p/w500${imagen}`}
            alt={titulo}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-all duration-300 group-hover:opacity-80 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-zinc-300">
            <span className="px-2 py-1 rounded-full bg-black/60 border border-white/10">
              {fecha || "-"}
            </span>
          </div>

          <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-zinc-300">
          </div>

          <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="w-full min-h-[45%] rounded-2xl bg-black/75 border border-white/10 p-3 backdrop-blur-sm">
              <p className="text-zinc-200 text-xs leading-relaxed line-clamp-4">
                {descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* Info basica */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-white text-lg text-center justify-center items-center font-semibold leading-tight">
            {titulo}
          </h3>
        </div>
      </div>
    </Link>
  );
}
