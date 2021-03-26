import React, { useEffect, useState } from "react";
import "./Card.css";

import { Pokemon } from "./Pokemon";

export const Card = ({ pokemon, showAll }) => {
  useEffect(() => {
    setShowEvolutions(showAll);
  }, [showAll]);
  const [showEvolutions, setShowEvolutions] = useState(false);

  return (
    <div className="Card">
      <Pokemon data={pokemon}>
        <div className={"btnEvolutionAction"}>
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
