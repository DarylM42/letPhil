import { create } from "zustand";

type FavoritesState = {
    ids: number[];
    toggleFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    ids: [],

    toggleFavorite: (id) =>
        set((state) => ({
            ids: state.ids.includes(id)
                ? state.ids.filter((favId) => favId !== id)
                : [...state.ids, id],
        })),

    isFavorite: (id) => get().ids.includes(id),
}));