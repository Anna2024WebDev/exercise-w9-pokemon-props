import { pokemons } from "../data.json"
import { Type } from "./Type.jsx";

// Destructure pokemon props here :)
import './styling/pokemon.css';

export const Pokemon = () => {


  return (
    <div className="pokemon-container">
      <div className="pokemon-grid">
        {pokemons.map(({ name, id, types }) => (
          <div key={id} className="pokemon-card">
            <p>{name}</p>
            <Type types={types} />
          </div>
        ))}
      </div>
    </div >
  )
}
