import { useState } from "react";
import type { FavoritePokemon } from "src/interfaces/favorite-pokemon"

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard = (props: Props) => {

  const { pokemon } = props;

  const [ isVisible, setIsVisible ] =  useState(true);

  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const deleteFavorite= () => {
    const favoritesPokemos = JSON.parse(
      localStorage.getItem('favorites') ?? '[]'
    ) as FavoritePokemon[];

    const newFavorites = favoritesPokemos.filter( el => el.id !== pokemon.id );

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsVisible(false);
  }




  return (
    
    <div className="flex flex-col justify-center items-center" >
      <a href={`/products/${pokemon.name}`}>
        <img 
          src={ imgSrc } 
          alt={ pokemon.name } 
          width={96}
          height={96}
        />
        <p className="capitalize">
          #{ pokemon.id } { pokemon.name }
        </p>
      </a>
      <button
        onClick={ deleteFavorite }
        className="text-red-400"
      >
        Borrar
      </button>
    </div>
  )
}
