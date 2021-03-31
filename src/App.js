import React, { useState } from "react";
import { Card } from "./Components/Card/Card";
import { RenderForm } from "./Components/Form/RenderForm";
import "./App.css";
import { getPokemonsService } from "./Components/services/pokemon";

function App() {
  const [pokemonSelect, setPokemonSelect] = useState({});
  const [formIsVisible, setFormIsVisible] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [evolutions, setEvolutions] = useState([]);
  const [showEvolutionForm, setShowEvolutionForm] = useState(false);
  const getAllPokemons = () => {
    getPokemonsService().then((response) => {
      setPokemons(response.data);
      setFormIsVisible(false);
    });
  };

  const togglePokemon = () => {
    if (formIsVisible === true) {
      return getAllPokemons();
    }
    return setFormIsVisible(true);
  };

  const evolutionClick = (pokemonSelecionado) => {
    setPokemonSelect(pokemonSelecionado);
    setFormIsVisible(true);
  };

  const onPressAddEvolution = (form) => {
    const evolutionsInState = evolutions;
    evolutionsInState.push(form);
    console.log(evolutionsInState);
    setEvolutions(evolutionsInState);
    setShowEvolutionForm(false);
  };

  return (
    <div>
      <RenderForm
        formIsVisible={formIsVisible}
        pokemonSelect={pokemonSelect}
        evolutions={evolutions}
        labelBtn={"Cadastrar"}
        typeForm={"add_pokemon"}
        onSubmitFinish={() => setEvolutions([])}
      />
      <div>
        <button onClick={() => togglePokemon()}>
          {" "}
          {formIsVisible ? "Mostrar" : "Ocultar"} Pokemons{" "}
        </button>
      </div>
      <div style={{ color: "yellow", fontWeight: "bold", float: "right" }}>
        <p>Evolucoes</p>
        {evolutions.map((evolution) => (
          <p key={evolution.id}> - {evolution.name}</p>
        ))}
        <button onClick={() => setShowEvolutionForm(!showEvolutionForm)}>
          adicionar Nova Evolucao
        </button>
        {showEvolutionForm ? (
          <RenderForm
            formIsVisible={formIsVisible}
            pokemonSelect={pokemonSelect}
            labelBtn={"Inserir"}
            typeForm={"add_evolution"}
            onPressAddEvolution={(form) => onPressAddEvolution(form)}
          />
        ) : null}
      </div>
      {!formIsVisible
        ? pokemons.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                onClickEvolution={(pokemonSelecionado) =>
                  evolutionClick(pokemonSelecionado)
                }
                onRefresh={getAllPokemons}
              />
            );
          })
        : null}
    </div>
  );
}

export default App;
