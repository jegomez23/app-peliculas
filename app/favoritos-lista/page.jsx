"use client";
import TarjetaPeli from "@/components/TarjetaPeli";
import { useFavoritosStore } from "@/store/useFavoritosStore";

export default function ListaFavoritos() {
  const favoritos = useFavoritosStore((state) => state.favoritos);

  return (
    <div className="w-full px-6 py-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
            <span className="h-px w-8 bg-red-600/70" />
            <span>Mis favoritos</span>
            <span className="h-px w-8 bg-blue-600/70" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Tu coleccion personal
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Aqui quedan guardadas las peliculas que marcaste con corazon.
          </p>
        </header>

        {favoritos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-zinc-500">
            <p className="text-sm">Aun no tienes favoritos guardados.</p>
          </div>
        ) : (
          <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {favoritos.map((peli) => (
              <TarjetaPeli
                key={peli.id}
                titulo={peli.titulo}
                imagen={peli.imagen}
                descripcion={peli.descripcion}
                fecha={peli.fecha}
                id={peli.id}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
