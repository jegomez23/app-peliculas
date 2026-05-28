import TarjetaPeli from "@/components/TarjetaPeli";
import { getMovies, getTopRated, getRevenue } from "@/lib/tmdbApi";

function Section({ title, subtitle, data }) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
          <span className="h-px w-8 bg-red-600/70" />
          <span>{title}</span>
          <span className="h-px w-8 bg-blue-600/70" />
        </div>
        <p className="text-zinc-400 text-sm max-w-2xl">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((peli) => (
          <TarjetaPeli
            key={peli.id}
            titulo={peli.title}
            imagen={peli.poster_path}
            descripcion={peli.overview}
            fecha={peli.release_date}
            id={peli.id}
          />
        ))}
      </div>
    </section>
  );
}

export default async function Explorar() {
  const [populares, top, revenue] = await Promise.all([
    getMovies(),
    getTopRated(),
    getRevenue(),
  ]);

  return (
    <div className="w-full px-6 py-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        <header className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/60 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Inicio</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Explora el universo del cine
            </h1>
            <p className="text-zinc-300 text-sm max-w-2xl">
              Selecciones premium para descubrir lo mejor del momento, clasificado por popularidad, critica y taquilla.
            </p>
          </div>
        </header>

        <Section
          title="Populares"
          subtitle="Lo mas visto ahora mismo. Tendencias y estrenos que dominan la conversacion."
          data={populares?.results?.slice(0, 8) || []}
        />

        <Section
          title="Mejores valoradas"
          subtitle="Peliculas con las calificaciones mas altas en TMDB."
          data={top?.results?.slice(0, 8) || []}
        />

        <Section
          title="Mayor recaudacion"
          subtitle="Blockbusters que arrasaron en taquilla."
          data={revenue?.results?.slice(0, 8) || []}
        />
      </div>
    </div>
  );
}
