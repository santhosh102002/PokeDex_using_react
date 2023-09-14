import { useEffect, useState } from "react";
import "./PokemonList.css"
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList.js";

function PokemonList(){
  
  const [pokemonListState,setPokemonListState] = usePokemonList();
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