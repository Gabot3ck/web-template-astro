import { useState } from "react";
import type { FavoritePokemon } from "src/interfaces/favorite-pokemon";
import { FavoritePokemonCard } from "./FavoritePokemonCard";


const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  );

  return favoritePokemons;
}



export const FavoritePokemons = () => {

  const [pokemons, setPokemons] = useState( getLocalStoragePokemons );

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4' >
      {
        pokemons.map( pokemon  => (
          <FavoritePokemonCard pokemon={ pokemon } />
        ))
      }
    </div>
  )
}
