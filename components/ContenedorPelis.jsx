import TarjetaPeli from "./TarjetaPeli";
import { getMovies } from "@/lib/tmdbApi";

export default async function ContenedorPelis() {
    const api = await getMovies()
    const pelis = api.results
    console.log(pelis)

    return (
        <div className="w-full px-6 py-10">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
                <header className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
                        <span className="h-px w-8 bg-red-600/70" />
                        <span>Lo mas destacado</span>
                        <span className="h-px w-8 bg-blue-600/70" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                        Peliculas mas populares del mes
                    </h1>
                    <p className="text-zinc-400 text-sm max-w-2xl">
                        Descubre lo mas visto en la plataforma. Seleccion con lo mejor del momento.
                    </p>
                </header>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {
                pelis.map((peli) => {
                    return (
                        <TarjetaPeli
                            key={peli.id}
                            titulo={peli.title}
                            imagen={peli.poster_path}
                            descripcion={peli.overview}
                            fecha={peli.release_date}
                            id={peli.id}
                        />
                    )

                })
            }
                </div>
        </div>
        </div>
        
    )
}
