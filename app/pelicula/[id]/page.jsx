import Image from "next/image";
import { fetchPeli, fetchPeliTrailer } from "@/lib/tmdbApi";
import BotonFav from "@/components/BotonFav";

function formatMoney(value) {
  if (!value || value === 0) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatRuntime(minutes) {
  if (!minutes) return "-";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} min`;
  return `${h} h ${m} min`;
}

export default async function FichaPelicula({ params }) {
  const { id } = await params;
  const [peli, trailer] = await Promise.all([fetchPeli(id), fetchPeliTrailer(id)]);
  const peliFav = {
    id: peli?.id,
    titulo: peli?.title,
    descripcion: peli?.overview,
    fecha: peli?.release_date,
    imagen: peli?.poster_path,
  };

  const genres = peli?.genres?.map((g) => g.name).join(", ") || "-";
  const countries = peli?.production_countries?.map((c) => c.name).join(", ") || "-";
  const companies = peli?.production_companies?.map((c) => c.name).join(", ") || "-";
  const language = peli?.original_language?.toUpperCase() || "-";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10 relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.45)]">
          {peli?.backdrop_path ? (
            <div className="relative h-56 sm:h-72 lg:h-96">
              <Image
                src={`https://image.tmdb.org/t/p/original${peli.backdrop_path}`}
                alt={peli.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/10" />
            </div>
          ) : (
            <div className="h-56 sm:h-72 lg:h-96 bg-zinc-800" />
          )}

          <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 px-6 pb-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              {/* Poster */}
              <div className="w-36 sm:w-44 lg:w-56 shrink-0 relative">
                <div className="absolute -top-3 -right-3 z-10">
                  <BotonFav peli={peliFav} />
                </div>
                {peli?.poster_path ? (
                  <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                      alt={peli.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[2/3] rounded-2xl bg-zinc-800" />
                )}
              </div>

              {/* Title */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
                  <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200">{language}</span>
                  <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200">
                    {peli?.release_date || "-"}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200">
                    {formatRuntime(peli?.runtime)}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200">
                    {peli?.status || "-"}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  {peli?.title}
                </h1>
                {peli?.tagline && (
                  <p className="mt-2 text-zinc-300 text-sm italic">"{peli.tagline}"</p>
                )}

                <div className="mt-5 flex flex-wrap gap-4 items-center">
                  <div className="px-4 py-2 rounded-2xl bg-red-600/20 border border-red-500/30 shadow-[0_0_30px_rgba(255,0,0,0.15)]">
                    <p className="text-xs uppercase tracking-widest text-red-300">Rating</p>
                    <p className="text-xl font-bold text-red-400">
                      {peli?.vote_average?.toFixed(1) || "-"}
                    </p>
                    <p className="text-[11px] text-red-200/70">{peli?.vote_count || 0} votos</p>
                  </div>

                  <div className="px-4 py-2 rounded-2xl bg-blue-600/20 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <p className="text-xs uppercase tracking-widest text-blue-200">Popularidad</p>
                    <p className="text-xl font-bold text-blue-300">
                      {peli?.popularity ? Math.round(peli.popularity) : "-"}
                    </p>
                    <p className="text-[11px] text-blue-200/70">TMDB</p>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Details */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-zinc-900/60 border border-white/5 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="mt-3 text-zinc-200 tex leading-relaxed">
              {peli?.overview || "No hay descripcion disponible."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {(peli?.genres || []).map((g) => (
                <span
                  key={g.id}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:border-red-500/40 hover:text-white transition-colors"
                >
                  {g.name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/60 border border-white/5 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-sm uppercase tracking-widest text-blue-300">Ficha tecnica</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-400">Generos</span>
                <span className="text-white text-right">{genres}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-400">Pais</span>
                <span className="text-white text-right">{countries}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-400">Estudio</span>
                <span className="text-white text-right">{companies}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-400">Presupuesto</span>
                <span className="text-white text-right">{formatMoney(peli?.budget)}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-400">Recaudacion</span>
                <span className="text-white text-right">{formatMoney(peli?.revenue)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trailer */}
        <section className="bg-zinc-900/60 border border-white/5 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-sm uppercase tracking-widest text-red-300">Trailer oficial</h2>
          {trailer?.key ? (
            <div className="mt-4 relative pb-[56.25%] overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${trailer.key}?rel=0&modestbranding=1`}
                title={`Trailer de ${peli?.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="mt-4 flex items-center justify-center h-32 rounded-2xl bg-zinc-800/50 border border-white/10">
              <p className="text-zinc-400 text-sm">No hay trailer disponible</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
