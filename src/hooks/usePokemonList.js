import { useEffect, useState } from "react";
import downloadPokemons from "../Utils/downloadPokemons"

function usePokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon"

    const [pokemonListState,setPokemonListState] = useState({
      pokemonList :[],
      pokedexUrl: DEFAULT_URL,
      nextUrl: DEFAULT_URL,
      preUrl: DEFAULT_URL
    })
      
      useEffect(()=>{
         downloadPokemons(pokemonListState,setPokemonListState,DEFAULT_URL);
      },[pokemonListState.pokedexUrl])
      return [pokemonListState,setPokemonListState];
}

export default usePokemonList