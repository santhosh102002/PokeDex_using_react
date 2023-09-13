import Pokedex from "./components/Pokedex/Pokedex"
import './App.css'
import PokemonDetails from "./components/PokemonDetails/PokemonDetails"
import {Route, Routes} from "react-router-dom"

function App() {
 

  return (
   <Routes>
    <Route path="/" element={<Pokedex/>}/>
    <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
   </Routes>
  )
}

export default App
