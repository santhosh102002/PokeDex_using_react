import { useEffect, useState } from "react";
import "./PokemonList.css"
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList(){
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon"

  const [pokemonListState,setPokemonListState] = useState({
    pokemonList :[],
    pokedexUrl: DEFAULT_URL,
    nextUrl: DEFAULT_URL,
    preUrl: DEFAULT_URL
  })
    async function downloadData(){
      const response = await axios.get(pokemonListState.pokedexUrl? pokemonListState.pokedexUrl: DEFAULT_URL);
      const pokemonResults = response.data.results;
      setPokemonListState((state)=>({...state,nextUrl:response.data.next,preUrl:response.data.previous}))
      const pokemonPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url))
      const pokemonListData = await axios.all(pokemonPromise)
      const pokemonFinalList = pokemonListData.map(pokemonData=>{
        const pokemon = pokemonData.data;
        return{
          id: pokemon.id,
          name:pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types
        }
      })
      setPokemonListState({...pokemonListState,pokemonList:pokemonFinalList,nextUrl:response.data.next,preUrl:response.data.previous})
    }
    useEffect(()=>{
       downloadData();
    },[pokemonListState.pokedexUrl])
    return (
      
      <div className="pokemon-list-wrapper">
          <div>
               <h1>Pokemon List</h1>
          </div>
          <div className="page-controls" >
              <button onClick={()=>setPokemonListState({...pokemonListState,pokedexUrl: pokemonListState.preUrl})}>Prev</button>
              <button onClick={()=>setPokemonListState({...pokemonListState,pokedexUrl: pokemonListState.nextUrl})}>Next</button>
          </div>
          <div className="pokemon-list">
                {pokemonListState.pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
          </div>
      </div>
    )
}

export default PokemonList;