"use client";
import { useFavoritosStore } from "@/store/useFavoritosStore";

export default function BotonFav({ peli }) {
  const activo = useFavoritosStore((state) => state.isFavorito(peli.id));
  const toggleFavorito = useFavoritosStore((state) => state.toggleFavorito);

  function toggle(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorito(peli);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
        activo
          ? "bg-red-600/90 border-red-400 text-white shadow-[0_0_20px_rgba(255,0,0,0.35)]"
          : "bg-black/50 border-white/10 text-zinc-300 hover:text-white hover:border-red-500/50"
      }`}
      aria-pressed={activo}
      aria-label="Agregar a favoritos"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={activo ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M12 21s-7.5-4.35-9.5-8.5C1.5 9 3.5 6 6.5 6c1.9 0 3.1.9 3.9 2.1C11.4 6.9 12.6 6 14.5 6c3 0 5 3 4 6.5C19.5 16.65 12 21 12 21z" />
      </svg>
    </button>
  );
}
