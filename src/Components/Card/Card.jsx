import React, { useEffect, useState } from "react";
import "./Card.css";
import { Pokemon } from "../Pokemon";
import axios from "axios";
import { deletePokemonServise } from "../services/pokemon";

export const Card = ({ pokemon, showAll, onClickEvolution, onRefresh }) => {
  useEffect(() => {
    setShowEvolutions(showAll);
  }, [showAll]);
  const [showEvolutions, setShowEvolutions] = useState(false);

  const DeletePokemon = () => {
    deletePokemonServise(pokemon._id).then(() => {
      onRefresh();
    });
  };

  return (
    <div className="Card">
      <Pokemon data={pokemon}>
        <div className={"btnEvolutionAction"}>
          <button onClick={() => onClickEvolution(pokemon)}>
            {" "}
            Cadastrar Evolução{" "}
          </button>
          <button onClick={() => DeletePokemon()}> Apagar </button>
          <button onClick={() => setShowEvolutions(!showEvolutions)}>
            {!showEvolutions ? "Exibir" : "Ocultar"}
          </button>
        </div>
      </Pokemon>
      {showEvolutions &&
        pokemon.evolutions.map((pokemonEvolution) => (
          <Pokemon key={pokemonEvolution.id} data={pokemonEvolution} />
        ))}
    </div>
  );
};
