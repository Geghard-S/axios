import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);


//   const getPokemon = e => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
//       .then(response => response.json())
//       .then(response => setPokemon(response.results))
// };
  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response=>{setPokemon(response.data.results)})
      .catch(err => console.log(err))
  };
  return (
    <div className="App">
      <button value="fetch API" onClick={getPokemon} >fetch API</button>
      {
      pokemon.map((poke, index) =>{
        return <ul><li key={index}>{index}  {poke.name}</li></ul>
        })
      }
    </div>
  );
}

export default App;
