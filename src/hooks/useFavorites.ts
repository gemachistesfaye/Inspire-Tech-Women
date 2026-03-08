import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "wit-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite, count: favorites.length };
}
