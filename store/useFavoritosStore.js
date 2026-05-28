"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritosStore = create(
  persist(
    (set, get) => ({
      favoritos: [],
      toggleFavorito: (peli) =>
        set((state) => {
          const existe = state.favoritos.some((item) => item.id === peli.id);

          return {
            favoritos: existe
              ? state.favoritos.filter((item) => item.id !== peli.id)
              : [peli, ...state.favoritos],
          };
        }),
      isFavorito: (id) => get().favoritos.some((item) => item.id === id),
    }),
    {
      name: "favoritos",
    }
  )
);
