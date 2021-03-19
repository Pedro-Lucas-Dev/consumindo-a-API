import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Components/Card";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/api/v1/pokemon/list")
      .then((response) => {
        setPokemons(response.data.pokemons);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default App;
