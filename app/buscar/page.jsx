import BarraBusqueda from "@/components/BarraBusqueda";
import TarjetaPeli from "@/components/TarjetaPeli";
import { fetchBusqueda } from "@/lib/tmdbApi";

export default async function Buscar({ searchParams }) {
  const { q } = await searchParams; // En Next.js 15+ searchParams es una Promise
  const data = q ? await fetchBusqueda(q) : null; // Traeme los datos de la API, si no trae nada. null
  return (
    <div className="w-full px-6 py-8 flex flex-col gap-6 min-h-screen">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-white tracking-tight">Buscar</h1>
          <p className="text-zinc-400 text-sm">Encuentra cualquier pelicula</p>
        </div>
        <BarraBusqueda />
        {q ? (
          <>
            {/* Resultados */}
            {data?.results?.length > 0 && (
              <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {data.results.map((peli) => (
                  <TarjetaPeli
                    key={peli.id}
                    titulo={peli.title}
                    imagen={peli.poster_path}
                    descripcion={peli.overview}
                    fecha={peli.release_date}
                    id={peli.id}
                  />
                ))}
              </section>
            )}

            {/* Sin resultados */}
            {data?.results?.length === 0 && (
              <p>No se encontraron peliculas para {q}</p>
            )}
          </>
        ) : (
          /* Estado vacio */
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="currentColor"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <p className="text-sm">Escribe algo para buscar peliculas</p>
          </div>
        )}
      </div>
    </div>
  );
}
